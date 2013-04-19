/* This javascript file is for PuttyTemplate
 * Handle all the basic javascript functions required on PuttyTemplate
 * PuttyMobile Team @Claydata
 * Created on 18 April, 2013
 * 
 * 
*/



/*Example of a single page*/
	/*$("#puttytemplate-home").bind("pageinit",function(event){
		
		$("#" + event.target.id).find("[data-role=footer][footer-nav=enabled]").load("footer.html", function(){
                $("#" + event.target.id).find("[data-role=navbar]").navbar();
            });
			
	});*/


/*INIT FOOTER*/

$(document).bind("pageshow",function(event){
		
		
		$("#" + event.target.id).find("[data-role=footer][footer-nav=enabled]").load("footer.html", function(){
               
				$("#" + event.target.id).find("[data-role=navbar]").navbar();
            });
			
});
/*END INIT FOOTER*/

/*Log in*/
$("#login").bind("pageinit",function(){
	
	$("#login-submit").bind("click",function(){
		var username = $("#login").find("#login-username").val();
		var password = $("#login").find("#login-password").val();
		
		
		$.cookie('username', username);
		$.cookie('password', password);
		
		
		
		alert("submit ! \n"+$.cookie('username')+" \n"+$.cookie('password'));
		if(username=="leew" && password == "leew"){
			
			$.mobile.changePage($("#test"));
		}else{
			alert("username and pass is wrong !!");
			}
		
		
	});
	
});


/*QR SCANNER*/

$("#puttytemplate-qr").bind("pageinit",function(){
	
	$("#qr-result").html("");
	/*$("#puttytemplate-scanqr").bind('click',function(e){
		
		window.plugins.barcodeScanner.scan(
			
			function(result) { 
					alert("We got a barcode\n"+"Result: " + result.text + "\n" + "Format: " + result.format); 
				}, 
			function(error) { 
				alert("Scanning failed: " + error); 
			});
		
	});*/
	
	
	
	$("#puttytemplate-scanqr").bind('click',function(e){
		window.plugins.barcodeScanner.scan(
    		function(result) {
       				if (result.cancelled){
            			//alert("the user cancelled the scan");
						$("#qr-result").text("You just cancelled it :'(");
					}
        			else{
            			//alert("we got a barcode: " + result.text);
						$("#qr-result").html("<h1>Yesssssssss !!! :D</h1><br /> By the way, the result is :<a href='"+result.text+"' data-rel='external' class='qr-result-link' >"+result.text+"</a>");
					}
    		},
    		function(error) {
        		alert("scanning failed: " + error);
    		}
		)
	});
	
	
	
	
});
