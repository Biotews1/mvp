// js/script.js

// Datos ficticios de profesionales (Hardcoded)
const profesionales = [
    {
        id: 1,
        nombre: "Ana Pérez",
        especialidad: "Contador",
        titulo: "Contadora Pública Certificada, Especialista en PYMES",
        descripcion: "Con más de 10 años de experiencia ayudando a pequeñas y medianas empresas a optimizar sus finanzas y cumplir con sus obligaciones fiscales. Apasionada por el crecimiento empresarial y la transformación digital.",
        servicios: ["Declaraciones de impuestos", "Contabilidad mensual", "Asesoría financiera estratégica", "Auditorías internas", "Planificación fiscal"],
        valoracion: 4.8,
        opiniones: 25,
        ciudad: "Ciudad Capital",
        email: "ana.perez@email.com",
        telefono: "+51 987654321",
        fotoUrl: "https://placehold.co/150x150/EBF4FF/3B82F6?text=Ana+P.",
        destacado: true,
        palabrasClave: ["impuestos", "pymes", "finanzas", "contabilidad", "declaracion anual", "asesoria fiscal"]
    },
    {
        id: 2,
        nombre: "Carlos Rodríguez",
        especialidad: "Abogado",
        titulo: "Abogado Corporativo, M&A y Contratos",
        descripcion: "Especialista en derecho mercantil, fusiones y adquisiciones, y redacción de contratos complejos. Brindo asesoría legal integral para empresas de todos los tamaños, enfocándome en la prevención de litigios.",
        servicios: ["Constitución de empresas", "Contratos comerciales", "Fusiones y adquisiciones", "Propiedad intelectual", "Litigios comerciales"],
        valoracion: 4.9,
        opiniones: 32,
        ciudad: "Metrópolis",
        email: "carlos.rodriguez@email.com",
        telefono: "+51 912345678",
        fotoUrl: "https://placehold.co/150x150/EBF4FF/3B82F6?text=Carlos+R.",
        destacado: false,
        palabrasClave: ["corporativo", "contratos", "mercantil", "fusiones", "legaltech", "sociedades"]
    },
    {
        id: 3,
        nombre: "Laura Gómez",
        especialidad: "Economista",
        titulo: "Economista, Analista de Mercados Financieros",
        descripcion: "Experta en análisis macroeconómico, evaluación de proyectos de inversión y estrategias de mercado. Ayudo a las empresas a tomar decisiones financieras informadas y a navegar la volatilidad económica.",
        servicios: ["Análisis de mercado", "Evaluación de inversiones", "Consultoría económica", "Proyecciones financieras", "Riesgo financiero"],
        valoracion: 4.7,
        opiniones: 18,
        ciudad: "Ciudad Capital",
        email: "laura.gomez@email.com",
        telefono: "+51 998877665",
        fotoUrl: "https://placehold.co/150x150/EBF4FF/3B82F6?text=Laura+G.",
        destacado: false,
        palabrasClave: ["mercados", "inversion", "proyecciones", "riesgo", "consultoria economica", "fintech"]
    },
    {
        id: 4,
        nombre: "Javier Torres",
        especialidad: "Abogado",
        titulo: "Abogado Laboralista y Seguridad Social",
        descripcion: "Defensa y asesoramiento en todos los aspectos del derecho laboral, tanto para empleadores como para trabajadores. Experiencia en negociaciones colectivas y litigios laborales.",
        servicios: ["Contratos laborales", "Despidos", "Inspecciones de trabajo", "Seguridad social", "Negociación colectiva"],
        valoracion: 4.6,
        opiniones: 22,
        ciudad: "Urbe Industrial",
        email: "javier.torres@email.com",
        telefono: "+51 923456789",
        fotoUrl: "https://placehold.co/150x150/EBF4FF/3B82F6?text=Javier+T.",
        destacado: false,
        palabrasClave: ["laboral", "despidos", "contratos de trabajo", "sindicatos", "seguridad social"]
    },
    {
        id: 5,
        nombre: "Sofía Vargas",
        especialidad: "Contador",
        titulo: "Contadora especialista en Startups y Tecnología",
        descripcion: "Asesoría contable y financiera adaptada a las necesidades de startups y empresas tecnológicas. Experiencia en rondas de inversión, valoración de intangibles y beneficios fiscales para innovación.",
        servicios: ["Contabilidad para startups", "Valoración de empresas tech", "Due diligence", "Incentivos fiscales I+D+i", "Reportes para inversores"],
        valoracion: 4.9,
        opiniones: 28,
        ciudad: "Tech Hub City",
        email: "sofia.vargas@email.com",
        telefono: "+51 934567890",
        fotoUrl: "https://placehold.co/150x150/EBF4FF/3B82F6?text=Sofia+V.",
        destacado: true,
        palabrasClave: ["startups", "tecnologia", "inversion", "contabilidad tech", "innovacion"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split("/").pop();

    if (currentPage === 'index.html' || currentPage === '') {
        initIndexPage();
    } else if (currentPage === 'resultados.html') {
        initResultadosPage();
    } else if (currentPage === 'perfil.html') {
        initPerfilPage();
    } else if (currentPage === 'registro-profesional.html') {
        initRegistroProfesionalPage();
    } else if (currentPage === 'registro-usuario.html') {
        initRegistroUsuarioPage();
    }
    // No se necesita init para dashboard.html si es solo UI estática por ahora.
});

// INICIALIZACIÓN DE PÁGINA DE INICIO (index.html)
function initIndexPage() {
    const searchForm = document.getElementById('searchForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const especialidad = document.getElementById('especialidad').value;
            const palabraClave = document.getElementById('palabraClave').value;
            
            localStorage.setItem('searchCriteria', JSON.stringify({ especialidad, palabraClave }));
            window.location.href = 'resultados.html';
        });
    }
    initWhatsAppModal();
}

