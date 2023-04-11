import axios from "../axios"

export const getHome = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios({
                url: '/get-home',
                method: 'get'
            })
            resolve(res)
        } catch (e) { reject(e) }
    })
}