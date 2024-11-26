/* eslint-disable @typescript-eslint/no-explicit-any */
import HomePage from "../components/HomePage";
import LoseGamePage from "../components/LoseGamePage";
import QuestionPage from "../components/QuestionPage";
import WinGamePage from "../components/WinGamePage";


export const routePathsAndElements = [
  {path: '/', element: <HomePage />},
  {path: '/questions', element: 
    <QuestionPage />
  },
  { path: '/lose_game', element: <LoseGamePage />},
  {path: '/win_game', element: <WinGamePage />}
]

// Função utilitária para embaralhar um array
function shuffleArray(array: any) {
  return array.sort(() => Math.random() - 0.5);
}

// Categorias das perguntas com todas as que foram enviadas
const easyQuestions = [
  { title: "Qual desses algoritmo pode ser utilizado para encontrar um valor X em um array ordenado?", tip: "Faz diversas buscas e divide o range pela metade.", correctAnswer: "D" },
  { title: "Qual o nome do mascote do brute?", tip: "Ele é um dinossauro vermelho.", correctAnswer: "A" },
  { title: 'Qual o tipo de estrutura de dados que segue o princípio "First In, First Out"?', tip: 'A tradução de “First In, First Out” é “Primeiro a entrar, Primeiro a sair”.', correctAnswer: "C" },
  { title: "Qual estrutura de dados é usada para armazenar pares de chave-valor?", tip: "Pode ser chamado de array associativo.", correctAnswer: "C" },
  { title: "Em um array de tamanho 5, qual é o índice do último elemento?", tip: "Lembre-se da indexação padrão.", correctAnswer: "A" },
  { title: "Em um grafo não direcionado, como se chama uma sequência de arestas que conecta dois vértices?", tip: "Esse é o termo usado para a sequência que conecta dois pontos.", correctAnswer: "A" },
  { title: "Qual o nome da técnica que consiste em resolver problemas menores e combinar as soluções?", tip: "Essa técnica é famosa pela criação de tabelas para evitar cálculos repetidos.", correctAnswer: "B" },
  { title: "O que significa O(1) em análise de complexidade?", tip: "O tempo de execução não depende do tamanho da entrada.", correctAnswer: "A" },
  { title: "Em uma árvore binária, qual o máximo de filhos que um nó pode ter?", tip: "O nome “binária” já indica o número máximo de filhos.", correctAnswer: "B" },
  { title: "Qual o tipo de busca que explora completamente um nível antes de passar para o próximo?", tip: "Essa busca é ideal para encontrar caminhos mínimos em grafos não ponderados.", correctAnswer: "C" },
];

const mediumQuestions = [
  { title: "Qual a complexidade algorítmica na notação Big O do algoritmo BFS tal que N é a quantidade de nodos e M é a quantidade de arestas?", tip: "Este algoritmo tem complexidade linear no número de arestas e vértices.", correctAnswer: "A" },
  { title: "Dentro dos vereditos abaixo, qual pode estar vinculado com um erro de acesso indevido à memória (OUT OF BOUNDS)?", tip: "Este erro ocorre durante a execução do código.", correctAnswer: "B" },
  { title: "Em uma árvore binária balanceada com N nodos, qual é a altura máxima da árvore?", tip: "Árvores balanceadas minimizam a altura para otimizar buscas.", correctAnswer: "A" },
  { title: "Qual estrutura de dados é utilizada para implementar um algoritmo de Dijkstra com eficiência?", tip: "Esta estrutura é ótima para encontrar o menor elemento rapidamente.", correctAnswer: "B" },
  { title: "Qual o propósito do algoritmo Floyd-Warshall em grafos?", tip: "É um algoritmo de 'all-pairs shortest path'.", correctAnswer: "B" },
  { title: "Qual é o nome da técnica que reduz o tempo de computação ao dividir problemas grandes em menores?", tip: "Merge Sort e Quick Sort usam essa técnica.", correctAnswer: "B" },
  { title: "Qual técnica é utilizada para resolver problemas de busca de padrão, como procurar uma substring em uma string?", tip: "Esse algoritmo usa o conceito de prefixos e sufixos.", correctAnswer: "B" },
  { title: "Em grafos e árvores, o que significa a sigla LCA?", tip: "Este termo se refere ao ancestral mais próximo entre dois nós em uma árvore ou grafo.", correctAnswer: "C" },
  { title: "Dado um grafo não-direcionado com N vértices e M arestas, qual estrutura de dados é mais eficiente para armazená-lo se M for muito maior que N?", tip: "Essa estrutura é mais eficiente em memória para grafos esparsos.", correctAnswer: "A" },
  { title: 'Qual das técnicas abaixo é mais eficiente para resolver um problema de "Menor Caminho" em um grafo com peso uniforme?', tip: "Se os pesos são uniformes, você não precisa de uma fila de prioridade.", correctAnswer: "B" },
];

