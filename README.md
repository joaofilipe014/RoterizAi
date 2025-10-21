# RoterizAI

Site estático para turistas montarem roteiros personalizados em Londrina e Rolândia com mapa interativo e preferências simples, focado em rapidez e facilidade de uso.

## O que tem
- Mapa interativo (Leaflet) com pontos de interesse (POIs)
- Filtros por cidade, categoria, tempo disponível, ritmo e companhia
- Geração automática de roteiro com estimativas de deslocamento e permanência
- Marcadores no mapa (Leaflet + OpenStreetMap)
- Lista do roteiro com ordem sugerida e descrição curta

## Como rodar (Windows)
Como é um site estático, basta abrir o arquivo `index.html` no navegador. Algumas funções de geolocalização/OSRM funcionam melhor via um servidor local.

Opção 1 — abrir direto:
1. Clique duas vezes em `index.html` ou abra no navegador.

Opção 2 — servir localmente (recomendado para mapas/rotas):
- Com Python 3 instalado:

```powershell
# na pasta do projeto
python -m http.server 5500
```
Depois acesse: http://localhost:5500/

- Com Node.js instalado (usando npx serve):
```powershell
npx serve . -l 5500
```

## Personalizar pontos
Edite `assets/data/pois.json` para adicionar, remover ou alterar pontos. Campos:
- id, nome, cidade ("londrina"|"rolandia"), categoria ("turismo"|"restaurante"|"parque"|"diversao"), lat, lng, duracaoMin, horario, tags

## Observações
- As rotas são traçadas via OSRM público (sem API key). Transporte público abre link do Google Maps (horários variam). Uber é aberto via link oficial móvel.
- Os tempos são estimativas simples; confirme condições atuais no Maps.
- Você pode arrastar o marcador do ponto de partida.

## Próximos passos (ideias)
- Salvar/compartilhar roteiro (link ou arquivo)
- Preferências por perfil (família, aventura, gastronomia) mais detalhadas
- Integração com serviços de tempo/chuva e eventos locais
- Melhor heurística para roteirização (2-opt/Simulated Annealing) e janelas de tempo
