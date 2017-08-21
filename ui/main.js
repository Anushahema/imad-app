console.log('Loaded!');

var button=document.getElementById("counter");
var counter=0;
button.onclick=function(){
    var req=new XMLHTTPRequest();
    req.onreadystatechange=function(){
        if(req.readystate==XMLHTTPRequest.DONE)
        {
            if(req.status==200)
            {
                var counter=req.responsetext;
                 var span=document.getElementById("count");
                span.innerHTML=counter.toString();
            }
        }
    };
    counter=counter+1;
};
req.open('GET','http://anushasakthinathan.imad.hasura-app.io/counter',true);
req.send(null);