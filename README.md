# Boilerplate Landing Page 🚀

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node Version](https://img.shields.io/badge/node-%3E=18.0.0-brightgreen.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)

Este é um projeto boilerplate estruturado especialmente para desenvolvedores iniciantes criarem uma Landing Page (ou outros projetos frontend) com boas práticas de mercado desde o primeiro dia.

O projeto já vem configurado com ferramentas automatizadas para manter o código limpo, organizado e bem formatado.

## ✨ Funcionalidades

- ✅ Estrutura de pastas organizada e escalável
- ✅ Linters configurados (ESLint, Stylelint, Prettier)
- ✅ Formatação automática de código
- ✅ Scripts npm para automação
- ✅ Configurações do VS Code otimizadas
- ✅ Suporte a módulos ES6+
- ✅ Pronto para integração com frameworks CSS

---

## � Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão >= 18.0.0) - [Download aqui](https://nodejs.org/)
- **npm** (vem junto com Node.js)
- **VS Code** (recomendado) - [Download aqui](https://code.visualstudio.com/)
- **Git** - [Download aqui](https://git-scm.com/)

Para verificar a versão do Node.js instalada:

```bash
node --version
npm --version
```

---

## �️ Tecnologias e Ferramentas

- **HTML5 & CSS3** (Pronto para integração com Bootstrap, Tailwind, etc.)
- **JavaScript** (Moderno/ES6+ com suporte a módulos)
- **ESLint** - Para encontrar e corrigir erros no JavaScript
- **Stylelint** - Para manter o CSS organizado e sem erros
- **Prettier** - Para formatar o código automaticamente (padrão de espaçamento, aspas, etc.)

---

## 📂 Estrutura de Pastas

A estrutura foi pensada para separar o que é configuração do que é o código do seu site:

```text
├── .vscode/                  # Configurações recomendadas para o VS Code
│   ├── extensions.json       # Extensões recomendadas
│   └── settings.json         # Configurações do editor
├── app/
│   ├── api/                  # Código reutilizável para requisições HTTP
│   ├── assets/               # Arquivos de mídia (Imagens, Ícones, Fontes, etc.)
│   ├── helpers/              # Funções utilitárias e código reutilizável
│   └── src/                  # Código fonte principal do site
│       ├── index.html        # Página principal
│       ├── index.js          # Lógica em JavaScript
│       └── styles.css        # Estilização do site
├── .eslintrc.json           # Configuração do ESLint
├── .prettierrc              # Configuração do Prettier
├── .stylelintrc.json        # Configuração do Stylelint
├── .gitignore               # Arquivos ignorados pelo Git
├── package.json             # Dependências e scripts do projeto
└── README.md                # Documentação do projeto
```

### 📁 Detalhes das Pastas

- **app/api/**: Funções para integração com APIs externas, fetch wrappers, etc.
- **app/assets/**: Imagens, ícones, fontes e outros arquivos estáticos
- **app/helpers/**: Funções utilitárias, formatação de dados, validações, etc.
- **app/src/**: Código fonte principal (HTML, CSS, JS)

---

## 🚀 Como Rodar o Projeto

1. Clone este repositório:

```bash
git clone git@github.com:ArlessonMoura/boilerplate-front.git
cd boilerplate-front
```

2. Instale as dependências:

```bash
npm install
```

3. Abra o projeto no VS Code. Assim que você abrir a pasta, aparecerá uma notificação no canto inferior direito dizendo: "Este repositório contém recomendações de extensão." Clique em "Instalar Tudo" e o VS Code configurará o ambiente automaticamente.

4. Inicie o servidor local clicando com o botão direito no arquivo `app/src/index.html` e escolha "Open With Live Server"

---

## 🧹 Mantendo o Código Limpo (Linters e Formatação)

Para garantir que seu código está seguindo os padrões do mercado, você pode rodar os comandos abaixo no terminal:

### Scripts Disponíveis

- **`npm run check`** - Verifica se há erros em JS, CSS e formatação

```bash
npm run check
```

- **`npm run format`** - Formata todo o código automaticamente com Prettier

```bash
npm run format
```

- **`npm run format:check`** - Verifica se o código está formatado corretamente

```bash
npm run format:check
```

- **`npm run lint`** - Verifica erros de JavaScript com ESLint

```bash
npm run lint
```

- **`npm run lint:fix`** - Corrige automaticamente erros de JavaScript

```bash
npm run lint:fix
```

- **`npm run stylelint`** - Verifica erros de CSS com Stylelint

```bash
npm run stylelint
```

- **`npm run stylelint:fix`** - Corrige automaticamente erros de CSS

```bash
npm run stylelint:fix
```

### Combinando Correções

Para corrigir automaticamente erros de JS e CSS:

```bash
npm run lint:fix && npm run stylelint:fix
```

---

## ⚙️ Configuração do VS Code

O projeto inclui configurações recomendadas para o VS Code no arquivo `.vscode/extensions.json`. As extensões recomendadas incluem:

- **ESLint** - Integração do ESLint no VS Code
- **Prettier** - Formatação de código
- **Stylelint** - Linting para CSS
- **Error Lens** - Mostra erros inline no código
- **GitLens** - Superpoderes para o Git
- **Live Server** - Servidor de desenvolvimento local
- **Import Cost** - Mostra o tamanho das importações
- **Material Icon Theme** - Ícones bonitos para arquivos
- **npm Intellisense** - Autocomplete para imports
- **Dracula Theme** - Tema escuro popular
- **Code Runner** - Executa trechos de código
- **Code Spell Checker** - Verificador ortográfico
- **Tailwind CSS IntelliSense** - Autocomplete para Tailwind

Para instalar todas as extensões recomendadas automaticamente, clique em "Instalar Tudo" quando a notificação aparecer ao abrir o projeto.

---

## 🎨 Padrões de Código

O projeto usa as seguintes configurações de código:

### Prettier
- **Aspas**: Simples (`'`)
- **Ponto e vírgula**: Obrigatório
- **Largura máxima**: 90 caracteres
- **Indentação**: 2 espaços
- **Final de linha**: LF (Unix)
- **Trailing comma**: Sempre

### ESLint
- **ECMAScript**: Latest
- **Source Type**: Module (ES6+)
- **Regras personalizadas**:
  - `no-unused-vars`: Warn (ignora variáveis com `_` prefix)
  - `eqeqeq`: Error (sempre usar `===`)
  - `curly`: Error (sempre usar chaves)
  - `no-console`: Off
  - `no-debugger`: Warn

### Stylelint
- Usa o config padrão `stylelint-config-standard`

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

Antes de abrir um PR, certifique-se de:
- Rodar `npm run check` para verificar se não há erros
- Rodar `npm run format` para formatar o código
- Testar suas mudanças localmente

---

## 📝 Licença

Este projeto está sob a licença [ISC](./LICENSE).

Feito com ❤️ para ajudar devs a darem os primeiros passos!

---

## 📞 Suporte

Se você tiver dúvidas ou problemas:

- Abra uma [issue no GitHub](https://github.com/ArlessonMoura/boilerplate-front/issues)
- Entre em contato através do perfil LinkedIn: [ArlessonMoura](https://www.linkedin.com/in/arlesson-moura/)
