//alert("authenticate_socialmedia.js is ook ready!");
var secur = 0;
// 1. Runs when the JavaScript framework is loaded  
// LET OP! ALS ER EEN FOUT IN (DE EXTERNE) JAVASCRIPT FILE ZIT ZAL HTML DEZE NIET UITVOEREN!!!

function onLinkedInLoad() {    
	//alert("ik ga nu proberen te authenceren met linkedin");
	
	var billy = IN.User.isAuthorized();
	
	
	//alert(secur);
	
	if(billy==true&&secur==0){
		//alert("yes we zijn geauthenticieteerd!");
		getgroupsforlist();
		$("#jgo").show();
		secur++;
		//alert(secur);
		
		}
		else if(secur>0){
		//alert("je bent toch al geauthenticiteerd of whatever?");
		}
		
		else{
		//alert("helaas er gaat iets mis met de authenticatie met linkedin!");
		$("#jgo").hide();
		}
}