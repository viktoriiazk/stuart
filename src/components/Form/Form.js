import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";

import validator from 'validator';

import PropTypes from 'prop-types';
import styles from './Form.module.scss';

const Form = () => {
    const [emailError, setEmailError] = useState('');
    const { register, handleSubmit} = useForm();

    const onSubmit = () => {
        window.location.replace('https://stuart.com/blog/business/coop-delivery/')
    }

    const validateEmail = (e) => {
        let email = e.target.value;
        if (validator.isEmail(email) ){
            setEmailError('');
        } else {
            setEmailError('Enter valid Email!');
        }
    }

    return (
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input type="email" id="userEmail" placeholder="Email" required={true} {...register("example")}
                       onChange={(e) => validateEmail(e)}></input>
                <span className={styles.emailError }>{emailError}</span>
            </label>
            <button type="submit" className={styles.btnSubmit} >Read the blog post</button>
            <div>
            </div>
        </form>

    );
    console.log(emailError);
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
