# 🏋️‍♂️ Gerador de Playlist de Treinos

Um app em React para criar playlists de treino personalizadas.  
Selecione o grupo muscular, escolha os exercícios, adicione-os ao quadro temporário, e gere sua playlist final!

## 📦 Estrutura do Projeto

src/
components/
TemporaryBoard.jsx
PlaylistFinal.jsx
data/
exercises.json
App.jsx
main.jsx


## 🚀 Funcionalidades

✅ Selecionar grupo muscular via dropdown.  
✅ Filtrar exercícios disponíveis.  
✅ Adicionar exercícios ao quadro temporário sem permitir duplicados.  
✅ Remover exercícios do quadro temporário.  
✅ Gerar a playlist final.

## 🛠️ Tecnologias Utilizadas

- React
- Vite
- Tailwind CSS (opcional, para estilização)

## 📂 Dados de Exercícios

O arquivo `data/exercises.json` contém os dados dos exercícios no seguinte formato:

```json
[
  { "nome": "Agachamento", "grupo": "Pernas" },
  { "nome": "Supino Reto", "grupo": "Peito" },
  { "nome": "Remada Curvada", "grupo": "Costas" }
]
```

💡 Próximos Passos
Melhorar o layout e UX com Tailwind e ícones.

Adicionar campo de busca para facilitar a seleção.

Botão "Limpar tudo" para reiniciar a seleção.

Reordenar a lista temporária com drag-and-drop (futuro).

Adicionar mensagens amigáveis quando o quadro ou a playlist estiverem vazios.

Testar responsividade e UX em diferentes dispositivos.

Documentar com imagens e GIFs no README.

💻 Como Rodar o Projeto
Clone o repositório:


Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Instale as dependências:


Editar
npm install
Rode o projeto:

bash
Copiar
Editar
npm run dev
Abra no navegador:
http://localhost:5173

🤝 Contribuições
Sinta-se à vontade para contribuir com melhorias ou sugerir novos recursos!



