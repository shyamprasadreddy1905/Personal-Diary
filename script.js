/*Code debugging answers:
1) Syntax error - comma instead of a dot in "var entry = document.createElement("li")
2) Syntax error - some date functions were wrong. Like getYear instead of getFullYear, getHour instead of getHours, getMinute instead of getMinutes.
3) Logical error - if input != "" instead of input=="" 
*/
function addEntry(){
  var entry = document.createElement("li");
  var dateEntry = document.createElement("div");
  dateEntry.className = "listDiv";
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var hour = date.getHours();
  var min = date.getMinutes();
  var time = day + "/" + month + "/" + year + " " + hour + ":" + min;
  var timeText = document.createTextNode(time);
  dateEntry.appendChild(timeText);
  entry.appendChild(dateEntry);
  var input = document.getElementById("inputTask").value;
  var txt = document.createTextNode(input);
  entry.appendChild(txt);
  if(input == ""){
    alert("Please enter something!")
  }else{
    document.getElementById("entries").appendChild(entry);
  }
  document.getElementById("inputTask").value = "";

  var removeBtn = document.createElement("button");
  var btnText = document.createTextNode("Remove");
  removeBtn.appendChild(btnText);
  entry.appendChild(removeBtn);
  removeBtn.className = "remove";
  var remove = document.getElementsByClassName("remove");

  for(var i=0;i<remove.length;i++){
    remove[i].onclick = function(){
      this.parentElement.remove();
    }
  }
}