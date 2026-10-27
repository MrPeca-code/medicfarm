const sidebar = document.getElementById('sidebar');
const lessonTitle = document.getElementById('lesson-title');
const lessonDifficulty = document.getElementById('lesson-difficulty');
const questionsContainer = document.getElementById('questions-container');


let maxLeccionDesbloqueada = parseInt(localStorage.getItem('maxLeccionDesbloqueada')) || 1;


const preguntasLeccion1 = [
    { pregunta: "¿Qué ciencia se encarga del estudio de los efectos, propiedades y origen de los fármacos en el organismo?", opciones: { a: "Fisiología", b: "Patología", c: "Farmacología", d: "Microbiología" }, correcta: "c", retro: "La farmacología es la ciencia que estudia las propiedades, origen y los efectos de los fármacos en los sistemas vivos." },
    { pregunta: "¿Qué estudia principalmente la patología?", opciones: { a: "La clasificación de los medicamentos", b: "Las causas y desarrollo de las enfermedades", c: "El movimiento del cuerpo humano", d: "La nutrición celular" }, correcta: "b", retro: "La patología se enfoca en el estudio de las causas (etiología), desarrollo (patogenia) y cambios estructurales de las enfermedades." },
    { pregunta: "¿Cuál es la definición básica de un fármaco?", opciones: { a: "Cualquier sustancia química que altera el funcionamiento del organismo", b: "Una bacteria que causa infección", c: "Un tejido muerto del cuerpo", d: "Una vitamina producida naturalmente" }, correcta: "a", retro: "Un fármaco es toda sustancia química que interactúa con un organismo vivo alterando sus funciones bioquímicas o fisiológicas." },
    { pregunta: "En patología, ¿qué significa el término 'etiología'?", opciones: { a: "El tratamiento de la enfermedad", b: "La causa u origen de una enfermedad", c: "La recuperación del paciente", d: "El estudio de los virus" }, correcta: "b", retro: "La etiología determina los factores causales o el origen responsable de que se desencadene una patología." },
    { pregunta: "¿Qué rama de la farmacología estudia 'lo que el cuerpo le hace al fármaco' (absorción, distribución, etc.)?", opciones: { a: "Farmacodinamia", b: "Farmacognosia", c: "Farmacocinética", d: "Toxicología" }, correcta: "c", retro: "La farmacocinética analiza los procesos ADME: Absorción, Distribución, Metabolismo y Excreción." },
    { pregunta: "¿Qué rama de la farmacología estudia 'lo que el fármaco le hace al cuerpo' (mecanismo de acción)?", opciones: { a: "Farmacocinética", b: "Farmacodinamia", c: "Posología", d: "Terapéutica" }, correcta: "b", retro: "La farmacodinamia estudia los mecanismos de acción de los medicamentos y sus efectos bioquímicos en el organismo." },
    { pregunta: "¿Qué significan las siglas ADME en farmacología?", opciones: { a: "Absorción, Distribución, Metabolismo, Excreción", b: "Acción, Dilatación, Movimiento, Enfermedad", c: "Aplicación, Dosis, Medicina, Efecto", d: "Asimilación, Digestión, Mantenimiento, Eliminación" }, correcta: "a", retro: "ADME representa las cuatro fases clave del trayecto que recorre un fármaco dentro del cuerpo." },
    { pregunta: "En medicina, ¿qué es un 'síntoma'?", opciones: { a: "Una manifestación objetiva que el médico puede medir (ej. fiebre)", b: "Una manifestación subjetiva que solo el paciente siente (ej. dolor)", c: "El resultado de un análisis de sangre", d: "La receta médica" }, correcta: "b", retro: "Un síntoma es subjetivo; solo puede ser percibido y descrito por el propio paciente (como el dolor o la fatiga)." },
    { pregunta: "¿Qué es un 'signo' clínico?", opciones: { a: "El estado de ánimo del paciente", b: "Lo que el paciente relata en la consulta", c: "Una manifestación objetiva y medible de la enfermedad", d: "El tiempo que dura una patología" }, correcta: "c", retro: "Un signo clínico es objetivo y puede ser comprobado o medido por el personal de salud (ej. temperatura, presión arterial)." },
    { pregunta: "¿Cuál es el órgano principal responsable del metabolismo de la mayoría de los fármacos?", opciones: { a: "El corazón", b: "El cerebro", c: "Los pulmones", d: "El hígado" }, correcta: "d", retro: "El hígado contiene el sistema enzimático principal (como el citocromo P450) encargado de metabolizar los fármacos." },
    { pregunta: "¿Cuál es el órgano principal encargado de la excreción (eliminación) de los fármacos del cuerpo?", opciones: { a: "El páncreas", b: "El bazo", c: "Los riñones", d: "El estómago" }, correcta: "c", retro: "Los riñones filtran la sangre y eliminan los metabolitos de los medicamentos a través de la orina." },
    { pregunta: "¿Qué es la inflamación desde el punto de vista patológico?", opciones: { a: "Una enfermedad autoinmune siempre mortal", b: "Una respuesta protectora de los tejidos ante una lesión o infección", c: "La muerte celular programada", d: "Un defecto genético" }, correcta: "b", retro: "La inflamación es una respuesta vascular y celular defensiva del tejido vivo contra agentes lesivos." },
    { pregunta: "¿Qué significa administrar un medicamento por vía 'enteral'?", opciones: { a: "A través del tracto gastrointestinal (ej. vía oral)", b: "Mediante una inyección en la vena", c: "Aplicándolo sobre la piel", d: "Inhalándolo hacia los pulmones" }, correcta: "a", retro: "La vía enteral abarca cualquier forma de administración que utilice el tracto gastrointestinal (oral, sublingual, rectal)." },
    { pregunta: "¿Cuál de las siguientes es una vía de administración 'parenteral' (que evita el tracto digestivo)?", opciones: { a: "Tableta oral", b: "Jarabe", c: "Inyección intravenosa", d: "Cápsula sublingual" }, correcta: "c", retro: "La vía parenteral incluye las inyecciones (IV, IM, SC) que evitan el paso por el aparato digestivo." },
    { pregunta: "¿Qué concepto describe el equilibrio interno y estable que el cuerpo busca mantener (y que la patología interrumpe)?", opciones: { a: "Metástasis", b: "Homeostasis", c: "Apoptosis", d: "Necrosis" }, correcta: "b", retro: "La homeostasis es la tendencia de los organismos a adaptarse para mantener un medio interno estable y constante." }
];


