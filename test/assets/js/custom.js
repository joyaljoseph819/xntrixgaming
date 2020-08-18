	function hide_log_info(){
	  var ids = ['logged_status','logged_uname','logged_upic','logged_upic_frame','logout_btn']; 
	  for(i in ids){
		  document.getElementById(ids[i]).style.display = "none";
	  }
	}
	function show_log_info(){
	  var ids = ['logged_status','logged_uname','logged_upic','logged_upic_frame','logout_btn']; 
	  for(i in ids){
		  $('#'+ids[i]).fadeIn();
	  }
	}
	function onSuccess(googleUser) {      
      var profile = googleUser.getBasicProfile();    
      // document.getElementById("logged_uid").innerHTML = 'ID: ' + profile.getId(); // Do not send to your backend! Use an ID token instead.
      document.getElementById("logged_uname").innerHTML = profile.getName();
      document.getElementById("logged_upic").src = profile.getImageUrl();
	  document.getElementById("my-signin2").style.display = "none";
	  show_log_info();
      // document.getElementById("uemail").innerHTML = 'Email: ' + profile.getEmail(); // This is null if the 'email' scope is not present.
    }
    function onFailure(error) {
      console.log(error);
	  document.getElementById("my-signin2").style.display = "block";
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
	  // renderButton();
	  document.getElementById("logged_uname").innerHTML = "";
      document.getElementById("logged_upic").src = "";
	  $("#my-signin2").fadeIn();
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