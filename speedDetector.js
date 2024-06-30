const input = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout

})


function speedDetector(speed) {
    if (speed <= 70) {
        return 'ok'
    } else if (speed > 70 && speed < 75) {
        return ' one Demerit earned'
    } else if (speed > 80 && speed < 85) {
        return ' 3 Demerits earned'
    } else if (speed > 85 && speed < 90) {
        return ' 4 Demerits earned'
    } else if (speed > 90 && speed < 95) {
        return ' 5 Demerits earned'
    } else if (speed > 95 && speed < 100) {
        return ' 6 Demerits earned'
    } else if (speed > 100 && speed < 105) {
        return ' 7 Demerits earned'
    } else if (speed > 105 && speed < 110) {
        return ' 8 Demerits earned'
    } else if (speed > 110 && speed < 115) {
        return ' 9 Demerits earned'
    } else if (speed > 115 && speed < 120) {
        return ' 10 Demerits earned'
    } else if (speed > 120 && speed < 125) {
        return ' 11 Demerits earned'
    } else if (speed > 125 && speed < 130) {
        return ' 12 Demerits earned'
    } else {
        return 'license suspended!

    }
}
    //ensures speed is a number
    const speed = Number{ speed }
    //input question
    input.question(`enter speed :`, function (speed) {
        const speed = Number(speed)

        if (isNaN(speed) || speed < 0) {
            console.log('please enter a valid speed')
        } else {
    
        }
    })





















