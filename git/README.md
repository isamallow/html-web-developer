## Forma de interagir com o GIT

- CLI (Command Line Interface)

- Windows
* listar (dir)
* navegar entre as pastas (cd)
* retroceder pasta cd..
* limpar (cls)
* TAB (autocomplete)
* criar pasta (mkdir)
* criar arquivo (EX: echo hello > hello.txt)
* del (deleta arquivos)
* rmdir (apaga pasta e arquivos)

## Funcionamento do GIT

* SHA1 = Secure Hash Algorithm (Algoritimo de Hash Seguro), é um conjunto de funções de hash criptográficas. A encriptação gera conjunto de caracteres de 40 dígitos.

* Objetos fundamentais: blobs, trees, commits
- Blob = metadados do GIT (bloco básico de composição) - tem SHA1 do arquivo
- Trees = armazenam blobs (apontam para blobs ou outras árvores)
- Commit = ele aponta para uma árvore, autor, mensagem, timestamp

## Chaves SSH e Tokens

- Autenticação no Github

* SSH = conexão segura com o GiHub

## Comandos GIT

* git init (iniciar repositório)
* git add
* git commit 
* git status (untracked, staged, modified)

## Resolvendo conflitos no GitHub

* git push origin master
* git pull origin master (puxar)
* localiza o conflito, conserta e faz um commit
* resolve conflitos manualmente