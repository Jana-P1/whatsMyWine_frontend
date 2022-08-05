import jwtDecode from "jwt-decode"


const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/auth`

export function googleSuccessSignIn(object) {
  console.log(jwtDecode(object))
    
  }
  



export function googleSignIn(token) {
console.log("sanity check")
}