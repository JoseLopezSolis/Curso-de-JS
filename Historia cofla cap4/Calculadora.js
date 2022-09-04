//CREATE A CALCULATOR
class Calculator{
    constructor(num1,operation,num2){
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;

        switch (operation) {
            case '+':
                console.log(this.sumNumbers(this.num1,this.num2));
                break;
            case '-':
                console.log(this.substractNumbers(this.num1,this.num2));
                break;
            case 'x'||'*':
                console.log(this.multiplyNumbers(this.num1,this.num2));
                break;
            case 'x'||'*':
                console.log(this.multiplyNumbers(this.num1,this.num2));
                break;
            case '/':
                console.log(this.divideNumbers(this.num1,this.num2));
                break;
            case 'pow':
                console.log(this.powNumbers(this.num1,this.num2));
                break;
            case 'sqrNumbers':
                console.log(this.sqrNumber(this.num1));
                break
            case 'cube':
                console.log(this.cubeRoot(this.num1));
            default:
                console.log("You have and error, please check what are you doing bad...");
                break;
        }

    }

    sumNumbers(num1,num2){
        return num1+num2;
    }
    substractNumbers(num1,num2){
        return num1-num2;
    }
    multiplyNumbers(num1,num2){
        return num1*num2;
    }
    divideNumbers(num1,num2){
        return num1/num2;
    }
    powNumbers(num1,num2){
        return Math.pow(num1,num2);
    }
    sqrNumber(num1){
        return Math.sqrt(num1);
    }
    cubeRoot(num1){
        return Math.cbrt(num1);
    }
}

function getData(){
    var operation = prompt("Select the operation:")
    var num1  = prompt("Enter num1:");
    var num2 = prompt("Enter num2:")

    var num1Float = parseFloat(num1);
    var num2Float = parseFloat(num2);

    var numbers = []
    numbers.push(num1Float,operation,num2Float);
    
    return numbers;
}

let getUserData = getData();

const operation1  = new Calculator(getUserData[0],getUserData[1],getUserData[2]);




