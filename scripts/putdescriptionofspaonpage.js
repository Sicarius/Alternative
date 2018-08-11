

$(document).ready(function () {
   
    WireEventsGetAllbuisness();
    //$('#showNames').html(sessionStorage.spaNames);
});

function WireEventsGetAllbuisness() {
    var div = document.getElementById('namespa');

    div.innerHTML = div.innerHTML + sessionStorage.showname;
    var deescription = document.getElementById('spadescription');

    deescription.innerHTML = deescription.innerHTML + sessionStorage.description;

    //$("body").append(sessionStorage.showname);

    //$('#infoaboutpage').html(sessionStorage.showname);
}