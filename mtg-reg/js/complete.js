init=function(){
  if(!location.search){alert("URLが正しくありません");return false;}
  let u="/api/mtg-reg?id="+location.search.substring(1);
  api.open("GET",u,false);
  api.send("");
  let res=JSON.parse(api.responseText);
  if(res["admin"]){document.getElementById("Admin").innerHTML=res["admin"];}
  if(res["status"] == "NotOperator"){
    alert(res["name"]+"は班長/グループ長ではありません");
    document.querySelector("main").innerHTML="";
    return false;
  }
  document.getElementById("club").innerHTML=res["club"];
  document.getElementById("group").innerHTML=res["group"];
  document.getElementById("date").innerHTML=res["date"];
  document.getElementById("participants").innerHTML=res["participants"];
}
