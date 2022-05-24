//Ejemplo Jquery dentro de Javascript
const weatherApiKey = "5b592f84814849fcb7900254223004"; // poner tu api key


$(document).ready(function(){
    //debugger; para revisar el archivo y la pagina se queda detenida
    $("#form").validate({
        rules: {
            name : {
                required: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            numberPhone: {
                required: true,
                number: true,
                min: 0,
                minlength: 9
            },
            city : {
                required: true,
                minlength: 3
            },
            message : {
                required: true,
                minlength: 30
            },
        },
        messages : {
            name: {
                minlength: jQuery.validator.format("Por favor, al menos {0} caracteres son necesarios"),
                required:"Este campo es requerido"
            },
            
            email: {
                email: "El email debe tener el formato: abc@domain.tld",
                required:"Este campo es requerido"
            },

            numberPhone: {
                number:"Por favor ingresa un número válido",
                minlength: jQuery.validator.format("Por favor, al menos {0} caracteres son necesarios"),
                required:"Este campo es requerido"
            },
            city: {
                minlength: jQuery.validator.format("Por favor, al menos {0} caracteres son necesarios"),
                required:"Este campo es requerido"
            },
            message: {
                minlength: jQuery.validator.format("Por favor, al menos {0} caracteres son necesarios"),
                required:"Este campo es requerido"
            },
        }

    });

    $('#form').submit(function(event) {
        console.log("Formulario enviado")
        event.preventDefault();
    });

    //Consumir apis externas de geolocalización y tiempo
    if('geolocation' in navigator) {
        /* geolocation is available */
        console.log("available")
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
            $.get(`https://api.weatherapi.com/v1/current.json?q=${position.coords.latitude},${position.coords.longitude}&key=${weatherApiKey}`, 
            function(data) {
                console.log(data)
            })
        });
    } else {
        /* geolocation IS NOT available */
        console.log("not available")
    }

    

});
    




    /* //validación individual
    $('#name').focusout(function() {
        console.log("Sali del foco")

        if ($('#name')[0].value == '' || $('#name')[0].value == null) {
            document.getElementsByName("nameAlert")[0].classList.remove('hide');
        } else {
            document.getElementsByName("nameAlert")[0].classList.add('hide');
        }
    })

    $('#email').focusout(function() {
        console.log("Sali del foco")

        if ($('#email')[0].value == '' || $('#email')[0].value == null) {
            document.getElementsByName("emailAlert")[0].classList.remove('hide');
        } else {
            document.getElementsByName("emailAlert")[0].classList.add('hide');
        }
    })

    $('#id').focusout(function() {
        console.log("Sali del foco")

        if ($('#id')[0].value == '' || $('#id')[0].value == null) {
            document.getElementsByName("idAlert")[0].classList.remove('hide');
        } else {
            document.getElementsByName("idAlert")[0].classList.add('hide');
        }
    })

    $('#city').focusout(function() {
        console.log("Sali del foco")

        if ($('#city')[0].value == '' || $('#city')[0].value == null) {
            document.getElementsByName("cityAlert")[0].classList.remove('hide');
        } else {
            document.getElementsByName("cityAlert")[0].classList.add('hide');
        }
    })

    $('#message').focusout(function() {
        console.log("Sali del foco")

        if ($('#message')[0].value == '' || $('#message')[0].value == null) {
            document.getElementsByName("messageAlert")[0].classList.remove('hide');
        } else {
            document.getElementsByName("messageAlert")[0].classList.add('hide');
        }
    }) */




    















    
    