function clothing(clothes) {
    var clothing_html = ""
    for(var i=0;i<clothes.length;i++){
        clothing_html+="<div class=\"col-md-4\">\n" +
            "            <div class=\"item\">\n" +
            "                <h4 class=\"clothing-name\">"+clothes[i].name+"</h4>\n" +
            "                <img class=\"clothing-image\" src=\""+clothes[i].image+"\" height=\"225\" width=\"225\"/>\n" +
            "                <h5 class=\"clothing-price\">"+clothes[i].price+"</h5>\n" +
            "            </div>\n" +
            "        </div>\n" ;
    }
    return clothing_html;
}
function loadData() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            var ct = this.responseText;
            ct = JSON.parse(ct);
            var clothes = ct.data.foods;
            var clothes_html = document.getElementById("clothes");
            clothes_html.innerHTML = clothing(clothes);
        }
    }
    xhttp.open("GET","https://foodgroup.herokuapp.com/api/category/3");
    xhttp.send();
}
loadData();
