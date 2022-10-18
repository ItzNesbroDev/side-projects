#include <stdio.h>
#include <stdlib.h>

int main(void) {
  printf("Enter 2 numbers to swap. ");

  int a, b, temp;
  scanf("%d%d",&a, &b);

  printf("Before swap : a: %d b: %d",a,b);

  temp = a;
  a = b;
  b = temp;

  printf("\n After swap a: %d b: %d",a,b);

  return EXIT_SUCCESS;
}
