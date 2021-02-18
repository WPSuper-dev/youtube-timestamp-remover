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
