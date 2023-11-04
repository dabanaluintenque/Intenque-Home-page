
// compiler path: clang mario.c -o mario -lcs50

// Author: Dabana Intenque
#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main(void)
{
    long number = get_long("Number: ");
    long lenght = floor(log10(labs(number))) + 1;
    long len = lenght/2;
    long checksum;
    long multiply;
    long last_number;
    long result;
    long total;


    for (int i = 0; i < len; i ++){
        number = number/10;
        last_number = (number % 10);
        multiply = (last_number * 2);
        //printf("checksum %li \n", (last_number));
        if (multiply > 9){
            long second = (multiply / 10);
            long first = (multiply % 10);
            //printf("> 9: %li \n", first);
            //printf("> 9: %li \n", second);
            multiply = first + second;
            //printf("m > 9: %li \n", multiply );
        }
        result += multiply;
        number = number/10;     
    }
    
    for (int i = 0; i < len ; i ++) {

        long l = number % 10;
        printf("n: %li \n", l);
        number = number /10;
        number = number /10;

        //result +=l;
    }
    printf("checksum: %li \n", result);
    printf("\n");
}

// 4003600000000014

long 

























/*#include <cs50.h>
#include <stdio.h>
int get_size(void);
void print_grid(int size);

int main(void) {

    // Get size of grip
    int n = get_size();

    // Print grid of bricks
    print_grid(n);
}

int get_size(void) {

    int n;
    do {
        n = get_int("Size: ");
    }
    while(n < 1);

    return n;
}

void print_grid(int size) {

    for (int i = 0; i < size; i++){
        for (int j = 0; j < size; j ++){
            printf("#");
        }
        printf("\n");
    }
}
*/
