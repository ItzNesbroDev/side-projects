#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int num1, num2;
  printf("Enter 2 nunbers ");
  scanf("%d%d",&num1, &num2);
  if (num1 > num2) {
    printf("Greatest number is : %d",num1);
  } else {
    printf("Greatest number is : %d",num2);
  }
  return EXIT_SUCCESS;
}
