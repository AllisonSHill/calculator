import React from "react"

function ButtonRow(props) {
    return (
        <div className="buttonrow">
            {props.children}
        </div>
    )
}

export default ButtonRow