


function timeTracker(startHour, startMinute, endHour,  endMinute){
    
    let totalHours = endHour - startHour;
    let totalMinutes = 0.0;
    let result = 0.0;
   
    if (startMinute == endMinute) {
        
        result = (totalHours * 60);
    }

    else if (startMinute < endMinute) {
        totalMinutes = endMinute - startMinute;
        result = (totalHours * 60) + totalMinutes;
    }

    else{
        totalHours -= 1;
        totalMinutes = (60 - startMinute) + endMinute;
        result = (totalHours * 60) + totalMinutes;
    }
    return result;  
}

function convert_to_time_format(timeFormat) {
    const hours = parseInt(timeFormat / 60);
    const minutes = parseInt(timeFormat % 60);
    return `${hours}h : ${minutes}`;
}
// Note I enter military hours 
// Ex: 2Pm = 14 but 2Am = 2
// or  9PM = 21 but 9Am = 9
let day1 = timeTracker(10,30,14,40);
let day2 = timeTracker(6,1,7,40);
let day3 = timeTracker(6,40,7,1);
let day4 = timeTracker(21,30, 22,0);
let day5 = timeTracker(13,7,15,11);
let day6 = timeTracker(16,30,21,30);
let day7 = timeTracker(21,50,23,0);
let day8 = timeTracker(15,24,16,10);
let day9 = timeTracker(23,10,24,10);
let day10 = timeTracker(14,55,16,4);
let day11 = timeTracker(13,51,15,30);
let day12 = timeTracker(10,6, 12,0);

let number_of_days =[];
number_of_days.push(day1);
number_of_days.push(day2);
number_of_days.push(day3);
number_of_days.push(day4);
number_of_days.push(day5);
number_of_days.push(day6);
number_of_days.push(day7);
number_of_days.push(day8);
number_of_days.push(day9);
number_of_days.push(day10);
number_of_days.push(day11);
number_of_days.push(day12)

const day1Time = document.getElementById('day1').innerHTML = convert_to_time_format(number_of_days[0]);
const day2Time = document.getElementById('day2').innerHTML = convert_to_time_format(number_of_days[1]);
const day3Time = document.getElementById('day3').innerHTML = convert_to_time_format(number_of_days[2]);
const day4Time = document.getElementById('day4').innerHTML = convert_to_time_format(number_of_days[3]);
const day5Time = document.getElementById('day5').innerHTML = convert_to_time_format(number_of_days[4]);
const day6Time = document.getElementById('day6').innerHTML = convert_to_time_format(number_of_days[5]);
const day7Time = document.getElementById('day7').innerHTML = convert_to_time_format(number_of_days[6]);
const day8Time = document.getElementById('day8').innerHTML = convert_to_time_format(number_of_days[7]);
const day9Time = document.getElementById('day9').innerHTML = convert_to_time_format(number_of_days[8]);
const day10Time = document.getElementById('day10').innerHTML = convert_to_time_format(number_of_days[9]);
const day11Time = document.getElementById('day11').innerHTML = convert_to_time_format(number_of_days[10]);
const day12Time = document.getElementById('day12').innerHTML = convert_to_time_format(number_of_days[11]);


function totalHoursInStudy(){
    
    let total_study_time = 0;
    for (let count = 0; count < number_of_days.length; count ++){
        total_study_time +=number_of_days[count];
    }
    return total_study_time;
}

let total_time = convert_to_time_format(totalHoursInStudy());
const totaStudyHours = document.getElementById('studytime').innerHTML = total_time;

