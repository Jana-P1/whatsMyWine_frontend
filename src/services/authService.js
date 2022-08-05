import jwtDecode from "jwt-decode"


const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/auth`

export function googleSuccessSignIn(object) {
  console.log(jwtDecode(object))
  if(object) {
    console.log(jwtDecode(localStorage.getItem('token')))
  } else {
    console.log("This didn't work")
  }

    
  }
  

// async function googleLogin(credentials) {
   
// }