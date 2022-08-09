import jwtDecode from "jwt-decode"


const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/auth`

export function googleSuccessSignIn(token) {
  if(token) {
    console.log(token)
    googleLogin(token)
  } else {
    console.log("This didn't work")
  }

    
  }
  

const googleLogin = async (token) => {
  try {
    const res = await fetch(`${BASE_URL}/google` , {
      method: "POST",
      headers: new Headers ({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify(token)
    })
    const data = await res.json()
    if(data.err) {
      throw new Error (data.err)
    }
  } catch (err) {
    console.log(err)
    throw err
  }
}