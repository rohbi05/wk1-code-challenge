/*this function determines an individual's NHIF contribution based on his/her gross salary*/
const calculatetax = (grossSalary) => {
    if (grossSalary >= 0 && grossSalary <= 5999) {
      return 150;
    } else if (grossSalary >= 6000 && grossSalary <= 7999) {
      return 200;
    } else if (grossSalary >= 8000 && grossSalary <= 11999) {
      return 300;
    } else if (grossSalary >= 12000 && grossSalary <= 14999) {
      return 400;
    } else if (grossSalary >= 15000 && grossSalary <= 19999) {
      return 500;
    } else if (grossSalary >= 20000 && grossSalary <= 24999) {
      return 600;
    } else if (grossSalary >= 25000 && grossSalary <= 29999) {
      return 700;
    } else if (grossSalary >= 30000 && grossSalary <= 34999) {
      return 800;
    } else if (grossSalary >= 35000 && grossSalary <= 39999) {
      return 900;
    } else if (grossSalary >= 40000 && grossSalary <= 44999) {
      return 1000;
    } else if (grossSalary >= 45000 && grossSalary <= 49999) {
      return 1100;
    } else if (grossSalary >= 50000 && grossSalary <= 59999) {
      return 1200;
    } else if (grossSalary >= 60000 && grossSalary <= 69999) {
      return 1300;
    } else if (grossSalary >= 70000 && grossSalary <= 79000) {
      return 1400;
    } else if (grossSalary >= 80000 && grossSalary <= 89999) {
      return 1500;
    } else if (grossSalary >= 90000 && grossSalary <= 99999) {
      return 1600;
    } else if (grossSalary >= 100000) {
      return 1700;
    } else {
      return "Invalid gross salary";
    }
  };
  
    // Ensure tax is not negative
    annualTax = Math.max(annualTax, 0);
  
    return annualTax / 12; // Return the monthly tax
  
  
  /*Calculates NSSF*/
  const calculateNSSF = (monthlySalary) => {
    const tier1Limit = 7000;
    const tier2Limit = 36000;
  
    let tier1Contribution = Math.min(monthlySalary, tier1Limit) * 0.06;
    let tier2Contribution = 0;
  
    if (monthlySalary > tier1Limit) {
      tier2Contribution =
        Math.min(monthlySalary - tier1Limit, tier2Limit - tier1Limit) * 0.06;
    }
  
    let totalEmployeeContribution = tier1Contribution + tier2Contribution;
    let totalEmployerContribution = tier1Contribution + tier2Contribution;
  
    return totalEmployeeContribution + totalEmployerContribution;
  };
  
  /*function that calculates net salary*/
  const calculateNetSalary = (basicSalary, benefits = 0) => {
    const grossSalary = basicSalary + benefits;
    const nssfDeduction = calculateNSSF(grossSalary);
    const taxableIncome = grossSalary - nssfDeduction;
    const nhifDeduction = calculateNHIF(grossSalary);
    const netSalary = grossSalary - nssfDeduction  - nhifDeduction;
    return netSalary;
  };
  
  console.log(calculateNetSalary(70000));