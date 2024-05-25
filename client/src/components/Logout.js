import React, { Fragment, useEffect, useState } from "react"

import useToken from "../useToken"


const Logout = () => {
    return (
        <Fragment>
            <a href="/" onClick={() => sessionStorage.removeItem('token')}>
                Logout
            </a>
        </Fragment>
    )
}

export default Logout;