const preguntasLeccion2 = [
    { pregunta: "¿Cuál de los siguientes fármacos es ampliamente conocido por sus propiedades analgésicas, antipiréticas y antiinflamatorias (AINE)?", opciones: { a: "Paracetamol", b: "Ibuprofeno", c: "Omeprazol", d: "Salbutamol" }, correcta: "b", retro: "El ibuprofeno pertenece a los AINEs, bloqueando las prostaglandinas para reducir dolor, fiebre e inflamación." },
    { pregunta: "En el proceso inflamatorio agudo, ¿cuál de los siguientes es considerado uno de los signos cardiacos clásicos?", opciones: { a: "Amnesia", b: "Rubor (enrojecimiento)", c: "Hipotensión severa", d: "Bradicardia" }, correcta: "b", retro: "Los 5 signos cardinales son: rubor, calor, tumor (hinchazón), dolor y pérdida de función." },
    { pregunta: "¿Qué fármaco actúa principalmente como analgésico y antipirético, pero tiene un efecto antiinflamatorio muy débil o nulo?", opciones: { a: "Naproxeno", b: "Ibuprofeno", c: "Paracetamol (Acetaminofén)", d: "Diclofenaco" }, correcta: "c", retro: "El paracetamol actúa a nivel central reduciendo dolor y fiebre, pero casi no tiene impacto periférico antiinflamatorio." },
    { pregunta: "¿Qué término patológico describe la muerte celular prematura o patológica debido a una lesión o falta de Irrigación sanguínea?", opciones: { a: "Necrosis", b: "Hipertrofia", c: "Metaplasia", d: "Regeneración" }, correcta: "a", retro: "La necrosis es la muerte patológica de un conjunto de células provocada por un daño externo o isquemia." },
    { pregunta: "¿Qué vía de administración de fármacos se coloca debajo de la lengua permitiendo una absorción rápida hacia la sangre?", opciones: { a: "Vía intramuscular", b: "Vía sublingual", c: "Vía rectal", d: "Vía tópica" }, correcta: "b", retro: "La mucosa sublingual es muy vascularizada, permitiendo que el fármaco pase directo a la circulación sistémica." },
    { pregunta: "¿Cómo se le llama al aumento en el tamaño de las células que provoca el crecimiento de un órgano o tejido debido a una mayor carga de trabajo?", opciones: { a: "Atrofia", b: "Hipertrofia", c: "Apoptosis", d: "Displasia" }, correcta: "b", retro: "La hipertrofia se caracteriza por un incremento en el tamaño celular, común en el músculo cardíaco o esquelético." },
    { pregunta: "¿Cuál es el principal efecto secundario gastrointestinal asociado al uso prolongado de los AINEs clásicos (como ibuprofeno o aspirina)?", opciones: { a: "Insuficiencia renal crónica inmediata", b: "Irritación y úlceras gástricas", c: "Hipertensión pulmonar", d: "Cálculos biliares" }, correcta: "b", retro: "Los AINEs inhiben las prostaglandinas protectoras de la mucosa gástrica, predisponiendo a gastritis y úlceras." },
    { pregunta: "¿Qué significa el término 'patogenia' en el estudio de las enfermedades?", opciones: { a: "El costo del tratamiento médico", b: "El mecanismo de cómo se desarrolla y evoluciona la enfermedad", c: "La prevención mediante vacunas", d: "La cura definitiva" }, correcta: "b", retro: "La patogenia explica la secuencia de eventos celulares y tisulares desde la agresión inicial hasta la manifestación clínica." },
    { pregunta: "¿Qué enzima principal inhiben los medicamentos AINEs para reducir la inflamación y el dolor?", opciones: { a: "Ciclooxigenasa (COX)", b: "Amilasa salival", c: "Lactasa", d: "Pepsina" }, correcta: "a", retro: "Los AINEs bloquean las enzimas Ciclooxigenasa COX-1 y COX-2, frenando la síntesis de mediadores del dolor." },
    { pregunta: "¿Cómo se denomina la disminución en el tamaño de un órgano o tejido por falta de uso, nutrición o estimulación?", opciones: { a: "Hiperplasia", b: "Atrofia", c: "Necrosis", d: "Neoplasia" }, correcta: "b", retro: "La atrofia representa la reducción del tamaño celular por menor actividad metabólica o desuso." },
    { pregunta: "¿Cuál de las siguientes vías de administración corresponde a la aplicación directa sobre la piel o mucosas con fines locales?", opciones: { a: "Vía intravenosa", b: "Vía tópica", c: "Vía subcutánea", d: "Vía oral" }, correcta: "b", retro: "La vía tópica incluye cremas, geles o ungüentos aplicados directamente sobre la superficie cutánea o mucosas." },
    { pregunta: "¿Qué nombre recibe el estudio de los efectos adversos o tóxicos de los fármacos y sustancias químicas?", opciones: { a: "Farmacocinética", b: "Toxicología", c: "Farmacognosia", d: "Posología" }, correcta: "b", retro: "La toxicología evalúa los daños, mecanismos de toxicidad y efectos secundarios nocivos de los compuestos." },
    { pregunta: "¿Qué es un 'edema' desde el punto de vista patológico?", opciones: { a: "Acumulación excesiva de líquido en los espacios intersticiales o cavidades corporales", b: "Falta total de oxígeno en los tejidos", c: "Infección bacteriana en la sangre", d: "Coágulo en una arteria principal" }, correcta: "a", retro: "El edema surge por alteraciones en las presiones capilares o permeabilidad, acumulando líquido en el tejido intersticial." },
    { pregunta: "¿Qué vía de administración implica la inyección de un medicamento directamente en el tejido adiposo o graso bajo la piel (ej. insulina)?", opciones: { a: "Intravenosa", b: "Intramuscular", c: "Subcutánea", d: "Intratecal" }, correcta: "c", retro: "La vía subcutánea se inyecta en la capa de grasa situada justo debajo de la dermis, ideal para fármacos como la insulina." },
    { pregunta: "¿Qué término indica la presencia de una presión arterial anormalmente elevada?", opciones: { a: "Hipotensión", b: "Hipertensión", c: "Taquicardia", d: "Hipoxia" }, correcta: "b", retro: "La hipertensión arterial sostenida incrementa el riesgo cardiovascular y de daño a órganos blanco." }
];


