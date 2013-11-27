var conversacionId;
var lastid;
//funcion inicial
$(function () {

    getContacts();
    $("#elboton").on('click', manejadorElBoton);
    $("#navicon").on('click', manejadornavicon);
    $(document).on('touchmove', function (e) {
        e.preventDefault();
    });
    changeBackground(3);
    $("#eltextbox").keypress(function (e) {

        if (e.keyCode == 13) {
            e.preventDefault();
            manejadorElBoton();


        }
    });

});


function manejadornavicon() {

    $("#contactoList").toggleClass("visible", 1000);
}

function getContacts()

{

    $.getJSON("PHP/getDudes.php", function (data) {

        var html = "<ul>";
        $.each(data.dudelist, function (i, dude) {

            html += "<li data-id='" + dude.id + "'><img src='images/dudeimagen/" + dude.photourl + "' ><span>" + dude.nombre + "<span></li>";
        });

        $("#contentlista").html(html);
        $('#contentlista li').on('click', manejadorLi);
    });




}

function isWindowAlreadyOpened(id) {

    for (i in ventanas) {
        if (ventanas[i] == id) {
            alert("Ya existe esta conversacion");
            return true;
        }
    }
    return false;
}

function getLastMessages(id, numMessages) {


    $.getJSON("PHP/getLastMessage.php?numMessage=" + numMessages + '&otroid=' + id, function (data) {

        var mensajes = "";

        $.each(data.Mensajes, function (i, m) {

            if (lastid != m.id) {
                mensajes = mensajes + "<li class=" + m.class + ">" + m.mensaje + "</li><div class='clearfix'></div>";
                if (numMessages != 10){
                  
                    playAlerta();
                                      }
                lastid = m.id;
            }
        });
        console.log("log 1" + mensajes);

        $('#mensajesBoxcontenido').append(mensajes);
    });


}

function manejadorLi() {

    lastid = 0;
    conversacionId = $(this).data('id');
    getLastMessages(conversacionId, 10);
    if($(window).width()<500)$("#contactoList").removeClass("visible");
    $('#mensajesBoxcontenido').html("");
    setInterval(function () {
        getLastMessages(conversacionId, 1);
    $("#mensajesBoxcontenido").scrollTop($("#mensajesBoxcontenido")[0].scrollHeight);
    }, 1000);
}

function manejadorElBoton() {
    var message = $("#eltextbox").val();


    $.get("PHP/agregarMensaje.php?mensaje=" + message + "&to=" + conversacionId + "&from=2");

    $('#eltextbox').val('');
}

function popup(Titulo, mensaje) {
    var html = '<div class="cortina"><div class="caja" id="popup"><h1>' + Titulo + '</h1> <p>' + mensaje + '</p></div></div>';

    $('body').append(html);

    $('.cortina').on('click', function () {
        $(this).remove();
    });
}


function desplegarListaBackgrounds() {
    var html = "";
    for (var i = 1; i <= 4; i++) {
        html = html + "<li class='lichangebackground'><img src='images/background/" + i + ".png'></li>";
    }
    popup("Cambia el dude-ground", html);
    $(".lichangebackground").on('click', manejadorCambiarFondo);
}

function manejadorCambiarFondo() {
    //metodo que se activa cuando se da un click en algun <li> para cambiar de fondo
    var newbackground = ($(this).index()) - 1;
    changeBackground(newbackground);
}

function changeBackground(choice) {

    $("body").css("background-image", "url(images/background/" + choice + ".png)");


}


function settings() {

    var html = '<div class="cortina" ><div id="settings" class="caja"><h1>Settings</h1> <div id="tabs"> <ul> <li><a href="#tabs-1"><img src="images/iconos/AgregarDudeH.png"> Add a dude</a></li> <li><a href="#tabs-2"><img src="images/iconos/ChangeFondo.png">Change your background :D</a></li> <li><a href="#tabs-3"><img src="images/iconos/Settings.png" >Another settings</a></li> </ul> <div id="tabs-1"> <input class="textboxadddude"> <a href="#" onclick="addDude();" class="button">Add</a> </div> <div id="tabs-2"> <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p> </div> <div id="tabs-3"> <p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p> <p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p> </div> </div> </div> </div>';
    $("body").append(html);
    $("#tabs").tabs();
    $.post("PHP/getAllDudes.php", function (data) {
        var array = data.split(',');
        $(".textboxadddude").autocomplete({
            source: array
        });
    });








    $('.cortina').click(function (e) {


        $(this).remove();
    }).children().click(function (e) {
        return false;
    });;

}

function playAlerta() {
    var mySound = new buzz.sound("sounds/alert", {
        formats: ["wav", "mp3", "aac"]
    });

    mySound.play();

}


function addDude() {
    var nuevodude = $(".textboxadddude").val();
    $(".cortina").remove();

    $.post("PHP/addDude.php", {
        newdude: nuevodude
    }).done(function (data) {

        if (data == "43") {
            popup("DUUUDE", "Ya tienes un nuevo amigo :'D");
            getContacts();
        } else popup("Bad luck dude", "Este dude no existe");
    });


}