const hardQuestions = [
  { title: "Dado um grafo não-direcionado com N vértices e M arestas, qual estrutura de dados é mais eficiente para armazená-lo se M for muito maior que N?", tip: "Essa estrutura é mais eficiente em memória para grafos esparsos.", correctAnswer: "A" },
  { title: "Em um grafo, qual o nome do conjunto de arestas que permite que todos os vértices permaneçam conectados com o menor custo?", tip: "Este conjunto conecta todos os vértices sem formar ciclos e com o menor custo total possível.", correctAnswer: "A" },
  { title: 'Qual das alternativas descreve corretamente a técnica de "Lazy Propagation" em uma Segment Tree?', tip: "Essa técnica adia as atualizações até que sejam realmente necessárias, evitando operações repetitivas em intervalos que ainda não foram consultados.", correctAnswer: "B" },
  { title: "Qual estrutura de dados permite armazenar intervalos e realizar consultas em O(log N)?", tip: "Essa estrutura é frequentemente usada para consultas de faixa.", correctAnswer: "B" },
  { title: "Em um problema de mochila 0/1, qual técnica de programação é geralmente usada para resolver o problema?", tip: "A técnica armazena subproblemas em uma tabela.", correctAnswer: "B" },
  { title: "Qual algoritmo é ideal para encontrar componentes fortemente conectados em um grafo dirigido?", tip: "Esse algoritmo é eficiente para dividir o grafo em partes onde cada vértice é acessível a partir de qualquer outro vértice do mesmo componente.", correctAnswer: "B" },
  { title: "Em uma árvore segmentada, qual é a complexidade de tempo para atualizar um único elemento?", tip: "É a mesma complexidade que as outras operações.", correctAnswer: "A" },
  { title: "Qual algoritmo é usado para calcular o subarray de soma máxima em tempo linear?", tip: "Esse algoritmo percorre o array uma vez e mantém o controle da maior soma de subarray até o momento.", correctAnswer: "B" },
  { title: "O algoritmo de Aho-Corasick é utilizado para:", tip: "Esse algoritmo é útil para buscas de múltiplos padrões simultaneamente em um texto.", correctAnswer: "B" },
  { title: "Em um grafo com pesos negativos, qual algoritmo encontra o menor caminho entre dois vértices sem ciclos negativos?", tip: "Esse algoritmo é capaz de lidar com arestas de peso negativo e verifica se há ciclos negativos.", correctAnswer: "C" },
];

const impossibleQuestion = [
  { title: "Onde vai o J em Dijkstra?", tip: "djijsktra", correctAnswer: "B" },
];

