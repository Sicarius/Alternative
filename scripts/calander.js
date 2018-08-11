//hagdarat sharat
var local = true;
var WebServiceURL = "http://ruppinmobile.ac.il.preview26.livedns.co.il/site10/UsersWS.asmx";
if (local) {
    WebServiceURL = "UsersWS.asmx";
}


$(document).ready(function () {
   
   
    WireEventsCalander();
});

function WireEventsCalander() {
    $('#sumbit').click(function () {
        
        today = new Date();
        dd = today.getDate();
        mm = today.getMonth() + 1; //January is 0!
        yyyy = today.getFullYear();
        today = dd + '-' + mm + '-' + yyyy;
        time = $('#date').val();
        date = new Date(time);
        y = date.getFullYear();
        m = date.getMonth() + 1;
        d = date.getDate();
        before = d + '-' + m + '-' + y;
        times = document.getElementById("time").value
        before = d + '-' + m + '-' + y;

     

        
        if (y < yyyy ||before == "NaN-NaN-NaN" | times == '')
        {
            alert("the date or time is error")
            return
        }
        var spaid = sessionStorage.id;
        var useridt = sessionStorage.userid;
        var date =
     {
         time: times,
         dates: before,
         spaids: spaid,
         userid: useridt

     };
       
        $.ajax({
            url: WebServiceURL + "/sendingdate",
            dataType: "json",
            type: "POST", //use only POST!
            data: JSON.stringify(years),
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, exception) {
                alert(formatErrorMessage(jqXHR, exception));
            },
            // async: false,
            success: function (data) {
               
                window.location.replace("index.html");
                alert(data.d);

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