import axios from "axios"

class apiRequest {

    constructor(){
        this.url = "https://api.spacexdata.com/v3/ships"
    }

    // getting rockets
    fetchRockets = () => axios.get(this.url)
}

export default apiRequest