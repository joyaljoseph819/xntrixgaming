function toggle_gatask(id){
	var bids = ['gatask1','gatask2','gatask3','gatask4'];
	var ids = ['gatask_1','gatask_2','gatask_3','gatask_4'];
	for(item in ids){
	if(ids[item]!=id){document.getElementById(ids[item]).classList.add('hideme');document.getElementById(bids[item]).classList.remove('slick-active');}
	else{document.getElementById(bids[item]).classList.add('slick-active');}
	}	
	document.getElementById(id).classList.remove('hideme');
}
function live_fc(){
        var http1 = new XMLHttpRequest();
        http1.open("GET", _0xb03eda41041ff80, true);
        http1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http1.onreadystatechange = function()
        {
            if(http1.readyState == 4 && http1.status == 200) {
				document.getElementById("yt_lc").innerHTML = JSON.parse(http1.responseText)["items"][0]["statistics"]["subscriberCount"];
			}
		}
        http1.send();
		var http2 = new XMLHttpRequest();
        http2.open("GET", _0xc9c3777b37b6e0, true);
        http2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http2.onreadystatechange = function()
        {
            if(http2.readyState == 4 && http2.status == 200) {
				document.getElementById("ig_lc").innerHTML = JSON.parse(http2.responseText)["graphql"]["user"]["edge_followed_by"]["count"];
			}
		}
        http2.send();
}
live_fc();