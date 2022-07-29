import React from "react";
import styles from "./styleSheeds/account.module.css";

function Register({ setAccount }) {
    function handleOnSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>CREAR UNA CUENTA</h2>
            <form onClick={handleOnSubmit} className={styles.formContainer}>
                <input
                    className={styles.input}
                    type='text'
                    placeholder='Nombre de Usuario'
                />
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
                <input
                    className={styles.input}
                    type='text'
                    placeholder='repite tu contraseña'
                />
                <button className={styles.button} type='submit'>
                    REGISTRARSE
                </button>

                <a
                    className={styles.anchor}
                    href='#'
                    onClick={() => setAccount(1)}
                >
                    Iniciar Sesion
                </a>
            </form>
        </div>
    );
}

export default Register;
