# Lógica de Programação

## O que é lógica?

* coerência de raciocínio, de ideias
* lógica de programação significa contextualizar a lógica na programação de computadores, buscando a melhor sequência de ações para solucionar um problema

## Metacognição

* "Pensar como você pensa"

## Abstração

* é a habilidade de concentrar nos aspectos essenciais de um contexto ignorando características menos importantes ou acidentais

## Algoritmo

* uma sequência de passos que resolvem um problema

início-dia
  acordei
  levantei da cama
  troquei de roupa
  escovei os dentes
  fui a padaria
  tomei café
  escovei os dentes
  fui ao trabalho
fim-dia

## Pseudocódigo

* é uma forma genérica de se escrever algoritimo, utilizando uma linguagem nativa

## Fluxograma

* é uma ferramenta utilizada para representar graficamente o algoritimo, isto é, a sequência lógica e coerente do fluxo de dados

## Variáveis e constantes

* Variável = é um objeto (uma posição, frequentemente localizada na memória) capaz de reter e representar um valor ou expressão.
* Uma variável é um espaço na memória do computador destinado a um dado que é alterado durante a execução do algoritimo.

### Declaração de variáveis

INÍCIO
DECLARA nota1: número
DECLARA nota2: número
DECLARA nota 3: número
DECLARA nota 4: número
LEIA (nota1)
LEIA (nota2)
LEIA (nota3)
LEIA (nota4)
media=(nota1 + nota2 + nota3 + nota4)/4
IMPRIMIR (media)
FIM

* Tipos de variáeis = 4 tipos (numéricas, caracteres, alfanuméricos ou lógicas)

### O que é uma constante?

* As constantes são valores imutáveis e não alterados durante a vida útil do programa.

## Tomadas de decisão e expressões

### Expressões aritméticas

* São expressões que utilizam operadores aritméticos e funções aritméticas envolvendo constantes e variáveis.

Operadores aritméticos |
--------------|--------|
Soma          |    +   |
Subtração     |    -   | 
Multiplicação |    *   |
Divisão       |    /   |
Potenciação   |    ^   |
Porcentagem   |    %   |     

### Expressões literais

* São expressões com constantes e/ou variáveis que tem como resultado valores literais. Iremos utilizar as expressões literais na atribuição de valor para uma variável constante.

### Expressões relacionais

* São expressões compostas por outras expressões ou variáveis numéricas com operadores relacionais. As expressões relacionais retornam os valores lógicos(verdadeiro/falso).

Símbolo | Nome do Operador | Exemplo |  
--------|------------------|---------|
  `>`   |   Maior que      |  x > y  |
  `>=`  |   Maior ou igual |  x >= y |
   <    |   Menor que      |  x < y  |
   <=   |   Menor ou igual |  x <= y |
   ==   |   Igualdade      |  x == y |
   !=   |   Diferente de   |  x != y |

## Tomadas de decisão

* Quando escrevemos programas geralmente ocorre a necessidade de decidir o que fazer dependendo de alguma condição encontrada durante a execução.

## Concatenação

* Concatenação é um termo usado em computação para designar a operação de unir o conteúdo de duas strings.

* Agrupamento de duas ou mais células que, incluindo fórmulas, textos ou outras informações contida no seu interior, dá origem a único resultado.

## Estrutura de repetição

* Dentro da lógica de programação é uma estrutura que permite executar mais de uma vez o mesmo comando ou conjunto de comandos, de acordo com uma condição ou com um contador.

## Linguaggens de programação

* Linguagem de programação é uma linguagem escrita e formal que específica um conjunto de instruções e regras usadas para gerar programas(software). Um software pode ser desenvolvivdo para rodar em um computador, dispositivo móvel ou em qualquer equipamento que permita sua execução.

* O que é óbvio para você, certamente não é óbvio para uma máquina. E se você quer que a máquina faça algo pra você, você precisa, "falar com ela".

* A função das linguagens de programação é servir de um meio de comunicação entre computadores.

### Baixo nível X Alto nível

## Alto nível

* Essas são aquelas cuja sintaxe se aproxima mais da nossa linguagem e se distanciam mais da linguagem de máquina.

## Baixo nível

* É aquela que se aproxima mais da linguagem de máquina. Essa são as que você precisa ter o conhecimento direto da arquitetura do computador para fazer alguma coisa.

### Compiladas X Interpretadas

## Compiladas

* É uma linguagem de programação em que o código fonte, é executado diretamente pelo sistema operacional ou pelo processador, após ser traduzido por meio de um processo chamado compilação.

## Interpretadas

* É uma linguagem de programação em que o código fonte é executado por um porgrama de computador chamado interpretador, que em seguida é executado pelo sistema operacional ou processador.

## O que é o Portugol?

* É uma pseudolinguagem que permite ao leitor desenvolver algoritmos estruturados em português de forma simples e intuitiva, independentemente de linguagem de programação.

* É uma pseudolinguagem que permite ao programador pensar no problema em si e não no equipamento que irá executar o algoritmo.

### Desvio condicional

#### Se

* É utilizada a palavra reservada `se`, a condição a ser testada deve estar entre parenteses e as intruções que devem ser executadas entre chaves caso o desvio seja verdadeiro.

Exemplo:

```javascript
se (media>=7) {
  escreva("Parabéns! Você foi aprovado!")
}
```

#### Se - Senão

* Agora vamos imaginar que se a condição for falsa um outro conjunto de comandos deve ser executado.

Exemplo:

```javascript
se (media>=7) {
  escreva("Parabéns! Você foi aprovado!")
}
senao {
  escreva("Infelizmente você foi reprovado!")
}
```

#### Caso

* Este comando é similar aos comandos se e senão, e reduz a complexidade na escolha de diversas opções. Apesar de suas similaridades com o se, ele possui algumas diferenças. Neste comando não é possível o uso de operadores lógicos, ele apenas trabalha com valores definidos.

## Matrizes e vetores

* Uma matriz é uma coleção de variáveis de mesmo tipo, acessíveis com um único nome e armazenados contiguamente na memória.

* A individualização de cada variável de um vetor é feita através do uso de índices.

* Os vetores são matrizes de uma só dimensão.