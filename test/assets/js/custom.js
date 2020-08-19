	function hide_log_info(){
	  var ids = ['logged_status','logged_uname','logged_upic','logged_upic_frame']; 
	  for(i in ids){
		  document.getElementById(ids[i]).style.display = "none";
	  }
	  document.getElementById("logout_btn").classList.add("hideme");
	}
	function show_log_info(){
	  var ids = ['logged_status','logged_uname','logged_upic','logged_upic_frame']; 
	  for(i in ids){
		  $('#'+ids[i]).fadeIn();
	  }
	  document.getElementById("logout_btn").classList.remove("hideme");
	}
	function onSuccess(googleUser) {      
      var profile = googleUser.getBasicProfile();    
      // document.getElementById("logged_uid").innerHTML = 'ID: ' + profile.getId(); // Do not send to your backend! Use an ID token instead.
      document.getElementById("logged_uname").innerHTML = profile.getName();
      document.getElementById("logged_upic").src = profile.getImageUrl();
	  document.getElementById("my-signin2").classList.add("hideme");
	  document.getElementById("my-signin2").classList.add("hidegsb");
	  document.getElementById("logout_btn_mob").classList.remove("hideme");
	  show_log_info();
      // document.getElementById("uemail").innerHTML = 'Email: ' + profile.getEmail(); // This is null if the 'email' scope is not present.
    }
    function onFailure(error) {
      console.log(error);
	  document.getElementById("my-signin2").classList.remove("hideme");
    }
    function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email https://www.googleapis.com/auth/youtube.readonly',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }
    function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
      });
	  hide_log_info();
	  document.getElementById("logged_uname").innerHTML = "";
      document.getElementById("logged_upic").src = "";
	  document.getElementById("logout_btn_mob").classList.add("hideme");
	  document.getElementById("my-signin2").classList.remove("hideme");
    }
    function ytPerm() {
      const options = new gapi.auth2.SigninOptionsBuilder();
      options.setScope('https://www.googleapis.com/auth/youtube.readonly');
      var auth2 = gapi.auth2.getAuthInstance();
      googleUser = auth2.currentUser.get();
      googleUser.grant(options).then(
      function(success){
        console.log(JSON.stringify({message: "success", value: success}));
      },
      function(fail){
        alert(JSON.stringify({message: "fail", value: fail}));
      }); 
    }
    function checkSub() {
      if(window.scresult=="UCAzoxc0OVXWJ5aXRAcr7EdA") {
        alert("User Is Subcribed To XNTRIX Gaming")
      }
      else {
        alert("Please Subscribe To XNTRIX Gaming!!");
      }
    }
function mqf(mq) {
  if (mq.matches) { // If media query matches
    document.getElementById("my-signin2").classList.add("hidegsb");
    document.getElementById("logged_info").classList.add("hidegsb");
    document.getElementById("logout_btn").classList.add("hidegsb");
  } else {
   document.getElementById("my-signin2").classList.remove("hidegsb");
   document.getElementById("logged_info").classList.remove("hidegsb");
   document.getElementById("logout_btn").classList.remove("hidegsb");
  }
}
function toggle_gsb(){
	$("#my-signin2").toggleClass("hidegsb");
	$("#logged_info").toggleClass("hidegsb");
}
var mq = window.matchMedia("(max-width: 991.98px)");
mqf(mq);
mq.addListener(mqf);