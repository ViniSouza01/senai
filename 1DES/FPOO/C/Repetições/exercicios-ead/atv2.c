#include<stdio.h>
#include<locale.h>
int main(){
	//informa��es
	setlocale(LC_ALL,"");
	float hora, numero, salario, total;
	float inss, ir, sindicato;
	printf("Digite o valor que voc� ganha por hora:\n");
	scanf("%f",&hora);
	printf("Digite quantas horas voc� trabalha no m�s:\n");
	scanf("%f",&numero);
	salario = hora * numero;
	//processamento
	inss = salario * 0.08;
	ir = salario * 0.11;
	sindicato = salario * 0.05;
	total = salario - inss - ir - sindicato;
	
	//sa�da
	printf("Seu sal�rio bruto � de: %.2f\n",salario);
	printf("O desconto do Imposto de Renda � de: %.2f\n",ir);
	printf("O desconto do INSS � de: %.2f\n",inss);
	printf("O desconto do sindicato � de: %.2f\n",sindicato);
	printf("O seu sal�rio l�quido � de: %.2f\n",total);
}
