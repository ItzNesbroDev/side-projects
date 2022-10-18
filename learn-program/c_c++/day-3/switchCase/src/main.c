#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int choice;
  printf("Select The Food. \n\n1 - Food 1 \n2 - Food 2 \n3 - Food 3");
  scanf("%d",&choice);

  switch (choice) {
    case 1:
      printf("You Selected Food 1");
      break;
    case 2:
      printf("You Selected Food 2");
      break;
    case 3:
      printf("You Selected Food 3");
      break;
    default:
      printf("You Selcted Item No On Food List");
      break;
  }
  return EXIT_SUCCESS;
}