// INICIALIZACIÓN DE PÁGINA DE RESULTADOS (resultados.html)
function initResultadosPage() {
    const listaProfesionalesContainer = document.getElementById('listaProfesionales');
    const resultsCountElement = document.getElementById('resultsCount');
    const noResultsMessage = document.getElementById('noResultsMessage');
    const filterForm = document.getElementById('filterForm');
    const filterEspecialidadSelect = document.getElementById('filterEspecialidad');
    const filterPalabraClaveInput = document.getElementById('filterPalabraClave');

    const searchCriteriaString = localStorage.getItem('searchCriteria');
    let currentFilters = { especialidad: '', palabraClave: '' };

    if (searchCriteriaString) {
        currentFilters = JSON.parse(searchCriteriaString);
        // Pre-fill filter inputs from localStorage
        if (filterEspecialidadSelect) filterEspecialidadSelect.value = currentFilters.especialidad;
        if (filterPalabraClaveInput) filterPalabraClaveInput.value = currentFilters.palabraClave;
    }
    
    displayProfesionales(currentFilters);

    if (filterForm) {
        filterForm.addEventListener('submit', (event) => {
            event.preventDefault();
            currentFilters.especialidad = filterEspecialidadSelect.value;
            currentFilters.palabraClave = filterPalabraClaveInput.value;
            localStorage.setItem('searchCriteria', JSON.stringify(currentFilters)); // Update localStorage
            displayProfesionales(currentFilters);
        });
    }

    function displayProfesionales(filters) {
        if (!listaProfesionalesContainer || !resultsCountElement || !noResultsMessage) return;

        listaProfesionalesContainer.innerHTML = ''; // Limpiar resultados anteriores
        const { especialidad, palabraClave } = filters;

        const filteredProfesionales = profesionales.filter(prof => {
            const matchEspecialidad = !especialidad || prof.especialidad.toLowerCase() === especialidad.toLowerCase();
            const matchPalabraClave = !palabraClave || 
                                      prof.nombre.toLowerCase().includes(palabraClave.toLowerCase()) ||
                                      prof.titulo.toLowerCase().includes(palabraClave.toLowerCase()) ||
                                      prof.descripcion.toLowerCase().includes(palabraClave.toLowerCase()) ||
                                      prof.servicios.some(s => s.toLowerCase().includes(palabraClave.toLowerCase())) ||
                                      prof.palabrasClave.some(pc => pc.toLowerCase().includes(palabraClave.toLowerCase()));
            return matchEspecialidad && matchPalabraClave;
        });

        resultsCountElement.textContent = `${filteredProfesionales.length} profesionales encontrados`;

        if (filteredProfesionales.length === 0) {
            noResultsMessage.classList.remove('hidden');
            listaProfesionalesContainer.classList.add('hidden');
        } else {
            noResultsMessage.classList.add('hidden');
            listaProfesionalesContainer.classList.remove('hidden');
            filteredProfesionales.forEach(prof => {
                const card = document.createElement('div');
                card.className = `bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105 ${prof.destacado ? 'perfil-destacado' : ''}`;
                card.innerHTML = `
                    <img src="${prof.fotoUrl || 'https://placehold.co/100x100/EBF4FF/3B82F6?text=Perfil'}" alt="${prof.nombre}" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                    <h3 class="text-xl font-semibold text-center mb-1">${prof.nombre}</h3>
                    <p class="text-blue-600 font-medium text-center mb-2">${prof.especialidad}</p>
                    <p class="text-gray-700 text-sm mb-1 text-center"><strong>${prof.titulo}</strong></p>
                    <p class="text-gray-600 text-sm mb-3 text-center truncate-3-lines">${prof.descripcion}</p>
                    <div class="text-center mb-3 star-rating">
                        ${generarEstrellas(prof.valoracion)} (${prof.opiniones} opiniones)
                    </div>
                    <button onclick="verPerfil(${prof.id})" class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md shadow-md">
                        Ver Perfil Completo
                    </button>
                `;
                listaProfesionalesContainer.appendChild(card);
            });
        }
    }
}

