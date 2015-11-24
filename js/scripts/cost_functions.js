/**
 * Mini-library for calculating the figures needed
 * for DontSpendThatMoney.com
 */

function priceWithSalesTax(originalPrice, salesTax) {
    /**
     * Price with sales tax
     * @type {number}
     */
    originalPrice = parseFloat(originalPrice);
    salesTax = parseFloat(salesTax);
    return originalPrice + (originalPrice * (salesTax / 100));
}

function adjustIncome(salary, effectiveTax) {
    /**
     * Calc after tax salary
     * @type {number}
     */
    salary = parseFloat(salary);
    effectiveTax = parseFloat(effectiveTax);
    return salary - (salary * (effectiveTax / 100));
}

function salaryToTime(adjustedIncome, timeOffInWeeks) {
    /**
     * Convert after tax salary to pay per day
     * @type {number}
     */
    adjustedIncome = parseFloat(adjustedIncome);
    timeOffInWeeks = parseFloat(timeOffInWeeks);
    var timeWorked = (20 * 12) - (52 - timeOffInWeeks);
    var payPerDay = adjustedIncome / timeWorked;
    return payPerDay;
}

function priceInDays(salary, originalPrice, salesTax, effectiveTax, timeOffInWeeks) {
    /**
     * Calculate number of days worked to buy this object
     * @type {number}
     */
    salary = parseFloat(salary);
    originalPrice = parseFloat(originalPrice);
    salesTax = parseFloat(salesTax);
    effectiveTax = parseFloat(effectiveTax);
    timeOffInWeeks = parseFloat(timeOffInWeeks);
    var adjustedSalary = adjustIncome(salary, effectiveTax);
    var realPrice = priceWithSalesTax(originalPrice, salesTax);
    var payPerWorkDay = salaryToTime(adjustedSalary, timeOffInWeeks);
    var priceInDays = realPrice / payPerWorkDay;
    return priceInDays;
}

function priceInHours(priceInDays) {
    /**
     * Calculate number of hours worked to buy this object
     * given the number of days worked to buy it, assuming
     * that our user works an 8 hour day, which is likely low.
     * @type {number}
     */
    priceInDays = parseFloat(priceInDays);
    return priceInDays * 8;
}

function averageReturnsIfInvestedSP500(realPrice, years) {
    /**
     * 9.60 Geometric Return from 1928 - 2014 for S&P500
     * http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html
     *
     * Compound interest = P (1 + rate) ^ years if compounding annually
     * @type {number}
     */
    realPrice = parseFloat(realPrice);
    years = parseFloat(years);
    return realPrice * Math.pow(((1 + 0.096)), years);
}

function averageReturnsIfInvestedSTT(realPrice, years) {
    /**
     * 3.49% Geometric Return from 1928 - 2014 for Short Term Treasuries
     * http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html
     *
     * Compound interest = P (1 + rate) ^ years if compounding annually
     * @type {number}
     */
    realPrice = parseFloat(realPrice);
    years = parseFloat(years);
    return realPrice * Math.pow(((1 + 0.0349)), years);
}

function averageReturnsIfInvestedITT(realPrice, years) {
    /**
     * 5.00% Geometric Return from 1928 - 2014 for intermediate term (10 Year) Treasuries
     * http://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html
     *
     * Compound interest = P (1 + rate) ^ years if compounding annually
     * @type {number}
     */
    realPrice = parseFloat(realPrice);
    years = parseFloat(years);
    return realPrice * Math.pow(((1 + 0.05)), years);
}