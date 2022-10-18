#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int num1;
  float num2, sum;

  scanf("%d%f",&num1,&num2);

  sum = num1+num2;

  printf("Result ; %f",sum);

  return EXIT_SUCCESS;
}