const preguntasLeccion3 = [
    { pregunta: "¿Qué es una cápsula farmacéutica?", opciones:{ a: "Un instrumento quirúrgico", b: "Una forma farmacéutica que contiene medicamento dentro de una cubierta", c: "Un tipo de vacuna", d: "Un análisis clínico"}, correcta: "b", retro: "Una cápsula farmacéutica es una forma de administración que contiene un medicamento dentro de una cubierta soluble." },
    { pregunta: "¿Qué es un jarabe medicinal?", opciones:{ a: "Un medicamento líquido para administración oral", b: "Una crema para la piel", c: "Un medicamento intravenoso", d: "Un material de curación"}, correcta: "a", retro: "Un jarabe es una solución o suspensión líquida que contiene un medicamento y se administra por vía oral, generalmente con sabor dulce."},
    { pregunta: "¿Qué es un supositorio?", opciones:{ a: "Un medicamento que se administra por vía rectal", b: "Un tipo de inyección", c: "Una tableta para disolver en agua", d: "Un medicamento para inhalar"}, correcta: "a", retro: "Un supositorio es una forma farmacéutica sólida que se introduce en el recto, donde se disuelve y libera el medicamento."},
    { pregunta: "¿Qué es una suspensión farmacéutica?", opciones:{ a: "Una mezcla de sólidos y líquidos que no se disuelven completamente", b: "Un tipo de cápsula", c: "Un medicamento en forma de gel", d: "Una tableta efervescente"}, correcta: "a", retro: "Una suspensión es una mezcla heterogénea donde partículas sólidas están dispersas en un líquido, y no se disuelven completamente."},
    { pregunta: "¿Para qué sirve una emulsión farmacéutica?", opciones:{ a: "Para mejorar la absorción de un medicamento", b: "Para facilitar la administración de líquidos", c: "Para crear una mezcla estable de dos líquidos que no se mezclan", d: "Para aumentar la solubilidad de un fármaco"}, correcta: "c", retro: "Una emulsión es una mezcla de dos líquidos que no se pueden disolver mutuamente, pero que están estabilizadas por un agente emulsionante."},
    { pregunta: "¿Qué es una pomada?", opciones:{ a: "Un medicamento en forma de gel", b: "Un medicamento en forma de crema", c: "Un medicamento en forma de solución", d: "Un medicamento en forma de tableta"}, correcta: "b", retro: "Una pomada es un producto farmacéutico en forma de crema, generalmente utilizada para aplicaciones tópicas en la piel."},
    { pregunta: "¿Qué es un aerosol medicinal?", opciones:{ a: "Un medicamento en forma de gas", b: "Un medicamento en forma de líquido", c: "Un medicamento en forma de polvo", d: "Un medicamento en forma de solución"}, correcta: "a", retro: "Un aerosol medicinal es una forma de administración que contiene el medicamento en estado gaseoso o como partículas suspendidas en un gas."},
    { pregunta: "¿Qué es una solución farmacéutica?", opciones:{ a: "Una mezcla de sólidos y líquidos", b: "Un medicamento en forma de gel", c: "Un medicamento en forma de líquido", d: "Un medicamento en forma de tableta"}, correcta: "c", retro: "Una solución farmacéutica es una mezcla homogénea donde un fármaco está disuelto en un solvente, generalmente agua o alcohol."},
    { pregunta: "¿Qué significa que un medicamento sea estéril?", opciones:{ a: "Que no contiene microorganismos vivos", b: "Que tiene un sabor dulce", c: "Que se administra por vía intravenosa", d: "Que no tiene efectos secundarios"}, correcta: "a", retro: "Un medicamento estéril está libre de microorganismos vivos, especialmente bacterias y hongos, para prevenir infecciones."},
    { pregunta: "¿Qué es un medicamento fotosensible?", opciones:{ a: "Que se degrada al exponerse a la luz solar", b: "Que se administra por vía tópica", c: "Que se absorbe mejor con la luz solar", d: "Que no se puede almacenar en el refrigerador"}, correcta: "a", retro: "Los medicamentos fotosensibles son susceptibles a la degradación cuando están expuestos a la luz solar o a otras fuentes de radiación."},
    { pregunta: "¿Qué es una forma farmacéutica de liberación inmediata?", opciones:{ a: "Que se libera completamente al instante de la administración", b: "Que se libera lentamente durante varias horas", c: "Que se libera después de un tiempo determinado", d: "Que se libera solo cuando el paciente lo solicita"}, correcta: "a", retro: "Una forma farmacéutica de liberación inmediata permite la rápida absorción del fármaco tras su administración."},
    { pregunta: "¿Qué es un medicamento de liberación retardada?", opciones:{ a: "Que se libera completamente al instante de la administración", b: "Que se libera lentamente durante varias horas", c: "Que se libera después de un tiempo determinado", d:" Que se libera solo cuando el paciente lo solicita"}, correcta: "b", retro: "Los medicamentos con liberación retardada están diseñados para proporcionar una acción prolongada del fármaco."},
    { pregunta: "¿Qué es un colirio?", opciones:{ a: "Un medicamento en forma de gotas para los ojos", b: "Un medicamento en forma de jarabe", c: "Un medicamento en forma de cápsula", d: "Un medicamento en forma de crema"}, correcta: "a", retro: "Un colirio es una solución estéril que se administra en los ojos para tratar diversas afecciones oculares."},
    { pregunta: "¿Qué es una solución ótica?", opciones:{ a: "Un medicamento en forma de gotas para los ojos", b: "Un medicamento en forma de jarabe", c: "Un medicamento en forma de cápsula", d: "Un medicamento en forma de crema"}, correcta: "a", retro: "Una solución ótica es una preparación líquida que se administra directamente en el ojo para tratar diversas afecciones oculares."},
    { pregunta: "¿Qué es una preparación nasal?", opciones:{ a: "Un medicamento en forma de gotas para la nariz", b: "Un medicamento en forma de jarabe", c: "Un medicamento en forma de cápsula", d: "Un medicamento en forma de crema"}, correcta: "a", retro: "Una preparación nasal es una formulación que se administra por vía nasal, generalmente en forma de spray o gotas."}
];

