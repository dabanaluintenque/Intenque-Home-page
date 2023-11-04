
#include <stdio.h>
#include <cs50.h>

int main (void) {

    int starting_size; //= get_int("Start size: ");
    int end_size; // = get_int("End size:" );
     int gain = 3;
    int lose = 4;
    int year = 0;
    
    do {
        starting_size = get_int("Start size:  " );
    }
    while (starting_size < 9);

    do {
        end_size = get_int("End size:  " );
    }
    while (end_size < starting_size);
    

    while( starting_size < end_size) {
        starting_size += (starting_size/ 3) - (starting_size/4); 
        year++;
    }
   printf("Yearsh: %i\n", year);    
}