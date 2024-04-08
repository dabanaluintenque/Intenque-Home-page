
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
let day55 = timeTracker(20,52,24,0);
let day56 = timeTracker(17,14,19,14);
let day57 = timeTracker(8,4, 13,14);
let day58 = timeTracker(20,27,21,27);
let day59 = timeTracker(20,40,21,47);
let day60 = timeTracker(21,28,22,1);
let day61 = timeTracker(7,49,8,53);
let day62 = timeTracker(11,40, 12,40);
let day63 = timeTracker(8,49,10,49);
let day64 = timeTracker(20,25,22,7);
let day65 = timeTracker(20,0,21,1);
let day66 = timeTracker(21,0,22,1);
let day67 = timeTracker(17,30,18,30);
let day68 = timeTracker(9,23,12,0);
let day69 = timeTracker(21,4,22,7);
let day70 = timeTracker(19,49,20,50);
let day71 = timeTracker(21,8,22,11);
let day72 = timeTracker(20,22,22,22);
let day73 = timeTracker(10,5,11,11);
let day74 = timeTracker(20,4,21,18);
let day75 = timeTracker(20,37,21,37);
let day76 = timeTracker(20,49, 21,49);
let day77 = timeTracker(10,58, 17,9);
let day78 = timeTracker(11,37,13,0);
let day79 = timeTracker(20,32,21,32);
let day80 = timeTracker(15,46,18,16);
let day81 = timeTracker(21,37,22,40);
let day82 = timeTracker(22,33,23,33);
let day83 = timeTracker(10,16,12,16);
let day84 = timeTracker(15,11,18,12);
let day85 = timeTracker(19,59, 22,30);
let day86 = timeTracker(19,33, 22, 20);
let day87 = timeTracker(7,30,9,30);
let day88 = timeTracker(13,45,17,30);
let day89 = timeTracker(20,45,22,45);
let day90 = timeTracker(20,7,21,7);
let day91 = timeTracker(13,0,16,0);
let day92 = timeTracker(20,17,21,29);
let day93 = timeTracker(19,50,21,23);
let day94 = timeTracker(20,14,21,20);
let day95 = timeTracker(19,40,21,40);
let day96 = timeTracker(10,40,16,40);
let day97 = timeTracker(10,32,18,52);
let day98 = timeTracker(3,55,4,55);
let day99 = timeTracker(20,51,22,0);
let day100 = timeTracker(20,11,22,35);
let day101 = timeTracker(19,30,20,44);
let day102 = timeTracker(19,54,21,2);
let day103 = timeTracker(20,20,21,38);
let day104 = timeTracker(8,20,17,20);
let day105 = timeTracker(3,41,18,0);
let day106 = timeTracker(20,27, 21,57);
let day107 = timeTracker(7,0,10,0);
let day108 = timeTracker(18,4,21,56);
let day109 = timeTracker(19,49, 21,13);
let day110 = timeTracker(8,40, 14,30);
let day111 = timeTracker(15,40, 16,40);

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
number_of_days.push(day55);
number_of_days.push(day56);
number_of_days.push(day57);
number_of_days.push(day58);
number_of_days.push(day59);
number_of_days.push(day60);
number_of_days.push(day61);
number_of_days.push(day62);
number_of_days.push(day63);
number_of_days.push(day64);
number_of_days.push(day65);
number_of_days.push(day66);
number_of_days.push(day67);
number_of_days.push(day68);
number_of_days.push(day69);
number_of_days.push(day70);
number_of_days.push(day71);
number_of_days.push(day72);
number_of_days.push(day73);
number_of_days.push(day74);
number_of_days.push(day75);
number_of_days.push(day76);
number_of_days.push(day77);
number_of_days.push(day78);
number_of_days.push(day79);
number_of_days.push(day80);
number_of_days.push(day81);
number_of_days.push(day82);
number_of_days.push(day83);
number_of_days.push(day84);
number_of_days.push(day85);
number_of_days.push(day86);
number_of_days.push(day87);
number_of_days.push(day88);
number_of_days.push(day89);
number_of_days.push(day90);
number_of_days.push(day91);
number_of_days.push(day92);
number_of_days.push(day93);
number_of_days.push(day94);
number_of_days.push(day95);
number_of_days.push(day96);
number_of_days.push(day97);
number_of_days.push(day98);
number_of_days.push(day99);
number_of_days.push(day100);
number_of_days.push(day101);
number_of_days.push(day102);
number_of_days.push(day103);
number_of_days.push(day104);
number_of_days.push(day105);
number_of_days.push(day106);
number_of_days.push(day107);
number_of_days.push(day108);
number_of_days.push(day109);
number_of_days.push(day110);
number_of_days.push(day111);

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
const day55Time = document.getElementById('day55').innerHTML = convert_to_time_format(number_of_days[57]);
const day56Time = document.getElementById('day56').innerHTML = convert_to_time_format(number_of_days[58]);
const day57Time = document.getElementById('day57').innerHTML = convert_to_time_format(number_of_days[59]);
const day58Time = document.getElementById('day58').innerHTML = convert_to_time_format(number_of_days[60]);
const day59Time = document.getElementById('day59').innerHTML = convert_to_time_format(number_of_days[61]);
const day60Time = document.getElementById('day60').innerHTML = convert_to_time_format(number_of_days[62]);
const day61Time = document.getElementById('day61').innerHTML = convert_to_time_format(number_of_days[63]);
const day62Time = document.getElementById('day62').innerHTML = convert_to_time_format(number_of_days[64]);
const day63Time = document.getElementById('day63').innerHTML = convert_to_time_format(number_of_days[65]);
const day64Time = document.getElementById('day64').innerHTML = convert_to_time_format(number_of_days[66]);
const day65Time = document.getElementById('day65').innerHTML = convert_to_time_format(number_of_days[67]);
const day66Time = document.getElementById('day66').innerHTML = convert_to_time_format(number_of_days[68]);
const day67Time = document.getElementById('day67').innerHTML = convert_to_time_format(number_of_days[69]);
const day68Time = document.getElementById('day68').innerHTML = convert_to_time_format(number_of_days[70]);
const day69Time = document.getElementById('day69').innerHTML = convert_to_time_format(number_of_days[71]);
const day70Time = document.getElementById('day70').innerHTML = convert_to_time_format(number_of_days[72]);
const day71Time = document.getElementById('day71').innerHTML = convert_to_time_format(number_of_days[73]);
const day72Time = document.getElementById('day72').innerHTML = convert_to_time_format(number_of_days[74]);
const day73Time = document.getElementById('day73').innerHTML = convert_to_time_format(number_of_days[75]);
const day74Time = document.getElementById('day74').innerHTML = convert_to_time_format(number_of_days[76]);
const day75Time = document.getElementById('day75').innerHTML = convert_to_time_format(number_of_days[77]);
const day76Time = document.getElementById('day76').innerHTML = convert_to_time_format(number_of_days[78]);
const day77Time = document.getElementById('day77').innerHTML = convert_to_time_format(number_of_days[79]);
const day78Time = document.getElementById('day78').innerHTML = convert_to_time_format(number_of_days[80]);
const day79Time = document.getElementById('day79').innerHTML = convert_to_time_format(number_of_days[81]);
const day80Time = document.getElementById('day80').innerHTML = convert_to_time_format(number_of_days[82]);
const day81Time = document.getElementById('day81').innerHTML = convert_to_time_format(number_of_days[83]);
const day82Time = document.getElementById('day82').innerHTML = convert_to_time_format(number_of_days[84]);
const day83Time = document.getElementById('day83').innerHTML = convert_to_time_format(number_of_days[85]);
const day84Time = document.getElementById('day84').innerHTML = convert_to_time_format(number_of_days[86]);
const day85Time = document.getElementById('day85').innerHTML = convert_to_time_format(number_of_days[87]);
const day86Time = document.getElementById('day86').innerHTML = convert_to_time_format(number_of_days[88]);
const day87Time = document.getElementById('day87').innerHTML = convert_to_time_format(number_of_days[89]);
const day88Time = document.getElementById('day88').innerHTML = convert_to_time_format(number_of_days[90]);
const day89Time = document.getElementById('day89').innerHTML = convert_to_time_format(number_of_days[91]);
const day90Time = document.getElementById('day90').innerHTML = convert_to_time_format(number_of_days[92]);
const day91Time = document.getElementById('day91').innerHTML = convert_to_time_format(number_of_days[93]);
const day92Time = document.getElementById('day92').innerHTML = convert_to_time_format(number_of_days[94]);
const day93Time = document.getElementById('day93').innerHTML = convert_to_time_format(number_of_days[95]);
const day94Time = document.getElementById('day94').innerHTML = convert_to_time_format(number_of_days[96]);
const day95Time = document.getElementById('day95').innerHTML = convert_to_time_format(number_of_days[97]);
const day96Time = document.getElementById('day96').innerHTML = convert_to_time_format(number_of_days[98]);
const day97Time = document.getElementById('day97').innerHTML = convert_to_time_format(number_of_days[99]);
const day98Time = document.getElementById('day98').innerHTML = convert_to_time_format(number_of_days[100]);
const day99Time = document.getElementById('day99').innerHTML = convert_to_time_format(number_of_days[101]);
const day100Time = document.getElementById('day100').innerHTML = convert_to_time_format(number_of_days[102]);
const day101Time = document.getElementById('day101').innerHTML = convert_to_time_format(number_of_days[103]);
const day102Time = document.getElementById('day102').innerHTML = convert_to_time_format(number_of_days[104]);
const day103Time = document.getElementById('day103').innerHTML = convert_to_time_format(number_of_days[105]);
const day104Time = document.getElementById('day104').innerHTML = convert_to_time_format(number_of_days[106]);
const day105Time = document.getElementById('day105').innerHTML = convert_to_time_format(number_of_days[107]);
const day106Time = document.getElementById('day106').innerHTML = convert_to_time_format(number_of_days[108]);
const day107Time = document.getElementById('day107').innerHTML = convert_to_time_format(number_of_days[109]);
const day108Time = document.getElementById('day108').innerHTML = convert_to_time_format(number_of_days[110]);
const day109Time = document.getElementById('day109').innerHTML = convert_to_time_format(number_of_days[111]);
const day110Time = document.getElementById('day110').innerHTML = convert_to_time_format(number_of_days[112]);
const day111Time = document.getElementById('day111').innerHTML = convert_to_time_format(number_of_days[113]);

function totalHoursInStudy(){
    
    let total_study_time = 0;
    for (let count = 0; count < number_of_days.length; count ++){
        total_study_time +=number_of_days[count];
    }
    return total_study_time;
}

let total_time = convert_to_time_format(totalHoursInStudy());
const totaStudyHours = document.getElementById('studytime').innerHTML = total_time;

