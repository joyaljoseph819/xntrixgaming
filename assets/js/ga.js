function toggle_gatask(id){
	var bids = ['gatask1','gatask2','gatask3','gatask4'];
	var ids = ['gatask_1','gatask_2','gatask_3','gatask_4'];
	var set_ids = {'gatask_1':'gatask1','gatask_2':'gatask2','gatask_3':'gatask3','gatask_4':'gatask4'};
	for(item in ids){
	if(ids[item]!=id){document.getElementById(ids[item]).classList.add('hideme');document.getElementById(bids[item]).classList.remove('slick-active');}
	else{document.getElementById(bids[item]).classList.add('slick-active');}
	}	
	document.getElementById(id).classList.remove('hideme');
	document.getElementById(set_ids[id]).setAttribute('onclick',"toggle_gatask('"+id+"');");
}
function gat_comp(id){
	if(!$("#"+id).hasClass("gat_complete")){
		document.getElementById(id).innerHTML="";
		document.getElementById(id).classList.add('gat_complete');
	}
}
function gat_res(){
	var http = new XMLHttpRequest();
		var fn = document.getElementById("yourname").value;
		var i = document.getElementById("iid").value;
		var p = document.getElementById("pid").value;
        http.open("GET", "../process/ga_enroll.php?id="+window.id+"&gn="+window.gn+"&fn="+fn+'&i='+i+'&p='+p, true);
        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http.onreadystatechange = function()
        {
            if(http.readyState == 4 && http.status == 200) {
				enrollment(window.id,'success');
			}
		}
        http.send();	
}
function enrollment(id,type){
	var http1 = new XMLHttpRequest();
        http1.open("POST", '../process/check_enroll.php?id='+id, true);
        http1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http1.onreadystatechange = function()
        {
            if(http1.readyState == 4 && http1.status == 200) {
				if(JSON.parse(http1.responseText)[0].localeCompare((JSON.parse(http1.responseText)[1]))){
					var bids = ['gatask1','gatask2','gatask3','gatask4'];
					for(item in bids){
						gat_comp(bids[item]);
						toggle_gatask('gatask_4');
					}
					document.getElementById("gatask1").setAttribute('onclick',"");
					if(type=="login")
					{
						openmodale("Hello "+window.gn+'! <br>You are already enrolled!!');
					}
					else if(type=="success"){
						openmodale('Congrats '+window.gn+'! <br> You are Enrolled!');
					}
					var http2 = new XMLHttpRequest();
						http2.open("GET", '../process/enroll_det.php?id='+id, true);
						http2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
						http2.onreadystatechange = function()
						{
							if(http2.readyState == 4 && http2.status == 200) {
								document.getElementById("ga_name").innerHTML = JSON.parse(http2.responseText)[0]["n"];
								document.getElementById("ga_pid").innerHTML = JSON.parse(http2.responseText)[0]["p"];
								document.getElementById("ga_iid").innerHTML = "@"+JSON.parse(http2.responseText)[0]["i"];
								document.getElementById("ga_tid").innerHTML = JSON.parse(http2.responseText)[0]["t"];
								if(type=="success"){
									openmodale('Your Giveaway Token ID is <br>'+JSON.parse(http2.responseText)[0]["t"]);
								}
							}
						}
						http2.send();
				}
				
			}
		}
        http1.send();
}
function live_fc(){
        var http1 = new XMLHttpRequest();
        http1.open("GET", _0xb03eda41041ff80, true);
        http1.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http1.onreadystatechange = function()
        {
            if(http1.readyState == 4 && http1.status == 200) {
				document.getElementById("yt_lc1").innerHTML = JSON.parse(http1.responseText)["items"][0]["statistics"]["subscriberCount"];
				document.getElementById("yt_lc2").innerHTML = JSON.parse(http1.responseText)["items"][0]["statistics"]["subscriberCount"];
			}
		}
        http1.send();
		var http2 = new XMLHttpRequest();
        http2.open("GET", _0xc9c3777b37b6e0, true);
        http2.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        http2.onreadystatechange = function()
        {
            if(http2.readyState == 4 && http2.status == 200) {
				document.getElementById("ig_lc1").innerHTML = JSON.parse(http2.responseText)["graphql"]["user"]["edge_followed_by"]["count"];
				document.getElementById("ig_lc2").innerHTML = JSON.parse(http2.responseText)["graphql"]["user"]["edge_followed_by"]["count"];
			}
		}
        http2.send();
}
live_fc();
function yourname_check(){
	var yourname = document.getElementById("yourname");	
	if(yourname.value!="")
	{
		document.getElementById("yourname_div").classList.add("color-primary");
		document.getElementById("gat_n1").classList.remove("hideme");
		document.getElementById("gat_n1_login").classList.add("hideme");
	}
	else
	{
		document.getElementById("yourname_div").classList.remove("color-primary");
		document.getElementById("gat_n1").classList.add("hideme");
	}
}
function yourname_check_login(){
	var yourname = document.getElementById("yourname");	
	if(yourname.value!="")
	{
		document.getElementById("yourname_div").classList.add("color-primary");
		document.getElementById("gat_n1_login").classList.remove("hideme");
	}
	else
	{
		document.getElementById("yourname_div").classList.remove("color-primary");
		document.getElementById("gat_n1_login").classList.add("hideme");
	}
}
function id_check(){
	var iid = document.getElementById("iid");
	var pid = document.getElementById("pid");
	if(iid.value!=""&&pid.value!="")
	{
		document.getElementById("gat_n2").classList.remove("hideme");
	}
	if(iid.value!="")
	{
		document.getElementById("iid_div").classList.add("color-primary");
	}
	else
	{
		document.getElementById("iid_div").classList.remove("color-primary");
		document.getElementById("gat_n2").classList.add("hideme");
	}
	if(pid.value!="")
	{
		document.getElementById("pid_div").classList.add("color-primary");
	}
	else
	{
		document.getElementById("pid_div").classList.remove("color-primary");
		document.getElementById("gat_n2").classList.add("hideme");
	}
}
function checkSub() {
	if(window.scresult=="UCAzoxc0OVXWJ5aXRAcr7EdA") {
		gat_comp('gatask3');
		document.getElementById("f_query1").innerHTML = "Congrats! You Are One Of Our";
		document.getElementById("f_query2").innerHTML = "Valuable Subscribers";
		document.getElementById("subscribe_btn").classList.add("hideme");        
		document.getElementById("subchecker_div").classList.add("hideme");        
		document.getElementById("gat_n3").classList.remove("hideme");
		live_fc();
	}
    else {
		document.getElementById("f_query1").innerHTML = "Oops!!You Are Not a";
        document.getElementById("f_query2").innerHTML = "Subscriber";			
        document.getElementById("subcheck_s").innerHTML = "Check Again";
		document.getElementById("subcheck_i").classList.add("checking");
		document.getElementById("subchecker_btn").setAttribute("onclick","ytPerm()");
        document.getElementById("subscribe_btn").classList.remove("hideme");
    }
}
function reset_gaentry(){
	document.getElementById("yourname").value="";
	document.getElementById("pid").value="";
	document.getElementById("iid").value="";
	document.getElementById("ga_name").innerHTML="";
	document.getElementById("ga_pid").innerHTML="";
	document.getElementById("ga_iid").innerHTML="";
	document.getElementById("ga_tid").innerHTML="";
}