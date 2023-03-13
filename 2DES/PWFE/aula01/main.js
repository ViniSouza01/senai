let nomes = ["fulano", "ciclano", "beltrano"]
let search = prompt('Digite um nome:')
for(let i = 0; i <= nomes.length; i++){
   if(nomes[i] == search){
      alert(`O nome está na posição ${i} do vetor`);
      break;
   }
   if(i == nomes.length){
      alert("nome não encontrado");
   }
}