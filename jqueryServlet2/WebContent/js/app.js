/**
 * 
 */


$(function(){
	$("p").click(function(){
		$(this).hide();		
	});
	
	$("#getDue").click(function(){
		$.ajax({
		url:"http://ispacevm30.researchstudio.at/geoserver/focus/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=focus:geofence_sbg_caro&maxFeatures=50&outputFormat=text%2Fxml%3B+subtype%3Dgml%2F3.2",
		//url:"http://ispacevm30.researchstudio.at/sos41/service?service=SOS&request=GetCapabilities",
	//	url:"http://ispacevm30.researchstudio.at/sos42/service?service=SOS&request=GetCapabilities",
		//url:"http://ispacevm30.researchstudio.at/focus/service?service=SOS&request=GetCapabilities",
			//url: "https://gist.githubusercontent.com/geronimoooooooo/a916893a267fbd2b2701/raw/39d85d6b67fc2cb7abce16a5fc8ccebba11692c5/multi.geojson",
			// url: "http://ispacevm20.researchstudio.at/focusgeofence/service",
		method:"GET",		
//		  xhrFields: {
//		    // The 'xhrFields' property sets additional fields on the XMLHttpRequest.
//		    // This can be used to set the 'withCredentials' property.
//		    // Set the value to 'true' if you'd like to pass cookies to the server.
//		    // If this is enabled, your server must respond with the header
//		    // 'Access-Control-Allow-Credentials: true'.
//		    withCredentials: false
//		  },

//		  headers: {
//		    // Set any custom headers here.
//		    // If you set any non-simple headers, your server must include these
//		    // headers in the 'Access-Control-Allow-Headers' response header.
//		  },
		})
		.done(function(data) {
			console.log(data)
			$("#resp").text(data);		
		  })
		.fail(function() {
			alert("Ajax failed to fetch data")
		})
		
		//	    $("p").hide("slow", function(){
//	        alert("The paragraph is now hidden");
//	    });
	});
});
$(document).on("click", "#b1", function() { // When HTML DOM "click" event is invoked on element with ID "somebutton", execute the following function...
	 		$("#p3").text("responseText");              
	 		$.get("starter", function(responseText) {   // Execute Ajax GET request on URL of "someservlet" and execute the following function with Ajax response text...
                    $("#p3").text(responseText);           // Locate HTML DOM element with ID "somediv" and set its text content with the response text.
                });
	 		console.log("aaab");
	 		$(this).hide();
            });

$("#getDue").click(function(){
	
//    $("p").hide("slow", function(){
//        alert("The paragraph is now hidden");
//    });
});

$(":button").click(function(){
	console.log("button clicked to hide!");	
	$(this).hide();

});