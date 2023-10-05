// Array de objetos representando alunos
const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Carlos', nota: 7 },
    { nome: 'Ana', nota: 6 },
    { nome: 'Pedro', nota: 9 },
  ];
  
  // Função que retorna alunos com nota maior ou igual a 6
  function alunosAprovados(listaAlunos) {
    return listaAlunos.filter(aluno => aluno.nota >= 6);
  }
  
  // Chamando a função e exibindo o resultado
  const alunosAprovadosArray = alunosAprovados(alunos);
  console.log(alunosAprovadosArray);
  