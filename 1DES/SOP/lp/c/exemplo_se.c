#include<stdio.h>
#include<locale.h>
//CONFIGURA��ES VARI�VEIS//
int main (){
	setlocale(LC_ALL,"");
	int cor;
	//ENTRADA//
	printf("Digite a cor do sem�foro \n[1.verde   ] \n[2.amarelo ] \n[3.vermelho] \n");
	scanf("%d",&cor);
	
	//PROCESSAMENTO
	switch(cor){
		case 1:
			printf("Voc� escolheu verde, portanto pode ir\n");
		break;
		case 2:
			printf("Voc� escolheu amarelo, portando fique atento\n");
			break;
		case 3:
			printf("Voc� escolheu vermelho, portanto espere");
			break;
		default:
			printf("Cor inv�lida \n");
	}
	printf("Fim");
	//SA�DA//
}
