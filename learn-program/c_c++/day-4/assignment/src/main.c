#include <stdio.h>
#include <stdlib.h>

int main(void) {
  int n, i;

  printf("Input a number to multiple : ");
  scanf("%d", &n);

  for (i = 1; i <= 10; i++) {
   printf("%d x %d = %d\n", i, n, i * n);
  }
}
