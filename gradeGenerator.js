const input = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function awardGrade(marks) {
    if (marks > 100 || marks < 0) {
        return 'invalid mark'
    }
    if (marks > 79) {
        return 'A'
    } else if (marks >= 60 && marks <= 79) {
        return 'B'
    } else if (marks >= 49 && marks <= 59) {
        return 'C'
    } else if (marks >= 40 && marks <= 49) {
        return 'D'
    } else {
        return 'E'
    }
}

input.question('enter student marks: ', function (score) {
    const mark = Number(score)
    if (isNaN(mark)) {
        console.log('please enter valid marks')
    } else {
        const grade = awardGrade(mark)
        console.log(`the grade is ${grade}`)
    }

    input.close()

}) 
