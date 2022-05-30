let result = document.getElementById('result');

let day = document.getElementById('day');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let period = document.getElementById('period');

let result2 = document.getElementById('result2');

console.log("Level1_1_!");
let date1 = new Date("September 2, 2019 09:00:00");
result.innerHTML += `<br>` + date1;
let date2 = new Date(0);
result.innerHTML += `<br>` + date2;
let date3 = new Date(31556908800);
result.innerHTML += `<br>` + date3;
let date4 = new Date(86400000);
result.innerHTML += `<br>` + date4;

console.log("Level1_2_!");
let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
];

let newDate = new Date("Feb 05 2021 21:05:14");
console.log(newDate);
result.innerHTML += `<br>` + newDate;

result.innerHTML += `<br>` + newDate.getFullYear();
result.innerHTML += `<br>` + newDate.getMonth();
result.innerHTML += `<br>` + newDate.getDate();
result.innerHTML += `<br>` + newDate.getHours();
result.innerHTML += `<br>` + newDate.getMinutes();

result.innerHTML += `<br>` + wochenTag[newDate.getDate()];
result.innerHTML += `<br>` + monate[newDate.getMonth()];

day.innerHTML = wochenTag[newDate.getDate()];
hours.innerHTML = newDate.getHours();
minutes.innerHTML = newDate.getMinutes();
seconds.innerHTML = newDate.getSeconds();
period.innerHTML = "PM";

console.log("LEVEL_1_3_!");

let toDay = new Date();
result2.innerHTML += toDay;
//Years 
toDay.setFullYear(toDay.getFullYear() + 200);
result2.innerHTML += `<br>` + toDay;

//Months 
toDay.setMonth(toDay.getMonth() + 9);
result2.innerHTML += `<br>` + toDay;
//Month +1
toDay.setMonth(toDay.getMonth() + 1);
result2.innerHTML += `<br>` + toDay;
// days -21
toDay.setDate(toDay.getDate() - 21);
result2.innerHTML += `<br>` + toDay;
// new Date() + 30 Days
toDay = new Date();
toDay.setDate(toDay.getDate() + 30);
result2.innerHTML += `<br>` + toDay;

console.log("LEVEL_1_4_!");

const tageImMonat = (monat, jahr) => {
    let datum = new Date(jahr, monat, 0).getDate();// wenn 0 als Tag angegeben wird, wird die Anzahl der Tage gezählt!
    console.log(datum);
}

tageImMonat(1, 2016);
tageImMonat(2, 2016);
tageImMonat(2, 2017);
tageImMonat(12, 2017);

console.log("LEVEL_1_5_!");
let list = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
];

const monatsName = (jahr, monat, tag) => {
    let moNat = new Date(jahr, monat, tag);
    // moNat.getMonth
    let ergebnis = list[moNat.getMonth() - 1];
    console.log(ergebnis);
}
monatsName(2001, 3, 4);
monatsName(2019, 12, 24);
monatsName(1410, 07, 15);


console.log("LEVEL_1_6_!");
const hr = (year, month, day, hours) => {
    let daTum = new Date(year, month, day, hours);
    console.log(daTum);
    if (daTum.getHours() > 12) {
        console.log("PM");
    } else if (daTum.getHours() <= 12) {
        console.log("AM");
    }
}
hr(1999, 10, 5, 15);
hr();
hr(2019, 12, 3, 12);
hr(2000, 1, 1, 11);

console.log("LEVEL_1_7_!");

const istWeekend = (month, day, year) => {
    let datum = new Date(year, month, day);

    if (datum.getDay() == 6 || datum.getDay() == 0) {
        return "Weekend";
    } else {
        return "Arbeitstag";
    }
}
let datum = new Date();
console.log(datum.getDay());
console.log(istWeekend("12, 15, 2019"));
console.log(istWeekend("2, 16, 2001"));
console.log(istWeekend("2, 1, 2020"));
console.log(istWeekend("2, 29, 2020"));
