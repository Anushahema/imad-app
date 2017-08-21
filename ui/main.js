console.log('Loaded!');

var nameinput=document.getElementByid("name");
var fname=nameinput.value;
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
            }
        }
    };
    var ul=document.getElementByid("namelist");
    ul.innerHTML=list;
};
req.open('GET','http://anushasakthinathan.imad.hasura-app.io/counter',true);
req.send(null);