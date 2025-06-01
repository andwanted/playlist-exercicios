# App de Playlist de Exercícios com React

Este projeto é um aplicativo web para montar playlists personalizadas de exercícios físicos, facilitando a organização e visualização dos treinos.

## Funcionalidades

- Seleção de grupos musculares via dropdown.
- Escolha de exercícios dentro do grupo selecionado.
- Adição temporária de exercícios para montar playlist.
- Finalização e exibição da playlist final, com possibilidade de remoção.
- Dados dos exercícios carregados via JSON externo.
- Planejado suporte a vídeos do YouTube para cada exercício.

## Tecnologias Utilizadas

- React (com Hooks: useState)
- JSON para dados dos exercícios
- HTML/CSS inline para estilo simples e direto

## Como usar

1. Escolha um grupo muscular no primeiro dropdown.
2. Selecione um exercício no segundo dropdown.
3. Clique em "Adicionar Exercício" para incluir na lista temporária.
4. Repita para adicionar quantos quiser.
5. Clique em "Finalizar Playlist" para salvar e visualizar a playlist completa.
6. Remova exercícios da playlist se desejar.

## Estrutura do Projeto

- `src/App.js`: componente principal com toda a lógica e UI.
- `data/exercicios.json`: arquivo com dados dos exercícios.
- `public/index.html`: ponto de entrada padrão do React.

## Próximos passos

- Implementar player de vídeo para exibir os exercícios.
- Salvar playlists localmente ou no backend.
- Melhorar design e responsividade.
- Adicionar testes automatizados.

## Autor

Seu nome ou contato aqui.

---

Aproveite seu treino com organização e foco!
