console.log('Loaded!');

var button=document.getElementByid("counter");
var counter=0;
button.onclick=function(){
    var req=new XMLHTTPRequest();
    req.onreadystatechange=function(){
        if(req.readystate==XMLHTTPRequest.DONE)
        {
            if(req.status==200)
            {
               var counter=req.responsetext;
               counter=counter+1;
               var span=document.getelementById("count");
               span.innerHTML=counter.tostring();
            }
        }
    };
   
};
var nameinput=document.getElementByid("name");
var fname=nameinput.value;
req.open('GET','http://anushasakthinathan.imad.hasura-app.io/submit_name?name='+name,true);
req.send(null);

var submit=document.getElementByid("submit");
submit.onclick=function(){
    var req=new XMLHTTPRequest();
    req.onreadystatechange=function(){
        if(req.readystate==XMLHTTPRequest.DONE)
        {
            if(req.status==200)
            {
                var name=req.responsetext;
                name=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                     list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementByid("namelist");
                ul.innerHTML=list;
            }
        }
    };
   
};
var nameinput=document.getElementByid("name");
var fname=nameinput.value;
req.open('GET','http://anushasakthinathan.imad.hasura-app.io/submit_name?name='+name,true);
req.send(null);