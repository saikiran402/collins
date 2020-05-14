

 setInterval(getCookie,2000);

 function getCookie() {
    function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape('start') + '=([^;]*)'));
  	if(match ? match[1] : null){
document.getElementById('sidebar').style.display = "block";
document.getElementById('content').style.display = "none";
  	}
    console.log(match ? match[1] : null);
}



setInterval(getCookies,2000);

 function getCookies() {
    function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
    var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape('stop') + '=([^;]*)'));
  	if(match ? match[1] : null){
document.getElementById('sidebar').style.display = "none";
document.getElementById('content-after').style.display = "block";
  	}
    console.log(match ? match[1] : null);
}