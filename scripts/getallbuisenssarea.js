﻿

$(document).ready(function () {
    WireEventsGetAllbuisness();
});

function WireEventsGetAllbuisness() {
    $('#lpBtnLoginbuisness').click(function () {

        //var inputName = $('#newName').val();
        //var inputFamily = $('#newFamily').val();
        //var inputPass = $('#newPass').val();

        //if (inputPass == "" || inputFamily == "" || inputName == "") {
        //    alert('please fiil the form!!!');
        //    return;
        //}

        //var user =
        //{
        //    name: inputName,
        //    pass: inputPass,
        //    family: inputFamily
        //};
        debugger;
        $.ajax({
            url: WebServiceURL + "/GetAllbuisness",
            //dataType: "json",
            type: "POST", //use only POST!
            //data: "{'name':'" + name + "' , " +
            //      " 'pass':'" + pass + "' }",
            ////data: "{}",
            //data: JSON.stringify(user),
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, exception) {
                alert(formatErrorMessage(jqXHR, exception));
            },
            // async: false,
            success: function (data) {
                sessionStorage.spaINFO = data.d;
                window.location.replace("ShowSpas.html");
               

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