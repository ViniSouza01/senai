#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	int a,b;
	//entradas
	printf("Digite dois n�meros inteiros separados por espa�o ou enter:\n");
	scanf("%d",&a);
	scanf("%d",&b);
	//processamento
	if(a > b){
		printf("O n�mero %d � maior do que %d",a,b);
	}else{
		printf("O n�mero %d � maior do que %d",b,a);
	}
}
