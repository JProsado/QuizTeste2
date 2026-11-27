# Quiz de JavaScript — DSA 2026

Aplicativo de revisão com oito questões de múltipla escolha sobre variáveis, tipos de dados, condicionais, laços, arrays, funções, operadores e objetos.

## Executar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de publicação:

```bash
npm run build
```

O Vite gera os arquivos estáticos na pasta `dist/`. Na Vercel, importe o repositório e use `npm run build` como comando de build e `dist` como diretório de saída.

## Como funciona

- `src/App.jsx` controla índice, respostas e pontuação com `useState`; `useEffect` sincroniza o progresso com o `localStorage`.
- `src/components/` separa cabeçalho, questão e resultado em componentes reutilizáveis.
- `src/questions.js` contém as questões e explicações.
- `src/styles.css` define a paleta e adapta a interface para celulares e computadores.

O progresso é salvo neste navegador, sem conta ou banco de dados. Use “Fazer o quiz novamente” para reiniciar.
