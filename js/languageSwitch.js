/**
 * Created by hatassska on 01.04.2015.
 */

function switchLanguage(locale)
{
    var locId = localStorage.getItem('languageId');

    switch (locale)
    {
        case 'ru': locId = 0;
            break;
        case 'ua': locId = 1;
            break;
        case 'en': locId = 2;
            break;
        default : locId = 0;
    }
    console.log("switched");
    localStorage.setItem('languageId',locId);
    location.reload();
}

function loadPage(){
    var locId = localStorage.getItem('languageId');
    if(locId == null)
    {
        localStorage.setItem('languageId',0);
        locId = 0;
    }
    var path;

    switch (locId)
    {
        case "0": path = 'ru/';
            break;
        case "1": path = 'ua/';
            break;
        case "2": path = 'en/';
            break;
        default: path = 'ru/';
            break;
    }

    CheckIfExist(path, "navbar");
    CheckIfExist(path, "resume");
    CheckIfExist(path, "biography");
    CheckIfExist(path, "referat");
    CheckIfExist(path, "library");
    CheckIfExist(path, "links");
    CheckIfExist(path, "report");
    CheckIfExist(path, "individual");
    CheckIfExist(path, "footer");

    setTimeout(AddPageScroll,500);
}

function CheckIfExist(pathOne, pathTwo)
{
    var fullPath = pathOne + pathTwo + ".html";

    $.ajax({
        url: fullPath,
        type:'HEAD',
        error: function()
        {
            $( "#" + pathTwo).hide();
            console.log(pathTwo + " not exist")
        },
        success: function()
        {
            $( "#" + pathTwo ).load( fullPath );
            console.log(pathTwo + " exist")
        }
    });
}