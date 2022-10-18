#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int a;
  printf("Enter age ");
  scanf("%d",&a);

  if (a < 18) {
    printf("You Are Kid");
  } else {
    printf("You Are A Man");
  }
  return EXIT_SUCCESS;
}
