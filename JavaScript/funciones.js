document.addEventListener('DOMContentLoaded', function() {
    //Fecha 
    function actualizarFecha() {
        const actual = new Date();
        const opcionesFecha = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };        
        
        const fecha = actual.toLocaleDateString('es-ES', opcionesFecha);        
        
        document.getElementById('fecha').textContent = `${fecha} `;
    }    
    // Actualizar Fecha 
    actualizarFecha();
    setInterval(actualizarFecha, 1000);
    
    // Cambio de imagen
    const heroSection = document.querySelector('.hero');
    const imgOriginal = 'url(../img/Ubicacion.jpg)';
    const imgCambio = 'url(../img/reforestacion_back.jpg)';
    
    if(heroSection) {
        heroSection.addEventListener('mouseenter', function() {
            this.style.backgroundImage = imgCambio;
        });
        
        heroSection.addEventListener('mouseleave', function() {
            this.style.backgroundImage = imgOriginal;
        });
    }
});

// Validar el formulario contacto
document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formularioContacto');
    
    formulario.addEventListener('submit', function(click) {
        click.preventDefault(); 
        
        // Mensaje de Contacto
        const datosRecogidos = {
            nombre: document.getElementById('nombre').value,
            telefono: document.getElementById('telefono').value,
            correo: document.getElementById('correo').value,
            mensaje: document.getElementById('mensaje').value,
            politica: document.getElementById('politica').checked
        };
        // Alert
        alert('Formulario capturado (ver consola)');
        formulario.reset();

        // Captura de Mensaje en consola
        console.log('Datos del formulario:', datosRecogidos);    
        
    });
});

// Usario Predefinido
const usuarioPredefinido = {
    usuario: "examen",
    password: "examen123"
    };
        
// visualizar contraseña
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling;
    
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
    
}

//Inicio de sesión
document.getElementById('formularioInicio').addEventListener('submit', function(click) {
    click.preventDefault();
    
    const usuario = document.getElementById('usuarioLogin').value;
    const password = document.getElementById('passwordLogin').value;
    
    if (usuario === usuarioPredefinido.usuario && password === usuarioPredefinido.password) {
        alert('Usuario y contraseña correctos');
        //Objeto usuario, aqui podemos ver lo que hemos definido
        console.log('Inicio de sesión:', { usuario, password }); 
    } else {
        alert('Usuario o contraseña incorrectos');
    }
});

// registro nuevo usuario
function nuevoRegistro() {
    document.getElementById('popupRegistro').style.display = 'flex';
    }
function cerrarPopup() {
    document.getElementById('popupRegistro').style.display = 'none';
    }

 // Registro
document.getElementById('formularioRegistro').addEventListener('submit', function(click) {
    click.preventDefault();
    
    // Mismo Correo
    const correo = document.getElementById('correoRegistro').value;
    const confirmarCorreo = document.getElementById('confirmarCorreoRegistro').value;
    
    if (correo !== confirmarCorreo) {
        alert('Los Correos son Diferentes');
        return;
    }
    
    // Aceptar Politica
    if (!document.getElementById('politicaRegistro').checked) {
        alert('Debes aceptar la política de privacidad');
        return;
    }
    
    // Motrar datos en Consola
    const datosRegistro = {
        nombre: document.getElementById('nombreRegistro').value,
        apellido: document.getElementById('apellidoRegistro').value,
        correo: correo,
        usuario: document.getElementById('usuarioRegistro').value,
        password: document.getElementById('passwordRegistro').value,
        fechaRegistro: new Date().toLocaleString()
    };
    
    console.log('Nuevo registro:', datosRegistro);
    alert('Registro exitoso. Verifica la consola para ver los datos.');
    
    cerrarPopup();
    this.reset();
});