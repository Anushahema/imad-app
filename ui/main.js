var button=document.getElementById('counter');
var counter=0;
button.onclick = function(){
    var req=new XMLHttpRequest();
    req.onreadystatechange=function(){
        if(req.readystate==XMLHttpRequest.DONE)
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
    req.open('GET','http://anushasakthinathan.imad.hasura-app.io/counter',true);
    req.send(null);
};
           
            
var submit=document.getElementById('submit');
submit.onclick = function(){
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate==XMLHttpRequest.DONE)
        {
            if(request.status==200)
            {
                var name=request.responsetext;
                name=JSON.parse(names);
                var list='';
                for(var i=0;i<names.length;i++){
                    list+='<li>'+names[i]+'</li>';
                }
                var ul=document.getElementById("namelist");
                ul.innerHTML=list;
            }
        }
    };
    var nameinput=document.getElementByid("name");
    var name=nameinput.value;
    request.open('GET','http://anushasakthinathan.imad.hasura-app.io/submit_name?name='+name,true);
    request.send(null);
};