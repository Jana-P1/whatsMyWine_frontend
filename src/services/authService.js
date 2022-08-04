import * as tokenService from "./tokenService"

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/auth`

export function getGoogleUserToken() {
  let googleUserToken = localStorage.getItem('token')
  if (googleUserToken) {
    console.log("i've got the token")
  }
}