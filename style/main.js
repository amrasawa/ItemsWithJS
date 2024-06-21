var content;
var showBtn=document.querySelector("button");
content = "<li>c++</li>";
content += "<li>java</li>";
content += "<li>javascript</li>";
function showContent(){
    document.querySelector("ul").innerHTML=content;
    document.querySelector("ul").classList.add("show");
}
showBtn.onclick=showContent;
