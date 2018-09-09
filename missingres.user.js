// ==UserScript==
// @name         Missing Resources
// @namespace    https://idunotw.github.io/
// @version      0.1.0
// @description  Try to take over the world!
// @author       iDunnoTW
// @match        https://*.tribalwars.net/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(isMainPage()){
        doBuildingStuff();
    }else if(isOverviewPage()){
        doInfoPanelStuff();
    }

})();

function doInfoPanelStuff(){
    let infop = getScriptInfoTBody();
        let row = infop.insertRow();
        row.insertCell(0).innerHTML = "<b>Missing Resources<b>";
        row.insertCell(1).innerHTML = "runing";
}

function doBuildingStuff(){
    //gets res
        var resource = [
            document.getElementById('wood'),
            document.getElementById('stone'),
            document.getElementById('iron')];

        //gets table
        var table = document.getElementById("buildings");

        var something = setInterval(timer, 1000);
        function timer() {
            ModifyBuildingTble(table, resource,);
            //todo

        }
}


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

function ModifyBuildingTble(table, resource){
    //loops through rows (except header i=1)
    for (var i = 1; i < table.rows.length; i++){

       //loops through cells in current row (column 1-3 is resourse cost)
       for(var j = 1; j <= 3 ; j++){

           // get cell info
           var cellVal = table.rows.item(i).cells.item(j);

		   var diff = cellVal.dataset.cost - Number(resource[j-1].innerHTML);

           if(diff > 0){
               cellVal.childNodes[1].nodeValue = cellVal.dataset.cost + "  (" + diff + ")";
           }
       }
    }
}

//Todo outsorce
function isMainPage(){
    let url = window.location.href;
    if(url.endsWith("screen=main")){
       return true;
    }else{
       return false;
    }
}
