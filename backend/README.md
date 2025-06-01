# 🚀 Memoteca Backend API

API REST para a aplicação Memoteca, construída com JSON Server.

## 📋 Sobre

Este é o backend da aplicação Memoteca, fornecendo uma API REST completa para gerenciamento de pensamentos e citações. Utiliza JSON Server para simular uma API real com base em um arquivo JSON.

## 🛠️ Tecnologias

- **JSON Server** - API REST simulada
- **Node.js** - Runtime JavaScript

## 📦 Instalação

```bash
# Instalar dependências
npm install
```

## 🚀 Execução

```bash
# Desenvolvimento (localhost apenas)
npm run dev

# Produção (todas as interfaces)
npm start
```

A API estará disponível em: `http://localhost:3000`

## 📊 Endpoints Disponíveis

### Pensamentos

| Método | Endpoint | Descrição | Body |
|--------|----------|-----------|------|
| `GET` | `/pensamentos` | Lista todos os pensamentos | - |
| `GET` | `/pensamentos/:id` | Busca pensamento por ID | - |
| `POST` | `/pensamentos` | Cria novo pensamento | `{conteudo, autoria, modelo}` |
| `PUT` | `/pensamentos/:id` | Atualiza pensamento completo | `{conteudo, autoria, modelo}` |
| `PATCH` | `/pensamentos/:id` | Atualiza pensamento parcial | `{campo: valor}` |
| `DELETE` | `/pensamentos/:id` | Remove pensamento | - |

### Filtros e Paginação

```bash
# Filtrar por conteúdo
GET /pensamentos?conteudo_like=vida

# Filtrar por autoria
GET /pensamentos?autoria=Einstein

# Filtrar por modelo
GET /pensamentos?modelo=modelo1

# Paginação
GET /pensamentos?_page=1&_limit=10

# Ordenação
GET /pensamentos?_sort=id&_order=desc
```

## 📝 Estrutura de Dados

### Pensamento
```json
{
  "id": 1,
  "conteudo": "A vida é aquilo que acontece enquanto você está ocupado fazendo outros planos.",
  "autoria": "John Lennon",
  "modelo": "modelo1"
}
```

### Modelos Válidos
- `modelo1` - Card azul escuro
- `modelo2` - Card azul claro
- `modelo3` - Card verde

## 🔧 Configuração

### Porta Personalizada
```bash
# Usar porta diferente
json-server --watch db.json --port 3001
```

### CORS
O JSON Server já vem configurado com CORS habilitado para desenvolvimento.

### Dados Iniciais
O arquivo `db.json` contém dados de exemplo. Para resetar:

1. Fazer backup: `cp db.json db.backup.json`
2. Limpar dados: editar `db.json` manualmente
3. Restaurar backup: `cp db.backup.json db.json`

## 📁 Estrutura de Arquivos

```
backend/
├── 📄 db.json          # Base de dados JSON
├── 📄 package.json     # Configurações e dependências
└── 📄 README.md        # Esta documentação
```

## 🧪 Exemplos de Uso

### Criar Pensamento
```bash
curl -X POST http://localhost:3000/pensamentos \
  -H "Content-Type: application/json" \
  -d '{
    "conteudo": "A imaginação é mais importante que o conhecimento.",
    "autoria": "Albert Einstein",
    "modelo": "modelo2"
  }'
```

### Buscar Todos os Pensamentos
```bash
curl http://localhost:3000/pensamentos
```

### Buscar Pensamento por ID
```bash
curl http://localhost:3000/pensamentos/1
```

### Atualizar Pensamento
```bash
curl -X PUT http://localhost:3000/pensamentos/1 \
  -H "Content-Type: application/json" \
  -d '{
    "conteudo": "Conteúdo atualizado",
    "autoria": "Novo Autor",
    "modelo": "modelo3"
  }'
```

### Deletar Pensamento
```bash
curl -X DELETE http://localhost:3000/pensamentos/1
```

## 🐛 Solução de Problemas

### Porta em Uso
```bash
# Verificar processos na porta 3000
lsof -ti:3000

# Matar processo (Linux/Mac)
kill -9 $(lsof -ti:3000)

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Erro de Permissão
```bash
# Verificar permissões do arquivo db.json
ls -la db.json

# Corrigir permissões (Linux/Mac)
chmod 644 db.json
```

## 📚 Documentação JSON Server

Para mais informações sobre funcionalidades avançadas:
- [JSON Server GitHub](https://github.com/typicode/json-server)
- [Documentação Oficial](https://www.npmjs.com/package/json-server)

## 🤝 Contribuição

Este backend faz parte do projeto Memoteca. Para contribuir:

1. Veja o README principal do projeto
2. Faça alterações no `db.json` conforme necessário
3. Teste os endpoints antes de commitar
4. Documente novas funcionalidades

---

**Parte do projeto Memoteca** 🧠