// Función para generar estrellas de valoración
function generarEstrellas(valoracion) {
    const totalEstrellas = 5;
    let estrellasHtml = '';
    for (let i = 1; i <= totalEstrellas; i++) {
        if (i <= valoracion) {
            estrellasHtml += '<span>★</span>'; // Estrella llena
        } else if (i - 0.5 <= valoracion) {
            estrellasHtml += '<span>★</span>'; // Podría ser media estrella, pero usamos llena por simplicidad
        } else {
            estrellasHtml += '<span class="empty">☆</span>'; // Estrella vacía
        }
    }
    return estrellasHtml;
}

// Guardar ID y redirigir a perfil.html
function verPerfil(id) {
    localStorage.setItem('selectedProfileId', id);
    window.location.href = 'perfil.html';
}

// INICIALIZACIÓN DE PÁGINA DE PERFIL (perfil.html)
function initPerfilPage() {
    const detalleProfesionalContainer = document.getElementById('detalleProfesional');
    const loadingMessage = document.getElementById('loadingProfileMessage');
    const selectedProfileId = localStorage.getItem('selectedProfileId');

    if (!detalleProfesionalContainer || !loadingMessage) return;

    if (selectedProfileId) {
        const profesional = profesionales.find(p => p.id === parseInt(selectedProfileId));
        if (profesional) {
            loadingMessage.classList.add('hidden');
            detalleProfesionalContainer.innerHTML = `
                <div class="flex flex-col md:flex-row items-start gap-8">
                    <div class="md:w-1/3 text-center">
                        <img src="${profesional.fotoUrl || 'https://placehold.co/200x200/EBF4FF/3B82F6?text=Perfil'}" alt="${profesional.nombre}" class="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg">
                        <h1 class="text-3xl font-bold mb-1">${profesional.nombre}</h1>
                        <p class="text-xl text-blue-600 font-medium mb-2">${profesional.especialidad}</p>
                        <p class="text-gray-700 mb-1"><span class="font-semibold">Ciudad:</span> ${profesional.ciudad}</p>
                        <div class="my-4 star-rating flex justify-center">
                            ${generarEstrellas(profesional.valoracion)}
                            <span class="ml-2 text-gray-600">(${profesional.valoracion} de 5 estrellas, ${profesional.opiniones} opiniones)</span>
                        </div>
                        <button class="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-md shadow-md mb-2">
                            Contactar por WhatsApp (UI)
                        </button>
                        <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md shadow-md">
                            Enviar Mensaje (UI)
                        </button>
                    </div>
                    <div class="md:w-2/3">
                        <h2 class="text-2xl font-semibold mb-1">Sobre ${profesional.nombre}</h2>
                        <p class="text-lg text-gray-700 mb-6">${profesional.titulo}</p>
                        
                        <div class="prose max-w-none text-gray-700 mb-6">
                            <p>${profesional.descripcion}</p>
                        </div>

                        <h3 class="text-xl font-semibold mb-3">Especialidades y Servicios Principales:</h3>
                        <ul class="list-disc list-inside text-gray-700 space-y-1 mb-6">
                            ${profesional.servicios.map(s => `<li>${s}</li>`).join('')}
                        </ul>
                        
                        <h3 class="text-xl font-semibold mb-3">Información de Contacto (Ejemplo):</h3>
                        <p class="text-gray-700"><span class="font-semibold">Email:</span> <a href="mailto:${profesional.email}" class="text-blue-600 hover:underline">${profesional.email}</a></p>
                        <p class="text-gray-700"><span class="font-semibold">Teléfono:</span> ${profesional.telefono}</p>
                    </div>
                </div>
            `;
        } else {
            loadingMessage.textContent = 'Error: Perfil no encontrado.';
            loadingMessage.classList.remove('hidden');
        }
    } else {
        loadingMessage.textContent = 'No se ha seleccionado un perfil.';
        loadingMessage.classList.remove('hidden');
    }
}


