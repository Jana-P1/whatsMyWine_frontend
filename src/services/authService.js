// import { Buffer } from "buffer"
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/auth`
  
// const getGoogleUser = function(response) {
//   let token = response
//   if (token) {
//     JSON.parse(Buffer.from(token.split('.')[1], 'base64'))
//     return googleLogin(token)
//   }
// }
// const getGoogleToken = () => {

// }
function googleLogin(token)  {
  console.log(BASE_URL)
  fetch(`${BASE_URL}/login/success`, {
    method: "GET",
    credentials: "include",
    headers: ({ 
      Accept: "application/json",
      'Content-Type': "application/json",
      "Access-Control-Allow-Credentials": true
    }),
      
  }).then((response) => {
    if (response.status === 200) {
      return response.json()
    }
    throw new Error ("authentication failed")
  }).catch(err => {
    console.log(err)
  })
  }

  export {
    googleLogin,
    // getGoogleUser
  }
