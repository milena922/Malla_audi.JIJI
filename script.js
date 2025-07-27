const ramos = [
  // Semestre I
  { codigo: "R1", nombre: "GESTIÓN Y EMPRESA (6)", semestre: 1, prerrequisitos: [] },
  { codigo: "R2", nombre: "METODOS MATEMATICOS I (6)", semestre: 1, prerrequisitos: [] },
  { codigo: "R3", nombre: "INTRODUCCIÓN A LA ECONOMÍA (6)", semestre: 1, prerrequisitos: [] },
  { codigo: "R4", nombre: "TECNOLOGÍAS Y SISTEMAS DE INFORMACIÓN (6)", semestre: 1, prerrequisitos: [] },
  { codigo: "R5", nombre: "INGLÉS (4)", semestre: 1, prerrequisitos: [] },

  // Semestre II
  { codigo: "R6", nombre: "ENTORNO SOCIAL Y PROFESIONAL (4)", semestre: 2, prerrequisitos: [] },
  { codigo: "R7", nombre: "INTRODUCCIÓN A LA MICROECONOMÍA (6)", semestre: 2, prerrequisitos: ["R3"] },
  { codigo: "R8", nombre: "CONTABILIDAD I (6)", semestre: 2, prerrequisitos: ["R1"] },
  { codigo: "R9", nombre: "APLICACIONES DE MANEJO DE DATOS (6)", semestre: 2, prerrequisitos: ["R4"] },
  { codigo: "R10", nombre: "METODOS MATEMATICOS II (6)", semestre: 2, prerrequisitos: ["R2"] },
  { codigo: "R11", nombre: "INGLÉS I (4)", semestre: 2, prerrequisitos: ["R5"] },

  // Semestre III
  { codigo: "R12", nombre: "ESTADÍSTICA I (6)", semestre: 3, prerrequisitos: ["R2", "R4"] },
  { codigo: "R13", nombre: "INTRODUCCIÓN A LA MACROECONOMÍA (6)", semestre: 3, prerrequisitos: ["R10", "R3"] },
  { codigo: "R14", nombre: "CONTABILIDAD II (6)", semestre: 3, prerrequisitos: ["R8"] },
  { codigo: "R15", nombre: "METODOS MATEMATICOS III (6)", semestre: 3, prerrequisitos: ["R10"] },
  { codigo: "R16", nombre: "INGLÉS II (4)", semestre: 3, prerrequisitos: ["R11"] },
  { codigo: "R17", nombre: "Libre I (2)", semestre: 3, prerrequisitos: [] },

  // Semestre IV
  { codigo: "R18", nombre: "TALLER DE INTEGRACIÓN PROFESIONAL (2)", semestre: 4, prerrequisitos: ["R6"] },
  { codigo: "R19", nombre: "INGLÉS III (4)", semestre: 4, prerrequisitos: ["R16"] },
  { codigo: "R20", nombre: "FUNDAMENTOS DE COSTOS (6)", semestre: 4, prerrequisitos: ["R8"] },
  { codigo: "R21", nombre: "AUDITORÍA I (6)", semestre: 4, prerrequisitos: ["R8", "R1"] },
  { codigo: "R22", nombre: "ESTADÍSTICA II (6)", semestre: 4, prerrequisitos: ["R12", "R15"] },
  { codigo: "R23", nombre: "INTRODUCCIÓN A LAS FINANZAS (6)", semestre: 4, prerrequisitos: ["R12", "R7", "R8"] },

  // Semestre V
  { codigo: "R24", nombre: "INGLÉS IV (4)", semestre: 5, prerrequisitos: ["R19"] },
  { codigo: "R25", nombre: "METODOS CUANTITATIVOS I (6)", semestre: 5, prerrequisitos: ["R22", "R13"] },
  { codigo: "R26", nombre: "TRIBUTACIÓN I (6)", semestre: 5, prerrequisitos: ["R13", "R7"] },
  { codigo: "R27", nombre: "ENTORNO LEGAL (4)", semestre: 5, prerrequisitos: ["R6"] },
  { codigo: "R28", nombre: "ANÁLISIS CONTABLE (6)", semestre: 5, prerrequisitos: ["R14", "R23"] },
  { codigo: "R29", nombre: "COSTOS Y PRESUPUESTOS (6)", semestre: 5, prerrequisitos: ["R20"] },

  // Semestre VI
  { codigo: "R30", nombre: "AUDITORÍA II (6)", semestre: 6, prerrequisitos: ["R21"] },
  { codigo: "R31", nombre: "TRIBUTACIÓN II (6)", semestre: 6, prerrequisitos: ["R27"] },
  { codigo: "R32", nombre: "CONTROL DE GESTIÓN (6)", semestre: 6, prerrequisitos: ["R18", "R29"] },
  { codigo: "R33", nombre: "ANÁLISIS Y PLANIFICACIÓN FINANCIERA (6)", semestre: 6, prerrequisitos: ["R25"] },
  { codigo: "R34", nombre: "Libre II (2)", semestre: 6, prerrequisitos: [] },
  { codigo: "R35", nombre: "Libre III (2)", semestre: 6, prerrequisitos: [] },

  // Semestre VII
  { codigo: "R36", nombre: "AUDITORÍA III (6)", semestre: 7, prerrequisitos: ["R30"] },
  { codigo: "R37", nombre: "CONTABILIDAD AVANZADA (6)", semestre: 7, prerrequisitos: ["R28", "R33", "R24"] },
  { codigo: "R38", nombre: "COSTOS AVANZADOS (6)", semestre: 7, prerrequisitos: ["R32", "R29"] },
  { codigo: "R39", nombre: "GESTIÓN FINANCIERA CORPORATIVA (6)", semestre: 7, prerrequisitos: ["R33"] },
  { codigo: "R40", nombre: "TRIBUTACIÓN III (6)", semestre: 7, prerrequisitos: ["R26", "R31"] },

  // Semestre VIII
  { codigo: "R41", nombre: "TECNOLOGÍA Y BASE DE DATOS PARA AUDITORÍA (6)", semestre: 8, prerrequisitos: ["R9"] },
  { codigo: "R42", nombre: "TALLER DE CONTABILIDAD Y AUDITORIA (6)", semestre: 8, prerrequisitos: ["R36", "R32", "R37"] },
  { codigo: "R43", nombre: "GESTIÓN DE PROCESOS DE NEGOCIOS (6)", semestre: 8, prerrequisitos: ["R9", "R32"] },
  { codigo: "R44", nombre: "TRIBUTACIÓN V (6)", semestre: 8, prerrequisitos: ["R40"] },
  { codigo: "R45", nombre: "TRIBUTACIÓN IV (6)", semestre: 8, prerrequisitos: ["R40"] },

  // Semestre IX
  { codigo: "R46", nombre: "AUDITORÍA IV (6)", semestre: 9, prerrequisitos: ["R36", "R41"] },
  { codigo: "R47", nombre: "CONTABILIDAD PARA LAS DECISIONES (6)", semestre: 9, prerrequisitos: ["R39", "R37"] },
  { codigo: "R48", nombre: "TRIBUTACIÓN VI (6)", semestre: 9, prerrequisitos: ["R44", "R45"] },
  { codigo: "R49", nombre: "PRÁCTICA PROFESIONAL I (12)", semestre: 9, prerrequisitos: [] }, // Se activa por lógica separada

  // Semestre X
  { codigo: "R50", nombre: "PRÁCTICA PROFESIONAL II (12)", semestre: 10, prerrequisitos: ["R49"] },
  { codigo: "R51", nombre: "Electivo I (6)", semestre: 10, prerrequisitos: [] },
  { codigo: "R52", nombre: "Electivo II (6)", semestre: 10, prerrequisitos: [] },
  { codigo: "R53", nombre: "Electivo III (6)", semestre: 10, prerrequisitos: [] }
];

let aprobados = new Set();

function crearMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";

  const semestres = [...new Set(ramos.map(r => r.semestre))].sort();

  semestres.forEach(s => {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre";
    contenedor.innerHTML = `<h2>Semestre ${s}</h2>`;

    const ramosSemestre = ramos.filter(r => r.semestre === s);
    ramosSemestre.forEach(ramo => {
      const div = document.createElement("div");
      div.textContent = ramo.nombre;
      div.classList.add("ramo");

      const requisitosCumplidos = ramo.prerrequisitos.every(pr => aprobados.has(pr));

      if (!requisitosCumplidos) {
        div.classList.add("bloqueado");
      } else if (aprobados.has(ramo.codigo)) {
        div.classList.add("aprobado");
      } else {
        div.classList.add("pendiente");
      }

      div.addEventListener("click", () => {
        if (!requisitosCumplidos) return;
        if (aprobados.has(ramo.codigo)) {
          aprobados.delete(ramo.codigo);
        } else {
          aprobados.add(ramo.codigo);
        }
        crearMalla();
      });

      contenedor.appendChild(div);
    });

    malla.appendChild(contenedor);
  });
}

crearMalla();
