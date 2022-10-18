#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int num1,num2,choice,result;

  printf("Enter 2 number ");
  scanf("%d%d",&num1,&num2);

  printf("\nPlease select a choice. \n1 - Addition \n2 - Subtraction \n3 - Multiplication \n4 - Division\n");
  scanf("%d",&choice);

  if (choice == 1) {
    result = num1 + num2;
    printf("Result : %d",result);
  } else if (choice == 2) {
    result = num1 - num2;
    printf("Result : %d",result);
  } else if (choice == 3) {
    result = num1 * num2;
    printf("Result : %d",result);
  } else if (choice == 4) {
    result = num1 / num2;
    printf("Result : %d",result);
  } else {
    printf("Please select vaild number.");
  }

  return EXIT_SUCCESS;
}
