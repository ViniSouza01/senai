// fa�a um programa que leia 10 valores inteiros em qualquer ordem e os classifique em ordem crescente
#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	int v[10]; //vetores a ser classificados
	int i,j; //contadores
	int aux; //auxiliar para fazer trocas
	
	for(i = 0; i < 10; i++){
		printf("Digite o %d� valor inteiro: ",i);
		scanf("%d",&v[i]);
	}
	//processamento - algoritmo de classifica��o e troca
	for(i = 0; i < 10; i++){
		for(j = i+1; j < 10; j++){
			if(v[i] > v[j]){
				aux = v[i];
				v[i] = v[j];
				v[j] = aux;
			}
		}
	}
	//sa�da com vetor ordenado
	for(i = 0; i < 10; i++){
		printf("[%d]:%d\n",i+1,v[i]);
	}
}
