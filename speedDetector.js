//ment to suspended an over speeding drivers lisence

const calculateDemeritPoints = () => {
        const input = prompt("input speed")
    const speedLimit = 70;

    if (isNaN(input) || input < 0) {
        console.log('please enter a valid speed')
    }else if (input<= speedLimit) {
        return 'ok'
    } else if (input > 70 && input <=75) {
        return ' one Demerit earned'
    }else if (input > 75 && input<=80){
        return '2 Demerits earned'
    } else if (input >80 && input <= 85) {
        return ' 3 Demerits earned'
    } else if (input >85 && input <=90) {
        return ' 4 Demerits earned'
    } else if (input > 90 && input<=95) {
        return ' 5 Demerits earned'
    } else if (input >95 && input <=100) {
        return ' 6 Demerits earned'
    } else if (input > 100 && input<=105) {
        return ' 7 Demerits earned'
    } else if (input > 105 && input <=110) {
        return ' 8 Demerits earned'
    } else if (input > 110 && input <=115) {
        return ' 9 Demerits earned'
    } else if (input > 115 && input <=120) {
        return ' 10 Demerits earned'
    } else if (input > 120 && input <=125) {
        return ' 11 Demerits earned'
    } else if (input > 125 && input <=130) {
        return ' 12 Demerits earned'
    } else if (input >130) { 
        return 'license suspended!'
    }
}