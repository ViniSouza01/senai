#include<stdio.h>
#include<time.h>
#include<stdlib.h>
int sorteados(int i, int j, int vet[10], int igual);
int main(){
	int i;
	for(i = 0; i < 10; i++) printf("%d\n",vet[i]);
}



int sorteados (int i, int j, int vet[10], int igual){
	srand(time(NULL));
	i = 0;
    do{ // fa�a
        vet[i] = rand() % 10; // sorteia um n�mero
        igual = 0;
        for(j = 0; j < i; j++){ // percorre a parte do vetor j� preenchida
            if(vet[j] == vet[i])
                igual = 1; // n�mero repetido
        }

        if(igual == 0) // significa que o elemento n�o se repetiu
            i++;
    }while(i < 10); // enquanto n�o for sorteado 25 n�meros diferentes

    for(i = 0; i < 10; i++){
        printf("%d ", vet[i]);
    }
    printf("\n\n");

    return vet[10];
}
