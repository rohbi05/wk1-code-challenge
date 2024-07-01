//creates an input for user


function awardGrade() {
    const input = prompt("Weka marks: ")
        if (input > 100 || input < 0) {
            return 'invalid mark'
        }
        if (input > 79) {
            return 'A'
        } else if (input >= 60 && input <= 79) {
            return 'B'
        } else if (input >= 49 && input <= 59) {
            return 'C'
        } else if (input >= 40 && input <= 49) {
            return 'D'
        } else { input <40
            return 'E'
        }
    }
    //input question
    console.log(awardGrade())