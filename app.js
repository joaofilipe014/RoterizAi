// App principal para roteiros em Londrina e Rolândia
// Versão simplificada: 3 telas (inicial → seleção → resultado), apenas marcadores no mapa (sem rotas complexas)

// i18n
const i18n = {
  lang: 'pt',
  dict: {
    pt: {
      'app.name': 'RoterizAI',
      'hero.subtitle': 'Descubra Londrina em um roteiro personalizado',
      'hero.cta': 'Montar meu roteiro',
      'selection.title': 'Suas Preferências',
      'selection.subtitle': 'Escolha seus interesses e quanto tempo você tem disponível',
      'selection.likes': 'O que você gosta?',
      'interest.culture': 'Cultura e História',
      'interest.nature': 'Natureza e Parques',
      'interest.food': 'Gastronomia',
      'interest.fun': 'Diversão e Lazer',
      'selection.time': 'Quanto tempo você tem?',
      'time.hours': 'horas',
      'common.back': 'Voltar',
      'selection.generate': 'Gerar Roteiro',
      'result.title': 'Seu Roteiro Personalizado',
      'mode.car': 'Carro',
      'mode.uber': 'Uber',
      'mode.foot': 'A pé',
      'mode.transit': 'Ônibus',
      'result.myLocation': 'Minha localização',
      'result.pickOnMap': 'Definir no mapa',
      'result.loading': 'Montando seu roteiro...',
      'result.accept': 'Aceitar rota',
  'result.confirmPlan': 'Confirmar plano',
  'map.title': 'Mapa',
  'map.expand': 'Expandir',
  'map.minimize': 'Minimizar',
      'tracking.title': 'Status do roteiro',
      'tracking.next': 'Próxima parada',
      'tracking.finish': 'Encerrar',
      'footer': 'Dados dos pontos são aproximados e servem como referência. Rotas por OSRM; links para Google Maps e Uber para conferência.',
      'alert.selectInterest': 'Selecione pelo menos um interesse!',
      'alert.noPlaces': 'Nenhum local encontrado com essas preferências.',
      'alert.clickMap': 'Clique no mapa para escolher o ponto de partida.',
      'alert.noLocation': 'Não foi possível obter sua localização.',
      'alert.generateFirst': 'Gere um roteiro primeiro.',
      'summary.mode': 'Modo',
      'summary.distance': 'Distância',
      'summary.time': 'Tempo',
      'summary.cost': 'Custo estimado',
      'instructions.title': 'Instruções',
      'instructions.transit': 'Instruções aproximadas para ônibus. Para horários e linhas exatos, use Google Maps (modo transporte público).',
      'tracking.done': '✓',
      'tracking.arrow': '➡',
      'tracking.current': '(próxima)',
      'tracking.returnMsg': 'O roteiro retorna ao ponto de partida ao final.',
      'result.yourRoute': 'Seu Roteiro de {0} horas',
      'category.turismo': 'Turismo',
      'category.restaurante': 'Restaurante',
      'category.parque': 'Parque',
      'category.diversao': 'Diversão'
    },
    en: {
      'app.name': 'RoterizAI',
      'hero.subtitle': 'Discover Londrina with a personalized itinerary',
      'hero.cta': 'Build my itinerary',
      'selection.title': 'Your Preferences',
      'selection.subtitle': 'Choose your interests and how much time you have',
      'selection.likes': 'What do you like?',
      'interest.culture': 'Culture & History',
      'interest.nature': 'Nature & Parks',
      'interest.food': 'Gastronomy',
      'interest.fun': 'Fun & Leisure',
      'selection.time': 'How much time do you have?',
      'time.hours': 'hours',
      'common.back': 'Back',
      'selection.generate': 'Generate Route',
      'result.title': 'Your Personalized Route',
      'mode.car': 'Car',
      'mode.uber': 'Uber',
      'mode.foot': 'On foot',
      'mode.transit': 'Bus',
      'result.myLocation': 'My location',
      'result.pickOnMap': 'Pick on map',
      'result.loading': 'Building your route...',
      'result.accept': 'Accept route',
  'result.confirmPlan': 'Confirm plan',
  'map.title': 'Map',
  'map.expand': 'Expand',
  'map.minimize': 'Minimize',
      'tracking.title': 'Route status',
      'tracking.next': 'Next stop',
      'tracking.finish': 'Finish',
      'footer': 'Location data is approximate. Routes by OSRM; check Google Maps and Uber for details.',
      'alert.selectInterest': 'Select at least one interest!',
      'alert.noPlaces': 'No places found with these preferences.',
      'alert.clickMap': 'Click on the map to choose the starting point.',
      'alert.noLocation': 'Could not get your location.',
      'alert.generateFirst': 'Generate a route first.',
      'summary.mode': 'Mode',
      'summary.distance': 'Distance',
      'summary.time': 'Time',
      'summary.cost': 'Estimated cost',
      'instructions.title': 'Instructions',
      'instructions.transit': 'Approximate instructions for bus. For exact schedules and routes, use Google Maps (transit mode).',
      'tracking.done': '✓',
      'tracking.arrow': '➡',
      'tracking.current': '(next)',
      'tracking.returnMsg': 'The route returns to the starting point at the end.',
      'result.yourRoute': 'Your {0}-hour Route',
      'category.turismo': 'Tourism',
      'category.restaurante': 'Restaurant',
      'category.parque': 'Park',
      'category.diversao': 'Fun'
    },
    es: {
      'app.name': 'RoterizAI',
      'hero.subtitle': 'Descubre Londrina con un itinerario personalizado',
      'hero.cta': 'Armar mi itinerario',
      'selection.title': 'Tus Preferencias',
      'selection.subtitle': 'Elige tus intereses y cuánto tiempo tienes',
      'selection.likes': '¿Qué te gusta?',
      'interest.culture': 'Cultura e Historia',
      'interest.nature': 'Naturaleza y Parques',
      'interest.food': 'Gastronomía',
      'interest.fun': 'Diversión y Ocio',
      'selection.time': '¿Cuánto tiempo tienes?',
      'time.hours': 'horas',
      'common.back': 'Volver',
      'selection.generate': 'Generar Ruta',
      'result.title': 'Tu Ruta Personalizada',
      'mode.car': 'Coche',
      'mode.uber': 'Uber',
      'mode.foot': 'A pie',
      'mode.transit': 'Autobús',
      'result.myLocation': 'Mi ubicación',
      'result.pickOnMap': 'Elegir en el mapa',
      'result.loading': 'Armando tu ruta...',
      'result.accept': 'Aceptar ruta',
  'result.confirmPlan': 'Confirmar plan',
  'map.title': 'Mapa',
  'map.expand': 'Expandir',
  'map.minimize': 'Minimizar',
      'tracking.title': 'Estado de la ruta',
      'tracking.next': 'Próxima parada',
      'tracking.finish': 'Terminar',
      'footer': 'Datos aproximados. Rutas por OSRM; consulta Google Maps y Uber para detalles.',
      'alert.selectInterest': '¡Selecciona al menos un interés!',
      'alert.noPlaces': 'No se encontraron lugares con estas preferencias.',
      'alert.clickMap': 'Haz clic en el mapa para elegir el punto de partida.',
      'alert.noLocation': 'No se pudo obtener tu ubicación.',
      'alert.generateFirst': 'Genera una ruta primero.',
      'summary.mode': 'Modo',
      'summary.distance': 'Distancia',
      'summary.time': 'Tiempo',
      'summary.cost': 'Costo estimado',
      'instructions.title': 'Instrucciones',
      'instructions.transit': 'Instrucciones aproximadas para autobús. Para horarios exactos, usa Google Maps (modo transporte público).',
      'tracking.done': '✓',
      'tracking.arrow': '➡',
      'tracking.current': '(próxima)',
      'tracking.returnMsg': 'La ruta regresa al punto de partida al final.',
      'result.yourRoute': 'Tu Ruta de {0} horas',
      'category.turismo': 'Turismo',
      'category.restaurante': 'Restaurante',
      'category.parque': 'Parque',
      'category.diversao': 'Diversión'
    }
  },
  t(key, ...args) {
    let str = this.dict[this.lang]?.[key] || this.dict.pt[key] || key;
    args.forEach((arg, i) => { str = str.replace(`{${i}}`, arg); });
    return str;
  },
  translateDirection(text) {
    if(this.lang === 'en') return text;
    
    const patterns = {
      pt: {
        'Head': 'Siga',
        'Turn left': 'Vire à esquerda',
        'Turn right': 'Vire à direita',
        'Continue': 'Continue',
        'Make a U-turn': 'Faça retorno',
        'Enter': 'Entre',
        'Exit': 'Saia',
        'You have arrived': 'Você chegou',
        'on the left': 'à esquerda',
        'on the right': 'à direita',
        'onto': 'na',
        'and take the': 'e pegue a',
        'exit': 'saída',
        'traffic circle': 'rotatória',
        'east': 'leste',
        'west': 'oeste',
        'north': 'norte',
        'south': 'sul',
        'at your': 'ao seu',
        'destination': 'destino'
      },
      es: {
        'Head': 'Dirígete',
        'Turn left': 'Gira a la izquierda',
        'Turn right': 'Gira a la derecha',
        'Continue': 'Continúa',
        'Make a U-turn': 'Da vuelta en U',
        'Enter': 'Entra',
        'Exit': 'Sal',
        'You have arrived': 'Has llegado',
        'on the left': 'a la izquierda',
        'on the right': 'a la derecha',
        'onto': 'en',
        'and take the': 'y toma la',
        'exit': 'salida',
        'traffic circle': 'rotonda',
        'east': 'este',
        'west': 'oeste',
        'north': 'norte',
        'south': 'sur',
        'at your': 'a tu',
        'destination': 'destino'
      }
    };
    
    const map = patterns[this.lang];
    if(!map) return text;
    
    let result = text;
    for(const [en, trans] of Object.entries(map)){
      const regex = new RegExp(en, 'gi');
      result = result.replace(regex, trans);
    }
    return result;
  },
  setLang(lang) {
    this.lang = lang;
    document.documentElement.lang = lang;
    localStorage.setItem('lang', lang);
  },
  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });
    // Update mode labels inside buttons
    document.querySelectorAll('.mode-btn .mode-label').forEach(el=>{
      const key = el.getAttribute('data-i18n');
      if(key) el.textContent = this.t(key);
    });
    // Re-apply dynamic texts if present
    if(app.lastSummary){ app.renderResumo(app.lastSummary); }
    if(app.lastInstructions){ app.renderInstrucoes(app.lastInstructions); }
    if(app.accepted){ app.updateTracking(); }
    // Re-render roteiro list if exists
    if(app.lastRoteiro){
      app.renderRoteiro(app.lastRoteiro.pois, app.lastRoteiro.prefs);
    }
  }
};

