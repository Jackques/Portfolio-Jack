
var PageName = 'Mail';
var PageId = '7a0963caab7f43bf8f0ccb1b38cda4ee'
var PageUrl = 'Mail.html'
document.title = 'Mail';
var PageNotes = 
{
"pageName":"Mail",
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

var u122 = document.getElementById('u122');

var u224 = document.getElementById('u224');

var u32 = document.getElementById('u32');

var u243 = document.getElementById('u243');

var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'top';
var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u266 = document.getElementById('u266');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u79 = document.getElementById('u79');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'center';
var u4 = document.getElementById('u4');

if (bIE) u4.attachEvent("onfocus", Focusu4);
else u4.addEventListener("focus", Focusu4, true);
function Focusu4(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u4', '');

}

}

if (bIE) u4.attachEvent("onblur", LostFocusu4);
else u4.addEventListener("blur", LostFocusu4, true);
function LostFocusu4(e)
{
windowEvent = e;


if ((GetWidgetFormText('u4')) == ('')) {

SetWidgetFormText('u4', 'Zoek iets');

}

}

var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u222 = document.getElementById('u222');
gv_vAlignTable['u222'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u42 = document.getElementById('u42');

var u256 = document.getElementById('u256');

u256.style.cursor = 'pointer';
if (bIE) u256.attachEvent("onclick", Clicku256);
else u256.addEventListener("click", Clicku256, true);
function Clicku256(e)
{
windowEvent = e;


if (true) {

	self.location.href="Xplora.html" + GetQuerystring();

}

}

if (bIE) u256.attachEvent("onmouseover", MouseOveru256);
else u256.addEventListener("mouseover", MouseOveru256, true);
function MouseOveru256(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u256',e)) return;
if (true) {

	SetPanelState('u249', 'pd1u249','swing','up',500,'swing','down',500);

}

}

if (bIE) u256.attachEvent("onmouseout", MouseOutu256);
else u256.addEventListener("mouseout", MouseOutu256, true);
function MouseOutu256(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u256',e)) return;
if (true) {

	SetPanelState('u249', 'pd0u249','swing','up',500,'none','',500);

}

}

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u102 = document.getElementById('u102');

var u55 = document.getElementById('u55');

var u268 = document.getElementById('u268');
gv_vAlignTable['u268'] = 'center';
var u186 = document.getElementById('u186');

var u252 = document.getElementById('u252');

var u14 = document.getElementById('u14');

var u5 = document.getElementById('u5');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u271 = document.getElementById('u271');

var u235 = document.getElementById('u235');

u235.style.cursor = 'pointer';
if (bIE) u235.attachEvent("onclick", Clicku235);
else u235.addEventListener("click", Clicku235, true);
function Clicku235(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u185', 'pd2u185','none','',500,'none','',500);

}

}

if (bIE) u235.attachEvent("onmouseover", MouseOveru235);
else u235.addEventListener("mouseover", MouseOveru235, true);
function MouseOveru235(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u235',e)) return;
if (true) {

	SetPanelState('u232', 'pd1u232','none','',500,'fade','',500);

}

}

if (bIE) u235.attachEvent("onmouseout", MouseOutu235);
else u235.addEventListener("mouseout", MouseOutu235, true);
function MouseOutu235(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u235',e)) return;
if (true) {

	SetPanelState('u232', 'pd0u232','fade','',500,'none','',500);

}

}

var u138 = document.getElementById('u138');

var u261 = document.getElementById('u261');
gv_vAlignTable['u261'] = 'center';
var u52 = document.getElementById('u52');

var u192 = document.getElementById('u192');

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u193', 'pd1u193','none','',500,'fade','',500);
function waitucd0596928a9e4abca52dd2d91a21644e1() {

	SetPanelState('u193', 'pd0u193','fade','',500,'none','',500);
function waitu9da2edd10dc843adbb99f444a782c9b41() {

	SetPanelState('u185', 'pd0u185','fade','',500,'none','',500);
}
setTimeout(waitu9da2edd10dc843adbb99f444a782c9b41, 500);
}
setTimeout(waitucd0596928a9e4abca52dd2d91a21644e1, 2000);

}

}

var u241 = document.getElementById('u241');

var u259 = document.getElementById('u259');
gv_vAlignTable['u259'] = 'center';
var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u110 = document.getElementById('u110');

var u2 = document.getElementById('u2');

var u24 = document.getElementById('u24');

