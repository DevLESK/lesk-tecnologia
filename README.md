# LESK Tecnologia

Site institucional e comercial estático para apresentar a empresa, suas soluções e seus canais de contato. Projeto independente da LESK Tecnologia. Não possui integração com a LK Central nesta fase.

## Stack

HTML5, CSS3 e JavaScript puro. Sem dependências de execução, build, backend, banco, login ou API. Não há chamadas de rede automáticas nem fontes externas.

## Estrutura

```text
lesk-tecnologia/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/config.js
│   ├── js/main.js
│   ├── images/ (favicon.svg e .gitkeep)
│   └── videos/ (.gitkeep)
├── README.md
├── VALIDACAO.md
└── .gitignore
```

## Abrir localmente

Abra `index.html` diretamente no navegador. Não é necessário instalar ferramentas.
Opcionalmente, se você já usa Node.js, execute nesta pasta `npx --yes http-server . -a 127.0.0.1 -p 4173 -c-1` e abra `http://127.0.0.1:4173`. Esse servidor é apenas uma ferramenta de revisão local, não faz parte do site. Encerre com Ctrl+C.

## Identidade visual

Paleta derivada da linguagem da LK Central: fundo `#0B0B0B`, verde principal `#00D26A`, texto `#F2F4F3`, texto secundário `#A2ADB5`, roxo claro `#C6A2FF` e azul claro `#91BAFF`. As variáveis estão no início de `assets/css/style.css`. Tipografia de sistema, sem download. A composição comercial usa espaços amplos e um diagrama decorativo do ecossistema, sem representar telas dos produtos.

A marca tipográfica e o favicon com a letra L são provisórios, não um logotipo oficial aprovado. Substitua `assets/images/favicon.svg` pelo ícone definitivo e ajuste a marca no header/rodapé quando houver material oficial.

## Seções

Header, hero, quatro soluções, benefícios, quatro espaços de demonstração, sobre, contato e rodapé. “Conhecer” leva à demonstração correspondente na mesma página. O menu mobile abre por botão, fecha ao navegar, clicar fora, mover o foco para fora, pressionar Escape ou mudar a largura. Com JavaScript desativado, a navegação permanece visível.

## WhatsApp e Instagram

Edite somente `assets/js/config.js`:

- `whatsappNumber`: país + DDD + telefone, apenas dígitos. Deixe vazio até ter o número real.
- `whatsappMessage`: mensagem inicial do WhatsApp.
- `instagramUrl`: URL HTTPS completa do perfil oficial em `instagram.com` ou `www.instagram.com`.

Todos os botões usam essa configuração. Enquanto um contato estiver vazio ou fora do formato esperado, seus links levam ao contato local e um aviso informa a pendência. Quando configurados, abrem em nova aba e possuem indicação acessível desse comportamento. A validação de formato não comprova a existência da conta; teste os contatos reais manualmente antes de publicar. Sem JavaScript, os links continuam locais e o aviso permanece.

## Imagens e vídeos

Pastas: `assets/images/` (screenshots e posters) e `assets/videos/` (MP4 e VTT).
Studio Agenda e LESK Vitrine estão prontos em `#demo-agenda` e `#demo-vitrine`. Os comentários no HTML indicam o ponto de inserção. Enquanto não houver arquivo real, mantenha o placeholder. Não referencie mídia inexistente.

Arquivos previstos:

| Produto | Screenshot | Poster | Vídeo | Legenda |
| --- | --- | --- | --- | --- |
| Studio Agenda | `assets/images/studio-agenda.webp` | `assets/images/studio-agenda-poster.webp` | `assets/videos/studio-agenda.mp4` | `assets/videos/studio-agenda.pt-BR.vtt` |
| LESK Vitrine | `assets/images/lesk-vitrine.webp` | `assets/images/lesk-vitrine-poster.webp` | `assets/videos/lesk-vitrine.mp4` | `assets/videos/lesk-vitrine.pt-BR.vtt` |

1. Grave os arquivos reais nesses caminhos.
2. Em `index.html`, apague o conteúdo visível de `.media-placeholder` (ícone, texto e `<small>`).
3. Descomente **imagem** ou **vídeo** (não os dois).
4. Preencha `alt` / `aria-label`. Preserve o `id` do artigo.

Imagem:

```html
<img src="assets/images/studio-agenda.webp" alt="Descreva a tela real" width="1280" height="720" loading="lazy" decoding="async">
```

Vídeo, poster e legenda:

```html
<video controls preload="none" playsinline poster="assets/images/studio-agenda-poster.webp" aria-label="Demonstração do Studio Agenda">
  <source src="assets/videos/studio-agenda.mp4" type="video/mp4">
  <track kind="captions" src="assets/videos/studio-agenda.pt-BR.vtt" srclang="pt-BR" label="Português" default>
</video>
```

Proporção 16:9, sem autoplay. Remova dados pessoais dos screenshots. Financeiro e Comércio continuam só com placeholder.

## SEO e acessibilidade

Título, descrição, viewport, idioma, tema e Open Graph básico estão no `head`. Domínio, canonical, `og:url` e `og:image` foram omitidos por não haver endereço ou imagem oficial. Há um único H1, seções semânticas, link para pular ao conteúdo, foco visível, menu com estado acessível e respeito a movimento reduzido.

## Git e próximos passos

Repositório independente na branch `main`, sem remoto. Execute os comandos Git dentro desta pasta para não operar o repositório da LK Central. Este repositório é independente dos demais projetos LESK. Execute os comandos Git sempre dentro desta pasta.

1. Revisar textos e identidade visual localmente.
2. Informar e testar WhatsApp e Instagram oficiais.
3. Inserir screenshots, vídeos e marca aprovados.
4. Repetir a verificação de acessibilidade e responsividade após trocar conteúdo.
5. Decidir domínio e hospedagem em uma etapa separada, mediante autorização.

Nenhum push, deploy, serviço externo, analytics ou integração foi configurado. Consulte `VALIDACAO.md` para os testes e suas limitações.