function getDifficulty(lessonNumber) {
    if (lessonNumber <= 20) return { label: 'Fácil (Conceptos Básicos)', class: 'badge-facil' };
    if (lessonNumber <= 40) return { label: 'Intermedio (Clínica y Fármacos)', class: 'badge-intermedio' };
    return { label: 'Difícil (Urgencias y Alta Especialidad)', class: 'badge-dificil' };
}


function renderSidebar() {
    sidebar.innerHTML = '';
    for (let i = 1; i <= 60; i++) {
        const btn = document.createElement('button');
        btn.className = 'lesson-btn';
        
        const isLocked = i > maxLeccionDesbloqueada;
        if (isLocked) {
            btn.classList.add('locked');
            btn.innerHTML = `Lección ${i} 🔒`;
            btn.onclick = () => alert("¡Esta lección está bloqueada! Aprueba la lección anterior para desbloquearla.");
        } else {
            btn.innerHTML = `Lección ${i} 🔓`;
            btn.onclick = () => iniciarLeccion(i, btn);
        }
        sidebar.appendChild(btn);
    }
}


function iniciarLeccion(lessonNumber, clickedBtn) {
    if (lessonNumber > maxLeccionDesbloqueada) return;

    document.querySelectorAll('.lesson-btn').forEach(b => b.classList.remove('active'));
    if(clickedBtn) clickedBtn.classList.add('active');

    let preguntasOriginales = [];
    if (lessonNumber === 1) preguntasOriginales = preguntasLeccion1;
    else if (lessonNumber === 2) preguntasOriginales = preguntasLeccion2;
    else if (lessonNumber === 3) preguntasOriginales = preguntasLeccion3;

    if (preguntasOriginales.length > 0) {
        window.sesionLeccion = {
            lessonNumber: lessonNumber,
            preguntas: [...preguntasOriginales],
            preguntasFalladas: [],              
            indiceActual: 0,
            aciertos: 0,
            esFaseRepaso: false
        };
        mostrarPreguntaActual();
    } else {
        const difficulty = getDifficulty(lessonNumber);
        lessonTitle.innerText = `Lección ${lessonNumber}`;
        lessonDifficulty.innerHTML = `<span class="badge ${difficulty.class}">Nivel: ${difficulty.label}</span>`;
        questionsContainer.innerHTML = `
            <div class="question-card">
                <h3>Módulo en desarrollo</h3>
                <p>Las 15 preguntas de esta lección se agregarán próximamente.</p>
                <button class="submit-btn" onclick="desbloquearSiguiente(${lessonNumber})">Avanzar de forma manual (Temporal)</button>
            </div>
        `;
    }
}


