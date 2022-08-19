import GoogleSignInDiv from "../../components/GoogleSignInDiv/GoogleSignInDiv";

const Login = ({ user, handleCallBackResponse }) => {
  // 
  return ( 
    <>
    <GoogleSignInDiv user={user} handleCallBackResponse={handleCallBackResponse} />
    </>
   );
}
 
export default Login;