var u58 = document.getElementById('u58');

var u150 = document.getElementById('u150');

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u238 = document.getElementById('u238');

var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u30 = document.getElementById('u30');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u75 = document.getElementById('u75');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u289 = document.getElementById('u289');

var u88 = document.getElementById('u88');

var u7 = document.getElementById('u7');

var u176 = document.getElementById('u176');

var u208 = document.getElementById('u208');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u112 = document.getElementById('u112');

var u154 = document.getElementById('u154');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'top';
var u146 = document.getElementById('u146');

var u220 = document.getElementById('u220');
gv_vAlignTable['u220'] = 'top';
var u44 = document.getElementById('u44');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u276 = document.getElementById('u276');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u57 = document.getElementById('u57');

var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u8 = document.getElementById('u8');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'top';
var u203 = document.getElementById('u203');

var u125 = document.getElementById('u125');
gv_vAlignTable['u125'] = 'top';
var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'top';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u195 = document.getElementById('u195');

var u258 = document.getElementById('u258');

u258.style.cursor = 'pointer';
if (bIE) u258.attachEvent("onclick", Clicku258);
else u258.addEventListener("click", Clicku258, true);
function Clicku258(e)
{
windowEvent = e;


if (true) {

	self.location.href="Documenten.html" + GetQuerystring();

}

}

if (bIE) u258.attachEvent("onmouseover", MouseOveru258);
else u258.addEventListener("mouseover", MouseOveru258, true);
function MouseOveru258(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u258',e)) return;
if (true) {

	SetPanelState('u275', 'pd1u275','swing','up',500,'swing','down',500);

}

}

if (bIE) u258.attachEvent("onmouseout", MouseOutu258);
else u258.addEventListener("mouseout", MouseOutu258, true);
function MouseOutu258(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u258',e)) return;
if (true) {

	SetPanelState('u275', 'pd0u275','swing','up',500,'swing','down',500);

}

}

var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'center';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'top';
var u26 = document.getElementById('u26');

var u174 = document.getElementById('u174');

var u216 = document.getElementById('u216');

u216.style.cursor = 'pointer';
if (bIE) u216.attachEvent("onclick", Clicku216);
else u216.addEventListener("click", Clicku216, true);
function Clicku216(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u185', 'pd2u185','none','',500,'none','',500);

}

}

if (bIE) u216.attachEvent("onmouseover", MouseOveru216);
else u216.addEventListener("mouseover", MouseOveru216, true);
function MouseOveru216(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u216',e)) return;
if (true) {

	SetPanelState('u213', 'pd1u213','none','',500,'fade','',500);

}

}

if (bIE) u216.attachEvent("onmouseout", MouseOutu216);
else u216.addEventListener("mouseout", MouseOutu216, true);
function MouseOutu216(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u216',e)) return;
if (true) {

	SetPanelState('u213', 'pd0u213','fade','',500,'none','',500);

}

}

var u128 = document.getElementById('u128');

var u280 = document.getElementById('u280');

var u94 = document.getElementById('u94');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u249 = document.getElementById('u249');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u226 = document.getElementById('u226');
gv_vAlignTable['u226'] = 'center';
var u77 = document.getElementById('u77');

var u144 = document.getElementById('u144');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u36 = document.getElementById('u36');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u61 = document.getElementById('u61');

var u282 = document.getElementById('u282');

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u114 = document.getElementById('u114');

var u20 = document.getElementById('u20');

var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'top';
var u104 = document.getElementById('u104');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u46 = document.getElementById('u46');

var u34 = document.getElementById('u34');

var u71 = document.getElementById('u71');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u198 = document.getElementById('u198');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'center';
var u98 = document.getElementById('u98');

var u214 = document.getElementById('u214');

var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u273 = document.getElementById('u273');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u160 = document.getElementById('u160');

var u245 = document.getElementById('u245');

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'center';
var u267 = document.getElementById('u267');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u142 = document.getElementById('u142');

var u106 = document.getElementById('u106');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u40 = document.getElementById('u40');

var u227 = document.getElementById('u227');

u227.style.cursor = 'pointer';
if (bIE) u227.attachEvent("onclick", Clicku227);
else u227.addEventListener("click", Clicku227, true);
function Clicku227(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u185', 'pd2u185','none','',500,'none','',500);

}

}