const easyAnswers = [
  [
    { description: "Binary Lifting", value: "A" },
    { description: "Breadth-First Search", value: "B" },
    { description: "Programação Dinâmica", value: "C" },
    { description: "Busca Binária", value: "D" },
  ],
  [
    { description: "WA", value: "A" },
    { description: "AC", value: "B" },
    { description: "Dinossauro Brute", value: "C" },
    { description: "Luciana Rita Guedes Filho", value: "D" },
  ],
  [
    { description: "Pilha", value: "A" },
    { description: "Árvore", value: "B" },
    { description: "Fila", value: "C" },
    { description: "Grafo", value: "D" },
  ],
  [
    { description: "Array", value: "A" },
    { description: "Lista ligada", value: "B" },
    { description: "Dicionário/Map", value: "C" },
    { description: "HLD", value: "D" },
  ],
  [
    { description: "4", value: "A" },
    { description: "5", value: "B" },
    { description: "-1", value: "C" },
    { description: "Depende dos valores", value: "D" },
  ],
  [
    { description: "Caminho", value: "A" },
    { description: "Ciclo", value: "B" },
    { description: "Nó", value: "C" },
    { description: "Componente", value: "D" },
  ],
  [
    { description: "Busca Binária", value: "A" },
    { description: "Programação Dinâmica", value: "B" },
    { description: "Algoritmo Guloso", value: "C" },
    { description: "Backtracking", value: "D" },
  ],
  [
    { description: "Complexidade constante", value: "A" },
    { description: "Complexidade linear", value: "B" },
    { description: "Complexidade quadrática", value: "C" },
    { description: "Complexidade exponencial", value: "D" },
  ],
  [
    { description: "1", value: "A" },
    { description: "2", value: "B" },
    { description: "3", value: "C" },
    { description: "4", value: "D" },
  ],
  [
    { description: "Busca em Profundidade (DFS)", value: "A" },
    { description: "Busca Binária", value: "B" },
    { description: "Busca em Largura (BFS)", value: "C" },
    { description: "Busca Linear", value: "D" },
  ],
];


const mediumAnswers = [
  [
    { description: "O(N + M)", value: "A" },
    { description: "O(N * M)", value: "B" },
    { description: "O(N)", value: "C" },
    { description: "O(N² * M²)", value: "D" },
  ],
  [
    { description: "Wrong Answer", value: "A" },
    { description: "Runtime Error", value: "B" },
    { description: "Time Limit Exceeded", value: "C" },
    { description: "Compilation Error", value: "D" },
  ],
  [
    { description: "O(log N)", value: "A" },
    { description: "O(N)", value: "B" },
    { description: "O(N log N)", value: "C" },
    { description: "O(N²)", value: "D" },
  ],
  [
    { description: "Fila", value: "A" },
    { description: "Fila de Prioridade (Heap)", value: "B" },
    { description: "Array", value: "C" },
    { description: "Pilha", value: "D" },
  ],
  [
    { description: "Encontrar ciclos", value: "A" },
    { description: "Calcular o caminho mínimo entre todos os pares de vértices", value: "B" },
    { description: "Verificar a conectividade do grafo", value: "C" },
    { description: "Encontrar a árvore geradora mínima", value: "D" },
  ],
  [
    { description: "Programação Dinâmica", value: "A" },
    { description: "Divisão e Conquista", value: "B" },
    { description: "Algoritmo Guloso", value: "C" },
    { description: "Busca em Largura", value: "D" },
  ],
  [
    { description: "Algoritmo de Floyd-Warshall", value: "A" },
    { description: "Algoritmo de Knuth-Morris-Pratt (KMP)", value: "B" },
    { description: "Busca Binária", value: "C" },
    { description: "Algoritmo Guloso", value: "D" },
  ],
  [
    { description: "Last Common Ancestor", value: "A" },
    { description: "Least Connected Arc", value: "B" },
    { description: "Lowest Common Ancestor", value: "C" },
    { description: "Longest Connected Ancestry", value: "D" },
  ],
  [
    { description: "Lista de Adjacência", value: "A" },
    { description: "Matriz de Adjacência", value: "B" },
    { description: "Heap", value: "C" },
    { description: "Fila", value: "D" },
  ],
  [
    { description: "Busca Binária", value: "A" },
    { description: "Busca em Largura (BFS)", value: "B" },
    { description: "Algoritmo de Dijkstra", value: "C" },
    { description: "Algoritmo de Kruskal", value: "D" },
  ],
];