function mostrarPreguntaActual() {
    const sesion = window.sesionLeccion;
    const difficulty = getDifficulty(sesion.lessonNumber);
    
    let tituloFase = sesion.esFaseRepaso ? " (Corrección de Errores 🔄)" : "";
    lessonTitle.innerText = `Lección ${sesion.lessonNumber}${tituloFase} - Pregunta ${sesion.indiceActual + 1} de ${sesion.preguntas.length}`;
    lessonDifficulty.innerHTML = `<span class="badge ${difficulty.class}">Nivel: ${difficulty.label}</span>`;

    const item = sesion.preguntas[sesion.indiceActual];
    const qNum = sesion.indiceActual + 1;

    let preguntaHTML = `
        <div class="question-card" id="card-pregunta-actual" data-correcta="${item.correcta}" data-retro="${item.retro}">
            <h3>Pregunta ${qNum}</h3>
            <p>${item.pregunta}</p>
            <ul class="options">
                <li><label><input type="radio" name="q_actual" value="a"> A) ${item.opciones.a}</label></li>
                <li><label><input type="radio" name="q_actual" value="b"> B) ${item.opciones.b}</label></li>
                <li><label><input type="radio" name="q_actual" value="c"> C) ${item.opciones.c}</label></li>
                <li><label><input type="radio" name="q_actual" value="d"> D) ${item.opciones.d}</label></li>
            </ul>
            <div id="retroalimentacion-box" style="margin-top: 15px; display: none; padding: 12px; border-radius: 6px; font-size: 15px;"></div>
        </div>
        <button class="submit-btn" id="btn-accion" onclick="calificarYContinuar()">Comprobar Respuesta</button>
    `;

    questionsContainer.innerHTML = preguntaHTML;
}