if (bIE) u227.attachEvent("onmouseover", MouseOveru227);
else u227.addEventListener("mouseover", MouseOveru227, true);
function MouseOveru227(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u227',e)) return;
if (true) {

	SetPanelState('u224', 'pd1u224','none','',500,'fade','',500);

}

}

if (bIE) u227.attachEvent("onmouseout", MouseOutu227);
else u227.addEventListener("mouseout", MouseOutu227, true);
function MouseOutu227(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u227',e)) return;
if (true) {

	SetPanelState('u224', 'pd0u224','fade','',500,'none','',500);

}

}

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'center';
var u38 = document.getElementById('u38');

var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u193 = document.getElementById('u193');

var u247 = document.getElementById('u247');

u247.style.cursor = 'pointer';
if (bIE) u247.attachEvent("onclick", Clicku247);
else u247.addEventListener("click", Clicku247, true);
function Clicku247(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profiel.html" + GetQuerystring();

}

}

if (bIE) u247.attachEvent("onmouseover", MouseOveru247);
else u247.addEventListener("mouseover", MouseOveru247, true);
function MouseOveru247(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u247',e)) return;
if (true) {

	SetPanelState('u238', 'pd1u238','swing','up',500,'swing','down',500);

}

}

if (bIE) u247.attachEvent("onmouseout", MouseOutu247);
else u247.addEventListener("mouseout", MouseOutu247, true);
function MouseOutu247(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u247',e)) return;
if (true) {

	SetPanelState('u238', 'pd0u238','swing','up',500,'swing','down',500);

}

}

var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'center';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'center';
var u284 = document.getElementById('u284');

var u67 = document.getElementById('u67');

var u188 = document.getElementById('u188');

u188.style.cursor = 'pointer';
if (bIE) u188.attachEvent("onclick", Clicku188);
else u188.addEventListener("click", Clicku188, true);
function Clicku188(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u185', 'pd0u185','fade','',500,'none','',500);

}

}

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'center';
var u206 = document.getElementById('u206');

u206.style.cursor = 'pointer';
if (bIE) u206.attachEvent("onclick", Clicku206);
else u206.addEventListener("click", Clicku206, true);
function Clicku206(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u185', 'pd0u185','fade','',500,'none','',500);

}

}

var u9 = document.getElementById('u9');

var u213 = document.getElementById('u213');

var u84 = document.getElementById('u84');

var u50 = document.getElementById('u50');

var u171 = document.getElementById('u171');
gv_vAlignTable['u171'] = 'center';
var u239 = document.getElementById('u239');

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u63 = document.getElementById('u63');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u130 = document.getElementById('u130');

var u170 = document.getElementById('u170');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u134 = document.getElementById('u134');

var u190 = document.getElementById('u190');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'top';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'center';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u118 = document.getElementById('u118');

var u264 = document.getElementById('u264');

