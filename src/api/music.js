import axios from "../axios"

export const getInfoSong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios({
                url: '/get-info-song',
                method: 'get',
                params: { id }
            })
            resolve(res)
        } catch (e) { reject(e) }
    })
}
export const getSong = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios({
                url: '/get-song',
                method: 'get',
                params: { id }
            })
            resolve(res)
        } catch (e) { reject(e) }
    })
}
export const getDetailPlaylist = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios({
                url: 'get-detail-playlist',
                method: 'get',
                params: { id }
            })
            resolve(res)
        } catch (e) { reject(e) }
    })
}