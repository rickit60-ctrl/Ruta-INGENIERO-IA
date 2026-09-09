const months=[
{id:1,range:'Ago–Sep 2026',title:'Base de programación',stack:'Python básico, lógica, debugging y terminal'},
{id:2,range:'Sep–Oct 2026',title:'Código y datos',stack:'Python intermedio, Git/GitHub, SQL y ETL'},
{id:3,range:'Oct–Nov 2026',title:'Backend developer',stack:'HTTP, REST, JSON, FastAPI y persistencia'},
{id:4,range:'Nov–Dic 2026',title:'Ingeniería de aplicaciones',stack:'Auth, testing, arquitectura y Docker'},
{id:5,range:'Dic 2026–Ene 2027',title:'IA aplicada',stack:'ML, Azure AI, Vertex AI, Bedrock y LLM APIs'},
{id:6,range:'Ene–Feb 2027',title:'RAG empresarial',stack:'Embeddings, búsqueda vectorial, RAG y Copilot Studio'},
{id:7,range:'Feb–Mar 2027',title:'Agentes seguros',stack:'Tools, MCP, ADK, A2A, permisos y evaluaciones'},
{id:8,range:'Mar–Abr 2027',title:'Producción y carrera',stack:'Kubernetes, CI/CD, observabilidad y portafolio'}
];

const tasks=[
['T01',1,'Python','Sintaxis y tipos','Variables, tipos, operadores y None','20 ejercicios cortos',6],
['T02',1,'Python','Control de flujo','if/elif/else, for y while','Resolver reglas reales de soporte',8],
['T03',1,'Python','Estructuras de datos','Listas, diccionarios, tuplas y sets','Inventario en memoria',8],
['T04',1,'Python','Funciones','Parámetros, return, scope y funciones pequeñas','Refactor de ejercicios',10],
['T05',1,'Python','Errores y debugging','try/except, tracebacks y debugging en VS Code','Diagnosticar 10 errores',8],
['T06',1,'Python','Archivos y JSON','TXT, CSV, JSON y pathlib','Procesador de CSV',8],
['T07',2,'Python','Módulos y POO básica','Imports, paquetes, clases, objetos y métodos','Organizar una app en módulos',8],
['T08',2,'Git','Git y GitHub','Commits, ramas, merge, PR, conflictos y .gitignore','Repositorio con PR limpio',10],
['T09',2,'SQL','SQL CRUD','SELECT, INSERT, UPDATE, DELETE, WHERE y ORDER BY','Gestión IT con PostgreSQL',10],
['T10',2,'SQL','Relaciones','PK, FK, JOIN, GROUP BY, índices y transacciones','Modelo relacional simple',12],
['T11',3,'Web','HTTP, REST y JSON','Requests, responses, status, headers y métodos','Consumir dos APIs públicas',8],
['T12',3,'Backend','FastAPI','Routes, schemas, validación y services','API CRUD documentada',18],
['T13',3,'Backend','Persistencia','ORM, conexión a BD y migraciones','API conectada a PostgreSQL',14],
['T14',4,'Seguridad','Autenticación y permisos','Hashing, JWT/sessions, RBAC y secrets','Login con roles',16],
['T15',4,'Calidad','Testing','pytest, pruebas unitarias y de integración','Suite mínima de pruebas',14],
['T16',4,'Ingeniería','Logging y configuración','Logs, .env, ambientes y manejo de errores','Configuración limpia por ambiente',8],
['T17',4,'DevOps','Docker','Dockerfile, imágenes, contenedores, Compose y volúmenes','Dockerizar aplicación y BD',16],
['T18',5,'Cloud','Azure base','Deploy, storage, Key Vault, identidad y monitoreo','Desplegar backend',18],
['T19',5,'IA','Fundamentos de IA','AI, ML, DL, NLP, LLM, training, inference y evals','Mapa conceptual y quiz',10],
['T20',5,'LLM','LLM APIs','Prompting programático, tokens, contexto, errores y costos','Integrar LLM a una API',14],
['T21',5,'LLM','Structured outputs','Schemas, JSON y validación','Clasificador de tickets',10],
['T22',6,'RAG','Embeddings','Vectores, similitud y búsqueda semántica','Buscador semántico',12],
['T23',6,'RAG','Pipeline RAG','Chunking, retrieval, citas y contexto','IT Knowledge Assistant',22],
['T24',6,'RAG','Evaluación RAG','Relevancia, groundedness y test sets','Evaluar 20 preguntas',14],
['T25',7,'Agents','Tools y function calling','Tools, schemas, loops y estado','Agente con dos tools',18],
['T26',7,'Agents','MCP y workflows','MCP, orquestación y aprobación humana','Service Desk Agent',18],
['T27',7,'AI Security','Seguridad de IA','Prompt injection, leakage, RBAC, PII y tool auth','Threat model y controles',16],
['T28',8,'Enterprise AI','Observabilidad y CI/CD','Monitoring, tracing, evals y deployment pipeline','Pipeline y dashboard',16],
['T29',8,'Enterprise AI','Arquitectura final','Backend, auth, RAG, agentes, auditoría y cloud','Enterprise AI Assistant',32],
['T30',8,'Carrera','Defensa técnica','Explicar arquitectura, trade-offs, bugs y seguridad','Demo grabada y mock interview',16],
['T31',4,'Arquitectura','Arquitectura de software','Capas, modularidad, SOLID, patrones, contratos y trade-offs','ADR y diagrama C4',12],
['T32',4,'Datos','ETL','Extracción, limpieza, transformación, carga e idempotencia','Pipeline CSV/API a PostgreSQL',12],
['T33',5,'Machine Learning','Fundamentos de ML','Supervisado, features, train/test, métricas y overfitting','Notebook con modelo base',14],
['T34',5,'Google Cloud AI','Vertex AI','Model Garden, Gemini, embeddings, RAG y endpoints','Prototipo en Vertex AI',12],
['T35',5,'AWS AI','Amazon Bedrock','Foundation models, Knowledge Bases, Agents, Guardrails e IAM','Prototipo en Bedrock',12],
['T36',6,'Microsoft AI','Azure Copilot Studio','Topics, actions, connectors, knowledge y gobierno','Agente con aprobación humana',14],
['T37',7,'Agents','Google ADK','Agents, tools, sesiones, estado, callbacks y evaluación','Agente Python con tools',14],
['T38',7,'Agents','Protocolo A2A','Agent cards, descubrimiento, tareas, mensajes y seguridad','Dos agentes interoperando',12],
['T39',8,'DevOps','Kubernetes','Pods, deployments, services, ingress, secrets y scaling','Desplegar API y worker',18]
].map(([id,month,area,title,learn,evidence,hours])=>({id,month,area,title,learn,evidence,hours}));

