#include<stdio.h>
#include<locale.h>
int main(){
	setlocale(LC_ALL,"");
	int i = 0;
	//contar at� 10 com o la�o WHILE
	while(i <= 10){
		printf("%d\n",i);
		i+=2;
	}
}
