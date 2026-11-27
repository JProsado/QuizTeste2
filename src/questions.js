export const questions = [
  {
    topic: "Variáveis",
    prompt: "Qual palavra-chave declara uma variável que pode receber outro valor?",
    code: "let pontos = 3;\npontos = 4;",
    options: ["const", "let", "static", "final"],
    answer: 1,
    explanation:
      "Use let quando o valor precisa mudar. Uma variável declarada com const não pode receber uma nova atribuição.",
  },
  {
    topic: "Tipos de dados",
    prompt: 'Qual é o resultado de typeof "2026"?',
    options: ["number", "boolean", "string", "object"],
    answer: 2,
    explanation:
      'O conteúdo está entre aspas, então é um texto. O operador typeof retorna "string".',
  },
  {
    topic: "Condicionais",
    prompt: "O que será exibido quando nota for igual a 8?",
    code: 'if (nota >= 7) {\n  console.log("Aprovado");\n} else {\n  console.log("Revisar");\n}',
    options: ["Revisar", "Aprovado", "Nada será exibido", "O código dará erro"],
    answer: 1,
    explanation:
      "Como 8 é maior ou igual a 7, a condição é verdadeira e o primeiro bloco é executado.",
  },
  {
    topic: "Laços de repetição",
    prompt: "Quantas vezes o laço abaixo executa seu bloco?",
    code: "for (let i = 0; i < 4; i++) {\n  console.log(i);\n}",
    options: ["3 vezes", "4 vezes", "5 vezes", "Infinitamente"],
    answer: 1,
    explanation:
      "A variável i assume os valores 0, 1, 2 e 3. Quando chega a 4, a condição i < 4 deixa de ser verdadeira.",
  },
  {
    topic: "Arrays",
    prompt: "Qual método adiciona um item ao final do array?",
    code: 'const linguagens = ["HTML", "CSS"];',
    options: ["shift()", "pop()", "push()", "join()"],
    answer: 2,
    explanation:
      "push() adiciona um ou mais itens ao final do array. pop() remove o último item.",
  },
  {
    topic: "Funções",
    prompt: "O que a instrução return faz dentro de uma função?",
    options: [
      "Repete a função automaticamente",
      "Encerra a função e pode devolver um valor",
      "Exibe um valor na página",
      "Declara uma variável global",
    ],
    answer: 1,
    explanation:
      "return encerra a execução da função e entrega o valor de volta para o código que a chamou.",
  },
  {
    topic: "Operadores",
    prompt: "Qual operador compara valor e tipo ao mesmo tempo?",
    options: ["=", "==", "===", "!="],
    answer: 2,
    explanation:
      "O operador === verifica igualdade estrita: compara o valor sem converter os tipos.",
  },
  {
    topic: "Objetos",
    prompt: "Como acessar a propriedade cidade deste objeto?",
    code: 'const aluno = { cidade: "Recife" };',
    options: ["aluno->cidade", "aluno.cidade", "aluno[cidade]", "cidade.aluno"],
    answer: 1,
    explanation:
      "A notação com ponto, aluno.cidade, acessa a propriedade cidade do objeto aluno.",
  },
];
