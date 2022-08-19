
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/auth`
  

const googleLogin = () => {
  fetch(`${BASE_URL}/google`, {
    method: "GET"
  }).then(response => {
    if (response.status === 200) {
      return response.json()
    }
    throw new Error ("authentication failed")
  }).catch(err => {
    console.log(err)
  })
  }

  export {
    googleLogin
  }