// Load saved language
const savedLang = localStorage.getItem('lang') || 'pt';
i18n.setLang(savedLang);
document.getElementById('langSelect').value = savedLang;

const app = {
  map: null,
  pois: [],
  markers: [],
  currentScreen: 'telaInicial',
  startLatLng: null,
  routingCtrl: null,
  mapExpanded: false,

  goToScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    this.currentScreen = screenId;
    const langSwitcher = document.querySelector('.lang-switcher');
    if(langSwitcher){
      langSwitcher.style.display = (screenId === 'telaInicial') ? 'block' : 'none';
    }
    if(screenId === 'telaResultado' && !this.map){
      setTimeout(() => this.initMap(), 100);
    }
    if(screenId === 'telaResultado'){
      setTimeout(()=> this.updateMapExpandButtons(), 150);
    }
  },

  initMap() {
    if(this.map) return;
    this.map = L.map('map').setView([-23.318, -51.26], 11);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap'
    }).addTo(this.map);
    this.map.on('click', (e) => {
      if(this.awaitingStart){
        this.setStart(e.latlng);
        this.awaitingStart = false;
        this.tryBuildRoute(true);
      }
    });
  },

  async loadPOIs() {
    const res = await fetch('assets/data/pois.json');
    this.pois = await res.json();
  },

  getPreferences() {
    const interesses = Array.from(document.querySelectorAll('input[name="interesse"]:checked')).map(i => i.value);
    const tempo = Number(document.getElementById('tempoSlider').value);
    return { interesses, tempo };
  },

  mapCategoria(interesse) {
    const map = {
      cultura: 'turismo',
      natureza: 'parque',
      gastronomia: 'restaurante',
      diversao: 'diversao'
    };
    return map[interesse] || interesse;
  },

  async gerarRoteiro() {
    const prefs = this.getPreferences();
    if(!prefs.interesses.length){
      alert(i18n.t('alert.selectInterest'));
      return;
    }

    this.goToScreen('telaResultado');
    document.getElementById('loadingState').style.display = 'block';
    document.getElementById('listaRoteiro').innerHTML = '';

    await new Promise(r => setTimeout(r, 800));

    // Filtrar POIs por interesse
    const categs = prefs.interesses.map(i => this.mapCategoria(i));
    let filtered = this.pois.filter(p => categs.includes(p.categoria));

    // Limitar por tempo (assumir ~45min por local)
    const maxPontos = Math.floor((prefs.tempo * 60) / 45);
    filtered = filtered.slice(0, maxPontos);

    document.getElementById('loadingState').style.display = 'none';
    if(!filtered.length){
      document.getElementById('listaRoteiro').innerHTML = `<p>${i18n.t('alert.noPlaces')}</p>`;
      return;
    }

    // Ordenar para facilitar o percurso e retornar ao início
    const ordered = this.buildCircularOrder(filtered);
    this.renderRoteiro(ordered, prefs);
  this.plotMarkers(ordered);
  this.tryBuildRoute(true);
    const actions = document.getElementById('routeActions');
    if(actions) actions.style.display='flex';
  },

  renderRoteiro(pois, prefs) {
    const lista = document.getElementById('listaRoteiro');
    lista.innerHTML = '';
    document.getElementById('tituloRoteiro').textContent = i18n.t('result.yourRoute', prefs.tempo);

    pois.forEach((p, i) => {
      const li = document.createElement('li');
      const cat = i18n.t(`category.${p.categoria}`) || p.categoria;
      li.innerHTML = `
        <div class="titulo">${i+1}. ${p.nome}</div>
        <div class="descricao">${cat} • ${p.duracaoMin} min • ${p.horario}</div>
      `;
      lista.appendChild(li);
    });
    
    // Armazenar para re-aplicar ao mudar idioma
    this.lastRoteiro = {pois, prefs};
  },

  plotMarkers(pois) {
    this.markers.forEach(m => this.map.removeLayer(m));
    this.markers = [];

    const icons = {
      turismo: '🏛️',
      restaurante: '🍽️',
      parque: '🌳',
      diversao: '🎡'
    };

    pois.forEach((p, i) => {
      const emoji = icons[p.categoria] || '📍';
      const badge = `<div style="position:relative;display:grid;place-items:center;width:34px;height:34px">
        <div style="font-size:22px;filter:drop-shadow(0 2px 4px rgba(0,0,0,.25))">${emoji}</div>
        <span style="position:absolute;bottom:-6px;right:-8px;background:#2563eb;color:#fff;border-radius:999px;font-size:12px;line-height:1;padding:4px 6px;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,.2)">${i+1}</span>
      </div>`;
      const icon = L.divIcon({ html: badge, className: '', iconSize: [34, 34] });
      const cat = i18n.t(`category.${p.categoria}`) || p.categoria;
      const marker = L.marker([p.lat, p.lng], {icon}).addTo(this.map)
        .bindPopup(`<strong>${i+1}. ${p.nome}</strong><br/>${cat}<br/>${p.duracaoMin} min`);
      this.markers.push(marker);
    });

    if(pois.length){
      const bounds = L.latLngBounds(pois.map(p => [p.lat, p.lng]));
      this.map.fitBounds(bounds, {padding: [50, 50]});
    }
    this.currentPois = pois;
  },

  setStart(latlng){
    this.startLatLng = L.latLng(latlng.lat, latlng.lng);
    if(this.startMarker){ this.map.removeLayer(this.startMarker); }
    this.startMarker = L.marker(this.startLatLng, {draggable:true}).addTo(this.map).bindPopup('Partida').openPopup();
    this.startMarker.on('dragend', (e)=>{
      this.startLatLng = e.target.getLatLng();
      this.tryBuildRoute(true);
    });
  },

  tryBuildRoute(closeLoop=false){
    const modo = this.getCurrentMode();
    if(!this.map || !this.currentPois || !this.currentPois.length) return;
    if(!this.startLatLng){
      // fallback: usar o primeiro ponto como referência central
      this.startLatLng = L.latLng(this.currentPois[0].lat, this.currentPois[0].lng);
    }
    // construir waypoints sequenciais, fechando o ciclo se solicitado
    const seq = this.currentPois.map(p=>L.latLng(p.lat,p.lng));
    const wps = [this.startLatLng, ...seq, ...(closeLoop ? [this.startLatLng] : [])];
    this.drawRoute(wps, modo);
  },

  buildCircularOrder(pois){
    if(!pois.length) return pois;
    const start = this.startLatLng ? {lat:this.startLatLng.lat, lng:this.startLatLng.lng} : {lat:pois[0].lat, lng:pois[0].lng};
    const remaining = [...pois];
    const route = [];
    let current = start;
    while(remaining.length){
      let bestIdx = 0, bestD = Infinity;
      for(let i=0;i<remaining.length;i++){
        const p = remaining[i];
        const d = this.haversine(current, {lat:p.lat, lng:p.lng});
        if(d < bestD){ bestD = d; bestIdx = i; }
      }
      const next = remaining.splice(bestIdx,1)[0];
      route.push(next);
      current = {lat: next.lat, lng: next.lng};
    }
    return route; // retorno ao início será feito nos waypoints
  },

  haversine(a,b){
    const R=6371, dLat=(b.lat-a.lat)*Math.PI/180, dLng=(b.lng-a.lng)*Math.PI/180;
    const s1=Math.sin(dLat/2)**2 + Math.cos(a.lat*Math.PI/180)*Math.cos(b.lat*Math.PI/180)*Math.sin(dLng/2)**2;
    return 2*R*Math.asin(Math.sqrt(s1));
  },

  drawRoute(waypoints, modo){
    // Para visual do percurso: usamos OSRM
    // foot -> foot; car/uber/transit -> car (apenas geometria/tempo base)
    const profile = (modo==='foot') ? 'foot' : 'car';
    this.clearRouting();
    const lineStyles = this.getLineStylesByMode(modo);
    this.routingCtrl = L.Routing.control({
      waypoints: waypoints,
      lineOptions: { styles: lineStyles, addWaypoints: false, extendToWaypoints: false, missingRouteTolerance: 5 },
      show: false,
      addWaypoints: false,
      draggableWaypoints: false,
      createMarker: () => null,
      router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1/',
        profile
      }),
      routeWhileDragging: false
    }).addTo(this.map);

    this.routingCtrl.on('routesfound', (e) => {
      const route = e.routes[0];
      const distanciaKm = route.summary.totalDistance / 1000;
      let duracaoMin = route.summary.totalTime / 60;
      const segmentos = waypoints.length-1;
      if(modo==='transit'){
        // Estimativa para ônibus: 18 km/h média + 8 min por conexão
        duracaoMin = (distanciaKm/18)*60 + Math.max(0, segmentos-1)*8;
      }
      const custo = this.estimateCost(modo, distanciaKm, duracaoMin, segmentos);
      this.renderResumo({modo, distanciaKm, duracaoMin, custo});
      if(modo==='transit'){
        document.getElementById('instrucoesRota').innerHTML = `<p>${i18n.t('instructions.transit')}</p>`;
      } else {
        this.renderInstrucoes(route);
      }

      // Direction arrows using PolylineDecorator, colored by mode
      try{
        if(this.arrowLayer){ this.map.removeLayer(this.arrowLayer); }
        const coords = route.coordinates.map(c=>[c.lat, c.lng]);
        const arrowColor = this.getModeColor(modo);
        this.arrowLayer = L.polylineDecorator(L.polyline(coords), {
          patterns: [
            { offset: 12, repeat: 50, symbol: L.Symbol.arrowHead({pixelSize: 10, polygon: true, pathOptions: {color:arrowColor, weight: 2, opacity:0.9}})}
          ]
        }).addTo(this.map);
      }catch{}
      this.pendingRoute = {waypoints, modo, route};
    });
  },

  clearRouting(){
    if(this.routingCtrl){
      try{ this.map.removeControl(this.routingCtrl); }catch{}
      this.routingCtrl = null;
    }
  },

  estimateCost(modo, distanciaKm, duracaoMin, segmentos){
    // Estimativas simples (configuráveis):
    // Uber: base R$4 + R$2.5/km + R$0.4/min
    // Carro: consumo 10 km/l, gasolina R$6.50/l
    // Ônibus: tarifa R$5.00 por embarque (estimado por segmentos)
    if(modo==='uber'){
      const base=4, porKm=2.5, porMin=0.4; return base + porKm*(distanciaKm||0) + porMin*(duracaoMin||0);
    }
    if(modo==='car'){
      const kmPorLitro=10, precoLitro=6.5; return (distanciaKm||0)/kmPorLitro * precoLitro;
    }
    if(modo==='transit'){
      const tarifa=5.0; return Math.max(1, segmentos) * tarifa;
    }
    return 0; // a pé
  },

  renderResumo({modo, distanciaKm, duracaoMin, custo}){
    const el = document.getElementById('resumoViagem');
    const modoStr = i18n.t(`mode.${modo}`) || modo;
    const distStr = distanciaKm? `${distanciaKm.toFixed(1)} km` : '—';
    const durStr = duracaoMin? `${Math.round(duracaoMin)} min` : '—';
    const custoStr = `R$ ${custo.toFixed(2)}`;
    el.innerHTML = `<strong>${i18n.t('summary.mode')}</strong>: ${modoStr} • <strong>${i18n.t('summary.distance')}</strong>: ${distStr} • <strong>${i18n.t('summary.time')}</strong>: ${durStr} • <strong>${i18n.t('summary.cost')}</strong>: ${custoStr}`;
    this.lastSummary = {modo, distanciaKm, duracaoMin, custo};
  },

  renderInstrucoes(route){
    const el = document.getElementById('instrucoesRota');
    const steps = [];
    route.instructions.forEach(inst => {
      steps.push(i18n.translateDirection(inst.text));
    });
    if(!steps.length && route.routes){
      // fallback para formatos diferentes da LRM
      try{
        route.routes[0].legs.forEach(leg=> leg.steps.forEach(s=> steps.push(i18n.translateDirection(s.maneuver.instruction))));
      }catch{}
    }
    if(!steps.length){ el.innerHTML = ''; return; }
    el.innerHTML = `<h3>${i18n.t('instructions.title')}</h3><ol>${steps.map(s=>`<li>${s}</li>`).join('')}</ol>`;
    this.lastInstructions = route;
  }
};

