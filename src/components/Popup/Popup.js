import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import styles from './Popup.module.scss';
import Form from "../Form/Form";

const Popup = (props) => {

    return(
        <div className={styles.popupWrap}>

            <div className={styles.popupBox}>
                <div className={styles.boxRow}>
                    <span className={styles.closeIcon} onClick={props.handleClose}>x</span>
                    {props.content}
                    <h3>Welcome to Stuart blog!</h3>
                    <p>Looks like you are interested in our article! Enter your email below to get access to full article</p>
                    <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0.00000151992 80 31.2">
                        <path d="M17.2 14.3c4.8 9.7 12.2 16.9 22.8 16.9s17.8-7.6 22.8-16.9c3.6-6.7 7.1-11.8 14-13.9 0.6-0.2 2-0.4 3.2-0.4h-80c0.8 0 1.7 0.2 2.4 0.4 6.7 2.1 10.8 5.7 14.8 13.9z" fill="#fff"/>
                    </svg>
                </div>
                <div className={styles.boxForm}>

<Form></Form>
                </div>
            </div>
            <div className={styles.popupOverlay} >

            </div>
        </div>

    );

}



Popup.propTypes = {};

Popup.defaultProps = {};

export default Popup;
