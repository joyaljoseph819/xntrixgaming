var clientID = "906798367311-dgoiunr27phre0aeo5ljgnlg2ldd02cc";
var APIkey = "AIzaSyDYQDBe5GMqHGMkr6Gt81XuC-JazYHuSBI";
var scresult;
  function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey(APIkey);
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); execute()},
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.subscriptions.list({
      "part": [
        "snippet"
      ],
      "forChannelId": "UCAzoxc0OVXWJ5aXRAcr7EdA",
      "mine": true
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);                
                if(response.result.items.length!=0) {
                  var items = response.result.items[0];
                  var snippet = items['snippet'];
                  var rid = snippet['resourceId'];
                  var cid = rid['channelId'];
                  window.scresult = cid;
                }                
                else {
                  window.scresult = response;
                }
                if(response.status=200) {
                  checkSub();
                }
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: clientID});
  });
