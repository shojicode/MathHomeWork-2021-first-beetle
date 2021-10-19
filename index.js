function dice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    return roll;
}

class beetle {
    constructor() {
        this.roll = 0;
        this.one = 0;
        this.two = 0;
        this.three = 0;
        this.four = 0;
        this.five = 0;
        this.six = 0;
        this.head = false;
        this.body = false;
        this.antennae = false;
        this.tail = false;
        this.leg = false;
        this.eye = false;
    }
}

function game() {
    let beetleinstance = new beetle();
    const loop = 1;
    loop:
    while (loop === 1) {
        num = dice()
        ++beetleinstance.roll;
        if (num === 6 && beetleinstance.body === false) {
            beetleinstance.body = true;
            console.log("Body " + beetleinstance.roll)
        }

        if (beetleinstance.body === true) {
            switch (num) {
                case 3:
                    ++beetleinstance.three;
                    break;
                case 4:
                    ++beetleinstance.four;
                    if (beetleinstance.tail === false) {
                        beetleinstance.tail = true;
                        console.log("tail " + beetleinstance.roll)   
                    }
                    break;
                case 5:
                    ++beetleinstance.five;
                    if(beetleinstance.head === false) {
                        beetleinstance.head = true;
                        console.log("Head " + beetleinstance.roll);
                    }
                    break;
                default:
                    break;
            }
        }

        if (beetleinstance.head === true) {
            switch (num) {
                case 1:
                    ++beetleinstance.one;
                break;
                case 2:
                    ++beetleinstance.two;
                    break;
                default:
                    break;
            }
        }

        if (beetleinstance.one === 2 && beetleinstance.eye === false) {
            beetleinstance.eye = true
            console.log("eye " + beetleinstance.roll)
        }
        if (beetleinstance.two === 2 && beetleinstance.antennae === false) {
            beetleinstance.antennae = true;
            console.log("antennae" + beetleinstance.roll)
        }

        if (beetleinstance.three === 4 && beetleinstance.leg === false) {
            beetleinstance.leg = true
            console.log("leg " + beetleinstance.roll)
        }

        if (beetleinstance.antennae === true && beetleinstance.eye === true && beetleinstance.leg === true && beetleinstance.tail === true && beetleinstance.head === true && beetleinstance.body === true) {
            console.log("You win! " + beetleinstance.roll)
            break loop;
        }
    }
    
    roll = beetleinstance.roll;

    delete beetleinstance;

    return roll
}

function ClickStart() {
    const NumberOfTimes = document.getElementById("number").value;
    let Game_Result = []
    for (let i = 0; i < NumberOfTimes; i++) {
        Result = game();
        Game_Result.push(Result);
        console.log(Game_Result);
    }

    let Total = 0;

    for (let i = 0; i < Game_Result.length; i++) {
        Total = Game_Result[i] + Total;
        //console.log(Total)
    } 
    let Average = Total / Game_Result.length;
    console.log(Average);
    ResultTable(Game_Result, Average);
    return Average
}

function ResultTable(data1, data2) {
    result_element = document.createElement("h1")
    result_div = document.getElementById("result")
    result_div.appendChild(result_element)
}