const hardAnswers = [
  [
    { description: "Lista de Adjacência", value: "A" },
    { description: "Matriz de Adjacência", value: "B" },
    { description: "Heap", value: "C" },
    { description: "Fila", value: "D" },
  ],
  [
    { description: "Árvore Geradora Mínima (MST)", value: "A" },
    { description: "Caminho Mínimo", value: "B" },
    { description: "Ciclo Euleriano", value: "C" },
    { description: "Subgrafo", value: "D" },
  ],
  [
    { description: "É uma técnica de balanceamento de árvore", value: "A" },
    { description: "Propaga atualizações de forma preguiçosa", value: "B" },
    { description: "Implementa uma fila de prioridade para atualizações", value: "C" },
    { description: "Divide o problema em subproblemas menores", value: "D" },
  ],
  [
    { description: "Heap", value: "A" },
    { description: "Árvore de Segmento", value: "B" },
    { description: "Lista Encadeada", value: "C" },
    { description: "Árvore AVL", value: "D" },
  ],
  [
    { description: "Algoritmo Guloso", value: "A" },
    { description: "Programação Dinâmica", value: "B" },
    { description: "Divisão e Conquista", value: "C" },
    { description: "Backtracking", value: "D" },
  ],
  [
    { description: "Dijkstra", value: "A" },
    { description: "Kosaraju", value: "B" },
    { description: "Kruskal", value: "C" },
    { description: "Prim", value: "D" },
  ],
  [
    { description: "O(log N)", value: "A" },
    { description: "O(N)", value: "B" },
    { description: "O(N log N)", value: "C" },
    { description: "O(1)", value: "D" },
  ],
  [
    { description: "Algoritmo de Dijkstra", value: "A" },
    { description: "Algoritmo de Kadane", value: "B" },
    { description: "Programação Dinâmica", value: "C" },
    { description: "Algoritmo de Floyd-Warshall", value: "D" },
  ],
  [
    { description: "Ordenar strings lexicograficamente", value: "A" },
    { description: "Encontrar substrings múltiplas em um texto de forma eficiente", value: "B" },
    { description: "Comprimir dados em uma árvore de Huffman", value: "C" },
    { description: "Calcular o menor caminho em grafos", value: "D" },
  ],
  [
    { description: "BFS", value: "A" },
    { description: "Algoritmo de Dijkstra", value: "B" },
    { description: "Bellman-Ford", value: "C" },
    { description: "Kruskal", value: "D" },
  ],
];


const impossibleAnswer = [
  [
    { description: "dikJstra", value: "A" },
    { description: "diJkstra", value: "B" },
    { description: "djijkstra", value: "C" },
    { description: "djikjstra", value: "D" },
  ],
];


// Função para sortear perguntas e respostas
function selectQuestionsAndAnswers(questions: any, answers: any, count: number) {
  const shuffledIndices = shuffleArray(questions.map((_: any, index: any) => index));
  const selectedIndices = shuffledIndices.slice(0, count);
  return selectedIndices.map((index: number) => ({ question: questions[index], answers: answers[index] }));
}

// Sorteio
const easy = selectQuestionsAndAnswers(easyQuestions, easyAnswers, 3);
const medium = selectQuestionsAndAnswers(mediumQuestions, mediumAnswers, 3);
const hard = selectQuestionsAndAnswers(hardQuestions, hardAnswers, 3);
const impossible = [{ question: impossibleQuestion[0], answers: impossibleAnswer[0] }];

// Perguntas e respostas finais
const gameData = [...easy, ...medium, ...hard, ...impossible];

export const questions = gameData.map((data) => data.question);
export const answers = gameData.map((data) => data.answers);