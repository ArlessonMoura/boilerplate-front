# Boilerplate Landing Page 🚀

Este é um projeto boilerplate estruturado especialmente para desenvolvedores iniciantes criarem uma Landing Page (ou outros projetos frontend) com boas práticas de mercado desde o primeiro dia.

O projeto já vem configurado com ferramentas automatizadas para manter o código limpo, organizado e bem formatado.

---

## 🛠️ Tecnologias e Ferramentas

- **HTML5 & CSS3** (Pronto para integração com Bootstrap)
- **JavaScript** (Moderno/ES6+)
- **ESLint** - Para encontrar e corrigir erros no JavaScript.
- **Stylelint** - Para manter o CSS organizado e sem erros.
- **Prettier** - Para formatar o código automaticamente (padrão de espaçamento, aspas, etc.).

---

## 📂 Estrutura de Pastas

A estrutura foi pensada para separar o que é configuração do que é o código do seu site:

```text
├── .vscode/             # Configurações recomendadas para o VS Code
├── app/
│   ├── api              # código reutilizável de uso para requisições HTTP
│   ├── assets/          # Arquivos de mídia (Imagens, Ícones, etc.)
│   ├── helpers          # Código reutilizável de uso geral
│   └── src/             # Código fonte principal do site
│       ├── index.html   # Página principal
│       ├── index.js     # Lógica em JavaScript
│       └── styles.css   # Estilização do site
├── package.json         # Dependências e scripts do projeto
└── ... arquivos de configuração (.eslintrc, .prettierrc, etc.)

```

---

## 🚀 Como Rodar o Projeto

1. Abra o terminal na raiz do projeto e instale as dependências:

```bash
   npm install

```

2. Instale a extensão **Live Server** (de Ritwick Dey) no seu VS Code

   > > Assim que o você abrir a pasta do boilerplate no VS Code, vai aparecer uma notificação no canto inferior direito dizendo: "Este repositório contém recomendações de extensão." Só precisa clicar em "Instalar Tudo" e o VS Code configura o ambiente sozinho!

3. Inicie o servidor local clicando com o botão no arquivo HTML raiz, e escolha "Open With Live Server"

---

## 🧹 Mantendo o Código Limpo (Linters e Formatação)

Para garantir que seu código está seguindo os padrões do mercado, você pode rodar os comandos abaixo no terminal:

- **Verificar se há erros (HTML/JS/CSS):**

```bash
  npm run check

```

- **Corrigir automaticamente a formatação do código (Prettier):**

```bash
  npm run format

```

- **Corrigir automaticamente erros de JS e CSS:**

```bash
  npm run lint:fix && npm run stylelint:fix

```

---

## 📝 Licença

Este projeto está sob a licença [ISC](https://www.google.com/search?q=LICENSE).

Feito com ❤️ para ajudar devs a darem os primeiros passos!

```

```
