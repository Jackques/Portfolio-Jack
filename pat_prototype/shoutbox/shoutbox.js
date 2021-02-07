/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	//global vars
	var inputUser = $("#nick");
	var inputMessage = $("#message");
	var loading = $("#loading");
	var messageList = $(".content > ul");

	//functions
	function updateShoutbox(){
		//send the post to shoutbox.php
		$.ajax({
			type: "POST", url: "shoutbox/shoutbox.php", data: "action=update",
			complete: function(data){
				loading.fadeOut();
				messageList.html(data.responseText);
				messageList.fadeIn(2000);
			}
		});
	}
	//check if all fields are filled
	function checkForm(){
		if(inputUser.attr("value") && inputMessage.attr("value"))
			return true;
		else
			return false;
	}
	
	//Load for the first time the shoutbox data
	updateShoutbox();

	
	//on submit event
	$("#form").submit(function(){
		if(checkForm()){
			var nick = inputUser.attr("value");
			var message = inputMessage.attr("value");
			//we deactivate submit button while sending
			$("#send").attr({ disabled:true, value:"Verzenden..." });
			$("#send").blur();
			//send the post to shoutbox.php
			$.ajax({
				type: "POST", 
				url: "shoutbox/shoutbox.php", 
				data: "action=insert&nick=" + nick + "&message=" + message,
				complete: function(data){
					messageList.html(data.responseText);
					updateShoutbox();
					wip(); //update gameification score +1
					//reactivate the send button
					$("#send").attr({ disabled:false, value:"Verzenden" });
					$("#message").attr({value:"" });
				},
				error: function(t){
				//alert(t);
										}
			 });
		}
		else alert("U heeft geen tekst ingevuld");
		//we prevent the refresh of the page after submitting the form
		return false;
	});
function wip(){
var dunne = "updateC";
	$.ajax({
			type: "POST", 
			url: "../gameification.php", 
			data: {"action" : dunne},
			success: function(data){
					//alert(data);
				},
			error: function(t){
				alert(JSON.stringify(t));
										}
		});
		}
});