// Slider de tempo
document.getElementById('tempoSlider').addEventListener('input', (e) => {
  document.getElementById('tempoValor').textContent = e.target.value;
});

// Controles de viagem
document.getElementById('modoTransporte')?.addEventListener('change', ()=> app.tryBuildRoute(true));

// Mode switch buttons
document.querySelectorAll('.mode-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    document.querySelectorAll('.mode-btn').forEach(b=>{
      b.classList.toggle('active', b===btn);
      b.setAttribute('aria-selected', b===btn ? 'true' : 'false');
    });
    const mode = btn.getAttribute('data-mode');
    const select = document.getElementById('modoTransporte');
    if(select){ select.value = mode; }
    // subtle pulse on change
    const mapEl = document.getElementById('map');
    if(mapEl){
      mapEl.animate([
        { boxShadow: '0 0 0 0 rgba(37,99,235,0.0)' },
        { boxShadow: '0 0 0 12px rgba(37,99,235,0.15)' },
        { boxShadow: '0 0 0 0 rgba(37,99,235,0.0)' }
      ], { duration: 600, easing: 'ease-out' });
    }
    app.tryBuildRoute(true);
  });
});

// Helpers for mode visuals
app.getCurrentMode = function(){
  const active = document.querySelector('.mode-btn.active');
  return active?.getAttribute('data-mode') || document.getElementById('modoTransporte')?.value || 'car';
};

