import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";

import validator from 'validator';

import PropTypes from 'prop-types';
import styles from './Form.module.scss';

const Form = () => {
    const [emailError, setEmailError] = useState('');
    const [FnameError, setFnameError] = useState('');
    const [LnameError, setLnameError] = useState('');
    const { register, handleSubmit} = useForm();

    const onSubmit = () => {
        window.location.replace('https://stuart.com/blog/business/coop-delivery/')
    }

    const validateEmail = (e) => {
        let email = e.target.value;
        if (validator.isEmail(email)){
            setEmailError('');
        } else {
            setEmailError('Enter valid Email!');
        }

    }
    const validateFirstName = (e) =>{
        let firstName = e.target.value;
        if (validator.isEmpty(firstName)){
            setFnameError(`The field shouldn't be empty`);
        }
        else {
            setFnameError('')
        }
    }
    const validateLastName = (e) =>{
        let lastName = e.target.value;
        if (validator.isEmpty(lastName)){
            setLnameError(`The field shouldn't be empty`);
        }
        else {
            setLnameError('')
        }
    }

    return (
        <form className={styles.Form} onSubmit={handleSubmit(onSubmit)}>
            <label>
                <input type="text" id="userName" placeholder="First name" required={true}
                       onChange={(e) => validateFirstName(e)}></input>
                <span className={styles.emailError }>{FnameError}</span>
            </label>
            <label>
                <input type="text" id="userSurame" placeholder="Last name" required={true}
                       onChange={(e) => validateLastName(e)}></input>
                <span className={styles.emailError }>{LnameError}</span>
            </label>
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
};

Form.propTypes = {};

Form.defaultProps = {};

export default Form;
