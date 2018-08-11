var local = true;
var WebServiceURL = "http://ruppinmobile.ac.il.preview26.livedns.co.il/site10/UsersWS.asmx";
if (local) {
    WebServiceURL = "UsersWS.asmx";
}


$(document).ready(function () {

    WireEventspassword();
});

function WireEventspassword() {
    $('#changepassword').click(function () {
        alert();
        var inputPass = $('#password').val();
        if (inputPass == "") {
            alert('please fiil the form!!!');
            return;
        }

        var user =
        {
            pass: inputPass,
        };
        $.ajax({
            url: WebServiceURL + "/changepassword",
            dataType: "json",
            type: "POST", //use only POST!
            //data: "{'name':'" + name + "' , " +
            //      " 'pass':'" + pass + "' }",
            //data: "{}",
            data: JSON.stringify(user),
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, exception) {
                alert(formatErrorMessage(jqXHR, exception));
            },
            // async: false,
            success: function (data) {
                alert(data.d);

                window.location.replace("index.html");
               
            }
        });

        alert('Loading');
    });
};

function formatErrorMessage(jqXHR, exception) {
    if (jqXHR.status === 0) {
        return ('Not connected.\nPleaseverify your network connection.');
    } else if (jqXHR.status == 404) {
        return ('The requested page not found. [404]');
    } else if (jqXHR.status == 500) {
        return ('Internal Server Error [500].');
    } else if (exception === 'parsererror') {
        return ('Requested JSON parse failed.');
    } else if (exception === 'timeout') {
        return ('Time out error.');
    } else if (exception === 'abort') {
        return ('Ajax request aborted.');
    } else {
        return ('Uncaught Error.\n' + jqXHR.responseText);
    }
}