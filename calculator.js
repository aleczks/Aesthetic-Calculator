const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const allClearButton = document.querySelector('[data-allClear]');
const deleteButton = document.querySelector('[data-delete]');

const prevNumberTxtElement = document.querySelector('[data-prevNumber]');
const currentNumberTxtElement = document.querySelector('[data-currentNumber]');

// CLASS CALCULATOR
class Calculator {
    constructor(prevNumberTxtField, currentNumberTxtField) { 
        //puts variables in constructor
        this.prevNumberTxtField = prevNumberTxtField
        this.currentNumberTxtField = currentNumberTxtField
        }
    

    allClear() {
        this.currentNumber = ''
        this.prevNumber = ''
        this.operation = undefined
        this.allClear()
    }

    del() {
        this.currentNumber = this.currentNumber.toString(0, -1);
    }
    // to add number to screen
    appendNumber(number) { // the appendNumberFunction
        if (number === '.' && this.currentNumber.includes('.')) return
        this.currentNumber = this.currentNumber.toString() + number.toString()
    }
    // (must pass) the specific operation/number user selected
    chooseOperation(operation) {
        //Check-in
        if (this.currentNumber === '') return;
        if (this.prevNumber !== '') {
            this.compute()
        }
        this.operation = operation;
        this.prevNumber = this.currentNumber;
        this.currentNumber = '';
    }

    compute() {
        let computation
        const prev = parseFloat(this.prevNumber)
        const curr = parseFloat(this.currentNumber)
        // Cancels function if user puts nothing
        if (isNaN(prev) || isNaN(curr)) return

        switch (this.operation) {
            case '+':
                computation = prev + curr;
                break;
            
            case '-':
                computation = prev - curr;
                break;

            case '*':
                computation = prev * curr;
                break;

            case '/':
                computation = prev / curr;
                break;
            
            default: return;
        }
    
        this.currentNumber = computation;
        this.operation = undefined;
        this.prevNumberTxtField = '';
    }

    updateDisplay() {
        this.currentNumberTxtField.innerText = this.currentNumber;
        this.prevNumberTxtField.innerText = this.prevNumber;
    }
}

// CREATING A CALCULATOR
const calculator = new Calculator(prevNumberTxtField, currentNumberTxtField)

number.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

// HOW TO USE OPERATORS
operation.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})
// EVENTLISTENER EQUALS-BUTTON
equalsBtn.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
} )
// ALLCLEARBUTTON
allClear.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
} )

del.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
} )