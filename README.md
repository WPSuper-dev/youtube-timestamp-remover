# youtube-timestamp-remover
This code helps you to remove youtube subtitle timestamp.

This code is free to use and free to upload any 
where but, give credit when you edit and when you change this file.

Make sure to visit our website www.wpsuper.in for more content.
Make sure to give credit with wpsuper.in.



Actual SCRIPT---

<script language = "JavaScript">
function TryClear(){
Length = document.all.TextFields.Input.value.length;
FirstSumbol = true;
CancelExit =false;
var strOut = "";
for(i=0; i<Length; i++){
ch = document.all.TextFields.Input.value.substring(i,i+1);
if(FirstSumbol){
if(ch >= '0' && ch <= '9' ){
CancelExit =true;
FirstSumbol = false;
}
else {
CancelExit =false;
strOut += '\n';
FirstSumbol = false;
}
}
if(ch == '\n'){
FirstSumbol = true;
}
if((!CancelExit) && (!FirstSumbol)){
strOut += ch;
document.all.TextFields.Output.value = i;
}
else continue;
}
document.all.TextFields.Output.value = strOut;
return;
}
</script>
  
<body>
    <h1>Remove timestamps from subtitle of youtube video and other Subtitle</h1>
    Example picture:<br/>
    <img src="https://i.imgur.com/SVZEi3h.png" /><br/>
    Open your srt and txt file with notepad. add to left text field and press "Go Super!"<br/>
<form name="TextFields">
<TEXTAREA type="text" cols="67" rows="10" name="Input" value="" ></TEXTAREA>
<input type="button" value="Go Super!" onClick="TryClear();"></input>
<TEXTAREA type="text" cols="67" rows="10" name="Output" value="" ></TEXTAREA>
</form>
(c) <a href="WWW.wpsuper.in">wpsuper</a><br/><br/><a href="http://www.wpsuper.in">wpsuper</a>
</body>
