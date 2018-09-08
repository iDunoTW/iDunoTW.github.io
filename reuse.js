function getScriptInfo(){
    let info = document.getElementById("script_info");
    if(!info){
        info = document.getElementById("show_prod").cloneNode(true);
        info.id = "script_info";
        info.childNodes[1].childNodes[2].nodeValue = "Script info";
        info.childNodes[3].childNodes[0].childNodes[1].innerHTML = "";
        document.getElementById("rightcolumn").appendChild(info);
    }
    return info;
}

function getScriptInfoTBody(){
    return getScriptInfo().childNodes[3].childNodes[0].childNodes[1];
}

function isOverviewPage(){
    let url = window.location.href;
    if(url.endsWith("screen=overview") || url.endsWith("overview&intro")){
       return true;
    }else{
       return false;
    }
}
