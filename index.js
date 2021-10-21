function Dice() {
    const Roll = Math.floor(Math.random() * 6) + 1;
    return Roll;
}

class Beetle {
    constructor() {
        this.Roll = 0;
        this.One = 0;
        this.Two = 0;
        this.Three = 0;
        this.Four = 0;
        this.Five = 0;
        this.Six = 0;
        this.Head = false;
        this.Body = false;
        this.Antennae = false;
        this.Tail = false;
        this.Leg = false;
        this.Eye = false;
    }
}

function Game() {
    let BeetleInstance = new Beetle();
    const Loop = 1;
    while (Loop === 1) {
        Num = Dice();
        ++BeetleInstance.Roll;
        if (Num === 6 && BeetleInstance.Body === false) {
            BeetleInstance.Body = true;
        }

        if (BeetleInstance.Body === true) {
            switch (Num) {
                case 3:
                    ++BeetleInstance.Three;
                    break;
                case 4:
                    ++BeetleInstance.Four;
                    if (BeetleInstance.Tail === false) {
                        BeetleInstance.Tail = true;   
                    }
                    break;
                case 5:
                    ++BeetleInstance.Five;
                    if(BeetleInstance.Head === false) {
                        BeetleInstance.Head = true;
                    }
                    break;
                default:
                    break;
            }
        }

        if (BeetleInstance.Head === true) {
            switch (Num) {
                case 1:
                    ++BeetleInstance.One;
                break;
                case 2:
                    ++BeetleInstance.Two;
                    break;
                default:
                    break;
            }
        }

        if (BeetleInstance.One === 2 && BeetleInstance.Eye === false) {
            BeetleInstance.Eye = true;
        }
        if (BeetleInstance.Two === 2 && BeetleInstance.Antennae === false) {
            BeetleInstance.Antennae = true;
        }

        if (BeetleInstance.Three === 4 && BeetleInstance.Leg === false) {
            BeetleInstance.Leg = true;
        }

        if (BeetleInstance.Antennae === true && BeetleInstance.Eye === true && BeetleInstance.Leg === true && BeetleInstance.Tail === true && BeetleInstance.Head === true && BeetleInstance.Body === true) {
            console.log("You win! " + BeetleInstance.Roll);
            break;
        }
    }
    
    Roll = BeetleInstance.Roll;

    delete BeetleInstance;

    return Roll;
}

function ClickStart() {
    const NumberOfTimes = document.getElementById("number").value;
    let GameResult = [];
    for (let i = 0; i < NumberOfTimes; i++) {
        Result = Game();
        GameResult.push(Result);
    }

    let Total = 0;

    for (let i = 0; i < GameResult.length; i++) {
        Total = GameResult[i] + Total;
    }
    let Average = Math.round(Total / GameResult.length);
    ResultDisplay(Average, NumberOfTimes);
    return {
        Average: Average,
        NumberOfTimes: NumberOfTimes
    };
}

function ResultDisplay(Result, NumberOfTimes) {
    const ResultArea = document.getElementById("resultdisplay");
    if (NumberOfTimes === "1") {
        ResultArea.innerHTML = `${NumberOfTimes}回実行しました<br>結果：カブトムシが完成するまで、${Result}回サイコロを振りました。`;
    } else {
        ResultArea.innerHTML = `${NumberOfTimes}回実行しました。<br>結果：カブトムシが完成するまで、平均${Result}回（小数点以下四捨五入）サイコロを振りました。`;
    }
}