const certifications=[
['AZ-900','Microsoft Azure Fundamentals','Microsoft','Alta','Mes 2–3'],
['GHF','GitHub Foundations','GitHub','Alta','Mes 2–3'],
['DP-900','Azure Data Fundamentals','Microsoft','Recomendada','Mes 3–4'],
['PCAP','Certified Associate Python Programmer','Python Institute','Opcional','Mes 3–4'],
['AI-901','Azure AI Fundamentals','Microsoft','Crítica','Mes 5'],
['AIF-C01','AWS Certified AI Practitioner','AWS','Opcional','Mes 5–7'],
['Applied Skill','Build an agent in Copilot Studio','Microsoft','Recomendada','Mes 7–8'],
['AI-103','Azure AI Apps and Agents Developer Associate','Microsoft','Crítica','Mes 7–8'],
['AB-620','AI Agent Builder Associate','Microsoft','Diferenciadora','Mes 8 o después'],
['KCNA','Kubernetes and Cloud Native Associate','Linux Foundation','Post-ruta','Después de la ruta'],
['ACTIONS','GitHub Actions Certification','GitHub','Opcional','Mes 6–8'],
['N/A','Vertex AI + Bedrock + MCP + ADK + A2A','Portafolio','Proyecto','Mes 5–8']
].map(([code,title,provider,priority,month])=>({code,title,provider,priority,month}));

