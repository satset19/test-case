import Swal from 'sweetalert2'
import { GET_FORM } from './actionType'

const baseUrl = 'http://localhost:4001/form'
const actionGetForm = (forms) => {
    return {
        type: GET_FORM,
        forms
    }
}


export const createForm = (dataInput) => {
    console.log(dataInput)
    return async () => {
        try {
            await fetch(baseUrl + `/create`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem("access_token")
                },
                body: JSON.stringify(dataInput)
            })
                .then(res => res.json()).then(data => {
                    Swal.fire(
                        data.message,
                        '',
                        'success'
                    )
                })

            return
        } catch (error) {
            throw error
        }
    }
}


export const fetchForm = () => {
    return async (dispatch) => {
        try {
            await fetch(baseUrl, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    access_token: localStorage.getItem("access_token")
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    dispatch(actionGetForm(data))
                })
        } catch (error) {
            console.log(error)
        }
    }
}