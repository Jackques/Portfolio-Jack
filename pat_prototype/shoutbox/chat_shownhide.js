window.onload = toggleMe_showchat('content');
function toggleMe_hidechat(a){

var down_hide=document.getElementById('chat_hide');
var up_show=document.getElementById('chat_show');
var e=document.getElementById(a);

if(!e)return true;
if(e.style.display=="none"){ 

e.style.display="inline-block";

up_show.style.display="inline-block";
down_hide.style.display="none";

$('#message').toggle();
$('#send').toggle();
}
else{ 
e.style.display="none";

up_show.style.display="none";
down_hide.style.display="inline-block";

$('#message').toggle();
$('#send').toggle();
}
return true;
}

//
// FF AL DEZE CODE HIERO AANPASSEN ZODAT HET WERKT OP DE CHATFUNCTIE
//

function toggleMe_showchat(a){

var down_hide=document.getElementById('chat_hide');
var up_show=document.getElementById('chat_show');
var e=document.getElementById(a);

if(!e)return true;
if(e.style.display=="none"){
e.style.display="inline-block";

up_show.style.display="inline-block";
down_hide.style.display="none";

$('#message').toggle();
$('#send').toggle();
}

else{
e.style.display="none";

up_show.style.display="none";
down_hide.style.display="inline-block";

$('#message').toggle();
$('#send').toggle();

}
return true;
}