## Apiários dos Sonhos

Loja digital da Apiários dos Sonhos construída com Next.js 16 (App Router) e Tailwind CSS, otimizada para SEO e deploy na Netlify.

### Recursos

- Layout institucional com páginas Início, Produtos, Sobre e Contato
- Paleta e componentes inspirados em tons de mel, prontos para personalização
- Metadados, sitemap e robots configurados para melhor indexação
- Netlify Build Plugin para publicação automática (`@netlify/plugin-nextjs`)

### Pré-requisitos

- Node.js 18.18+ ou 20+
- npm 9+

### Instalação

```bash
npm install
```

### Desenvolvimento local

```bash
npm run dev
# abre http://localhost:3000
```

### Verificação de qualidade

```bash
npm run lint
```

### Build de produção

```bash
npm run build
npm run preview # opcional para validar build localmente
```

### Deploy na Netlify

1. Crie um novo site na Netlify apontando para este repositório.
2. Configure a build command como `npm run build` (já definido em netlify.toml).
3. Mantenha o diretório de publicação padrão (`.next`).
4. Garanta que a variável de ambiente `NODE_VERSION` esteja alinhada com sua versão local.

O arquivo `netlify.toml` já inclui o plugin oficial para Next.js, cuidando da geração de funções e redirects necessários.

### Estrutura principal

- src/app/layout.tsx — layout global, menu e rodapé
- src/app/page.tsx — landing page da loja
- src/app/produtos|sobre|contato — páginas internas
- src/app/sitemap.ts e src/app/robots.ts — SEO técnico

### Próximos passos sugeridos

- Conectar formulários a uma função serverless ou serviço de CRM
- Incluir catálogo dinâmico consumindo um CMS ou banco de dados
- Adicionar testes end-to-end (Playwright) e monitoramento de métricas Core Web Vitals
