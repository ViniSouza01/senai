#include<stdio.h>
#include<locale.h>
int main()
{
	setlocale(LC_ALL,"");
	int p1=-1,p2=-1,p3=-1,p4=-1,p5=-1;
	
	//perguntas
	while(p1<0||p1>1){
		printf("Voc� telefonou para a v�tima?\n[0.N�o]\n[1.Sim]\n");
		scanf("%d",&p1);
	}
	while(p2<0||p2>1){
		printf("Voc� esteve no local do crime?\n[0.N�o]\n[1.Sim]\n");
		scanf("%d",&p2);
	}
	while(p3<0||p3>1){
		printf("Voc� mora perto da v�tima?\n[0.N�o]\n[1.Sim]\n");
		scanf("%d",&p3);
	}
	while(p4<0||p4>1){
		printf("Voc� devia para a v�tima?\n[0.N�o]\n[1.Sim]\n");
		scanf("%d",&p4);
	}
	while(p5<0||p5>1){
		printf("J� trabalhou a v�tima?\n[0.N�o]\n[1.Sim]\n");
		scanf("%d",&p5);
	}
	int res= p1 + p2 + p3 + p4 + p5;
	//condi��o
	if(res < 2){
		printf("Est� liberado");
	}else if(res < 3){
		printf("Suspeito");
	}else if(res < 5){
		printf("C�mplice");
	}else if(res = 5){
	printf("Assassino");
	}
}
