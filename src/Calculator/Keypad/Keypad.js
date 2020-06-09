import React from "react"
import ButtonRow from "./ButtonRow"
import Button from "./Button"

function Keypad(props) {
    return(
        <div className="keypad">
            <ButtonRow>
                <Button className="biggerButton opButton" value="C" onClick={props.onClick} />
                <Button className="opButton" value="/" onClick={props.onClick} />
            </ButtonRow>
            <ButtonRow>
                <Button value="9" onClick={props.onClick} />
                <Button value="8" onClick={props.onClick} />
                <Button value="7" onClick={props.onClick} />
                <Button className="opButton" value="*" onClick={props.onClick} />
            </ButtonRow>
            <ButtonRow>
                <Button value="6" onClick={props.onClick} />
                <Button value="5" onClick={props.onClick} />
                <Button value="4" onClick={props.onClick} />
                <Button className="opButton" value="-" onClick={props.onClick} />
            </ButtonRow>
            <ButtonRow>
                <Button value="3" onClick={props.onClick} />
                <Button value="2" onClick={props.onClick} />
                <Button value="1" onClick={props.onClick} />
                <Button className="opButton" value="+" onClick={props.onClick} />
            </ButtonRow>
            <ButtonRow>
                <Button value="." onClick={props.onClick} />
                <Button value="0" onClick={props.onClick} />
                <Button className="bigButton opButton" value="=" onClick={props.onClick} />
            </ButtonRow>
        </div>
    )
}

export default Keypad