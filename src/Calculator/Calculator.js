import React from "react"
import Screen from "./Screen"
import Keypad from "./Keypad/Keypad"

class Calculator extends React.Component {
    state = {
        equation: "",
        result: 0,
        firstNumber: 0,
        secondNumber: 0
    }

    onClick = (event) => {
        const clickedButton = event.target.innerHTML
        let equation = this.state.equation

        if (clickedButton === "C")
            return this.clear();

        else if ((clickedButton >= '0' && clickedButton <= '9') || clickedButton === '.')
            equation += clickedButton;

        else if (['+', '-', '*', '/'].indexOf(clickedButton) !== -1)
            equation += ' ' + clickedButton + ' ';

        else if (clickedButton === "=") {
            let splitEquation = equation.split(" ")
            if (splitEquation[0] === "") {
                alert('Invalid Equation');
            }
            else if (splitEquation.length != 1) {
                return this.calculate(splitEquation)  
            }
        }
        this.setState({ equation: equation })
    }

    clear() {
        this.setState({ equation: "", result: 0 })
    }

    calculate(splitEquation) {
        let firstNumber = splitEquation[0]
        let firstOperator = splitEquation[1]
        let secondNumber = splitEquation[2]
        if (firstOperator === "*") {
            let firstSolution = firstNumber * secondNumber
            firstNumber = firstSolution
            splitEquation.splice(0, 3)
            splitEquation.splice(0, 0, firstNumber)
            if (splitEquation.length !== 1) {
                this.calculate(splitEquation)
            }
            else if (splitEquation.length === 1) {
                let result = Math.round(splitEquation * 1000000) / 1000000
                this.setState({ result: result })
            }
        }
        if (firstOperator === "/") {
            let firstSolution = firstNumber / secondNumber
            firstNumber = firstSolution
            splitEquation.splice(0, 3)
            splitEquation.splice(0, 0, firstNumber)
            if (splitEquation.length !== 1) {
                this.calculate(splitEquation)
            }
            else if (splitEquation.length === 1) {
                let result = Math.round(splitEquation * 1000000) / 1000000
                this.setState({ result: result })
            }
        }
        if (firstOperator === "+") {
            console.log(firstNumber.typeOf)
            let firstSolution = parseInt(firstNumber) + parseInt(secondNumber)
            firstNumber = firstSolution
            splitEquation.splice(0, 3)
            splitEquation.splice(0, 0, firstNumber)
            if (splitEquation.length !== 1) {
                this.calculate(splitEquation)
            }
            else if (splitEquation.length === 1) {
                let result = Math.round(splitEquation * 1000000) / 1000000
                this.setState({ result: result })
            }
        }
        if (firstOperator === "-") {
            let firstSolution = firstNumber - secondNumber
            firstNumber = firstSolution
            splitEquation.splice(0, 3)
            splitEquation.splice(0, 0, firstNumber)
            if (splitEquation.length !== 1) {
                this.calculate(splitEquation)
            }
            else if (splitEquation.length === 1) {
                let result = Math.round(splitEquation * 1000000) / 1000000
                this.setState({ result: result })
            }
        }
    }

    render() {
        return (
            <div className="calculator">
                <Screen equation={this.state.equation} result={this.state.result}/>
                <Keypad onClick={this.onClick}/>
            </div>
        )
    }
}

export default Calculator