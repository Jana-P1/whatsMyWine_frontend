const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/auth`

export function getGoogleUserToken() {
  let googleUserToken = localStorage.getItem('token')
  if (googleUserToken) {
    console.log(googleUserToken)
    // if truthy call another function that makes a fetch request and posts the user to the database

    // else
    // token is null
  }
  
}

export function googleSignIn(credentials) {
console.log("sanity check")
}