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
      console.log("ingredientes =", ingrediente)
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


const buscarReceita = (buscar) => {
  console.log("Resultado da busca");
  let itensBuscados = 0;

  listaDeReceitas.forEach((receita) => {
    if (receita.titulo.toLowerCase().includes(buscar.toLowerCase())) {
      console.log("--------------------------------");
      console.log("Titulo = " + receita.titulo);

      receita.ingredientes.forEach((ingrediente) => {
        console.log("ingredientes =", ingrediente);
      });

      console.log("É vegano? " + receita.vegano);
      console.log("--------------------------------");
      itensBuscados++;
    };
  });
  if (itensBuscados === 0) {
    return console.log("Nenhuma receita encontrada.");
  };
}
// buscarReceita("A")


const atualizarReceita = (id, titulo, dificuldade, ingredientes, preparo, link, vegano) => {
  let receitaAtualizada = 0
  listaDeReceitas.forEach(receita => {
    if (id === receita.id) {
      receita.titulo = titulo;
      receita.dificuldade = dificuldade;
      receita.ingredientes = ingredientes;
      receita.preparo = preparo;
      receita.link = link;
      receita.vegano = vegano;
      receitaAtualizada++;
    }
  });

  if (receitaAtualizada === 0) {
    return console.log("Não existe receita cadastrada com o ID", id);
  }
  return console.log(`Receita atualizada com sucesso!\n ID: ${id}\n Titulo atual: ${titulo} `);
}
// atualizarReceita(
//   2,
//   "Soja",
//   "Difícil",
//   ["tomate", "pimentão", "cebola"],
//   "Soja deliciosa bla bla...",
//   "https://www.youtube.com/watch?v=WiLwc7jAs6g",
//   true
// );