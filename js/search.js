// Selecciona todos los elementos checkbox dentro del menú desplegable
const dropdownChecks = document.querySelectorAll('.dropdown_check');

// Añade un evento de cambio para cada checkbox
dropdownChecks.forEach(check => {
    check.addEventListener('change', function () {
        // Cierra otros dropdowns cuando uno se abre
        dropdownChecks.forEach(otherCheck => {
            if (otherCheck !== this) {
                otherCheck.checked = false;
            }
        });
    });
});



//Inicializa el plugin datatable en la tabla con el ID #table
var buscador = $("#table").DataTable();

//Muestra el campo de búsqueda al hacer clic en el botón
$("#show_search").click(function(){
    //Muestra el buscador al hacer click en la lupa
    $("#input_search").show().focus();
    //Oculto el botón
    $(this).hide();
});



//Añade un evento "keyup" al campo de búsqueda con el ID "input_search" 
$("#input_search").keyup(function(){
    //Realiza una búsqueda con lo que haya escrito en el campo de búsqueda
    buscador.search($(this).val()).draw();
    //Si el campo de búsqueda está vacío, oculta el desplegable de resultados
    if ($(this).val() === ""){
        $(".content_search").fadeOut();
    }else{  
        //Si el campo de búsqueda tiene texto, muestra el desplegable de resultados
        $(".content_search").fadeIn();
    }
});



// Añade un evento "click" al documento (detecta clicks en cualquier parte de la página)
$(document).click(function(event) {
    //Verifica si el click se realizó fuera del cuadro de búsqueda y del desplegable
    if (!$(event.target).closest("#input_search, .content_search, #show_search").length) {
        //Oculta el buscador y el desplegable de opciiones
        $("#input_search").hide().val("");
        $(".content_search").fadeOut();
        //Mostrar el botón nuevamente 
        $("#show_search").show();
    }
});










