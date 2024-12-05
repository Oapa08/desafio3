// Ejercicio 1: Imagen con borde
document.getElementById('imagen').addEventListener('click', function () {
    if (this.style.border) {
        this.style.border = '';
    } else {
        this.style.border = '2px solid red';
    }
});

// Ejercicio 2: Pedido de stickers
document.getElementById('calcular').addEventListener('click', function () {
    const cantidad1 = parseInt(document.getElementById('cantidad1').value) || 0;
    const cantidad2 = parseInt(document.getElementById('cantidad2').value) || 0;
    const cantidad3 = parseInt(document.getElementById('cantidad3').value) || 0;
    const total = cantidad1 + cantidad2 + cantidad3;

    const resultado = document.getElementById('resultado');
    if (total <= 10) {
        resultado.textContent = `Llevas ${total} stickers`;
    } else {
        resultado.textContent = 'Llevas demasiados stickers';
    }
});

// Ejercicio 3: Verificación de contraseña
document.getElementById('ingresar').addEventListener('click', function () {
    const select1 = document.getElementById('select1').value;
    const select2 = document.getElementById('select2').value;
    const select3 = document.getElementById('select3').value;
    const password = select1 + select2 + select3;

    const mensaje = document.getElementById('mensaje');
    if (password === '911') {
        mensaje.textContent = 'password 1 correcto';
    } else if (password === '714') {
        mensaje.textContent = 'password 2 es correcto';
    } else {
        mensaje.textContent = 'password incorrecto';
    }
});
