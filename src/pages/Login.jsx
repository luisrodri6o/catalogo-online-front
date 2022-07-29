import React from "react";
import styles from "./styleSheeds/account.module.css";

function Login({ setAccount }) {
    function handleOnSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>INICIAR SESION</h2>
            <form onClick={handleOnSubmit} className={styles.formContainer}>
                <input
                    className={styles.input}
                    type='text'
                    placeholder='email'
                />
                <input
                    className={styles.input}
                    type='text'
                    placeholder='contraseña'
                />
                <button className={styles.button} type='submit'>
                    INICIAR SESION
                </button>

                <div className={styles.anchorContainer}>
                    <a
                        className={styles.anchor}
                        href='#'
                        onClick={() => setAccount(2)}
                    >
                        Registrarse
                    </a>
                    <a
                        className={styles.anchor}
                        href='#'
                        onClick={() => setAccount(3)}
                    >
                        Recuperar Contraseña
                    </a>
                </div>
            </form>
        </div>
    );
}

export default Login;
