
function numberWithComma(num) {

    let strNum = String(num)
    console.log(strNum, 0)
    let numberWithComma = ''
    let isFinished = false

    while (!isFinished) {
        if (strNum.length>3) {
            numberWithComma = strNum.slice(-3) + numberWithComma
            numberWithComma = ',' + numberWithComma
            strNum = strNum.slice(0, -3)
            console.log(strNum, 8)
        } else {
            numberWithComma = strNum + numberWithComma
            isFinished = true
            console.log(numberWithComma, 99)
        }
    }

  return numberWithComma
}

export default numberWithComma