# 🧠 Memoteca

Uma aplicação web moderna para criação e gerenciamento de pensamentos e citações, desenvolvida com Angular 18 e JSON Server.

![Angular](https://img.shields.io/badge/Angular-18-red)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

## 📚 Sobre o Projeto

Este projeto foi desenvolvido com base no curso **"Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD"** da [Alura](https://www.alura.com.br), ministrado pela instrutora **Nayanne Batista**.

### 🚀 Evoluções Implementadas

O projeto original foi **migrado e modernizado** com as seguintes melhorias:

- ✅ **Migração para Angular 18** (originalmente Angular 14)
- ✅ **Standalone Components** (moderna arquitetura Angular)
- ✅ **Código otimizado** e refatorado
- ✅ **Documentação completa** e profissional
- ✅ **Setup de produção** com GitIgnore otimizado
- ✅ **Melhorias de UX/UI** e responsividade

## 📋 Funcionalidades

- ✨ **Criar pensamentos** com conteúdo, autoria e modelo visual
- 📖 **Listar pensamentos** em galeria responsiva
- ✏️ **Editar pensamentos** existentes com preview em tempo real
- 🗑️ **Excluir pensamentos** com modal de confirmação
- 🎨 **3 modelos visuais** diferentes para os cards
- 📱 **Design responsivo** para mobile e desktop
- ⚡ **Standalone Components** (Angular 18+)

## 🎓 Conceitos Angular Implementados

Este projeto demonstra na prática os principais conceitos do Angular:

### 🏗️ **Fundamentos**
- ✅ **Conhecendo o Angular** - Estrutura e conceitos básicos
- ✅ **Criando a aplicação** - Setup e configuração inicial
- ✅ **Componentes** - Cabeçalho, Rodapé e componentes funcionais

### 🔄 **Fluxo de Dados**
- ✅ **Property Binding** - Vinculação de propriedades
- ✅ **Event Binding** - Manipulação de eventos
- ✅ **Two-way Data Binding** - Sincronização bidirecional

### 🧭 **Navegação**
- ✅ **Roteamento** - Configuração de rotas
- ✅ **Navegação dinâmica** - Rotas com parâmetros
- ✅ **RouterLink** - Links de navegação

### 🎯 **Diretivas**
- ✅ **NgFor** - Listagem dinâmica de elementos
- ✅ **NgIf** - Renderização condicional
- ✅ **NgClass** - Classes CSS dinâmicas

### 🔗 **Comunicação**
- ✅ **Comunicação entre componentes** - Input/Output
- ✅ **Services** - Lógica de negócio centralizada
- ✅ **Injeção de dependências** - Padrão de design

### 🌐 **Backend & HTTP**
- ✅ **JSON Server** - API REST simulada
- ✅ **Interfaces TypeScript** - Tipagem forte
- ✅ **HttpClient** - Requisições HTTP
- ✅ **Observables** - Programação reativa

### 📝 **CRUD Completo**
- ✅ **Componente Criar** - Formulários reativos
- ✅ **Componente Listar** - Exibição de dados
- ✅ **Componente Editar** - Atualização de registros
- ✅ **Componente Excluir** - Remoção com confirmação

## 🚀 Tecnologias

### Frontend
- **Angular 18** (Standalone Components)
- **TypeScript 5.0**
- **RxJS** para programação reativa
- **Angular Router** para navegação
- **Angular Forms** (Template-driven)
- **CSS3** com design responsivo
- **Google Fonts** (Inter & Roboto Mono)

### Backend
- **JSON Server** para API REST
- **Node.js** runtime

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (vem com Node.js)
- Angular CLI: `npm install -g @angular/cli`

### 🔧 Setup Completo

#### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd memoteca
```

#### 2. Instale as dependências do frontend
```bash
npm install
```

#### 3. Instale as dependências do backend
```bash
cd backend
npm install
cd ..
```

#### 4. Execute o backend (JSON Server)
```bash
# Em um terminal
cd backend
npm start
```
✅ Backend disponível em `http://localhost:3000`

#### 5. Execute o frontend (Angular)
```bash
# Em outro terminal (na raiz do projeto)
ng serve
```
✅ Frontend disponível em `http://localhost:4200`

## 🏗️ Arquitetura do Projeto

```
memoteca/
├── 📁 src/
│   ├── 📁 app/
│   │   ├── 📁 componentes/
│   │   │   ├── 📁 cabecalho/          # Header da aplicação
│   │   │   ├── 📁 rodape/             # Footer da aplicação
│   │   │   └── 📁 pensamentos/        # Módulo de pensamentos
│   │   │       ├── 📄 pensamento/           # Card individual
│   │   │       ├── 📄 listar-pensamento/    # Galeria de pensamentos
│   │   │       ├── 📄 criar-pensamento/     # Formulário de criação
│   │   │       ├── 📄 editar-pensamento/    # Formulário de edição
│   │   │       └── 📄 excluir-pensamento/   # Modal de exclusão
│   │   ├── 📁 services/
│   │   │   └── 📄 pensamento.service.ts     # Service para API
│   │   ├── 📁 models/
│   │   │   └── 📄 pensamento.ts             # Interface do modelo
│   │   ├── 📄 app.config.ts           # Configuração da aplicação (Angular 18+)
│   │   ├── 📄 app.routes.ts           # Definição de rotas (Angular 18+)
│   │   ├── 📄 app.component.ts        # Componente raiz
│   │   └── 📄 main.ts                 # Bootstrap da aplicação
│   └── 📁 assets/
│       └── 📁 imagens/                # Imagens dos modelos
├── 📁 backend/
│   ├── 📄 db.json                     # Base de dados JSON
│   ├── 📄 package.json                # Dependências do backend
│   └── 📄 README.md                   # Documentação da API
├── 📄 .gitignore                      # Arquivos ignorados pelo Git
├── 📄 LICENSE                         # Licença MIT
└── 📄 README.md                       # Esta documentação
```

## 🛣️ Rotas da Aplicação

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | `ListarPensamentoComponent` | 🏠 Página inicial com galeria |
| `/criarPensamento` | `CriarPensamentoComponent` | ➕ Formulário de criação |
| `/pensamentos/editarPensamento/:id` | `EditarPensamentoComponent` | ✏️ Formulário de edição |
| `/pensamentos/excluirPensamento/:id` | `ExcluirPensamentoComponent` | 🗑️ Modal de confirmação |

## 🔧 API Endpoints

O backend JSON Server fornece uma API REST completa:

| Método | Endpoint | Descrição | Exemplo |
|--------|----------|-----------|---------|
| `GET` | `/pensamentos` | Lista todos os pensamentos | `/pensamentos` |
| `GET` | `/pensamentos/:id` | Busca pensamento por ID | `/pensamentos/1` |
| `POST` | `/pensamentos` | Cria novo pensamento | Body: `{conteudo, autoria, modelo}` |
| `PUT` | `/pensamentos/:id` | Atualiza pensamento | `/pensamentos/1` |
| `DELETE` | `/pensamentos/:id` | Remove pensamento | `/pensamentos/1` |

### 📊 Estrutura do Objeto Pensamento
```typescript
interface Pensamento {
  id?: number;                    // ID único (auto-gerado)
  conteudo: string;               // Texto do pensamento
  autoria: string;                // Autor ou fonte
  modelo: 'modelo1' | 'modelo2' | 'modelo3'; // Modelo visual
}
```

## 🎨 Modelos Visuais

A aplicação oferece 3 modelos visuais distintos:

| Modelo | Cor da Borda | Descrição |
|--------|--------------|-----------|
| **Modelo 1** | 🔵 Azul Escura | Card com tema azul profissional |
| **Modelo 2** | 🔷 Azul Clara | Card com tema azul suave |
| **Modelo 3** | 🟢 Verde | Card com tema verde natural |

## 🏗️ Build para Produção

```bash
# Build otimizado para produção
ng build --configuration production

# Arquivos de build gerados em dist/memoteca/
```

## 🧪 Testes

```bash
# Testes unitários
ng test

# Testes end-to-end
ng e2e

# Coverage de testes
ng test --code-coverage
```

## 📝 Scripts Disponíveis

### Frontend
```bash
npm start          # ng serve - desenvolvimento
npm run build      # ng build - build de produção
npm test           # ng test - testes unitários
npm run lint       # ng lint - análise de código
```

### Backend
```bash
npm start          # Inicia JSON Server na porta 3000
```

## 🔍 Funcionalidades Avançadas

### 🎯 Standalone Components
- Aplicação totalmente baseada em Standalone Components
- Não utiliza NgModules tradicionais
- Bootstrap direto no `main.ts`

### 🏗️ Arquitetura Angular 18+ Moderna
- **`app.config.ts`** - Configuração centralizada da aplicação com providers
- **`app.routes.ts`** - Definição de rotas (substitui routing modules)
- **`main.ts`** - Bootstrap usando `bootstrapApplication()`
- **Standalone Components** - Componentes independentes sem módulos
- **Providers funcionais** - `provideRouter()`, `provideHttpClient()`

### 📱 Design Responsivo
- Layout adaptável para mobile, tablet e desktop
- Grid responsivo para galeria de pensamentos
- Formulários otimizados para touch

### ⚡ Performance
- Lazy loading de componentes
- OnPush change detection onde aplicável
- Otimizações de bundle

## 🤝 Contribuição

1. 🍴 Faça um fork do projeto
2. 🌿 Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push para a branch (`git push origin feature/AmazingFeature`)
5. 🔃 Abra um Pull Request

### 📋 Checklist para Contribuições
- [ ] Código segue os padrões do projeto
- [ ] Testes foram adicionados/atualizados
- [ ] Documentação foi atualizada
- [ ] Build passa sem erros
- [ ] Lint passa sem warnings

## 🐛 Problemas Conhecidos

Nenhum problema conhecido no momento. Se encontrar algum bug, por favor abra uma issue.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Sobre o Desenvolvimento

Este projeto foi desenvolvido como uma aplicação completa demonstrando:

- ✅ **Standalone Components** (Angular 18+)
- ✅ **Template-driven Forms** com validação
- ✅ **HTTP Client** para comunicação com API
- ✅ **Roteamento** com parâmetros dinâmicos
- ✅ **Services** para lógica de negócio
- ✅ **Interfaces TypeScript** tipadas
- ✅ **Design responsivo** e UX moderno
- ✅ **Separação de responsabilidades**

## 🎓 Créditos e Agradecimentos

### 📚 **Curso Base**
- **Curso:** Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD
- **Plataforma:** [Alura](https://www.alura.com.br)
- **Instrutora:** [Nayanne Batista](https://www.linkedin.com/in/nayannebatista/)

### 🚀 **Evolução do Projeto**
- Migração para **Angular 18**
- Implementação de **Standalone Components**
- Otimizações e melhorias de **Performance**
- **Documentação completa** e profissional

### 🙏 **Agradecimentos**
- **Alura** pela excelência no ensino
- **Nayanne Batista** pela didática excepcional
- **Angular Team** pelo framework incrível
- **JSON Server** pela simplicidade de setup
- **Comunidade Angular** pelo suporte contínuo

---

<div align="center">

**Desenvolvido com ❤️ usando Angular**

[⭐ Star no GitHub](.) | [🐛 Reportar Bug](./issues) | [💡 Sugerir Feature](./issues)

</div>
