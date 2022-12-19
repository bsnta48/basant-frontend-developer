import axios from "axios"

class apiRequest {

    constructor(){
        this.url = "https://api.spacexdata.com/v3"
    }

    // getting rockets
    getData = (src) => axios.get(`${this.url}/${src}`)
}

export default apiRequest