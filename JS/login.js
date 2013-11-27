function login(username, password) {

    $.support.cors = true;
    $.post("PHP/login.php", {
        username: username,
        password: password,
        format: "jsonp"
    }).done(function (data) {
        data = $.parseJSON(data);

       

        if (data !== null) {
            post_to_url("index.php",{userid:data},"post");
        } else {
            $('#login').effect('shake');
        }

    });



}

function signupPopUp() {


    $("#screen").fadeIn("1000");
}

function ClearTextBox(tb) {

   
    var text = tb.value;
    if (text=="Dude-name"||text == "Username" || text == "Email" || text == "Password" || text == "Retype password")
        tb.value = "";
    if (tb.id == "tbPasswd" || tb.id == "password" || tb.id == "Retype")
        tb.setAttribute('type', 'password');

}

function ClearTextBoxBlur(tb) {

    var text = tb.id;
   
    if (tb.value == "") {
        $(tb).css("color", "#d1d1d1");
        if (text == "tbUserName") tb.value = "Dude-name";
          if (text == "tbPasswd") tb.value = "Password";
        if (text == "username") tb.value = "Username";
        if (text == "password") tb.value = "Password";
        if (text == "retype") tb.value = "Retype password";
        if (text == "email") tb.value = "Email";
        tb.setAttribute('type', 'text');

    }
    if(text=="Retype")
        if( $("#password").val()!=tb.value)
                alert("Password diferente !");
    
}



function signup() {
   $.support.cors = true;
   var varusername=($("#username").val());
    var varemail= $("#email").val()
    var varpassword= $("#password").val()
    var varretype= $("#retype").val()


    
    
      $.support.cors = true;
    //alert('r');
    $.post("PHP/signup.php", {
        username: varusername,
        password: varpassword,
        email:varemail,
        format: "jsonp"
    }).done(function (data) {
    
if(data==1){
    alert("Username already exists");
$("#username").effect("highlight", {color: '#51b93b'},700);
    
}
        if(data==2){alert("Email address already registered");

$("#email").effect("highlight", {color: '#51b93b'},700);
    
}
         if(data==12)
         {
             alert("Bad luck "+varusername+"\n"+"Username and Email already exist :(")
             $("#username").effect("highlight", {color: '#51b93b'},700);
             $("#email").effect("highlight", {color: '#51b93b'},700);
         }
        if(data==43)
        {
            alert("Thanks for be part of our family #thanks");
                  $("#cancelsignup").click();
//              post_to_url("index.php",{userid:data},"post");
        }

    });



    
    
}

function post_to_url(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}








