#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	int a,b,c;
	printf("Digite o comprimento a do tri�ngulo:\n");
	scanf("%d",&a);
	printf("Digite o comprimento b do tri�ngulo:\n");
	scanf("%d",&b);
	printf("Digite o lado c do tri�ngulo:\n");
	scanf("%d",&c);
	
	if (a == b && b == c){
		printf("O tri�ngulo � Equil�tero");
	}else if(a != b && b != c && a != c){
		printf("O tri�ngulo � Escaleno");
	}else{
		printf("O tri�ngulo � is�celes");
	}
}