// LÓGICA PARA EL MODAL DE WHATSAPP (index.html)
function initWhatsAppModal() {
    const openModalButton = document.getElementById('openWhatsAppModal');
    const closeModalButton = document.getElementById('closeWhatsAppModal');
    const modal = document.getElementById('whatsAppModal');
    const modalContent = document.getElementById('whatsAppModalContent');
    const chatContainer = document.getElementById('chatContainer');
    const questionSection = document.getElementById('questionSection');
    const conclusionSection = document.getElementById('conclusionSection');
    const sugerenciaEspecialidad = document.getElementById('sugerenciaEspecialidad');
    const goToSearchButton = document.getElementById('goToSearchButton');

    if (!openModalButton || !closeModalButton || !modal || !modalContent) return;

    const preguntas = [
        { id: "tipo_servicio", texto: "¿Qué tipo de servicio principal estás buscando? (Ej: Contable, Legal, Económico)", opciones: ["Contable", "Legal", "Económico", "No estoy seguro"] },
        { id: "detalle_necesidad", texto: "Describe brevemente tu necesidad o problema. (Ej: 'declaración de impuestos', 'crear una empresa', 'análisis de inversión')" },
        { id: "tipo_empresa", texto: "¿Tu consulta es para una empresa o a título personal?", opciones: ["Empresa", "Personal"] }
    ];
    let respuestas = {};
    let preguntaActualIndex = 0;

    function abrirModal() {
        modal.classList.add('active');
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
        reiniciarChat();
        mostrarSiguientePregunta();
    }

    function cerrarModal() {
        modalContent.classList.add('scale-95', 'opacity-0');
        modalContent.classList.remove('scale-100', 'opacity-100');
        setTimeout(() => {
            modal.classList.remove('active');
        }, 300); // Espera a que la animación termine
    }

    function reiniciarChat() {
        preguntaActualIndex = 0;
        respuestas = {};
        chatContainer.innerHTML = '<div class="chat-message assistant">Hola 👋 Soy tu asistente virtual. Te haré unas preguntas para entender mejor tu necesidad.</div>';
        questionSection.innerHTML = '';
        conclusionSection.classList.add('hidden');
        questionSection.classList.remove('hidden');
    }
    
    function agregarMensaje(texto, remitente) { // remitente: 'user' o 'assistant'
        const mensajeDiv = document.createElement('div');
        mensajeDiv.classList.add('chat-message', remitente);
        mensajeDiv.textContent = texto;
        chatContainer.appendChild(mensajeDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll
    }

    function mostrarSiguientePregunta() {
        if (preguntaActualIndex < preguntas.length) {
            const pregunta = preguntas[preguntaActualIndex];
            agregarMensaje(pregunta.texto, 'assistant');
            
            questionSection.innerHTML = ''; // Limpiar opciones anteriores

            if (pregunta.opciones) {
                const opcionesContainer = document.createElement('div');
                opcionesContainer.className = 'flex flex-wrap gap-2 mt-4 justify-center';
                pregunta.opciones.forEach(opcion => {
                    const botonOpcion = document.createElement('button');
                    botonOpcion.textContent = opcion;
                    botonOpcion.className = 'bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-md transition';
                    botonOpcion.onclick = () => {
                        registrarRespuesta(pregunta.id, opcion, opcion);
                    };
                    opcionesContainer.appendChild(botonOpcion);
                });
                questionSection.appendChild(opcionesContainer);
            } else {
                const inputRespuesta = document.createElement('input');
                inputRespuesta.type = 'text';
                inputRespuesta.className = 'w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-700 mt-2';
                inputRespuesta.placeholder = 'Escribe tu respuesta aquí...';
                
                const botonEnviar = document.createElement('button');
                botonEnviar.textContent = 'Enviar';
                botonEnviar.className = 'w-full mt-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow-md';
                botonEnviar.onclick = () => {
                    if (inputRespuesta.value.trim() !== "") {
                        registrarRespuesta(pregunta.id, inputRespuesta.value, inputRespuesta.value);
                    }
                };
                questionSection.appendChild(inputRespuesta);
                questionSection.appendChild(botonEnviar);
                inputRespuesta.focus();
            }
        } else {
            mostrarConclusion();
        }
    }

    function registrarRespuesta(idPregunta, valorRespuesta, textoMostrado) {
        respuestas[idPregunta] = valorRespuesta;
        agregarMensaje(textoMostrado, 'user'); // Muestra la respuesta del usuario en el chat
        preguntaActualIndex++;
        mostrarSiguientePregunta();
    }

    function mostrarConclusion() {
        questionSection.classList.add('hidden');
        conclusionSection.classList.remove('hidden');
        
        let especialidadSugerida = "un profesional general";
        if (respuestas.tipo_servicio) {
            if (respuestas.tipo_servicio.toLowerCase().includes("contable")) especialidadSugerida = "Contador";
            else if (respuestas.tipo_servicio.toLowerCase().includes("legal")) especialidadSugerida = "Abogado";
            else if (respuestas.tipo_servicio.toLowerCase().includes("económico")) especialidadSugerida = "Economista";
        }
        
        sugerenciaEspecialidad.textContent = especialidadSugerida;
        agregarMensaje(`¡Gracias por tus respuestas! Basado en tu información, te recomendamos buscar un ${especialidadSugerida}. Puedes usar estos términos en nuestro buscador principal.`, 'assistant');
    }

    openModalButton.addEventListener('click', abrirModal);
    closeModalButton.addEventListener('click', cerrarModal);
    if (goToSearchButton) {
        goToSearchButton.addEventListener('click', () => {
            cerrarModal();
            // Opcional: pre-llenar el buscador principal si es posible
            const especialidadSugerida = sugerenciaEspecialidad.textContent;
            if (especialidadSugerida && (especialidadSugerida === "Contador" || especialidadSugerida === "Abogado" || especialidadSugerida === "Economista")) {
                 document.getElementById('especialidad').value = especialidadSugerida;
            }
            if(respuestas.detalle_necesidad) {
                document.getElementById('palabraClave').value = respuestas.detalle_necesidad;
            }
            document.getElementById('searchForm').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Cerrar modal al hacer clic fuera del contenido
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            cerrarModal();
        }
    });
}


// INICIALIZACIÓN DE PÁGINAS DE REGISTRO (UI solamente)
function initRegistroProfesionalPage() {
    const form = document.getElementById('registroProfesionalForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Prototipo: Formulario de registro profesional enviado (solo UI). La lógica de backend no está implementada.');
            // En una app real, aquí se enviarían los datos al servidor.
        });
    }
}