function calificarYContinuar() {
    const seleccionada = document.querySelector('input[name="q_actual"]:checked');
    
    if (!seleccionada) {
        alert("¡Debes seleccionar una respuesta antes de continuar!");
        return;
    }

    const card = document.getElementById('card-pregunta-actual');
    const correcta = card.getAttribute('data-correcta');
    const textoRetro = card.getAttribute('data-retro');
    const esCorrecta = seleccionada.value === correcta;

   
    const inputs = card.querySelectorAll('input');
    inputs.forEach(input => input.disabled = true);

    
    const labels = card.querySelectorAll('li');
    labels.forEach(li => {
        const input = li.querySelector('input');
        if (input.value === correcta) {
            li.style.backgroundColor = '#d4edda';
            li.style.padding = '5px';
            li.style.borderRadius = '5px';
        }
        if (input.checked && !esCorrecta) {
            li.style.backgroundColor = '#f8d7da';
            li.style.padding = '5px';
            li.style.borderRadius = '5px';
        }
    });

    
    const retroBox = document.getElementById('retroalimentacion-box');
    retroBox.style.display = 'block';
    if (esCorrecta) {
        retroBox.style.backgroundColor = '#d1e7dd';
        retroBox.style.color = '#0f5132';
        retroBox.innerHTML = `<strong>¡Correcto! 🎉</strong><br>${textoRetro}`;
        if (!sesionLeccion.esFaseRepaso) {
            window.sesionLeccion.aciertos++;
        }
    } else {
        retroBox.style.backgroundColor = '#f8d7da';
        retroBox.style.color = '#842029';
        retroBox.innerHTML = `<strong>Incorrecto ❌</strong><br>${textoRetro}`;
        
        
        if (!sesionLeccion.esFaseRepaso) {
            window.sesionLeccion.preguntasFalladas.push(window.sesionLeccion.preguntas[window.sesionLeccion.indiceActual]);
        }
    }

    const sesion = window.sesionLeccion;
    const btnAccion = document.getElementById('btn-accion');

    
    if (sesion.indiceActual < sesion.preguntas.length - 1) {
        btnAccion.innerText = "Siguiente Pregunta ➡️";
        btnAccion.setAttribute("onclick", "avanzarSiguientePregunta()");
    } else {
        
        if (!sesion.esFaseRepaso && sesion.preguntasFalladas.length > 0) {
            btnAccion.innerText = "Corregir Preguntas Falladas 🔄";
            btnAccion.setAttribute("onclick", "iniciarFaseRepaso()");
        } else {
            btnAccion.innerText = "Ver Resultado Final 🏆";
            btnAccion.setAttribute("onclick", "mostrarResultadoFinal()");
        }
    }
}