const store={
  completed:new Set(JSON.parse(localStorage.getItem('rutaAI.completed')||'[]')),
  logs:JSON.parse(localStorage.getItem('rutaAI.logs')||'[]'),
  filter:'all'
};
const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
function save(){localStorage.setItem('rutaAI.completed',JSON.stringify([...store.completed]));localStorage.setItem('rutaAI.logs',JSON.stringify(store.logs));}
function toast(msg){const el=$('#toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1700)}
function go(view){$$('.view,.nav-btn').forEach(el=>el.classList.remove('active'));$(`#${view}`).classList.add('active');$(`.nav-btn[data-view="${view}"]`).classList.add('active');scrollTo({top:0,behavior:'smooth'})}
function renderDashboard(){
  const done=store.completed.size,pct=Math.round(done/tasks.length*100),next=tasks.find(t=>!store.completed.has(t.id))||tasks.at(-1),month=next?.month||8;
  $('#totalPercent').textContent=`${pct}%`;$('#doneCount').textContent=`${done}/${tasks.length}`;$('#currentMonth').textContent=month;$('#monthRange').textContent=months[month-1].range;
  $('#orbit').style.strokeDashoffset=302-(302*pct/100);
  $('#nextTask').innerHTML=`<span class="task-number">${next.id.replace('T','')}</span><div><span class="task-meta">MES ${next.month} · ${next.area}</span><h3>${next.title}</h3><p>${next.evidence}</p></div>`;
  $('#monthStrip').innerHTML=months.map(m=>{const group=tasks.filter(t=>t.month===m.id),d=group.filter(t=>store.completed.has(t.id)).length;return `<button class="month-pill ${d===group.length?'done':''}" data-month="${m.id}"><strong>Mes ${m.id}</strong><span>${d}/${group.length} · ${m.title}</span></button>`}).join('');
  const uniqueDates=[...new Set(store.logs.map(l=>l.date))].sort().reverse();let streak=0;if(uniqueDates.length){let cursor=new Date();cursor.setHours(0,0,0,0);for(const d of uniqueDates){const date=new Date(`${d}T00:00:00`);const diff=Math.round((cursor-date)/86400000);if(diff<=1){streak++;cursor=date}else break}}$('#streak').textContent=`${streak} día${streak===1?'':'s'}`;
  $$('.month-pill').forEach(b=>b.onclick=()=>{store.filter=Number(b.dataset.month);go('ruta');renderTasks()});
}
function renderFilters(){ $('#monthFilters').innerHTML=`<button class="filter-btn ${store.filter==='all'?'active':''}" data-filter="all">Todos</button>`+months.map(m=>`<button class="filter-btn ${store.filter===m.id?'active':''}" data-filter="${m.id}">Mes ${m.id}</button>`).join('');$$('.filter-btn').forEach(b=>b.onclick=()=>{store.filter=b.dataset.filter==='all'?'all':Number(b.dataset.filter);renderFilters();renderTasks()})}
function renderTasks(){renderFilters();const list=store.filter==='all'?tasks:tasks.filter(t=>t.month===store.filter);$('#taskList').innerHTML=list.map(t=>`<article class="task-card ${store.completed.has(t.id)?'completed':''}"><input class="check" type="checkbox" data-id="${t.id}" ${store.completed.has(t.id)?'checked':''} aria-label="Marcar ${t.title} como completado"><div><span class="task-meta">${t.id} · MES ${t.month} · ${t.area}</span><h3>${t.title}</h3><p>${t.learn}</p><p class="task-meta">Evidencia: ${t.evidence}</p></div><span class="task-hours">${t.hours} h</span></article>`).join('');$$('.check').forEach(c=>c.onchange=()=>{c.checked?store.completed.add(c.dataset.id):store.completed.delete(c.dataset.id);save();renderTasks();renderDashboard();toast(c.checked?'Competencia completada':'Competencia reabierta')})}
function renderCerts(){ $('#certList').innerHTML=certifications.map(c=>`<article class="cert-card"><span class="priority">${c.priority}</span><span class="cert-meta">${c.provider} · ${c.month}</span><h3>${c.title}</h3><span class="cert-code">${c.code}</span></article>`).join('') }
function renderLogs(){const list=[...store.logs].sort((a,b)=>b.date.localeCompare(a.date));$('#logList').innerHTML=list.length?list.map(l=>`<article class="log-item"><div><strong>${l.area} · ${l.minutes} min</strong><span>${l.note||'Sesión registrada'}</span></div><span>${new Date(`${l.date}T12:00:00`).toLocaleDateString('es-DO',{day:'2-digit',month:'short'})}</span></article>`).join(''):'<div class="log-empty">Aún no tienes sesiones registradas.</div>';renderDashboard()}
$$('.nav-btn').forEach(b=>b.onclick=()=>go(b.dataset.view));$$('[data-go]').forEach(b=>b.onclick=()=>go(b.dataset.go));
$('#logDate').value=new Date().toISOString().slice(0,10);$('#logForm').onsubmit=e=>{e.preventDefault();store.logs.push({date:$('#logDate').value,area:$('#logArea').value,minutes:Number($('#logMinutes').value),note:$('#logNote').value.trim()});save();$('#logNote').value='';renderLogs();toast('Sesión guardada')};
$('#clearLogs').onclick=()=>{if(confirm('¿Quieres borrar toda la bitácora de este dispositivo?')){store.logs=[];save();renderLogs();toast('Bitácora eliminada')}};
const theme=localStorage.getItem('rutaAI.theme');if(theme==='light')document.body.classList.add('light');$('#themeBtn').onclick=()=>{document.body.classList.toggle('light');localStorage.setItem('rutaAI.theme',document.body.classList.contains('light')?'light':'dark')};
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js'));
renderDashboard();renderTasks();renderCerts();renderLogs();
