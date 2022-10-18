#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int a;
  float b;
  char ce;

  printf("Please Enter A Number: ");
  scanf("%d",&a);
  printf("You Have Entered: %d", a);

  printf("Please Enter A Float Number: ");
  scanf("%f", &b);
  printf("%f",b);

  printf("Please enter characters.");
  scanf("%c",&ce);
  printf("%c",ce);

  return EXIT_SUCCESS;
}
