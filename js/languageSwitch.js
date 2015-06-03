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
        case "0":
            path = '';
            break;
        case "1":
            path = 'u';
            break;
        case "2":
            path = 'e';
            break;
        default:
            path = '';
            break;
    }

    CheckIfExist(path, "biography", "bio");
    CheckIfExist(path, "referat", 'diss');
    CheckIfExist(path, "library", 'library');
    CheckIfExist(path, "links", 'links');
    CheckIfExist(path, "report", 'report');
    CheckIfExist(path, "individual", 'ind');

    setTimeout(AddPageScroll,500);
}

function CheckIfExist(prefix, selectionName, folder)
{
    var fullPath = folder + '/index' + prefix + ".html";

    $.ajax({
        url: fullPath,
        type:'HEAD',
        error: function()
        {
            $("#" + selectionName).hide();
            console.log(fullPath + " not exist")
        },
        success: function()
        {
            $("#" + selectionName).load(fullPath);
            console.log(fullPath + " exist")
        }
    });
}