// Utilizando apenas um vetor de tamanho 6, troque os valores de maneira inversa
#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	int vetor[6],i;
	for(i=0;i<6;i++){
		printf("[%d]: ",i);
		scanf("%d",&vetor[i]);
	}
	int aux1, aux2, aux3, aux4, aux5, aux6;	
	aux1 = vetor[0];
	aux2 = vetor[1];
	aux3 = vetor[2];
	aux4 = vetor[3];
	aux5 = vetor[4];
	aux6 = vetor[5];
	vetor[0] = aux6;
	vetor[1] = aux5;
	vetor[2] = aux4;
	vetor[3] = aux3;
	vetor[4] = aux2;
	vetor[5] = aux1;
	//sa�da	
	printf("o resultado dos vetores s�o:\n");
	for(i = 0; i < 6; i++)
		printf("%d ",vetor[i]);
}
