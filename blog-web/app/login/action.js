'use server'

import axios from 'axios'
import { cookies } from 'next/headers'

export async function login(prevState, formData) {

    try{
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await axios.post(`${process.env.STRAPI_BASE_URL}/api/auth/local`,
            {
                identifier: email,
                password
            }
        )
        cookies().set('token', response.data.jwt)

        return { message: 'Login ok' }

    } catch(error) {
        console.log("error",error)
        let errorMessage = ''

        if(error.message && error.response.data.error.message) {
            errorMessage = error.response.data.error.message
        }
        return {message: errorMessage || 'Login fail'}
    }

    return { message: 'server action ok'}
}