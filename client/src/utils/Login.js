import React, {useState} from 'react';
import {useMutation} from '@apollo/client'
import { LOGIN_USER } from './mutations';

import Auth from './auth'

const Login = props => {
    const {formState, setFormState} = useState({email: '', password: ''});
    const [login, {error}] = useMutation(LOGIN_USER);

    const handleChange = event =>{
        const {name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    };

    //login form
    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const {data} = await login({
                variables: {...formState}
            })

            Auth.login(data.login.token)
        } catch (e) {
            console.error(e)
        }

        //clears form
        setFormState({
            email: '',
            password: ''
        })
    }
}

export default Login;