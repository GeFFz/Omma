const empresa = "Sistema Omma";
console.log(`Seja bem vindo ao ${empresa}`);

const listaDeReceitas = [{
  id: 1,
  titulo: "Cachorro Quente",
  dificuldade: "simples",
  ingredientes: ["1 pao de leite", "1 Salsicha", "Maionese"],
  preparo: "faça isso e depois isso e ...",
  link: "youtube.com",
  vegano: false,
}, ];


const cadastrarReceita = (id, titulo, dificuldade, ingredientes, preparo, link, vegano) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano,
  };

  listaDeReceitas.push(novaReceita);

  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
}
cadastrarReceita(
  "RECEITA1",
  "Bata Frita",
  "Simples",
  ["batata", "oleo"],
  "sdjkfbsdjh kfjsbnfjsb fjsn'fk",
  "youtube.com",
  true
);
cadastrarReceita(
  2,
  "Pudim",
  "Simples",
  ["leite condenado", "leite liquido", "ovos", "açúcar"],
  "Esquente o leite, depois misture com ovos e por ultimo adicione açúcar...",
  "https://www.youtube.com/watch?v=XAU1wx2PPSE",
  false
);


const exibirReceitas = () => {
  listaDeReceitas.forEach((receita) => {
    console.log("--------------------------------");
    console.log("Titulo = " + receita.titulo);

    receita.ingredientes.forEach((ingrediente) => {
      console.log("ingredientes =",ingrediente)
    });

    console.log("É vegano? " + receita.vegano);
    console.log("--------------------------------");
  });
}
// exibirReceitas();


const deletarReceita = (id) => {
  let deletado = 0;
  listaDeReceitas.forEach((receita, index) => {
    if (id === receita.id) {
      listaDeReceitas.splice(index, 1)
      console.log("A receita", receita.titulo, "foi deletada com sucesso.")
      return deletado++;
    }
  });

  if (deletado === 0) {
    return console.log("Receita não encontrada");
  }

}
// console.log(listaDeReceitas);
// deletarReceita("RECEITA1");
// console.log(listaDeReceitas);

const buscarReceita = (busca) => {
  textBusca = ""
  listaDeReceitas.forEach(receita => {
    if (busca in receita.titulo == true ){
      textBusca+=receita.titulo;
    }
  });
  

  console.log(textBusca)
}

buscarReceita("Bata")

