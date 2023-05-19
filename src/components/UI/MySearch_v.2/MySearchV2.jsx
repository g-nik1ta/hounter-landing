import React, { useState } from 'react';
import cls from './MySearchV2.module.css';
import MyButton from '../MyButton/MyButton';

const MySearchV2 = () => {
    const [email, setEmail] = useState({
        value: '',
        error: false,
        errorMsg: ''
    });

    const sendForm = (e) => {
        e.preventDefault();
        const emailRegexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email.value.trim().length === 0) {
            setEmail({
                ...email,
                error: true,
                errorMsg: 'Please enter an email address'
            })
            return
        }
        if (!(emailRegexp.test(email.value.trim()))) {
            setEmail({
                ...email,
                error: true,
                errorMsg: 'Please enter a valid email address'
            })
            return
        }
        console.log(email.value);
        setEmail({
            value: '',
            error: false,
            errorMsg: ''
        })
    }

    return (
        <form className={cls.search__container}>
            <input
                type="search"
                value={email.value}
                onChange={e => setEmail({
                    ...email,
                    value: e.target.value
                })}
                placeholder='Your email here'
                className={cls.search}
            />
            {
                email.error &&
                <span className={cls.fieldError}>{email.errorMsg}</span>
            }
            <MyButton onClick={sendForm}>Subsribe Now</MyButton>
        </form>
    )
}

export default MySearchV2;