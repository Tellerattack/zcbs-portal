$(document).ready(function() {

	$(document.body).on("click", ".w1200 li a", function(event) {
		location.hash = this.getAttribute("href");
	});
	
	var url = location.search; 
	var theRequest = [];
    if (url.indexOf("?") != -1) {
    	var str = url.substr(1);
    	var strs = str.split("&");
    	for(var i = 0; i < strs.length; i ++) {
    		theRequest[i]=strs[i].split("=")[1];
     	}
     }
	if(theRequest[0] != undefined) {
		$("#member,#merch,#trade,#service,#helpe").removeClass();
		$('#'+theRequest[0]).addClass('active');
	}
	if(theRequest[1] != undefined) {
		$("#open,#download,#business,#contract,#operation").removeClass();
		$("#" + theRequest[1]).attr("class", "active");
	}
});

function selectLeftMenu(id) {
	$("#open,#download,#business,#contract,#operation").removeClass();
	$("#" + id).attr("class", "active");
	alert(id+"////")
}