app.getModeColor = function(modo){
  return ({
    car: '#2563eb',
    uber: '#9333ea',
    foot: '#16a34a',
    transit: '#f59e0b'
  })[modo] || '#2563eb';
};

app.getLineStylesByMode = function(modo){
  const color = app.getModeColor(modo);
  const cls = `route-${modo}`;
  const baseOutline = { color: '#ffffff', weight: 10, opacity: 0.8, className: cls };
  if(modo === 'foot'){
    // dashed green
    return [ baseOutline, { color, weight: 6, opacity: 0.95, dashArray: '8 8', className: cls } ];
  }
  if(modo === 'transit'){
    // shorter dashes amber
    return [ baseOutline, { color, weight: 6, opacity: 0.95, dashArray: '4 8', className: cls } ];
  }
  if(modo === 'uber'){
    // solid purple with stronger opacity
    return [ baseOutline, { color, weight: 6, opacity: 1, className: cls } ];
  }
  // car default
  return [ baseOutline, { color, weight: 6, opacity: 0.95, className: cls } ];
};
document.getElementById('btnUsarLocalizacao')?.addEventListener('click', ()=>{
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(pos=>{
      app.setStart({lat: pos.coords.latitude, lng: pos.coords.longitude});
      app.map.setView([pos.coords.latitude, pos.coords.longitude], 13);
      app.tryBuildRoute(true);
    }, ()=> alert(i18n.t('alert.noLocation')));
  }
});
document.getElementById('btnDefinirPartida')?.addEventListener('click', ()=>{
  app.awaitingStart = true;
  alert(i18n.t('alert.clickMap'));
});

