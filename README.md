# Acumaru - Consultoria Ambiental

Este projeto é um site institucional para a Acumaru Consultoria Ambiental, desenvolvido com HTML, Tailwind CSS e JavaScript puro para carregamento dinâmico de componentes.

## Funcionalidades
- Página institucional responsiva
- Carregamento dinâmico de componentes HTML (header, about, services, contact, etc.)
- Estilização moderna com Tailwind CSS
- Estrutura modular para fácil manutenção

## Estrutura de Pastas
```
├── components/           # Componentes HTML reutilizáveis (about, services, contact, etc.)
├── src/
│   ├── css/
│   │   └── style.css     # Estilos customizados
│   └── js/
│       └── components-loader.js  # Script para carregar componentes dinamicamente
├── index.html            # Página principal
└── README.md             # Este arquivo
```

## Como rodar localmente
1. **Clone o repositório:**
   ```
   git clone <url-do-repositorio>
   ```
2. **Acesse a pasta do projeto:**
   ```
   cd solucoes-ambientais-tailwind
   ```
3. **Abra o arquivo `index.html` em um servidor local** (recomendado):
   - Você pode usar a extensão Live Server do VSCode ou rodar um servidor simples com Python:
     ```
     # Python 3.x
     python -m http.server 8000
     # Depois acesse http://localhost:8000 no navegador
     ```
   - **Não abra diretamente com file://**, pois o carregamento dinâmico dos componentes pode não funcionar corretamente.

## Dependências
- [Tailwind CSS (via CDN)](https://cdn.tailwindcss.com)
- [Font Awesome (via CDN)](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css)
- [Alpine.js (via CDN)](https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js)

## Observações
- Os componentes HTML devem ser salvos na pasta `components/`.
- O carregamento dinâmico dos componentes é feito pelo arquivo `src/js/components-loader.js`.
- Para adicionar novos componentes, basta criar o arquivo HTML na pasta `components/` e adicionar uma chamada no `components-loader.js`.

---
