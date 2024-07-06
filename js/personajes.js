const main = document.querySelector('main');

fetch('https://hp-api.herokuapp.com/api/characters')
.then(response => response.json())
.then(
    personajes => {
        personajes.forEach(personaje =>{
            let dataPersonaje = document.createElement('articulo');
            dataPersonaje.innerHTML = paginaPersonajes(personaje.name, personaje.image, personaje.house);
            main.appendChild(dataPersonaje);
        });
    }
);

function paginaPersonajes(personaje, foto, casa){
    let html = `<h2 class= "nombre">${personaje}</h2>
    <h3> ${casa} </3>
    <div class = "imagen">
    <img src = "${foto}" alt="foto ${personaje}"> </div>`

    return html;
}


const personajePorId = '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8';

fetch(`https://hp-api.herokuapp.com/api/characters/${personajePorId}`)
.then(response => {
    if (!response.ok) {
        throw new console.error('es no');
    }
    return response.json();
})
.then(personaje => {
    console.log('personaje encontrado', personaje);
    console.log('nombre', personaje[0].name);
    console.log('casa', personaje[0].house);
})
.catch(error =>{
    console.error('se produjo un problema', error.message);
})