#include<stdio.h>
#include<locale.h>
int main (){
	setlocale(LC_ALL,"");
	int numero1 = 7;
	int numero2 = 5;
	if(numero1 == numero2){
		printf("Os n�meros s�o iguais \n");
	}else{
		printf("Os n�meros s�o diferentes \n");
	}
	
	char nome1[3] = "ana";
	char nome2[3] = "ana";
	
	printf("A compara��o retornou %d",strcmp(nome1,nome2));
}
