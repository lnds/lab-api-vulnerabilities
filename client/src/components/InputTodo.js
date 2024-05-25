import React, { Fragment, useState } from "react"
import useToken from "../useToken"

import serverApiUrl from "./consts"

const InputTodo = () => {

    const [description, setDescription] = useState("")

    const { token, _setToken } = useToken()

    const onSubmitForm = async e => {
        e.preventDefault()
        try {
            const body = { description }
            const response = await fetch(`${serverApiUrl}/tareas`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "token": token
                },
                body: JSON.stringify(body)
            })
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Lista de Tareas </h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success">Agregar</button>
            </form>
        </Fragment>
    )
}

export default InputTodo