function avanzarSiguientePregunta() {
    window.sesionLeccion.indiceActual++;
    mostrarPreguntaActual();
}

function iniciarFaseRepaso() {
    const sesion = window.sesionLeccion;
    sesion.esFaseRepaso = true;
    sesion.preguntas = [...sesion.preguntasFalladas]; 
    sesion.preguntasFalladas = [];
    sesion.indiceActual = 0;
    alert("¡Hora de corregir! Vamos a repasar al final las preguntas que fallaste.");
    mostrarPreguntaActual();
}


function mostrarResultadoFinal() {
    const sesion = window.sesionLeccion;
    let aciertos = sesion.aciertos;
    let totalOriginal = preguntasLeccion1.length; 

  
    if (aciertos >= 10) {
        alert(`¡Felicidades! Aprobaste la Lección ${sesion.lessonNumber} con ${aciertos}/${totalOriginal} aciertos netos.`);
        desbloquearSiguiente(sesion.lessonNumber);
    } else {
        alert(`Obtuviste ${aciertos}/${totalOriginal} aciertos. Necesitas al menos 10 para aprobar. ¡Inténtalo de nuevo!`);
        renderSidebar();
        questionsContainer.innerHTML = `<h2>Lección No Superada ❌</h2><p>Obtuviste ${aciertos}/${totalOriginal}. Selecciona la lección nuevamente en el menú para reintentar.</p>`;
    }
}


function desbloquearSiguiente(lessonNumber) {
    if (lessonNumber === maxLeccionDesbloqueada && maxLeccionDesbloqueada < 60) {
        maxLeccionDesbloqueada++;
        localStorage.setItem('maxLeccionDesbloqueada', maxLeccionDesbloqueada);
    }
    renderSidebar();
    questionsContainer.innerHTML = `<h2>¡Lección Completada con Éxito! 🎉</h2><p>Ya puedes avanzar a la siguiente lección desde el menú lateral.</p>`;
}


renderSidebar();