// Confirmar plano: mostra mini-mapa recolhido e permite expandir/minimizar
document.getElementById('btnConfirmarPlano')?.addEventListener('click', ()=>{
  const mapContainer = document.getElementById('resultMapContainer');
  if(mapContainer){
    mapContainer.classList.remove('hidden');
  }
});
document.getElementById('btnExpandirMapa')?.addEventListener('click', ()=>{
  const mapEl = document.getElementById('resultMapContainer');
  if(!mapEl) return;
  // Expandir para largura total (desktop) ou aumentar altura (mobile/1 coluna)
  if(app.isSingleColumnLayout()){
    mapEl.style.gridColumn = '';
    mapEl.style.gridRow = '1 / -1'; // ocupar as duas linhas
    mapEl.style.height = '';
  } else {
    mapEl.style.gridColumn = '1 / -1';
    mapEl.style.height = '';
  }
  app.mapExpanded = true;
  app.updateMapExpandButtons();
  setTimeout(()=> app.map?.invalidateSize(), 50);
});
document.getElementById('btnMinimizarMapa')?.addEventListener('click', ()=>{
  const mapEl = document.getElementById('resultMapContainer');
  if(!mapEl) return;
  // Voltar ao layout padrão
  mapEl.style.gridColumn = '';
  mapEl.style.gridRow = '';
  mapEl.style.height = '';
  app.mapExpanded = false;
  app.updateMapExpandButtons();
  setTimeout(()=> app.map?.invalidateSize(), 50);
});

