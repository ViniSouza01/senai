#include<stdio.h>
#include<locale.h>
void decBin(int n);
int main (int aegc, char *argv[]){
	setlocale(LC_ALL,"");
	int num;
	printf("Digite um n�mero inteiro para ser convertido de decimal para bin�rio:\n");
	scanf("%d",&num);
	decBin(num);
	return 0;
}
//fun��o que converte um n�mero inteiro em bin�rio
void decBin(int n){
	int bin = 0;
	do{
		bin = n % 2;
		printf("%d - %d\n",n, bin);
		n = n / 2;
		bin = n % 2;
	}while(n > 1);
	printf("O n�mero %d em bin�rio � %d", n, bin);
}

