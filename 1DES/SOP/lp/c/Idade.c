#include<stdio.h>
#include<locale.h>
int main (){
	setlocale(LC_ALL,"");
	char nome[10];
	int idade;
	//Entradas//
	printf("Digite o seu nome:\n");
	scanf("%s",&nome);
	printf("Digite a sua idade:\n");
	scanf("%d",&idade);
	
	//Processamento//
	if(idade < 10){
		printf("Ol� %s, voc� � uma crian�a \n",nome);
	}else if(idade < 19){
		printf("Ol� %s, voc� um adolescente \n",nome);
	}else if(idade < 24){
		printf("Ol� %s, voc� � jovem \n",nome);
	}else if(idade < 45){
		printf("Ol� %s, voc� � adulto \n",nome);
	}else if(idade < 60){
		printf("Ol� %s, voc� � de meia idade \n",nome);
	}else if(idade = 60){
		printf("Ol� %s, voc� � idoso \n",nome);
	}
	printf("Segundo o minist�rio da sa�de");
	
}
