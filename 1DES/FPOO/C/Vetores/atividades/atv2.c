// criar um vetor para o usu�rio preencher com 10 valores e apresentar:
// a soma e m�dia dos pares
// a soma e m�dia dos �mpares
// o total de n�meros pares
// o total de n�meros �mpares
#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	float i,media1,media2,i2;
	int num,resultado1,resultado2;
	int par[10], impar[10], pares = 0, impares = 0;
	
	//Escaneando os n�meros digitados
	do{
		printf("Digite um numero para entrar no vetor: ");
		scanf("%d",&num);
			if(num % 2 == 0){
				par[pares] = num;
				pares++;
				i = i + num;
			}else{
				impar[impares] = num;
				impares++;
				i2 = i2 + num;
	}
}while(pares < 10 && impares < 10);
	//
	media1 = i / pares;
	media2 = i2 / impares;
	
	//soma
	printf("\nSoma de todos os n�meros pares: %.0f\n",i);
	printf("Soma de todos os n�meros impares: %.0f\n",i2);
	printf("\n\n");
	
	//m�dia
	printf("M�dia dos n�meros pares: %.2f\n",media1);
	printf("M�dia dos n�meros �mpares: %.2f\n",media2);
	printf("\n\n");
	
	//quantidade
	printf("Quantidade de n�meros pares: %d\n",pares);
	printf("Quantidade de n�meros impares: %d",impares);
}
