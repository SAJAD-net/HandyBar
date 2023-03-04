document.getElementById("button1").addEventListener("click",encode)
document.getElementById("button2").addEventListener("click",decode)
document.getElementById("button3").addEventListener("click",copyPassword)

//Encode the data with Base64
function encode() {
  let data = document.getElementById("input").value;
  let output =  btoa(data.trim());
  document.getElementById("output").value = output;

}
//Decode the data with Base64
function decode() {
  let data = document.getElementById("input").value;
  let output =  atob(data.trim());
  document.getElementById("output").value = output;

}

//Copy the generated password to clipboard.
function copyPassword() {
  let copyText = document.getElementById("output");
  copyText.select();
  document.execCommand("copy");
}
