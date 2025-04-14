document.getElementById('basic-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores de los campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validar los campos (ejemplo básico)
    if (name === '' || email === '' || password === '') {
        alert('Todos los campos son obligatorios.');
    } else {
        alert(`Formulario enviado!\nNombre: ${name}\nEmail: ${email}`);
        // Aquí puedes agregar lógica adicional para enviar los datos a un servidor, etc.
    }
});
