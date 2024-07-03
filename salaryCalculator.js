function grossPay(basicSalary,benefits=o){
  const grossSalary = basicSalary + benefits
  console.log( "This is your gross salary", gross salary)

}


// Function to calculate NHIF Deductions

function grossMinusNHIF(grossSalary) {
  if (grossSalary <= 5999) {
      nhif = 150;
  } else if (grossSalary <= 7999) {
      nhif = 300;
  } else if (grossSalary <= 11999) {
      nhif = 400;
  } else if (grossSalary <= 14999) {
      nhif = 500;
  } else if (grossSalary <= 19999) {
      nhif = 600;
  } else if (grossSalary <= 24999) {
      nhif = 750;
  } else if (grossSalary <= 29999) {
      nhif = 850;
  } else if (grossSalary <= 34999) {
      nhif = 900;
  } else if (grossSalary <= 39999) {
      nhif = 950;
  } else if (grossSalary <= 44999) {
      nhif = 1000;
  } else if (grossSalary <= 49999) {
      nhif = 1100;
  } else if (grossSalary <= 59999) {
      nhif = 1200;
  } else if (grossSalary <= 69999) {
      nhif = 1300;
  } else if (grossSalary <= 79999) {
      nhif = 1400;
  } else if (grossSalary <= 89999) {
      nhif = 1500;
  } else if (grossSalary <= 99999) {
      nhif = 1600;
  } else {
      nhif = 1700;
  }
  return nhif;
}


// Function to calculate NSSF Deductions
function payLessNSSF() {
  const salaryMinusNSSF =grossPayMinusNHIF -2000
  console.log("This is your salary minus NSSF",salaryMinusNSSF)
}

//funcyion calculates PAYE
function calculatePAYE(){
const netSalary = salaryMinusNSSF - 750
console.log("This is your net slary," nstSalary)
return netSalary}

calculatePAYE(){
}
payLessNSSF(){
}
grossMinusNHIF(){
}
grossPay(5000,1000)