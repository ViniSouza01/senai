#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	int a,b,c;
	printf("Digite um n�mero inteiro: ");
	scanf("%d",&a);
	printf("Digite outro n�mero inteiro: ");
	scanf("%d",&b);
	c = a - b;
	printf("O resultado da opera��o �: %d", c);
}
