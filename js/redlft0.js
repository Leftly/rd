var sw_targ=true; var ff_targ=''; var qs = querySt('r'); switch(qs) {// LeftLY  // bit.ly/ftxxx http://leftly.github.io/rd/route.htm?r=mye22
case 'a22'	:ff_targ='dest/indexard.htm';          ff_targ_text='North London Arduino Day';break; //  http://leftly.github.io/rd/route.htm?r=a22 
case 'myd22'	:ff_targ='index.htm';          ff_targ_text='Haringey Labour Comms Team';  break; //  http://leftly.github.io/rd/route.htm?r=myd22 
case 'mye22'	:ff_targ='embeds/index.htm';          ff_targ_text='Embedded HTML photos';  break; // bit.ly/tembed http://leftly.github.io/rd/route.htm?r=mye22
case 'hth22'	:ff_targ='dest/idxhth.htm';               ff_targ_text='sfdgzfg sdg sdfg '; break; // bit.ly/hthsite http://leftly.github.io/rd/route.htm?r=
case 'hthfb23'	:ff_targ='https://www.facebook.com/groups/asdasdasd/'; ff_targ_text='Hornsey Town Hall Facebook Group';	break; // bit.ly/HTHGroup http://leftly.github.io/rd/route.htm?r=hthfb23
case 'itwasix'	:ff_targ='https://sdfsdfsdf/events/';	ff_targ_text='dfgsdfgdb dfgdfgb';	break; // http://leftly.github.io/rd/route.htm?r=itwasix A6 generic
case 'itwnxt'	:ff_targ='https://islingsdfsdf.org.uk/events/';	ff_targ_text='2do next event';	break; 
case 'm22'		:ff_targ='https://www.google.co.uk/maps/@51.6036037,-0.1878812,13z/data=!3m1!4b1!4m2!6m1!1szYL0ld9d5E98.kC_m_bYqiEG4?hl=en';	ff_targ_text='2014 i-tree Team7 London survey';	break; 
//bit.ly/itreemap http://leftly.github.io/rd/route.htm?r=m22
case 'it22'		:ff_targ='https://docs.google.com/spreadsheets/d/1tLD-US2qolaL36VCecO2BGDPQnSBFeM5lG2NN3qZ_ws/edit?usp=sharing';	ff_targ_text='2014 i-tree Team7 London addresses';	break; 
//bit.ly/itaddy http://leftly.github.io/rd/route.htm?r=it22
case 'ph22'		:ff_targ='https://plus.google.com/u/0/events/c168ad5hg74rsant4rm4pc3ge6c';	ff_targ_text='Poplus Gov Ctte Hangout';	break; // http://leftly.github.io/rd/route.htm?r=ph22 Poplus Gov Hang
case 'th22'		:ff_targ='dest/idxtheatre.htm'; ff_targ_text='Theatre menu';   	break; // bit.ly/theatre http://leftly.github.io/rd/route.htm?r=th22
case 'zz22'		:ff_targ='http://pg44.setzweb.com/'; ff_targ_text='your page';  break; // bit.ly/whatever http://leftly.github.io/rd/route.htm?r=zz22

default:sw_targ=false;break;}
if (sw_targ==true) {window.location.href=ff_targ; document.write('<meta http-equiv="refresh" content="1;url='+ff_targ+'"><title>'+ff_targ_text+'</title>'); }
else {document.write('There may have been an error - no action possible:'+ff_targ);}
function querySt(Key) {var url = window.location.href; KeysValues = url.split(/[\?&]+/);
for (i = 0; i < KeysValues.length; i++) {KeyValue = KeysValues[i].split("="); if (KeyValue[0] == Key) {return KeyValue[1];}}}
