#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int P;
  float R, n, SI;

  printf("Enter 3 numbers ");
  scanf("%d%f%f",&P,&R,&n);
  SI = (P*R*n)/100;

  printf("The Sum Is : %f",SI);

  return EXIT_SUCCESS;
}
