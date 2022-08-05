import jwtDecode from "jwt-decode"


const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/auth`

export function googleSuccessSignIn(object) {
  if(object) {
    console.log(object)
    googleLogin(object)
  } else {
    console.log("This didn't work")
  }

    
  }
  

async function googleLogin(credentials) {
  console.log("sanity check for googleLogin()")
  try {
    const res = await fetch()
  } catch (err) {
    console.log(err)
    throw err
  }
}