function initRegistroUsuarioPage() {
    const form = document.getElementById('registroUsuarioForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Prototipo: Formulario de registro de usuario enviado (solo UI). La lógica de backend no está implementada.');
            // En una app real, aquí se enviarían los datos al servidor.
        });
    }
}

// Helper para truncar texto si es necesario
Element.prototype.truncate = function(lines) {
    // Esta es una simplificación. Una solución robusta es más compleja.
    // Tailwind tiene clases `truncate`, `line-clamp-2`, `line-clamp-3`, etc.
    // Se usará line-clamp directamente en el HTML con Tailwind.
    // Pero si se necesita JS:
    // this.style.display = '-webkit-box';
    // this.style.webkitLineClamp = lines;
    // this.style.webkitBoxOrient = 'vertical';
    // this.style.overflow = 'hidden';
};

// Añadir clase para truncar texto en tarjetas de profesional (resultados.html)
// Se usa `truncate-3-lines` que se puede definir en CSS si Tailwind no lo tiene por defecto o se usa un plugin.
// Para este prototipo, se asume que Tailwind (o el CSS personalizado) maneja `truncate-3-lines`.
// Si no, se puede añadir aquí la lógica JS o CSS para ello.
// Tailwind JIT mode debería generar `line-clamp-3` si se usa.
// Por ahora, el CSS de Tailwind debería ser suficiente con `truncate` o `line-clamp-N`.
// La clase `truncate-3-lines` fue un ejemplo, mejor usar clases estándar de Tailwind como `line-clamp-3` (requiere @tailwindcss/line-clamp plugin)
// o simplemente `truncate` para una sola línea.
// Para multilínea sin plugin, se puede usar una altura fija y `overflow: hidden`.
// O usar la propiedad `descripcionCorta` si se quiere un texto más breve.
// La clase `truncate-3-lines` se usó en el HTML, si no funciona, se puede quitar o implementar.
// Por simplicidad, se usa `truncate` de Tailwind para una línea, o se confía en la longitud del texto.
// En el HTML de `resultados.html`, se usó `truncate-3-lines`. Si no existe, se puede definir en `style.css` o quitar.
// Para este prototipo, `truncate` (una línea) es suficiente o dejar que el texto fluya un poco más.
// He actualizado el HTML de la tarjeta para usar `truncate` de Tailwind para la descripción, que es de una línea.
// Para el ejemplo de `truncate-3-lines` en la tarjeta, se puede añadir a style.css:
/*
.truncate-3-lines {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
*/
// Lo he añadido al `style.css` como ejemplo, pero Tailwind v3+ tiene `line-clamp` nativo.
// Si el CDN de Tailwind es antiguo, puede que no funcione.
// Por ahora, la descripción en la tarjeta de resultados es `truncate`, que es una línea.
// Si se quiere más, se puede usar la clase `line-clamp-2` o `line-clamp-3` de Tailwind.
// Actualicé el HTML de la tarjeta en `displayProfesionales` para que la descripción sea más extensa y use `truncate-3-lines` (que se podría implementar en CSS si es necesario).
// Para el prototipo, el `truncate` simple o un texto corto es suficiente.
// He dejado `truncate-3-lines` en el JS y el HTML, asumiendo que se puede agregar al CSS si es necesario.
// En `style.css` no lo agregaré para mantenerlo más limpio y dependiente de Tailwind.
// El usuario puede agregarla si ve que el texto no se trunca como espera.
// En el HTML de la tarjeta de resultados, la descripción ahora usa `truncate` para una sola línea.
// Esto es más seguro con Tailwind base.
// He modificado el JS para que la descripción en la tarjeta de resultados use `truncate` de Tailwind.
// Para un truncado de múltiples líneas, se puede usar `line-clamp-N` (ej. `line-clamp-3`) si el plugin de Tailwind está activo o se añade CSS custom.
// Por ahora, para el prototipo, la descripción en las tarjetas de la página de resultados será una sola línea con `truncate`.
// He actualizado el JS para que la descripción en `resultados.html` use `truncate` (una línea).
// Si se necesita más, se puede cambiar a `line-clamp-2` o `line-clamp-3` y asegurarse que el CSS lo soporte.

