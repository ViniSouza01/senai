/*Desenvolva um programa que leia o pre�o de um produto e se o pre�o for maior que R$1000, aplique um desconto de 8%.*/
#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	float preco;
	//entrada//
	printf("Digite o pre�o do produto:\n");
	scanf("%f",&preco);
	if(preco > 1000){
		preco = preco - (preco * 0.08);	
	}
	printf("O pre�o final do produto � de:\nR$%.2f",preco);
}
