/*Um programa que leia a idade de uma pessoa, o sexo (m ou f) e a �ltima vez que ela doou sangue
fale para ela se ela poder� doar sangue novamente ou n�o. Permiss�o para doa��o de sangue: entre 16
e 69 anos; homens: podem doar a cada 60 dias; mulheres: podem doar a cada 90 dias.*/
#include<stdio.h>
#include<locale.h>
int idade(int idade);
int sexo(int sexo);
int dias(int dias);
int main(){
	setlocale(LC_ALL,"");
	int id, temp, sex, continuar;
	char nome[15];
	continuar = 1;
	while (continuar == 1){
		printf("Ol� usu�rio, por favor, digite seu nome abaixo:\n");
		scanf("%s",&nome);
		id = idade(idade);
		sex = sexo(sexo);
		temp = dias(dias);
		if(sex == 1){
			if(temp >= 0 && temp < 60) printf("%s, voc� n�o pode doar sangue ainda, espera completar 60 dias desde a sua �ltima doa��o.\n",nome);
			else printf("Muito bem %s! Voc� j� pode doar sangue novamente\n",nome);
	}
	if(sex == 2){
		if(temp >= 0 && temp < 90) printf("%s, voc� n�o pode doar sangue ainda, espere completar 90 dias desde a sua �ltima doa��o\n",nome);
		else printf("Muito bem %s! Voc� j� pode doar sangue novamente\n",nome);
	}
	printf("\nDeseja continuar?\n[0. N�o]\n[1. Sim]\n");
	scanf("%d",&continuar);
	while(continuar < 0 || continuar > 1){
		printf("Valor inv�lido, digite novamente:\n[0. N�o]\n[1. Sim]\n");
		scanf("%d",&continuar);
	}
	}
	printf("Programa encerrado.");
}

int idade(int idade) {
	idade = 0;
	printf("\nDigite abaixo a sua idade:\n");
	scanf("%d", &idade);
	if(idade < 16 || idade > 69){
		printf("Segundo o minist�rio da sa�de, a doa��o de sangue s� pode ocorrer entre 16 e 69 anos.\nPrograma encerrado");
		exit(0);
	}else return idade;
}

int sexo(int sexo) {
	sexo = 0;
	while (sexo < 1 || sexo > 2){
	printf("\nDigite o seu sexo abaixo\n[1. Masculino]\n[2. Feminino]\n");
	scanf("%d",&sexo);
	}
}

int dias(dias){
	do{
	printf("\nH� quantos dias voc� doou sangue desde a �ltima vez? (valor aceit�vel somente entre n�meros 0 a 999):\n");
	scanf("%d",&dias);
	}while(dias < 0 || dias > 999);
	return dias;
}
