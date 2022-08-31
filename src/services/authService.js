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
function googleLogin()  {
  let userLoginURL = BASE_URL + "/login/success"
  fetch(userLoginURL, {
    method: "GET",
    headers: ({ 
      Accept: "application/json",
      'Content-Type': "application/json",
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups"
    }),
      
  }).then((response) => {
    if (response.status === 200) {
      return response.json()
    }
    throw new Error("authentication failed")
  })
  .then((resObject) => {
    
  })
}
    

export {
    googleLogin,
    // getGoogleUser
  }
