

$(document).ready(function ()
{
   
    WireEventsGetAllbuisness();
    var a = JSON.parse(sessionStorage.spaINFO)
    for (var i = 0; i < a.length; i++)
    {
        var r = $('<input/>').attr({
            type: "button",
            id: a[i].SpaID,

            value: a[i].SpaName
        });
        $("body").append(r);
        $("body").append("<br />");
        
    }
    
    $(':button').click(function ()
    {
        debugger;
        sessionStorage.id = this.id
        var Session= sessionStorage.id
        var  SessionID=
        {
            SpaID: Session
        };
        $.ajax({
            url: WebServiceURL + "/GetAllDescription",
            dataType: "json",
            type: "POST", //use only POST!
            //data: "{'name':'" + name + "' , " +
            //      " 'pass':'" + pass + "' }",
            //data: "{}",
            data: JSON.stringify(SessionID),
            contentType: "application/json; charset=utf-8",
            error: function (jqXHR, exception) {
                alert(formatErrorMessage(jqXHR, exception));
            },
            // async: false,
            success: function (data) 
            {
                sessionStorage.description = data.d;
                var info = JSON.parse(sessionStorage.description)
                sessionStorage.description = info.SpaDescription;
                sessionStorage.showname = info.SpaName;
                alert(info.SpaDescription);
                alert(data.d)
                //window.location.href = "../spaINFO.html?id=" + this.id;
                window.location.href = "infoaboutspa.html";

               
 
            }
        });

        alert('Loading');
    });



    function WireEventsGetAllbuisness()
    {


    }

    function formatErrorMessage(jqXHR, exception)
    {
    if (jqXHR.status === 0)
    {
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
        
    });

    //$('#showNames').html(sessionStorage.spaNames);
