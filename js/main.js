
document.getElementById('agregarDatos').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value.trim().toLowerCase();
    const url = 'https://hp-api.herokuapp.com/api/characters';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultados = document.getElementById('resultados');
            resultados.innerHTML = '';

            const personaje = data.find(personaje => personaje.name.toLowerCase() === nombre);
            if (personaje) {
                const li = document.createElement('ul');
                li.classList.add('character');
                
                const img = document.createElement('img');
                img.src = personaje.image;
                
                
                const info = document.createElement('div');
                info.innerHTML = `<h2>${personaje.name}</h2><p>Casa: ${personaje.house}</p>`;
                
                li.appendChild(img);
                li.appendChild(info);
                resultados.appendChild(li);
            } else {
                resultados.innerHTML = '<li>Personaje no encontrado.</li>';
            }
        })
        .catch(error => console.error('Error:', error));
    });