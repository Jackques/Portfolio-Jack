el = document.getElementById("laden");
var bob;
//alert("linkedin_link.js up and running sir!");

  // 2. Runs when the viewer has authenticated  
function onLinkedInAuth() {    
  IN.API.Profile("me").result(displayProfiles);
  el.style.visibility="visible";
}

  // 3. Runs when the Profile() API call returns successfully
function displayProfiles(profiles) {
    /*
	member = profiles.values[0];
    document.getElementById("profiles").innerHTML = 
      "<p id=\"" + member.id + "\">Hello " +  member.firstName + " " + member.lastName + " " + member.headline + "</p>";
	  */
	  getallgroups();
}
  
function getallgroups(){
	//Get Groups I am a Member Of
	//http://api.linkedin.com/v1/people/~/group-memberships:(group:(id,name,counts-by-category))?membership-state=member
  
	IN.API.Raw("/people/~/group-memberships:(group:(id,name,counts-by-category))?membership-state=member").result(function(bob) { 
		//alert(JSON.stringify(bob)); //HAALT ALLE GROEPEN OP EN GEEFT DIE WEER IN JSON
		for(var i=0; i < bob.values.length; i++) { 
			var o = bob.values[i]._key; 
			retrievegroup(o);
		}
	})
}
  
function retrievegroup(o){
  //Show Most Popular Discussions for a Group
  		//http://api.linkedin.com/v1/groups/{group-id}/posts:(title,summary,creator:(first-name,last-name,picture-url,headline),likes,attachment:(image-url,content-domain,content-url,title,summary),relation-to-viewer)?category=discussion&order=popularity
	IN.API.Raw("/groups/"+ o +"/posts:(title,summary,attachment:(content-url))?category=discussion&order=recency").result(function(henk){ 
		//alert(JSON.stringify(henk)); //geeft weer wat er in elk pakketje van groepsberichten zit
		//alert(henk.values.length); //om te zien hoeveel berichten bij per groep ophaalt
		SendSearchResults(henk.values);
		
		/*
		for (var i=0; i < henk.values.length; i++) { 
			$("#ding").append("<tr><td>" + henk.values[i].title + "</td><td>" +  henk.values[i].summary + "</td><td>" + henk.values[i].attachment.contentUrl + "</td></tr>");
		}
		*/
	
	//mocht het mis gaan, laat zien wat er mis is.
	}).error(function(error) { 
		alert('fout');
		alert(JSON.stringify(error));
	});
}
  
function SendSearchResults(searchData){
	el.style.visibility="hidden";
	var data = JSON.stringify(searchData);
	//alert("ik ga aan de slag");
	
	$.post("linkedin_link/pgi.php", 
	{"data":data},                              /* data: {"werkveld" : antwoord, "vraag" : vraagnaam}, */
	function(output) {
		if(output == "succes") {
			alert("data placed succesfully");
		}
		else if(output == "nodata") {
			alert("no groups found");
		}
		else if(output == "error") {
			alert("something went wrong");
		}
	});
}