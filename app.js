var fullDate = new Date();
var currentYear = fullDate.getFullYear();
var currentMonth = fullDate.getMonth();
var currentDay = fullDate.getDate();
var AlainAge = 45;
var birthYear = currentYear-AlainAge;
var date = currentMonth + 1 + '/' + currentDay + '/' + currentYear;
console.log('Today\'s date is ' + date);
console.log('Alain\'s age is ' + birthYear);