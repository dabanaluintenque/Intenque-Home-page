
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
let day12_5 = timeTracker(15,34,18,30);
let day13 = timeTracker(15,22,17,0);
let day14 = timeTracker(14,45,15,45);
let day15 = timeTracker(20,49,22,0);
let day16 = timeTracker(10,41,13,41);
let day17 = timeTracker(18,48,21,0);
let day18 = timeTracker(19,25,20,0);
let day19 = timeTracker(4,36,5,36);
let day20 = timeTracker(18,49,20,55);
let day21 = timeTracker(19,45,20,15);
let day22 = timeTracker(4,46,5,17);
let day23 = timeTracker(21,12,22,55);
let day24 = timeTracker(14,54,16,30);
let day25 = timeTracker(7,48,8,37);
let day25_5 = timeTracker(18,57,22,0);
let day26 = timeTracker(18,48,22,20);
let day27 = timeTracker(16,59,17,59);
let day28 = timeTracker(17,59,20,10);
let day29 = timeTracker(12,17,15,2);
let day30 = timeTracker(9,16,15,29);
let day31 = timeTracker(9,52,14,50);
let day32 = timeTracker(9,31,13,50);
let day33 = timeTracker(19,48,22,0);
let day34 = timeTracker(15,29,19,0);

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
number_of_days.push(day12);
number_of_days.push(day12_5);
number_of_days.push(day13);
number_of_days.push(day14);
number_of_days.push(day15);
number_of_days.push(day16);
number_of_days.push(day17);
number_of_days.push(day18);
number_of_days.push(day19);
number_of_days.push(day20);
number_of_days.push(day21);
number_of_days.push(day22);
number_of_days.push(day23);
number_of_days.push(day24);
number_of_days.push(day25);
number_of_days.push(day25_5);
number_of_days.push(day26);
number_of_days.push(day27);
number_of_days.push(day28);
number_of_days.push(day29);
number_of_days.push(day30);
number_of_days.push(day31);
number_of_days.push(day32);
number_of_days.push(day33);
number_of_days.push(day34);

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
const day12_5Time = document.getElementById('day12.5').innerHTML = convert_to_time_format(number_of_days[12]);
const day13Time = document.getElementById('day13').innerHTML = convert_to_time_format(number_of_days[13]);
const day14Time = document.getElementById('day14').innerHTML = convert_to_time_format(number_of_days[14]);
const day15Time = document.getElementById('day15').innerHTML = convert_to_time_format(number_of_days[15]);
const day16Time = document.getElementById('day16').innerHTML = convert_to_time_format(number_of_days[16]);
const day17Time = document.getElementById('day17').innerHTML = convert_to_time_format(number_of_days[17]);
const day18Time = document.getElementById('day18').innerHTML = convert_to_time_format(number_of_days[18]);
const day19Time = document.getElementById('day19').innerHTML = convert_to_time_format(number_of_days[19]);
const day20Time = document.getElementById('day20').innerHTML = convert_to_time_format(number_of_days[20]);
const day21Time = document.getElementById('day21').innerHTML = convert_to_time_format(number_of_days[21]);
const day22Time = document.getElementById('day22').innerHTML = convert_to_time_format(number_of_days[22]);
const day23Time = document.getElementById('day23').innerHTML = convert_to_time_format(number_of_days[23]);
const day24Time = document.getElementById('day24').innerHTML = convert_to_time_format(number_of_days[24]);
const day25Time = document.getElementById('day25').innerHTML = convert_to_time_format(number_of_days[25]);
const day25_5Time = document.getElementById('day25.5').innerHTML = convert_to_time_format(number_of_days[26]);
const day26Time = document.getElementById('day26').innerHTML = convert_to_time_format(number_of_days[27]);
const day27Time = document.getElementById('day27').innerHTML = convert_to_time_format(number_of_days[28]);
const day28Time = document.getElementById('day28').innerHTML = convert_to_time_format(number_of_days[29]);
const day29Time = document.getElementById('day29').innerHTML = convert_to_time_format(number_of_days[30]);
const day30Time = document.getElementById('day30').innerHTML = convert_to_time_format(number_of_days[31]);
const day31Time = document.getElementById('day31').innerHTML = convert_to_time_format(number_of_days[32]);
const day32Time = document.getElementById('day32').innerHTML = convert_to_time_format(number_of_days[33]);
const day33Time = document.getElementById('day33').innerHTML = convert_to_time_format(number_of_days[34]);
const day34Time = document.getElementById('day34').innerHTML = convert_to_time_format(number_of_days[35]);





function totalHoursInStudy(){
    
    let total_study_time = 0;
    for (let count = 0; count < number_of_days.length; count ++){
        total_study_time +=number_of_days[count];
    }
    return total_study_time;
}

let total_time = convert_to_time_format(totalHoursInStudy());
const totaStudyHours = document.getElementById('studytime').innerHTML = total_time;

