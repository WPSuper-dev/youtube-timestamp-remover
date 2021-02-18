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