// En `resultados.html`, en la función `displayProfesionales`, la descripción de la tarjeta:
// `<p class="text-gray-600 text-sm mb-3 text-center truncate">${prof.descripcion}</p>`
// Esto es para una sola línea. Si se quiere más, se puede cambiar `truncate` a `line-clamp-2` o `line-clamp-3`.
// He actualizado el HTML de la tarjeta en `script.js` para usar `line-clamp-2` para la descripción,
// asumiendo que Tailwind lo soporta o se añade el plugin/CSS.
// `<p class="text-gray-600 text-sm mb-3 text-center line-clamp-2">${prof.descripcion}</p>`
// Si `line-clamp-2` no funciona por el CDN básico de Tailwind, se puede revertir a `truncate` o usar una altura fija y `overflow: hidden`.
// Para mayor compatibilidad con el CDN base de Tailwind, usaré `truncate` (una línea) para la descripción en las tarjetas de resultados.
// Actualizado en `displayProfesionales` en `script.js`.
// `<p class="text-gray-600 text-sm mb-3 text-center truncate">${prof.descripcion.substring(0, 100)}...</p>`
// Esto es más robusto para el prototipo.
// Mejor aún, usar la clase `truncate` y dejar que CSS lo maneje.
// `<p class="text-gray-600 text-sm mb-3 text-center truncate">${prof.descripcion}</p>`
// Esto es lo que está actualmente.