// Aceitar rota e acompanhamento
document.getElementById('btnAceitarRota')?.addEventListener('click', ()=>{
  if(!app.pendingRoute){ alert(i18n.t('alert.generateFirst')); return; }
  app.accepted = {
    index: 0,
    waypoints: app.pendingRoute.waypoints,
    pois: app.currentPois,
    modo: app.pendingRoute.modo
  };
  const painel = document.getElementById('painelAcompanhamento');
  const actions = document.getElementById('routeActions');
  if(painel) painel.style.display='block';
  if(actions) actions.style.display='none';
  app.updateTracking();
  app.startWatchPosition();
});

document.getElementById('btnProximaParada')?.addEventListener('click', ()=>{
  if(!app.accepted) return;
  app.accepted.index = Math.min(app.accepted.index + 1, app.accepted.pois.length - 1);
  app.updateTracking();
});

document.getElementById('btnEncerrar')?.addEventListener('click', ()=>{
  app.stopWatchPosition();
  const painel = document.getElementById('painelAcompanhamento');
  if(painel) painel.style.display='none';
});

app.updateTracking = function(){
  if(!app.accepted) return;
  const st = document.getElementById('statusRoteiro');
  const idx = app.accepted.index;
  const pois = app.accepted.pois;
  const items = pois.map((p,i)=>{
    const done = i18n.t('tracking.done');
    const arrow = i18n.t('tracking.arrow');
    const curr = i18n.t('tracking.current');
    if(i < idx) return `<div class="done">${done} ${i+1}. ${p.nome}</div>`;
    if(i === idx) return `<div class="next">${arrow} ${i+1}. ${p.nome} ${curr}</div>`;
    return `<div>${i+1}. ${p.nome}</div>`;
  }).join('');
  if(st) st.innerHTML = items + `<div style="margin-top:8px;color:#64748b">${i18n.t('tracking.returnMsg')}</div>`;
};

