#include <stdio.h>
#include <stdlib.h>

int main(void) {

  int i, number;

  printf("Type a number to print... : ");
  scanf("%d", &number);

  for (i = 1; i < number; i++) {
    printf("%d\n", i);
  };

  return EXIT_SUCCESS;
}
