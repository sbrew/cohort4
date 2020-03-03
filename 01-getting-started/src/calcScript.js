
// to make the calculator function, we need to store the numbers used for each of the operands and which operation/function is being used------ easy way of doing that is using a class
// inside the class, I used a constructor, which will take all the inputs as well as all the functions for the calcuator
class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    // now I start to define the functions 
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        // this check ensures that only one decimal pt can be added to the input
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    // need to convert everything to string becuase javascript will try and add everything

    chooseOperation(operation) {
        if (this.currentOperand === '')return
        // this is a check for updating operators, dont want the operator buttons being used to clear the fields
        if(this.previousOperand !== ''){
            this.compute()
        }
        // this is a check to ensure that the calculator will continue to work through past calculations, not clear them.
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        // 1st need to create a var that will be the result of the compute function
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return

        // using a switch statement now as it works like several if statements chained together, on a single object
        // theyre defined by case
        switch (this.operation){
                case '+':
                    computation = prev + current
                    break
                case '-':
                    computation = prev - current
                    break
                case '*':
                    computation = prev * current
                    break
                case '/':
                    computation = prev / current
                    break
                default:
                    return
                    // CHECK: if no operation is selected, then no operation will not be carrried out to break the code

        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''

    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
};




// create constant variables for all the buttons used in the calculator 
// can use document.querySelectorAll() because it will get us all elements that match a certain string
// since I used a data-attribute, [] are required within the string
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
// can use querySelector for the remaining buttons as there are only one of each
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')


// using 'new' to define the class. Then passing the elements from the constructor into it (ie previous, current) to use the calculator object

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// to first use the calc obj, need to selct the buttons
// forEach to loop over all the buttons and then adding an event listener
numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
    })

});


operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
    })

});

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})