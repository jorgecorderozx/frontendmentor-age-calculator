function isEmpty(event){
    if(event.target.value == "") return true;
    else return false;
}

function isLeapYear(year){
    return ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0))
}

let monthsAndDays = [];

for(month = 1; month <= 12; month++){
    if(month < 8) monthsAndDays.push({month: month, days: (month % 2 != 0) ? 31 : 30});
    else monthsAndDays.push({month: month, days: (month % 2 == 0) ? 31 : 30});
}

monthsAndDays[1].days = 28;




