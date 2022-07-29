import { useState } from "react";
import ChangePassword from "./ChangePassword";
import Login from "./Login";
import Register from "./Register";
import styles from "./styleSheeds/signin.module.css";

function SignIn() {
    const [account, setAccount] = useState(1);

    return (
        <div className={styles.container}>
            {account === 1 && <Login setAccount={setAccount} />}
            {account === 2 && <Register setAccount={setAccount} />}
            {account === 3 && <ChangePassword setAccount={setAccount} />}
        </div>
    );
}
export default SignIn;
