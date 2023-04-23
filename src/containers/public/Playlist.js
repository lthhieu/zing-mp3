import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import * as api from '../../api'
import * as components from '../../components'
import CustomScrollbar from "../../utils/CustomScrollbar"
export const Playlist = () => {
    let [playlistData, setPlaylistData] = useState(null)
    let { id } = useParams()
    useEffect(() => {
        let getDetailPlaylist = async () => {
            let res = await api.getDetailPlaylist(id)
            if (res?.data?.err === 0) {
                setPlaylistData(res?.data?.data)
            }
        }
        getDetailPlaylist()
    }, [])
    return (<CustomScrollbar autoHide style={{ width: '100%', height: '80%' }}>
        <div className="flex flex-col">
            <div className="flex gap-4 w-full h-full">
                <components.PlayListLeft playlistData={playlistData} />
                <components.PlayListRight playlistData={playlistData} />
            </div>
            <div className="my-10">
                <components.Artists artists={playlistData?.artists} />
            </div>
        </div>
    </CustomScrollbar>
    )
}
