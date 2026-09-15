# Jogo de Adivinhação

Exercício básico feito com HTML, CSS e JavaScript, sem dependências.

## Como jogar

Abra o arquivo `index.html` no navegador. Digite um número inteiro entre 1 e 100 e clique em **Chutar** (ou pressione Enter). Você tem 10 tentativas e recebe dicas de maior ou menor. Palpites inválidos não gastam tentativas. Ao finalizar, clique em **Jogar novamente** para começar outra partida.

## Arquivos

- `index.html`: estrutura da página.
- `style.css`: aparência do jogo.
- `script.js`: sorteio, validação e controle de tentativas.

O número secreto é gerado com `Math.floor(Math.random() * 100) + 1`. As tentativas são controladas pelos envios do formulário: não é necessário usar `while` ou `for`, pois o jogo aguarda a interação do jogador. A conversão usa `Number()` e `Number.isInteger()` para rejeitar decimais em vez de truncá-los.

## Publicar no GitHub

1. Entre na sua conta do GitHub e crie um repositório chamado `jogo-de-adivinhacao`.
2. Selecione a visibilidade **Public**.
3. Use a opção de upload de arquivos e envie `index.html`, `style.css`, `script.js` e `README.md`.
4. Confirme o envio e compartilhe o endereço do repositório exibido no navegador.
