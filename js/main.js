document.addEventListener("DOMContentLoaded", function() {
    const inputNombre = document.getElementById('nombre');
    const inputApellido = document.getElementById('apellido');
    const inputEmail = document.getElementById('email');
    const botonAgregar = document.getElementById('agregarDatos');
    const lista = document.querySelector('ul');

    botonAgregar.addEventListener('click', function() {
        const nombre = inputNombre.value.trim();
        const apellido = inputApellido.value.trim();
        const email = inputEmail.value.trim();

        if (nombre && apellido && email) {
            const elementoLista = document.createElement('li');
            elementoLista.textContent = `${nombre} ${apellido} ${email}`;
            
            // Botón para eliminar
            const botonEliminar = document.createElement('button');
            botonEliminar.textContent = ' Eliminar';
             botonEliminar.classList.add('boton-eliminar');
            botonEliminar.addEventListener('click', function() {
                lista.removeChild(elementoLista);
            });

            elementoLista.appendChild(botonEliminar);
            lista.appendChild(elementoLista);

            // Limpiar los campos
            inputNombre.value = '';
            inputApellido.value = '';
        }

        
    });
});





