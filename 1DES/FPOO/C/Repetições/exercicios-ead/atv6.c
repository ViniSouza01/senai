#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	int quantia;
	printf("Digite a quantidade de valor que voc� deseja sacar em R$:\n");
	printf("R$");
	scanf("%d",&quantia);
	//explicar quais notas sair�o
	if(quantia >= 100){
		int i=100,qtd1;
		while(i <= quantia){
			i+=100;
			qtd1+=1;
			if(i>i*qtd1&&i<quantia) break;
		}
		printf("A m�quina fornecer� %d notas de 100",qtd1);
	}else if(quantia >= 50){
		int i2=50,qtd2;
		while(i2<=quantia){
			i2+=50;
			qtd2+=1;
		}
		printf("A nota fornecer� %d notas de 50",qtd2);
	}
}
