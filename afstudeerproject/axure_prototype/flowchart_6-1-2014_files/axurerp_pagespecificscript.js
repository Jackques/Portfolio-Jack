
var PageName = 'flowchart 6-1-2014';
var PageId = '8e953f7f3a1942b49be738ff8259a689'
var PageUrl = 'flowchart_6-1-2014.html'
document.title = 'flowchart 6-1-2014';
var PageNotes = 
{
"pageName":"flowchart 6-1-2014",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $SliderValue = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&SliderValue=' + encodeURIComponent($SliderValue) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[SliderValue\]\]/g, $SliderValue);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '6');
  value = value.replace(/\[\[GenMonth\]\]/g, '1');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'januari');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'maandag');
  value = value.replace(/\[\[GenYear\]\]/g, '2014');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u86 = document.getElementById('u86');

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u16 = document.getElementById('u16');

u16.style.cursor = 'pointer';
if (bIE) u16.attachEvent("onclick", ClickLinkToReferencePageu16);
else u16.addEventListener("click", ClickLinkToReferencePageu16, true);
function ClickLinkToReferencePageu16(e)
{
    self.location.href="Courses.html" + GetQuerystring();
}

x = 0;
y = (u16.offsetHeight) - 4;
InsertAfterBegin(u16ann, "<img src='resources/images/newwindow.gif' id='u16PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u16PagePopup = document.getElementById('u16PagePopup');
if (bIE) u16PagePopup.attachEvent("onclick", u16PagePopupHandler);
else u16PagePopup.addEventListener("click", u16PagePopupHandler, true);

function u16PagePopupHandler(event)
{
    window.open("Courses.html" + GetQuerystring());
}

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", ClickLinkToReferencePageu46);
else u46.addEventListener("click", ClickLinkToReferencePageu46, true);
function ClickLinkToReferencePageu46(e)
{
    self.location.href="Databnk_favorieten.html" + GetQuerystring();
}

x = 0;
y = (u46.offsetHeight) - 4;
InsertAfterBegin(u46ann, "<img src='resources/images/newwindow.gif' id='u46PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u46PagePopup = document.getElementById('u46PagePopup');
if (bIE) u46PagePopup.attachEvent("onclick", u46PagePopupHandler);
else u46PagePopup.addEventListener("click", u46PagePopupHandler, true);

function u46PagePopupHandler(event)
{
    window.open("Databnk_favorieten.html" + GetQuerystring());
}

var u68 = document.getElementById('u68');

var u76 = document.getElementById('u76');

var u48 = document.getElementById('u48');

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", ClickLinkToReferencePageu48);
else u48.addEventListener("click", ClickLinkToReferencePageu48, true);
function ClickLinkToReferencePageu48(e)
{
    self.location.href="Databank_item.html" + GetQuerystring();
}

x = 0;
y = (u48.offsetHeight) - 4;
InsertAfterBegin(u48ann, "<img src='resources/images/newwindow.gif' id='u48PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u48PagePopup = document.getElementById('u48PagePopup');
if (bIE) u48PagePopup.attachEvent("onclick", u48PagePopupHandler);
else u48PagePopup.addEventListener("click", u48PagePopupHandler, true);

function u48PagePopupHandler(event)
{
    window.open("Databank_item.html" + GetQuerystring());
}

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", ClickLinkToReferencePageu8);
else u8.addEventListener("click", ClickLinkToReferencePageu8, true);
function ClickLinkToReferencePageu8(e)
{
    self.location.href="Agenda.html" + GetQuerystring();
}

x = 0;
y = (u8.offsetHeight) - 4;
InsertAfterBegin(u8ann, "<img src='resources/images/newwindow.gif' id='u8PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u8PagePopup = document.getElementById('u8PagePopup');
if (bIE) u8PagePopup.attachEvent("onclick", u8PagePopupHandler);
else u8PagePopup.addEventListener("click", u8PagePopupHandler, true);

function u8PagePopupHandler(event)
{
    window.open("Agenda.html" + GetQuerystring());
}

var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", ClickLinkToReferencePageu32);
else u32.addEventListener("click", ClickLinkToReferencePageu32, true);
function ClickLinkToReferencePageu32(e)
{
    self.location.href="Documenten.html" + GetQuerystring();
}

x = 0;
y = (u32.offsetHeight) - 4;
InsertAfterBegin(u32ann, "<img src='resources/images/newwindow.gif' id='u32PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u32PagePopup = document.getElementById('u32PagePopup');
if (bIE) u32PagePopup.attachEvent("onclick", u32PagePopupHandler);
else u32PagePopup.addEventListener("click", u32PagePopupHandler, true);

function u32PagePopupHandler(event)
{
    window.open("Documenten.html" + GetQuerystring());
}

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u62 = document.getElementById('u62');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u38 = document.getElementById('u38');

u38.style.cursor = 'pointer';
if (bIE) u38.attachEvent("onclick", ClickLinkToReferencePageu38);
else u38.addEventListener("click", ClickLinkToReferencePageu38, true);
function ClickLinkToReferencePageu38(e)
{
    self.location.href="ACUE_planning.html" + GetQuerystring();
}

x = 0;
y = (u38.offsetHeight) - 4;
InsertAfterBegin(u38ann, "<img src='resources/images/newwindow.gif' id='u38PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u38PagePopup = document.getElementById('u38PagePopup');
if (bIE) u38PagePopup.attachEvent("onclick", u38PagePopupHandler);
else u38PagePopup.addEventListener("click", u38PagePopupHandler, true);

function u38PagePopupHandler(event)
{
    window.open("ACUE_planning.html" + GetQuerystring());
}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u104 = document.getElementById('u104');

var u106 = document.getElementById('u106');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", ClickLinkToReferencePageu30);
else u30.addEventListener("click", ClickLinkToReferencePageu30, true);
function ClickLinkToReferencePageu30(e)
{
    self.location.href="Contacten.html" + GetQuerystring();
}

x = 0;
y = (u30.offsetHeight) - 4;
InsertAfterBegin(u30ann, "<img src='resources/images/newwindow.gif' id='u30PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u30PagePopup = document.getElementById('u30PagePopup');
if (bIE) u30PagePopup.attachEvent("onclick", u30PagePopupHandler);
else u30PagePopup.addEventListener("click", u30PagePopupHandler, true);

function u30PagePopupHandler(event)
{
    window.open("Contacten.html" + GetQuerystring());
}

var u60 = document.getElementById('u60');

var u94 = document.getElementById('u94');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", ClickLinkToReferencePageu34);
else u34.addEventListener("click", ClickLinkToReferencePageu34, true);
function ClickLinkToReferencePageu34(e)
{
    self.location.href="Avans_algemene_informatie.html" + GetQuerystring();
}

x = 0;
y = (u34.offsetHeight) - 4;
InsertAfterBegin(u34ann, "<img src='resources/images/newwindow.gif' id='u34PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u34PagePopup = document.getElementById('u34PagePopup');
if (bIE) u34PagePopup.attachEvent("onclick", u34PagePopupHandler);
else u34PagePopup.addEventListener("click", u34PagePopupHandler, true);

function u34PagePopupHandler(event)
{
    window.open("Avans_algemene_informatie.html" + GetQuerystring());
}

var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u64 = document.getElementById('u64');

var u100 = document.getElementById('u100');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u112 = document.getElementById('u112');

var u102 = document.getElementById('u102');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", ClickLinkToReferencePageu36);
else u36.addEventListener("click", ClickLinkToReferencePageu36, true);
function ClickLinkToReferencePageu36(e)
{
    self.location.href="ACUE_info.html" + GetQuerystring();
}

x = 0;
y = (u36.offsetHeight) - 4;
InsertAfterBegin(u36ann, "<img src='resources/images/newwindow.gif' id='u36PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u36PagePopup = document.getElementById('u36PagePopup');
if (bIE) u36PagePopup.attachEvent("onclick", u36PagePopupHandler);
else u36PagePopup.addEventListener("click", u36PagePopupHandler, true);

function u36PagePopupHandler(event)
{
    window.open("ACUE_info.html" + GetQuerystring());
}

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u66 = document.getElementById('u66');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", ClickLinkToReferencePageu2);
else u2.addEventListener("click", ClickLinkToReferencePageu2, true);
function ClickLinkToReferencePageu2(e)
{
    self.location.href="Home.html" + GetQuerystring();
}

x = 0;
y = (u2.offsetHeight) - 4;
InsertAfterBegin(u2ann, "<img src='resources/images/newwindow.gif' id='u2PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u2PagePopup = document.getElementById('u2PagePopup');
if (bIE) u2PagePopup.attachEvent("onclick", u2PagePopupHandler);
else u2PagePopup.addEventListener("click", u2PagePopupHandler, true);

function u2PagePopupHandler(event)
{
    window.open("Home.html" + GetQuerystring());
}

var u92 = document.getElementById('u92');

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", ClickLinkToReferencePageu22);
else u22.addEventListener("click", ClickLinkToReferencePageu22, true);
function ClickLinkToReferencePageu22(e)
{
    self.location.href="J1KW2.html" + GetQuerystring();
}

x = 0;
y = (u22.offsetHeight) - 4;
InsertAfterBegin(u22ann, "<img src='resources/images/newwindow.gif' id='u22PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u22PagePopup = document.getElementById('u22PagePopup');
if (bIE) u22PagePopup.attachEvent("onclick", u22PagePopupHandler);
else u22PagePopup.addEventListener("click", u22PagePopupHandler, true);

function u22PagePopupHandler(event)
{
    window.open("J1KW2.html" + GetQuerystring());
}

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", ClickLinkToReferencePageu52);
else u52.addEventListener("click", ClickLinkToReferencePageu52, true);
function ClickLinkToReferencePageu52(e)
{
    self.location.href="Openingstijden.html" + GetQuerystring();
}

x = 0;
y = (u52.offsetHeight) - 4;
InsertAfterBegin(u52ann, "<img src='resources/images/newwindow.gif' id='u52PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u52PagePopup = document.getElementById('u52PagePopup');
if (bIE) u52PagePopup.attachEvent("onclick", u52PagePopupHandler);
else u52PagePopup.addEventListener("click", u52PagePopupHandler, true);

function u52PagePopupHandler(event)
{
    window.open("Openingstijden.html" + GetQuerystring());
}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u0 = document.getElementById('u0');

u0.style.cursor = 'pointer';
if (bIE) u0.attachEvent("onclick", ClickLinkToReferencePageu0);
else u0.addEventListener("click", ClickLinkToReferencePageu0, true);
function ClickLinkToReferencePageu0(e)
{
    self.location.href="Inloggen.html" + GetQuerystring();
}

x = 0;
y = (u0.offsetHeight) - 4;
InsertAfterBegin(u0ann, "<img src='resources/images/newwindow.gif' id='u0PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u0PagePopup = document.getElementById('u0PagePopup');
if (bIE) u0PagePopup.attachEvent("onclick", u0PagePopupHandler);
else u0PagePopup.addEventListener("click", u0PagePopupHandler, true);

function u0PagePopupHandler(event)
{
    window.open("Inloggen.html" + GetQuerystring());
}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", ClickLinkToReferencePageu6);
else u6.addEventListener("click", ClickLinkToReferencePageu6, true);
function ClickLinkToReferencePageu6(e)
{
    self.location.href="Gegevens.html" + GetQuerystring();
}

x = 0;
y = (u6.offsetHeight) - 4;
InsertAfterBegin(u6ann, "<img src='resources/images/newwindow.gif' id='u6PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u6PagePopup = document.getElementById('u6PagePopup');
if (bIE) u6PagePopup.attachEvent("onclick", u6PagePopupHandler);
else u6PagePopup.addEventListener("click", u6PagePopupHandler, true);

function u6PagePopupHandler(event)
{
    window.open("Gegevens.html" + GetQuerystring());
}

var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u90 = document.getElementById('u90');

var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", ClickLinkToReferencePageu28);
else u28.addEventListener("click", ClickLinkToReferencePageu28, true);
function ClickLinkToReferencePageu28(e)
{
    self.location.href="Mail.html" + GetQuerystring();
}

x = 0;
y = (u28.offsetHeight) - 4;
InsertAfterBegin(u28ann, "<img src='resources/images/newwindow.gif' id='u28PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u28PagePopup = document.getElementById('u28PagePopup');
if (bIE) u28PagePopup.attachEvent("onclick", u28PagePopupHandler);
else u28PagePopup.addEventListener("click", u28PagePopupHandler, true);

function u28PagePopupHandler(event)
{
    window.open("Mail.html" + GetQuerystring());
}

var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", ClickLinkToReferencePageu20);
else u20.addEventListener("click", ClickLinkToReferencePageu20, true);
function ClickLinkToReferencePageu20(e)
{
    self.location.href="J1KW1.html" + GetQuerystring();
}

x = 0;
y = (u20.offsetHeight) - 4;
InsertAfterBegin(u20ann, "<img src='resources/images/newwindow.gif' id='u20PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u20PagePopup = document.getElementById('u20PagePopup');
if (bIE) u20PagePopup.attachEvent("onclick", u20PagePopupHandler);
else u20PagePopup.addEventListener("click", u20PagePopupHandler, true);

function u20PagePopupHandler(event)
{
    window.open("J1KW1.html" + GetQuerystring());
}

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", ClickLinkToReferencePageu50);
else u50.addEventListener("click", ClickLinkToReferencePageu50, true);
function ClickLinkToReferencePageu50(e)
{
    self.location.href="Werkplek_reserveren.html" + GetQuerystring();
}

x = 0;
y = (u50.offsetHeight) - 4;
InsertAfterBegin(u50ann, "<img src='resources/images/newwindow.gif' id='u50PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u50PagePopup = document.getElementById('u50PagePopup');
if (bIE) u50PagePopup.attachEvent("onclick", u50PagePopupHandler);
else u50PagePopup.addEventListener("click", u50PagePopupHandler, true);

function u50PagePopupHandler(event)
{
    window.open("Werkplek_reserveren.html" + GetQuerystring());
}

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u98 = document.getElementById('u98');

var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", ClickLinkToReferencePageu24);
else u24.addEventListener("click", ClickLinkToReferencePageu24, true);
function ClickLinkToReferencePageu24(e)
{
    self.location.href="VSP.html" + GetQuerystring();
}

x = 0;
y = (u24.offsetHeight) - 4;
InsertAfterBegin(u24ann, "<img src='resources/images/newwindow.gif' id='u24PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u24PagePopup = document.getElementById('u24PagePopup');
if (bIE) u24PagePopup.attachEvent("onclick", u24PagePopupHandler);
else u24PagePopup.addEventListener("click", u24PagePopupHandler, true);

function u24PagePopupHandler(event)
{
    window.open("VSP.html" + GetQuerystring());
}

var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", ClickLinkToReferencePageu54);
else u54.addEventListener("click", ClickLinkToReferencePageu54, true);
function ClickLinkToReferencePageu54(e)
{
    self.location.href="Zoeken_-_SRP.html" + GetQuerystring();
}

x = 0;
y = (u54.offsetHeight) - 4;
InsertAfterBegin(u54ann, "<img src='resources/images/newwindow.gif' id='u54PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u54PagePopup = document.getElementById('u54PagePopup');
if (bIE) u54PagePopup.attachEvent("onclick", u54PagePopupHandler);
else u54PagePopup.addEventListener("click", u54PagePopupHandler, true);

function u54PagePopupHandler(event)
{
    window.open("Zoeken_-_SRP.html" + GetQuerystring());
}

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u84 = document.getElementById('u84');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u96 = document.getElementById('u96');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", ClickLinkToReferencePageu26);
else u26.addEventListener("click", ClickLinkToReferencePageu26, true);
function ClickLinkToReferencePageu26(e)
{
    self.location.href="Nieuwe_course.html" + GetQuerystring();
}

x = 0;
y = (u26.offsetHeight) - 4;
InsertAfterBegin(u26ann, "<img src='resources/images/newwindow.gif' id='u26PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u26PagePopup = document.getElementById('u26PagePopup');
if (bIE) u26PagePopup.attachEvent("onclick", u26PagePopupHandler);
else u26PagePopup.addEventListener("click", u26PagePopupHandler, true);

function u26PagePopupHandler(event)
{
    window.open("Nieuwe_course.html" + GetQuerystring());
}

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u56 = document.getElementById('u56');

u56.style.cursor = 'pointer';
if (bIE) u56.attachEvent("onclick", ClickLinkToReferencePageu56);
else u56.addEventListener("click", ClickLinkToReferencePageu56, true);
function ClickLinkToReferencePageu56(e)
{
    self.location.href="Help.html" + GetQuerystring();
}

x = 0;
y = (u56.offsetHeight) - 4;
InsertAfterBegin(u56ann, "<img src='resources/images/newwindow.gif' id='u56PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u56PagePopup = document.getElementById('u56PagePopup');
if (bIE) u56PagePopup.attachEvent("onclick", u56PagePopupHandler);
else u56PagePopup.addEventListener("click", u56PagePopupHandler, true);

function u56PagePopupHandler(event)
{
    window.open("Help.html" + GetQuerystring());
}

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u82 = document.getElementById('u82');

var u110 = document.getElementById('u110');

var u12 = document.getElementById('u12');

u12.style.cursor = 'pointer';
if (bIE) u12.attachEvent("onclick", ClickLinkToReferencePageu12);
else u12.addEventListener("click", ClickLinkToReferencePageu12, true);
function ClickLinkToReferencePageu12(e)
{
    self.location.href="Competenties.html" + GetQuerystring();
}

x = 0;
y = (u12.offsetHeight) - 4;
InsertAfterBegin(u12ann, "<img src='resources/images/newwindow.gif' id='u12PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u12PagePopup = document.getElementById('u12PagePopup');
if (bIE) u12PagePopup.attachEvent("onclick", u12PagePopupHandler);
else u12PagePopup.addEventListener("click", u12PagePopupHandler, true);

function u12PagePopupHandler(event)
{
    window.open("Competenties.html" + GetQuerystring());
}

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');

u42.style.cursor = 'pointer';
if (bIE) u42.attachEvent("onclick", ClickLinkToReferencePageu42);
else u42.addEventListener("click", ClickLinkToReferencePageu42, true);
function ClickLinkToReferencePageu42(e)
{
    self.location.href="Xplora.html" + GetQuerystring();
}

x = 0;
y = (u42.offsetHeight) - 4;
InsertAfterBegin(u42ann, "<img src='resources/images/newwindow.gif' id='u42PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u42PagePopup = document.getElementById('u42PagePopup');
if (bIE) u42PagePopup.attachEvent("onclick", u42PagePopupHandler);
else u42PagePopup.addEventListener("click", u42PagePopupHandler, true);

function u42PagePopupHandler(event)
{
    window.open("Xplora.html" + GetQuerystring());
}

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u72 = document.getElementById('u72');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", ClickLinkToReferencePageu18);
else u18.addEventListener("click", ClickLinkToReferencePageu18, true);
function ClickLinkToReferencePageu18(e)
{
    self.location.href="Courses_1.html" + GetQuerystring();
}

x = 0;
y = (u18.offsetHeight) - 4;
InsertAfterBegin(u18ann, "<img src='resources/images/newwindow.gif' id='u18PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u18PagePopup = document.getElementById('u18PagePopup');
if (bIE) u18PagePopup.attachEvent("onclick", u18PagePopupHandler);
else u18PagePopup.addEventListener("click", u18PagePopupHandler, true);

function u18PagePopupHandler(event)
{
    window.open("Courses_1.html" + GetQuerystring());
}

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u88 = document.getElementById('u88');

var u58 = document.getElementById('u58');

var u80 = document.getElementById('u80');

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", ClickLinkToReferencePageu10);
else u10.addEventListener("click", ClickLinkToReferencePageu10, true);
function ClickLinkToReferencePageu10(e)
{
    self.location.href="Cijfers.html" + GetQuerystring();
}

x = 0;
y = (u10.offsetHeight) - 4;
InsertAfterBegin(u10ann, "<img src='resources/images/newwindow.gif' id='u10PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u10PagePopup = document.getElementById('u10PagePopup');
if (bIE) u10PagePopup.attachEvent("onclick", u10PagePopupHandler);
else u10PagePopup.addEventListener("click", u10PagePopupHandler, true);

function u10PagePopupHandler(event)
{
    window.open("Cijfers.html" + GetQuerystring());
}

var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", ClickLinkToReferencePageu40);
else u40.addEventListener("click", ClickLinkToReferencePageu40, true);
function ClickLinkToReferencePageu40(e)
{
    self.location.href="ACUE_regelingen.html" + GetQuerystring();
}

x = 0;
y = (u40.offsetHeight) - 4;
InsertAfterBegin(u40ann, "<img src='resources/images/newwindow.gif' id='u40PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u40PagePopup = document.getElementById('u40PagePopup');
if (bIE) u40PagePopup.attachEvent("onclick", u40PagePopupHandler);
else u40PagePopup.addEventListener("click", u40PagePopupHandler, true);

function u40PagePopupHandler(event)
{
    window.open("ACUE_regelingen.html" + GetQuerystring());
}

var u70 = document.getElementById('u70');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", ClickLinkToReferencePageu14);
else u14.addEventListener("click", ClickLinkToReferencePageu14, true);
function ClickLinkToReferencePageu14(e)
{
    self.location.href="Portfolio.html" + GetQuerystring();
}

x = 0;
y = (u14.offsetHeight) - 4;
InsertAfterBegin(u14ann, "<img src='resources/images/newwindow.gif' id='u14PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u14PagePopup = document.getElementById('u14PagePopup');
if (bIE) u14PagePopup.attachEvent("onclick", u14PagePopupHandler);
else u14PagePopup.addEventListener("click", u14PagePopupHandler, true);

function u14PagePopupHandler(event)
{
    window.open("Portfolio.html" + GetQuerystring());
}

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", ClickLinkToReferencePageu44);
else u44.addEventListener("click", ClickLinkToReferencePageu44, true);
function ClickLinkToReferencePageu44(e)
{
    self.location.href="Databanken.html" + GetQuerystring();
}

x = 0;
y = (u44.offsetHeight) - 4;
InsertAfterBegin(u44ann, "<img src='resources/images/newwindow.gif' id='u44PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u44PagePopup = document.getElementById('u44PagePopup');
if (bIE) u44PagePopup.attachEvent("onclick", u44PagePopupHandler);
else u44PagePopup.addEventListener("click", u44PagePopupHandler, true);

function u44PagePopupHandler(event)
{
    window.open("Databanken.html" + GetQuerystring());
}

var u78 = document.getElementById('u78');

var u74 = document.getElementById('u74');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", ClickLinkToReferencePageu4);
else u4.addEventListener("click", ClickLinkToReferencePageu4, true);
function ClickLinkToReferencePageu4(e)
{
    self.location.href="Profiel.html" + GetQuerystring();
}

x = 0;
y = (u4.offsetHeight) - 4;
InsertAfterBegin(u4ann, "<img src='resources/images/newwindow.gif' id='u4PagePopup' style='cursor:pointer;position:absolute;z-index:500;left:" + x + ";top:" + y + "'>");

var u4PagePopup = document.getElementById('u4PagePopup');
if (bIE) u4PagePopup.attachEvent("onclick", u4PagePopupHandler);
else u4PagePopup.addEventListener("click", u4PagePopupHandler, true);

function u4PagePopupHandler(event)
{
    window.open("Profiel.html" + GetQuerystring());
}

var u108 = document.getElementById('u108');

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
if (window.OnLoad) OnLoad();
