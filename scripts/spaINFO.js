

$(document).ready(function ()
{
   alert(sessionStorage.id)
    WireEventsGetAllbuisness();
    //$('#showNames').html(sessionStorage.spaNames);
});

function WireEventsGetAllbuisness()
{
    var queryDict = {}
    location.search.substr(1).split("&").forEach(function (item) { queryDict[item.split("=")[0]] = item.split("=")[1] })
    $('#spaINFO').html("This spa name id is:"+queryDict.id);
}