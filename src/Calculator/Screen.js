import React from "react"
import ResultScreen from "./Screen/ResultScreen"
import FunctionScreen from "./Screen/FunctionScreen"

function Screen(props) {
    return (
        <div className="screen">
            <FunctionScreen display={props.equation} />
            <ResultScreen display={props.result} />
        </div>
    )
}

export default Screen