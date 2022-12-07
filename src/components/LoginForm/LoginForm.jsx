// Login form should be a div that allows users to login using google or through their credentials which they have created
import styles from '../LoginForm/LoginForm.module.css'
const LoginForm = () => {
  return (
    <>
      <div className={styles.loginContainer}>
        My Login Form
        <span className={styles.close}>&times;</span>
        </div>
    </>
  );
}
 
export default LoginForm;