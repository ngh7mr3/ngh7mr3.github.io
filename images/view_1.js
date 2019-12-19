function x(mode) {
with(document.form) { rzm.value=mode; submit(); }
return;
}

function sp(checkbox){
var fldkol, fldcen, fldsum;
fldkol = "k"+checkbox.name;
fldcen = "c"+checkbox.name;
fldsum = "i"+checkbox.name;
with(document.form) {
 if(checkbox.checked) { elements[fldkol].value = "1"; }
 else { elements[fldkol].value = "0"; }
 elements[fldsum].value = parseFloat(elements[fldkol].value)*parseFloat(elements[fldcen].value);
}
get_sum_itogo();
return;
}

function sc(textbox){
get_sum_itogo();
return;
}

function get_sum_itogo() {
var i, str, kol, cen, sum, sum_all;
sum_all=0;
with(document.form) {
 for (i=0; i<elements.length; i++) {
  str=elements[i].name.substring(0,1);
  if(str == 'c' && i<(elements.length-3)) {
   cen=elements[i].value;
   str=elements[i+2].name.substring(0,1);
   if(str == 'k') {
    kol=elements[i+2].value;
    str=elements[i+3].name.substring(0,1);
    if(str == 'i') {
     if(kol>0) {
      elements[i+1].checked=true;
      sum=parseFloat(cen)*parseFloat(kol);
      elements[i+3].value=sum;
      sum_all+=sum;
     }
     else {
      kol=elements[i+2].value=0;
      elements[i+1].checked=false;
      sum=elements[i+3].value=0;
     }
    }
   }
  }
 }
 itogo.value=sum_all;
}
return;
}

function dd()
{
var x, x1=0;
with(document.form) {
x="q"+fio.value; if(x=="q") { alert("Не указано ФИО"); return; }
x="q"+tel.value; if(x=="q") { alert("Не указан телефон"); return; }
x="q"+email.value; if(x=="q") { alert("Не указан e-mail"); return; }
x="q"+address.value; if(x=="q") { alert("Не указан адрес"); return; }
rzm.value="end";
submit();
}
}

var bV=parseInt(navigator.appVersion);
NS4=(document.layers) ? true : false;
IE4=((document.all)&&(bV>=4))?true:false;
ver4 = (NS4 || IE4) ? true : false;
isExpanded = false;
function initIt() {
  if(IE4) { t=document.all.tags("DIV"); for(i=0; i<t.length; i++) { if(t(i).className=="child") t(i).style.display="none"; } }
}
function exp2IE(el) {
 var t1,t2;
 if(IE4) { t1=eval(el+"Child"); t2=document.images[el+'Img']; if(t1.style.display=="none") { t1.style.display="block"; t2.src="../sysminus.gif"; } else { t1.style.display="none"; t2.src="../sysplus.gif"; } return false; }
 else { return true; }
}
onload=initIt;

function newImage(arg) {
	if (document.images) {
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() {
	if (document.images && (preloadFlag == true)) {
		for (var i=0; i<changeImages.arguments.length; i+=2) {
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() {
	if (document.images) {
		titul_01_ImageMap_01_down = newImage("images/titul_01-ImageMap_01_down.gif");
		preloadFlag = true;
	}
}
