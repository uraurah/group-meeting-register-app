let init=function(){}
let api=new XMLHttpRequest();
api.open("GET","/api/session",false);
api.send("");
let res=JSON.parse(api.responseText);
if(res["session"] == "pass"){
  document.addEventListener('DOMContentLoaded',function(){init();});
}
else{location.href="https://www.ivusa.com/member/session?host:"+location.host+"&fwd:"+location.pathname;}



let CalendarDateClick=function(d){alert("日付クリックの処理が定義されていません");}
let CalendarGenerate=function(d){
  let ym=d.split("-");
  let date=new Date(ym[0],(ym[1]-1),1);
  let pym=ym[0]+"-"+(ym[1]-1);
  if(ym[1] == 1){pym=(ym[0]-1)+"-12";}
  let nym=ym[0]+"-"+(ym[1]*1+1);
  if(ym[1] == 12){nym=(ym[0]*1+1)+"-1";}
  let data='<table>'
          +' <tr>'
          +'  <td onClick="CalendarMonthChange(\''+pym+'\')">&lt;</td>'
          +'  <td colspan=5>'+date.getFullYear()+"年"+(date.getMonth()+1)+"月"+'</td>'
          +'  <td onClick="CalendarMonthChange(\''+nym+'\')">&gt;</td>'
          +' </tr>'
          ;
  data+='<tr>';
  for(let i=0;i < date.getDay();i++){
    data+='<td>&nbsp;</td>';
  }
  let m=date.getMonth();
  while(m == date.getMonth()){
    if(date.getDay() == 0){data+='</tr><tr>';}
    data+='<td onClick="CalendarDateClick(\''+date.getFullYear()+'-'+String(date.getMonth()+1).padStart(2,'0')+"-"+String(date.getDate()).padStart(2,'0')+'\')">'+date.getDate()+'</td>';
    date=new Date(date.getFullYear(),date.getMonth(),date.getDate()+1);
  }
  data+='</tr></table>';
  return data;
}
let CalendarMonthChange=function(d){
  CurrentMonth=d;
  CalendarHide();
  CalendarView();
}
