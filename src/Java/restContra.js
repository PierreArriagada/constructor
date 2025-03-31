$(document).ready(function() {
    // Evento 'click' del botón de recuperación
    $("#recoverButton").click(function() {
        let email = $("#emailInput").val();

        console.log("Correo ingresado:", email);

        if (email.includes("@")) {
            console.log("Correo válido, simulando envío...");
            console.log("Correo enviado a:", email);

            // Asignar el correo al span y luego el atributo data-email
            $('#emailDisplay').text(email);
            $("#messageDialog").attr("data-email", email);

            console.log("Atributo data-email asignado:", $("#messageDialog").attr("data-email"));
            console.log("Mostrando diálogo de confirmación...");
            $("#messageDialog")[0].showModal();
        } else {
            console.log("Correo inválido, mostrando alerta...");
            alert("Por favor, introduce un correo electrónico válido.");
        }
    });

    // Evento 'show' del dialog (ahora innecesario, pero lo dejamos por si acaso)
    $('#messageDialog').on('show', function() {
        let email = $(this).attr('data-email');
        console.log("Evento 'show' del dialog, email:", email);
    });

    $("#closeDialog").click(function() {
        console.log("Cerrando diálogo y redirigiendo...");
        $("#messageDialog")[0].close();
        window.location.href = "/src/paginas/loginUser.html";
    });
});