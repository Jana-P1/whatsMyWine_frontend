// The login in form includes the login in form and a LINK for new users who want to create their own credentials (email/password)

import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "../Login/Login.module.css"
const Login = () => {
  return ( 
    <>
      <div className={styles.mainContainer}>
        <LoginForm />
      </div>
    </>
   );
}
 
export default Login;