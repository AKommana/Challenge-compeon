*/   If the user wants to send a message bigger than that, we need to break it up.
   We want a multi-part message to have this added to each message:
   " - Part 1 of 2"
*/

// You need to fix this method, currently it will crash with > 160 char messages.

function sendSmsMessage (text, to, from) {
if(text.length > 160){
var messageIterations=Math.ceil(text.length/(160-14));
for(var i=0; i<messageIterations;i++){
deliverMessageViaCarrier(text.substr(i*(160-14),(160-14)).concat(' - Part ',i+1,' of ',messageIterations), to, from)
}

}
else{
deliverMessageViaCarrier(text, to, from)
}
}

// This method actually sends the message via an already existing SMS carrier
// This method works, you don't change it,
function deliverMessageViaCarrier (text, to, from) {
  SmsCarrier.deliverMessage(text, to, from)
}

