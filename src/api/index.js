
import AuthService from '../services/AuthService'

// the address of our rails backend, saved as a constant value, because we never want to accidently change it
const BASE = 'http://localhost:3000'
const Auth = new AuthService()

let getApts = function() {
    // the function name getCats is intended to remind you of the restful rails route --> GET '/cats'.
    return fetch(BASE + '/apts') // this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?
        .then((resp) => {
            // resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
            let json = resp.json() // we want to make sure what we have is just the json part of the response
            console.log(json);
            return json
        })
}
let createApt = function(apt) {
    return Auth.fetch(BASE + '/apts', {
        body: JSON.stringify(apt),  // <- we need to stringify the json for fetch
        method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
    })
}


export  {
    getApts, createApt
}
