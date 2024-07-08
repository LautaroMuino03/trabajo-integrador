class Hechizo{
    constructor(nombre){
      this.nombre = nombre;
    
  }}
  
 
  
  function agregarHechizo(){
    const inputHechizo = document.getElementById("nombreHechizos");
    const nombreHechizo = inputHechizo.value.trim();
  
    if(nombreHechizo != ""){
      const nuevoHechizo = new Hechizo(nombreHechizo);
      
      const elementoLista = document.createElement("li");
      elementoLista.textContent = nuevoHechizo.nombre;
      
      
      const botonEliminar = document.createElement("span");
      botonEliminar.textContent = " Eliminar";
      botonEliminar.classList.add("eliminar");
      
  
      
      botonEliminar.addEventListener("click", function(){
        elementoLista.remove();
      })
  
  
      elementoLista.appendChild(botonEliminar);
      const resultadosHechizos = document.getElementById("resultadosHechizos"); 
      resultadosHechizos.appendChild(elementoLista);
  
      inputHechizo.value = ""; 
    }
  }
  
  
  const botonAgregarHechizos = document.getElementById("agregarHechizo");
  botonAgregarHechizos.addEventListener("click", agregarHechizo);
  
  document.getElementById("agregarHechizo").addEventListener("keyup", function(event) {
    if(event.key === "Enter"){
      agregarHechizo();
    }
    
  })





