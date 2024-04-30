document.getElementById('clientForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    console.log('Nombre:', name);
    console.log('Correo Electrónico:', email);
    console.log('Teléfono:', phone);
    
    alert('Datos enviados con éxito!');
    
});
