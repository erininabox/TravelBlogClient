const url = `${process.env.REACT_APP_SERVER_URL}/api/cities`;
//store logic to make api calls (fetch/axios here)
class CityModel {
    static all() {
        // fetch method uses a JS promise
        // when we call fetch, fetch is promising that at some point there will be a response
        return fetch(url)
            .then((response)=>{ 
                return response.json() //convert response to json
            })
            .catch((err)=>{
                console.log(err)
                // show user a message describing error

            })
    }
    // will make  fetch call to get a single game by it's id
    static show(cityId){
         return fetch(`${url}/${cityId}`)
            .then((response)=> response.json())
            .catch((err)=>{
                console.log(err)
            })
                
    }
}
export default CityModel;
