function Pregunta(pregunta, opciones, respuestaCorrecta) {
    this.pregunta = pregunta;
    this.opciones = opciones;
    this.respuestaCorrecta = respuestaCorrecta;
  }
  
  
  const preguntas = [
    new Pregunta("¿Cómo se llama el personaje principal?", ["Pepe", "Moni", "Coqui", "Paola", "Todos son correctos","Ninguno es Correcto"], 4),
    new Pregunta("¿Cuál es el trabajo de Pepe?", ["Zapatero", "Médico", "Abogado", "Carpintero"], 0),
    new Pregunta("¿Cómo se llama la vecina de al lado?", ["María Elena", "Maria Rosa", "Susana", "Laura"], 0),
    new Pregunta("¿Cuál es el nombre del perro de la familia?", ["Firulais", "Rex", "Fatiga", "Max"], 2),
    new Pregunta("¿Dónde trabaja Moni?", ["En una peluquería", "En una tienda de ropa", "En una panadería", "En un supermercado"], 3),
    new Pregunta("¿Cómo se llama el vecino argentino?", ["Dardo Fonseca", "Dardo Fuseneco", "Don Armando", "Dardo Rodriguez"], 1),
    new Pregunta("¿Cuál es el programa de televisión favorito de Pepe?", ["Los Simpson", "Mirar Futbol", "El Chavo del 8", "Gran Hermano"], 1),
  ];
  

  function mostrarPreguntaAlert(pregunta) {
    let mensaje = pregunta.pregunta + "\n";
    pregunta.opciones.forEach((opcion, index) => {
      mensaje += `${index + 1}. ${opcion}\n`;
    });
    alert(mensaje);
  }
  
  function comprobarRespuesta(pregunta, respuesta) {
    if (pregunta.respuestaCorrecta === respuesta) {
      alert("¡Respuesta correcta!");
      return true; // Respuesta correcta
    } else {
      alert("Respuesta incorrecta. La respuesta correcta es: " + pregunta.opciones[pregunta.respuestaCorrecta]);
      return false; // Respuesta incorrecta
    }
  }
  
  function realizarPreguntaAlert(pregunta) {
    mostrarPreguntaAlert(pregunta);
    const respuesta = parseInt(prompt("Escribe el número de tu respuesta:")) - 1;
    return comprobarRespuesta(pregunta, respuesta);
  }
  
  let respuestasCorrectas = 0;
  let respuestasIncorrectas = 0;
  
  preguntas.forEach((pregunta, index) => {
    alert(`Pregunta ${index + 1}:`);
    if (realizarPreguntaAlert(pregunta)) {
      respuestasCorrectas++;
    } else {
      respuestasIncorrectas++;
    }
  });
  
  alert(`Respuestas correctas: ${respuestasCorrectas}\nRespuestas incorrectas: ${respuestasIncorrectas}`);
  
  function buscarRespuesta(pregunta) {
    const respuestaBuscada = prompt(`Ingrese la pregunta que desea buscar: "${pregunta.pregunta}"`);
    if (respuestaBuscada === null) {
      return;
    }
  
    if (pregunta.opciones.includes(respuestaBuscada)) {
      alert(`La respuesta "${respuestaBuscada}" es parte de las opciones.`);
    } else {
      alert(`La respuesta "${respuestaBuscada}" no coincide con ninguna opción.`);
    }
  }
  function EliminarPregunta(indice) {
    if (indice >= 0 && indice < preguntas.length) {
    const preguntaEliminada = preguntas.splice(indice, 1)[0];
    alert(`Pregunta eliminada: "${preguntaEliminada.pregunta}"`);
   } else {
     alert("Índice fuera de rango. No se ha eliminado ninguna pregunta.");
  }
  }
 
 
 const indiceAEliminar = parseInt(prompt("Ingresa el número de la pregunta que deseas eliminar:")) - 1;
 EliminarPregunta(indiceAEliminar);
 
 preguntasRestantes = "Preguntas restantes después de la eliminación:\n";
 preguntas.forEach((pregunta, index) => {
   preguntasRestantes += `${index + 1}. ${pregunta.pregunta}\n`;
 });
 alert(preguntasRestantes);
 
  const indicePreguntaABuscar = parseInt(prompt("Ingrese el número de la pregunta que desea buscar:")) - 1;
  if (indicePreguntaABuscar >= 0 && indicePreguntaABuscar < preguntas.length) {
    buscarRespuesta(preguntas[indicePreguntaABuscar]);
  } else {
    alert("Índice de pregunta fuera de rango.");
  }