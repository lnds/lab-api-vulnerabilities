import React, { Fragment, useState } from "react";
import useToken from "../useToken"
import serverApiUrl from "./consts"

const EditTodo = ({ todo }) => {
    const [description, setDescription] = useState(todo.description)

    const { token, _setToken } = useToken()

    // edit description function
    const updateDescription = async e => {
        e.preventDefault();
        try {
            const body = { description }
            const response = await fetch(`${serverApiUrl}/tareas/${todo.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "token": token
                },
                body: JSON.stringify(body)
            })
            //console.log(response)
            window.location = "/"
        } catch (err) {
            console.error(err.message)
        }
    }
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-warning"
                data-bs-toggle="modal"
                data-bs-target={`#id${todo.id}`}
            >
                Editar
            </button>
            <div className="modal fade" id={`id${todo.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Editar Tarea</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                onClick={() => setDescription(todo.description)}
                                aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-warning"
                                data-bs-dismiss="modal"
                                onClick={e => updateDescription(e)}
                            >
                                Grabar
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={() => setDescription(todo.description)}
                                data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default EditTodo
