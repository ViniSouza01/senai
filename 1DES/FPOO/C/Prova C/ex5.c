#include<stdio.h>
#include<locale.h>
int main() {
	setlocale(LC_ALL,"");
	float raio, altura, area, volume;
	
	//input
	printf("Ola, digite o raio e a aultura em cm do cilindro:\n");
	scanf("%f%f", &raio, &altura);
	
	//processing
	area = altura * (2 * 3.14 * raio);
	volume = 3.14 * (raio * raio) * altura;
	printf("A area do cilindro � %.0fcm� e o volume � %.1fcm�", area, volume);
	
	return 0;
}
