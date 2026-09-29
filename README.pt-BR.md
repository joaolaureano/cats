<h1 align="center">
  <img alt="Cats" src=".github/cover.png">
</h1>

<p align="center">
  <a href="README.md">English</a> · <b>Português</b>
</p>

# Cats

**No ar:** https://cats-lyart-tau.vercel.app

Um pequeno app Angular cheio de gatos. Fiz na faculdade, como projeto de brinquedo para aprender desenvolvimento web: componentes, rotas, chamadas HTTP, interceptors e Bootstrap.

## Funcionalidades

- **Menu principal**: dois blocos grandes animados que levam às outras páginas.
- **Gerador de gatos**: busca uma foto aleatória de gato; dá para guardar as favoritas e remover a última salva. Um spinner do Nyan Cat aparece enquanto há requisições em andamento (via HTTP interceptor).
- **Gatos HTTP**: digite um status HTTP e veja a imagem correspondente do [http.cat](https://http.cat).
- **Gatos em tela cheia** (`/fullCats`): um mural com 50 gatos aleatórios.

## Tecnologias

- [Angular](https://angular.dev) 22
- [Bootstrap](https://getbootstrap.com) 5
- [TypeScript](https://www.typescriptlang.org)
- [Vitest](https://vitest.dev) para testes unitários

As imagens vêm da [TheCatAPI](https://thecatapi.com) e do [http.cat](https://http.cat).

## Como rodar

Requer Node.js 22+.

```bash
npm install
npm start        # http://localhost:4200
npm test         # testes unitários
npm run build    # build de produção em dist/cats
```

## Histórico

Escrito originalmente em 2019 com Angular 8. Em 2026 foi atualizado para Angular 22, e a API de gatos aleatórios, que saiu do ar (aws.random.cat), foi trocada pela TheCatAPI.