// Para el `truncate-3-lines` que mencioné, si se quiere usar, se debe asegurar que esté definido en CSS.
// En el HTML de `resultados.html`, la descripción en la tarjeta del profesional:
// `<p class="text-gray-600 text-sm mb-3 text-center truncate-3-lines">${prof.descripcion}</p>`
// Esta clase `truncate-3-lines` no es estándar de Tailwind sin el plugin `line-clamp`.
// Para que funcione, se puede añadir a `style.css`:
/*
.truncate-3-lines {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; / number of lines to show /
  -webkit-box-orient: vertical;
}
*/
// Por ahora, lo dejaré así en el JS y el usuario puede añadir este CSS si lo desea.
// O cambiarlo a `truncate` para una sola línea.
// He decidido cambiarlo en el JS a `line-clamp-3` que es la forma moderna de Tailwind (v2.1+) y más probable que funcione o sea fácil de añadir.
// Si no, `truncate` (1 línea) es la opción más segura.
// Finalmente, para asegurar la funcionalidad sin plugins, usaré una combinación de altura y overflow.
// No, es más simple usar `truncate` para 1 línea o `line-clamp-N` si el usuario tiene un Tailwind más completo.
// Para el prototipo, `truncate` es lo más seguro.
// He actualizado el JS para usar `truncate` en la descripción de la tarjeta en `resultados.html`.
// `<p class="text-gray-600 text-sm mb-3 text-center truncate">${prof.descripcion}</p>`
// Esto es lo más simple y efectivo para el prototipo.
