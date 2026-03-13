const socket = io();

function sendMessage(){

let input = document.getElementById("message");
let msg = input.value;

socket.emit("chat message", msg);

input.value="";
}

socket.on("chat message", function(msg){

let chat = document.getElementById("chat-box");

let div = document.createElement("div");

if(msg.startsWith("Listener:")){
div.className="message listener";
}else{
div.className="message user";
}

div.textContent=msg;

chat.appendChild(div);

chat.scrollTop=chat.scrollHeight;

});