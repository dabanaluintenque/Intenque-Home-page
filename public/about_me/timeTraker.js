
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
let day35 = timeTracker(17,30,23,20);
let day36 = timeTracker(20,25,21,30);
let day37 = timeTracker(20,0,22,27);
let day38 = timeTracker(19,0,22,7);
let day39 = timeTracker(13,33,16,38);
let day40 = timeTracker(7,45,10,0);
let day41 = timeTracker(8,13,9,31);
let day42 = timeTracker(16,4,21,51);
let day43 = timeTracker(11,49,12,30);
let day44 = timeTracker(19,44,21,24);
let day45 = timeTracker(7,10,8,2);
let day46 = timeTracker(10,15, 18,20);
let day47 = timeTracker(7,54, 10,0);
let day48 = timeTracker(19,21,20,21);
let day49 = timeTracker(9,14,11,58);
let day50 = timeTracker(4,23,4,53);
let day50half = timeTracker(21,11, 21,41);
let day51 = timeTracker(7,25,8,32);
let day52 = timeTracker(17,10,18,10);
let day53 = timeTracker(6,22,8,40);
let day54 = timeTracker(11,13,13,0);

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
number_of_days.push(day35);
number_of_days.push(day36);
number_of_days.push(day37);
number_of_days.push(day38);
number_of_days.push(day39);
number_of_days.push(day40);
number_of_days.push(day41);
number_of_days.push(day42);
number_of_days.push(day43);
number_of_days.push(day44);
number_of_days.push(day45);
number_of_days.push(day46);
number_of_days.push(day47);
number_of_days.push(day48);
number_of_days.push(day49);
number_of_days.push(day50);
number_of_days.push(day50half);
number_of_days.push(day51);
number_of_days.push(day52);
number_of_days.push(day53);
number_of_days.push(day54);


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
const day35Time = document.getElementById('day35').innerHTML = convert_to_time_format(number_of_days[36]);
const day36Time = document.getElementById('day36').innerHTML = convert_to_time_format(number_of_days[37]);
const day37Time = document.getElementById('day37').innerHTML = convert_to_time_format(number_of_days[38]);
const day38Time = document.getElementById('day38').innerHTML = convert_to_time_format(number_of_days[39]);
const day39Time = document.getElementById('day39').innerHTML = convert_to_time_format(number_of_days[40]);
const day40Time = document.getElementById('day40').innerHTML = convert_to_time_format(number_of_days[41]);
const day41Time = document.getElementById('day41').innerHTML = convert_to_time_format(number_of_days[42]);
const day42Time = document.getElementById('day42').innerHTML = convert_to_time_format(number_of_days[43]);
const day43Time = document.getElementById('day43').innerHTML = convert_to_time_format(number_of_days[44]);
const day44Time = document.getElementById('day44').innerHTML = convert_to_time_format(number_of_days[45]);
const day45Time = document.getElementById('day45').innerHTML = convert_to_time_format(number_of_days[46]);
const day46Time = document.getElementById('day46').innerHTML = convert_to_time_format(number_of_days[47]);
const day47Time = document.getElementById('day47').innerHTML = convert_to_time_format(number_of_days[48]);
const day48Time = document.getElementById('day48').innerHTML = convert_to_time_format(number_of_days[49]);
const day49Time = document.getElementById('day49').innerHTML = convert_to_time_format(number_of_days[50]);
const day50Time = document.getElementById('day50').innerHTML = convert_to_time_format(number_of_days[51]);
const day50halfTime = document.getElementById('day50half').innerHTML = convert_to_time_format(number_of_days[52]);
const day51Time = document.getElementById('day51').innerHTML = convert_to_time_format(number_of_days[53]);
const day52Time = document.getElementById('day52').innerHTML = convert_to_time_format(number_of_days[54]);
const day53Time = document.getElementById('day53').innerHTML = convert_to_time_format(number_of_days[55]);
const day54Time = document.getElementById('day54').innerHTML = convert_to_time_format(number_of_days[56]);

function totalHoursInStudy(){
    
    let total_study_time = 0;
    for (let count = 0; count < number_of_days.length; count ++){
        total_study_time +=number_of_days[count];
    }
    return total_study_time;
}

let total_time = convert_to_time_format(totalHoursInStudy());
const totaStudyHours = document.getElementById('studytime').innerHTML = total_time;

