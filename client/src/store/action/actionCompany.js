const baseUrl = 'http://localhost:4001/company/'

export const actionRegister = (dataInput) => {
    return async () => {
        await fetch(baseUrl + 'register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataInput)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(text => { throw text.message })
                } else {
                    return
                }
            })
            .catch(err => {
                throw err.join(' ')
            })
    }
}

export const actionLogin = (dataInput) => {
    return async () => {
        await fetch(baseUrl + 'login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataInput)
        })
            .then(res => {
                if (!dataInput.email) throw 'Please input your account'
                if (!dataInput.password) throw 'Please input your password'
                if (!res.ok) {
                    return res.json().then(text => { throw text.message })
                } else {
                    res.json()
                        .then(data => {
                            localStorage.setItem('access_token', data.access_token)
                            localStorage.setItem('company_name', data.company_name)
                            localStorage.setItem('label_company', data.label_company)
                        })
                    return
                }
            })
            .catch(err => {
                console.log(err)
                throw err
            })
    }
}