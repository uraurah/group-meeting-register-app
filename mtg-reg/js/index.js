let loadymd="";
init=function(){
  let u="/api/mtg-reg";
  if(loadymd){u+="?date="+loadymd;}
  api.open("GET",u,false);
  api.send("");
  let res=JSON.parse(api.responseText);
  if(res["admin"]){document.getElementById("Admin").innerHTML=res["admin"];}
  if(res["status"] == "NotOperator"){
    alert(res["name"]+"は班長/グループ長ではありません");
    document.querySelector("main").innerHTML="";
    return false;
  }
//console.log(res["name"]);
// alert(res["name"]);
  document.getElementById("name2").innerHTML=res["club-group"];
  document.getElementById("date").innerHTML=res["date"];
  document.getElementById("Form-open_at").value=res["datev"];
  document.getElementById("join").innerHTML=res["participants"];

  document.getElementById("date").addEventListener("click",CalendarView);

  const boxes=document.querySelectorAll(".reaction");
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      boxes.forEach((item) => {
        item.classList.remove("reaction_btn-click");
      })
      box.classList.add("reaction_btn-click");
    });
  });
}



let CurrentMonth="";
CalendarView=function(){
  if(document.getElementById("Calendar").style.display == "block"){
    CalendarHide();
    return;
  }
  if(!CurrentMonth){
    let d=new Date();
    CurrentMonth=d.getFullYear()+"-"+(d.getMonth()+1);
  }
  document.getElementById("Calendar").innerHTML=CalendarGenerate(CurrentMonth);
  document.getElementById("Calendar").style.display="block";
}
CalendarHide=function(){
  document.getElementById("Calendar").innerHTML="";
  document.getElementById("Calendar").style.display="none";
}
CalendarDateClick=function(d){
  loadymd=d;
  CalendarHide();
  init();
}



DataSubmit=function(){
  let sendflag=true;
  const members=document.querySelectorAll(".resrag");
  members.forEach((member)=>{
    const resrags=member.querySelectorAll("input");
    let f=false;
    resrags.forEach((resrag)=>{
      if(resrag.checked){f=true;}
    });
    if(!f){
      member.style.background="#ffe0e0";
      member.style.border="1px dotted #ff3030";
      sendflag=false;
    }
  });
  if(sendflag){document.getElementById("DataForm").submit();}
  else{alert("返信状況について選択されていない対象者がいます");}
}
resragchange=function(obj){
  let ids=obj.name.split("-");
  document.getElementById("FormEx-"+ids[1]).style.background="none";
  document.getElementById("FormEx-"+ids[1]).style.border="none";
}
