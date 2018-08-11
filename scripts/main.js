//hagdarat sharat
var local = true;
var WebServiceURL = "http://ruppinmobile.ac.il.preview26.livedns.co.il/site10/UsersWS.asmx";
if (local) {
    WebServiceURL = "UsersWS.asmx";
}
//login page
$(document).ready(function () {
    WireEventsLoginPage();
});
function WireEventsLoginPage() {


    $("#name").html("שלום " + sessionStorage.name);
    $('#lpBtnLogin').click(function () {
        
        var inputNamea = $('#lpTxtName').val();
        var inputPassa = $('#lpTxtPass').val();

        var user =
        {
            name: inputNamea,
            pass: inputPassa
        };

        //alert(user.name);
        $.ajax({
            url: WebServiceURL + "/Login",
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
                /*
                
                alert(data);
                alert(data.d);
                */
                var res = data.d;
                var resOutput = JSON.parse(res)
                sessionStorage.userid = resOuput.ID;
                debugger;
                if (res != 'no user found!')
                {
                   
                    sessionStorage.name = user.name;


                  //מעביר לדף תורים
                    window.location.replace("myturn.html");
              
                    //var UserObj = JSON.parse(res);
                    //$('#lpDvRes').text(UserObj.ID + ", " + UserObj.Name + ", " + UserObj.Family + ", " + UserObj.Pass + ", " + UserObj.Type);
                
                }
                else
                {
                    alert("password or username  incorrect");
                    
                }

                alert('in success');
                //code              
            }

        });
     
        alert('Loading');
    });


    $('#lpBtnLoginInt').click(function () {
        var inputName = $('#lpTxtName').val();
        var inputPass = parseInt($('#lpTxtPass').val());

        var user =
        {
            name: inputName,
            pass: inputPass
        };
        alert(user.name);
        $.ajax({
            url: WebServiceURL + "/LoginInt",
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
                //var res = data.d;
                //if (res != 'no user found!') {
                //    var UserObj = JSON.parse(res);
                //    $('#lpDvRes').text(UserObj.ID + ", " + UserObj.Name + ", " + UserObj.Family + ", " + UserObj.Pass);
                //}
                alert('in success');
                //code
            }
        });

        alert('END');
    });
}

//signup page

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