u264.style.cursor = 'pointer';
if (bIE) u264.attachEvent("onclick", Clicku264);
else u264.addEventListener("click", Clicku264, true);
function Clicku264(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u185 = document.getElementById('u185');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u250 = document.getElementById('u250');

var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'center';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u19 = document.getElementById('u19');

var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u219 = document.getElementById('u219');
gv_vAlignTable['u219'] = 'center';
var u285 = document.getElementById('u285');

var u225 = document.getElementById('u225');

var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u162 = document.getElementById('u162');

var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u287 = document.getElementById('u287');

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'top';
var u136 = document.getElementById('u136');

var u260 = document.getElementById('u260');

u260.style.cursor = 'pointer';
if (bIE) u260.attachEvent("onclick", Clicku260);
else u260.addEventListener("click", Clicku260, true);
function Clicku260(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

if (bIE) u260.attachEvent("onmouseover", MouseOveru260);
else u260.addEventListener("mouseover", MouseOveru260, true);
function MouseOveru260(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u260',e)) return;
if (true) {

	SetPanelState('u266', 'pd1u266','swing','up',500,'swing','down',500);

}

}

if (bIE) u260.attachEvent("onmouseout", MouseOutu260);
else u260.addEventListener("mouseout", MouseOutu260, true);
function MouseOutu260(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u260',e)) return;
if (true) {

	SetPanelState('u266', 'pd0u266','swing','up',500,'swing','down',500);

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u269 = document.getElementById('u269');

var u152 = document.getElementById('u152');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'top';
var u234 = document.getElementById('u234');
gv_vAlignTable['u234'] = 'center';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'center';
var u262 = document.getElementById('u262');

u262.style.cursor = 'pointer';
if (bIE) u262.attachEvent("onclick", Clicku262);
else u262.addEventListener("click", Clicku262, true);
function Clicku262(e)
{
windowEvent = e;


if (true) {

	self.location.href="Courses.html" + GetQuerystring();

}

}

if (bIE) u262.attachEvent("onmouseover", MouseOveru262);
else u262.addEventListener("mouseover", MouseOveru262, true);
function MouseOveru262(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u262',e)) return;
if (true) {

	SetPanelState('u284', 'pd1u284','swing','up',500,'swing','down',500);

}

}

if (bIE) u262.attachEvent("onmouseout", MouseOutu262);
else u262.addEventListener("mouseout", MouseOutu262, true);
function MouseOutu262(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u262',e)) return;
if (true) {

	SetPanelState('u284', 'pd0u284','swing','up',500,'swing','down',500);

}

}

var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u129 = document.getElementById('u129');
gv_vAlignTable['u129'] = 'center';
var u278 = document.getElementById('u278');

var u86 = document.getElementById('u86');

var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u11 = document.getElementById('u11');

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u0 = document.getElementById('u0');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u275 = document.getElementById('u275');

var u178 = document.getElementById('u178');

var u229 = document.getElementById('u229');

var u96 = document.getElementById('u96');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'center';
var u283 = document.getElementById('u283');
gv_vAlignTable['u283'] = 'center';
var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u185', 'pd1u185','none','',500,'fade','',500);

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u120 = document.getElementById('u120');

var u233 = document.getElementById('u233');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u148 = document.getElementById('u148');
gv_vAlignTable['u148'] = 'top';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u191 = document.getElementById('u191');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u12 = document.getElementById('u12');

var u200 = document.getElementById('u200');

u200.style.cursor = 'pointer';
if (bIE) u200.attachEvent("onclick", Clicku200);
else u200.addEventListener("click", Clicku200, true);
function Clicku200(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u185', 'pd2u185','none','',500,'none','',500);

}

}

if (bIE) u200.attachEvent("onmouseover", MouseOveru200);
else u200.addEventListener("mouseover", MouseOveru200, true);
function MouseOveru200(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u200',e)) return;
if (true) {

	SetPanelState('u197', 'pd1u197','none','',500,'fade','',500);

}

}

if (bIE) u200.attachEvent("onmouseout", MouseOutu200);
else u200.addEventListener("mouseout", MouseOutu200, true);
function MouseOutu200(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u200',e)) return;
if (true) {

	SetPanelState('u197', 'pd0u197','fade','',500,'none','',500);

}

}

var u211 = document.getElementById('u211');

u211.style.cursor = 'pointer';
if (bIE) u211.attachEvent("onclick", Clicku211);
else u211.addEventListener("click", Clicku211, true);
function Clicku211(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u185', 'pd2u185','none','',500,'none','',500);

}

}

if (bIE) u211.attachEvent("onmouseover", MouseOveru211);
else u211.addEventListener("mouseover", MouseOveru211, true);
function MouseOveru211(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u211',e)) return;
if (true) {

	SetPanelState('u208', 'pd1u208','none','',500,'fade','',500);

}

}

if (bIE) u211.attachEvent("onmouseout", MouseOutu211);
else u211.addEventListener("mouseout", MouseOutu211, true);
function MouseOutu211(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u211',e)) return;
if (true) {

	SetPanelState('u208', 'pd0u208','fade','',500,'none','',500);

}

}

var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'center';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u59 = document.getElementById('u59');

var u168 = document.getElementById('u168');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u90 = document.getElementById('u90');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u158 = document.getElementById('u158');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'center';
var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u48 = document.getElementById('u48');

var u209 = document.getElementById('u209');

var u22 = document.getElementById('u22');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u232 = document.getElementById('u232');

var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u221 = document.getElementById('u221');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u69 = document.getElementById('u69');

var u197 = document.getElementById('u197');

var u218 = document.getElementById('u218');

var u254 = document.getElementById('u254');

var u231 = document.getElementById('u231');
gv_vAlignTable['u231'] = 'top';
var u166 = document.getElementById('u166');

var u28 = document.getElementById('u28');

var u126 = document.getElementById('u126');

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u253 = document.getElementById('u253');
gv_vAlignTable['u253'] = 'center';
if (window.OnLoad) OnLoad();
