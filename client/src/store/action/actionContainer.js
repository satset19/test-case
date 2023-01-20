import { GET_CONTAINER } from './actionType'
import Swal from 'sweetalert2'

const baseUrl = 'http://localhost:4001/container'
const actionGetContaienr = (containers) => {
    return {
        type: GET_CONTAINER,
        containers
    }
}


export const createContainer = (dataInput) => {
    return async () => {
        await fetch(baseUrl + '/create', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                access_token: localStorage.getItem("access_token")
            },
            body: JSON.stringify(dataInput)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(text => { throw text.message })
                } else {
                    res.json().then(text => {
                        console.log(text)
                        Swal.fire(
                            text.message,
                            '',
                            'success'
                        )
                    })
                    return

                }
            })
            .catch(err => {
                throw err
            })
    }
}

export const fetchContainer = () => {
    return async (dispatch) => {
        await fetch(baseUrl, {
            method: "GET",
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
            .then(res => res.json()).then(data => {
                dispatch(actionGetContaienr(data))
            }).catch(err => {
                console.log(err)
            })
    }
}

export const deleteContainer = (id) => {
    return async () => {
        await fetch(baseUrl + `/${id}`, {
            method: "DELETE",
            headers: {
                access_token: localStorage.getItem('access_token')
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(text => { throw text.message })
                } else {
                    return
                }
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    }
}