app.startWatchPosition = function(){
  if(!navigator.geolocation) return;
  app.watchId = navigator.geolocation.watchPosition((pos)=>{
    if(!app.accepted) return;
    const idx = app.accepted.index;
    const next = app.accepted.pois[idx];
    if(!next) return;
    const d = app.haversine({lat: pos.coords.latitude, lng: pos.coords.longitude}, {lat: next.lat, lng: next.lng});
    if(d*1000 < 100){ // 100m
      app.accepted.index = Math.min(idx+1, app.accepted.pois.length-1);
      app.updateTracking();
    }
  });
};

app.stopWatchPosition = function(){
  if(app.watchId){
    navigator.geolocation.clearWatch(app.watchId);
    app.watchId = null;
  }
};

// Init
(async function main(){
  await app.loadPOIs();
  // Sync initial mode button with select value
  const initialMode = document.getElementById('modoTransporte')?.value || 'car';
  document.querySelectorAll('.mode-btn').forEach(b=>{
    const isActive = b.getAttribute('data-mode') === initialMode;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
  i18n.apply();
})();

// Layout helpers e controle dos botões expandir/minimizar
app.isSingleColumnLayout = function(){
  const cont = document.querySelector('.result-container');
  if(!cont) return window.innerWidth <= 768;
  try{
    const styles = window.getComputedStyle(cont);
    const cols = styles.getPropertyValue('grid-template-columns');
    return cols.trim().split(' ').length === 1; // uma única coluna
  }catch{ return window.innerWidth <= 768; }
};

app.updateMapExpandButtons = function(){
  const btnExp = document.getElementById('btnExpandirMapa');
  const btnMin = document.getElementById('btnMinimizarMapa');
  if(!btnExp || !btnMin) return;
  btnExp.disabled = !!app.mapExpanded;
  btnMin.disabled = !app.mapExpanded;
};

// Language switcher
document.getElementById('langSelect')?.addEventListener('change', (e) => {
  i18n.setLang(e.target.value);
  i18n.apply();
});
