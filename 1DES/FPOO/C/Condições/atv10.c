#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	int a,b,c;
	float media;
	//entrada
	printf("Digite as 3 m�dias do aluno:\n");
	scanf("%d",&a);
	scanf("%d",&b);
	scanf("%d",&c);
	media = (a + b + c ) / 3;
	printf("Sua m�dia resultou em: %.1f \n",media);
	//processamento e sa�da
	if(media >= 6){ 
		printf("Aluno aprovado");
	}else if(media >= 4){
		printf("Aluno de recupera��o");
	}else if(media < 4){
		printf("Aluno reprovado");
	}
}
