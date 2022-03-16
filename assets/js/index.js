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


const buscarReceita = (busca) => {
  const resultados = listaDeReceitas.filter(
    (receita) =>
    receita.titulo.toLowerCase().indexOf(busca.toLowerCase()) != -1
  );

  if (!resultados.length) {
    console.log("Não foi encontrado receitas");
  }

  return console.log(resultados);
};
// buscarReceita("ta")


const atualizarReceita = (id, objReceita) => {
  let receitaAtualizada = false;
  listaDeReceitas.forEach((receita) => {
    if (receita.id != id) {
      return
    }

    if (objReceita.titulo) receita.titulo = objReceita.titulo;
    if (objReceita.dificuldade) receita.dificuldade = objReceita.dificuldade;
    if (objReceita.ingredientes) receita.ingredientes = objReceita.ingredientes;
    if (objReceita.preparo) receita.preparo = objReceita.preparo;
    if (objReceita.link) receita.link = objReceita.link;
    if (objReceita.vegano) receita.vegano = objReceita.vegano;
    receitaAtualizada = true;
  });

  if (!receitaAtualizada) {
    return console.log("Não existe receita cadastrada com o ID", id);
  }
  console.log(`Receita atualizada com sucesso! `);
}
// //id, titulo, dificuldade, ingredientes:[], preparo, link, vegano:bol
// atualizarReceita(
//   2, {
//     titulo: "Soja Cozida",
//     ingredientes: ["soja", "batata", "cebola", "tomate"],
//     preparo: "mexe mexe mexe, mexe mexe mexe, mexe...",
//     vegano: true
//   }
// );

// exibirReceitas();