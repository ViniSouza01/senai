/*Desenvolva um programa que leia o sal�rio de um funcion�rio e o n�mero de filhos.
Se o sal�rio for menor que 2000 o funcion�rio receber� um sal�rio fam�lia de 45 reais por filho.
Apresente o sal�rio final*/
#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	char name[20];
	float salario, final;
	int filhos;
	printf("Digite o seu sal�rio:\n");
	scanf("%f",&salario);
	printf("Digite quantos filhos voc� tem:\n");
	scanf("%d",&filhos);
	
	// calculate the wage
	if(salario < 2000) {
		final = filhos * 45;
		printf("Seu sal�rio fam�lia � de: %.2f",final);
	} else printf("Voc� n�o tem direito ao sal�rio fam�lia");
}
