	var id;
	var gn;
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
      window.id = profile.getId();
      window.gn = profile.getName();
      document.getElementById("logged_uname").innerHTML = profile.getName();
      document.getElementById("logged_upic").src = profile.getImageUrl();
	  document.getElementById("my-signin2").classList.add("hideme");
	  document.getElementById("yourname").setAttribute('onkeyup','yourname_check()');
	  document.getElementById("subchecker_div").classList.remove("hideme");
	  document.getElementById("subchecker_div_login").classList.add("hideme");
	  document.getElementById("task_dots").classList.remove("hideme");
	  document.getElementById("task_dots_login").classList.add("hideme");
	  document.getElementById("logout_btn_mob").classList.remove("hideme");
	  $("#my-signin2").toggleClass("hidegsb");	
	  reset_gaentry();
	  show_log_info();	  
	  enrollment(profile.getId(),'login');
      // document.getElementById("uemail").innerHTML = 'Email: ' + profile.getEmail(); // This is null if the 'email' scope is not present.
    }
    function onFailure(error) {
      console.log(error);
	  document.getElementById("my-signin2").classList.remove("hideme");
	  document.getElementById("my-signin2").classList.remove("hidegsb");
	  document.getElementById("yourname").setAttribute('onkeyup','yourname_check_login()');
	  document.getElementById("gat_n1").classList.add("hideme");
	  document.getElementById("subchecker_div").classList.add("hideme");
	  document.getElementById("subchecker_div_login").classList.remove("hideme");
	  document.getElementById("task_dots").classList.add("hideme");
	  document.getElementById("task_dots_login").classList.remove("hideme");
	  toggle_gatask('gatask_1');
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
	  window.open("https://mail.google.com/mail/u/0/?logout&hl=en");
	  window.open(window.location.href);
	  hide_log_info();
	  document.getElementById("logged_uname").innerHTML = "";
      document.getElementById("logged_upic").src = "";
	  document.getElementById("logout_btn_mob").classList.add("hideme");
	  document.getElementById("my-signin2").classList.remove("hideme");
	  document.getElementById("yourname").setAttribute('onkeyup','yourname_check_login()');
	  document.getElementById("gat_n1").classList.add("hideme");
	  document.getElementById("subchecker_div").classList.add("hideme");
	  document.getElementById("subchecker_div_login").classList.remove("hideme");
	  document.getElementById("task_dots").classList.add("hideme");
	  document.getElementById("task_dots_login").classList.remove("hideme");
	  $("#my-signin2").toggleClass("hidegsb");
	  reset_gaentry();
	  toggle_gatask('gatask_1');
    }
    function ytPerm() {			
        document.getElementById("subcheck_s").innerHTML = "Checking";
		document.getElementById("subcheck_i").classList.remove("checking");
		document.getElementById("subchecker_btn").setAttribute("onclick","");
      const options = new gapi.auth2.SigninOptionsBuilder();
      options.setScope('https://www.googleapis.com/auth/youtube.readonly');
      var auth2 = gapi.auth2.getAuthInstance();
      googleUser = auth2.currentUser.get();
      googleUser.grant(options).then(
      function(success){
        authenticate().then(loadClient);
      },
      function(fail){
        alert(JSON.stringify({message: "fail", value: fail}));
      }); 
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
// MODAL/ALERT
// $('.openmodale').click(function (e) {
         // e.preventDefault();
         // $('.modale').addClass('opened');
    // });
function openmodale(msg){
	document.getElementById("modal_msg").innerHTML = msg;
	$('.modale').addClass('opened');
}
$('.closemodale').click(function (e) {
         e.preventDefault();
         $('.modale').removeClass('opened');
    });