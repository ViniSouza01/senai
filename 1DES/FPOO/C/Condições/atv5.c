#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	char name[20];
	float preco;
	
	printf("Digite o nome da mercadoria (m�x 20 caracteres sem espa�os)\n");
	scanf("%s",&name);
	printf("Digite o pre�o da mercadoria:\n");
	scanf("%f",&preco);
	
	if (preco < 1000){
		preco = preco + preco * 0.05;
	}else{
		preco = preco + preco * 0.07;
	}
	printf("O pre�o do seu (sua) %s � de: %.2f",name,preco);
}
