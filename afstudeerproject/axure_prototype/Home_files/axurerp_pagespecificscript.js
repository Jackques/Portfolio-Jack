
var PageName = 'Home';
var PageId = '78950732f3ea48e1a7f5c442b8adf36f'
var PageUrl = 'Home.html'
document.title = 'Home';
var PageNotes = 
{
"pageName":"Home",
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

if (bIE) document.getElementById('u59').attachEvent("onmousedown", function(e) { StartDragWidget(e, 'u59'); });
else {
    document.getElementById('u59').addEventListener("mousedown", function(e) { StartDragWidget(e, 'u59'); }, true);
    document.getElementById('u59').addEventListener("touchstart", function(e) { StartDragWidget(e, 'u59'); }, true);
}

widgetIdToDragFunction['u59'] = function() {
var e = windowEvent;

if (true) {

	BringToFront("u11");

	SetPanelState('u59', 'pd1u59','fade','',500,'fade','',500);

	SetPanelState('u11', 'pd1u11','fade','',500,'fade','',500);

	MoveWidgetBy('u59',widgetDragInfo.xDelta,widgetDragInfo.yDelta,'none',500);

}

}
widgetIdToDragDropFunction['u59'] = function() {
var e = windowEvent;

if (true) {

	SetPanelState('u59', 'pd0u59','fade','',500,'fade','',500);

	SetPanelState('u11', 'pd0u11','fade','',500,'fade','',500);

	SendToBack("u11");

}

}
function rdo4NewEvent1(e) {

if (true) {

	SetPanelState('u170', 'pd1u170','none','',500,'none','',500);

	SetPanelState('u128', 'pd2u128','none','',500,'none','',500);

}

}

var u318 = document.getElementById('u318');

var u167 = document.getElementById('u167');

u167.style.cursor = 'pointer';
if (bIE) u167.attachEvent("onclick", Clicku167);
else u167.addEventListener("click", Clicku167, true);
function Clicku167(e)
{
windowEvent = e;


if (true) {

	BringToFront("u78");

	SetPanelState('u78', 'pd1u78','fade','',500,'fade','',500);

}

}

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u180 = document.getElementById('u180');
gv_vAlignTable['u180'] = 'top';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'top';
var u78 = document.getElementById('u78');

var u166 = document.getElementById('u166');

var u298 = document.getElementById('u298');

var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u201 = document.getElementById('u201');

var u1 = document.getElementById('u1');

var u215 = document.getElementById('u215');

var u193 = document.getElementById('u193');

u193.style.cursor = 'pointer';
if (bIE) u193.attachEvent("onclick", Clicku193);
else u193.addEventListener("click", Clicku193, true);
function Clicku193(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd0u190','fade','',500,'none','',500);

}

}

var u11 = document.getElementById('u11');

var u131 = document.getElementById('u131');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u225 = document.getElementById('u225');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'center';
var u264 = document.getElementById('u264');

var u100 = document.getElementById('u100');

var u214 = document.getElementById('u214');
gv_vAlignTable['u214'] = 'center';
var u192 = document.getElementById('u192');
gv_vAlignTable['u192'] = 'center';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u269 = document.getElementById('u269');

var u150 = document.getElementById('u150');

var u287 = document.getElementById('u287');

u287.style.cursor = 'pointer';
if (bIE) u287.attachEvent("onclick", Clicku287);
else u287.addEventListener("click", Clicku287, true);
function Clicku287(e)
{
windowEvent = e;


if (true) {

	self.location.href="Documenten.html" + GetQuerystring();

}

}

if (bIE) u287.attachEvent("onmouseover", MouseOveru287);
else u287.addEventListener("mouseover", MouseOveru287, true);
function MouseOveru287(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u287',e)) return;
if (true) {

	SetPanelState('u304', 'pd1u304','swing','up',500,'swing','down',500);

}

}

if (bIE) u287.attachEvent("onmouseout", MouseOutu287);
else u287.addEventListener("mouseout", MouseOutu287, true);
function MouseOutu287(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u287',e)) return;
if (true) {

	SetPanelState('u304', 'pd0u304','swing','up',500,'swing','down',500);

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u261 = document.getElementById('u261');

u261.style.cursor = 'pointer';
if (bIE) u261.attachEvent("onclick", Clicku261);
else u261.addEventListener("click", Clicku261, true);
function Clicku261(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u261', '');

}

}

if (bIE) u261.attachEvent("onkeyup", KeyUpu261);
else u261.addEventListener("keyup", KeyUpu261, true);
function KeyUpu261(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u224', 'pd1u224','none','',500,'fade','',500);

}

}

if (bIE) u261.attachEvent("onfocus", Focusu261);
else u261.addEventListener("focus", Focusu261, true);
function Focusu261(e)
{
windowEvent = e;


if (true) {

SetFocusedWidgetText('');

}

}

if (bIE) u261.attachEvent("onblur", LostFocusu261);
else u261.addEventListener("blur", LostFocusu261, true);
function LostFocusu261(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u261', 'zoek een app');

}

}

var u300 = document.getElementById('u300');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u319 = document.getElementById('u319');
gv_vAlignTable['u319'] = 'center';
var u268 = document.getElementById('u268');

if (bIE) u268.attachEvent("onfocus", Focusu268);
else u268.addEventListener("focus", Focusu268, true);
function Focusu268(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u268', '');

}

}

if (bIE) u268.attachEvent("onblur", LostFocusu268);
else u268.addEventListener("blur", LostFocusu268, true);
function LostFocusu268(e)
{
windowEvent = e;


if ((GetWidgetFormText('u268')) == ('')) {

SetWidgetFormText('u268', 'Zoek iets');

}

}

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u183 = document.getElementById('u183');
gv_vAlignTable['u183'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'center';
var u163 = document.getElementById('u163');
gv_vAlignTable['u163'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u177 = document.getElementById('u177');

var u37 = document.getElementById('u37');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u112 = document.getElementById('u112');

var u307 = document.getElementById('u307');

var u285 = document.getElementById('u285');

u285.style.cursor = 'pointer';
if (bIE) u285.attachEvent("onclick", Clicku285);
else u285.addEventListener("click", Clicku285, true);
function Clicku285(e)
{
windowEvent = e;


if (true) {

	self.location.href="Xplora.html" + GetQuerystring();

}

}

if (bIE) u285.attachEvent("onmouseover", MouseOveru285);
else u285.addEventListener("mouseover", MouseOveru285, true);
function MouseOveru285(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u285',e)) return;
if (true) {

	SetPanelState('u278', 'pd1u278','swing','up',500,'swing','down',500);

}

}

if (bIE) u285.attachEvent("onmouseout", MouseOutu285);
else u285.addEventListener("mouseout", MouseOutu285, true);
function MouseOutu285(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u285',e)) return;
if (true) {

	SetPanelState('u278', 'pd0u278','swing','up',500,'none','',500);

}

}

var u126 = document.getElementById('u126');

u126.style.cursor = 'pointer';
if (bIE) u126.attachEvent("onclick", Clicku126);
else u126.addEventListener("click", Clicku126, true);
function Clicku126(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u70', 'pd0u70','swing','down',500,'swing','down',500);

}

}

var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	BringToFront("u190");

	SetPanelState('u190', 'pd1u190','none','',500,'fade','',500);

}

}

var u162 = document.getElementById('u162');

var u79 = document.getElementById('u79');

var u176 = document.getElementById('u176');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u111 = document.getElementById('u111');

var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'center';
var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u12 = document.getElementById('u12');

var u161 = document.getElementById('u161');
gv_vAlignTable['u161'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u229 = document.getElementById('u229');

var u275 = document.getElementById('u275');

var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u305 = document.getElementById('u305');

var u283 = document.getElementById('u283');

var u20 = document.getElementById('u20');

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u279 = document.getElementById('u279');

var u241 = document.getElementById('u241');

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u297 = document.getElementById('u297');
gv_vAlignTable['u297'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u78', 'pd0u78','fade','',500,'fade','',500);

	SendToBack("u78");

}

}

var u228 = document.getElementById('u228');

var u304 = document.getElementById('u304');

var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'center';
var u76 = document.getElementById('u76');

var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u78', 'pd0u78','fade','',500,'fade','',500);

	SendToBack("u78");

}

}

var u278 = document.getElementById('u278');

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u296 = document.getElementById('u296');

var u202 = document.getElementById('u202');
gv_vAlignTable['u202'] = 'top';
var u137 = document.getElementById('u137');

var u33 = document.getElementById('u33');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u173 = document.getElementById('u173');

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u281 = document.getElementById('u281');

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u5 = document.getElementById('u5');

var u317 = document.getElementById('u317');
gv_vAlignTable['u317'] = 'center';
var u295 = document.getElementById('u295');

var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u290 = document.getElementById('u290');
gv_vAlignTable['u290'] = 'center';
var u109 = document.getElementById('u109');

var u253 = document.getElementById('u253');

u253.style.cursor = 'pointer';
if (bIE) u253.attachEvent("onclick", Clicku253);
else u253.addEventListener("click", Clicku253, true);
function Clicku253(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd2u190','none','',500,'none','',500);

}

}

if (bIE) u253.attachEvent("onmouseover", MouseOveru253);
else u253.addEventListener("mouseover", MouseOveru253, true);
function MouseOveru253(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u253',e)) return;
if (true) {

	SetPanelState('u234', 'pd1u234','none','',500,'fade','',500);

}

}

if (bIE) u253.attachEvent("onmouseout", MouseOutu253);
else u253.addEventListener("mouseout", MouseOutu253, true);
function MouseOutu253(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u253',e)) return;
if (true) {

	SetPanelState('u234', 'pd0u234','fade','',500,'none','',500);

}

}

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'center';
var u159 = document.getElementById('u159');

var u280 = document.getElementById('u280');
gv_vAlignTable['u280'] = 'center';
var u121 = document.getElementById('u121');

var u316 = document.getElementById('u316');

var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'center';
var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'center';
var u108 = document.getElementById('u108');

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'top';
var u171 = document.getElementById('u171');

var u266 = document.getElementById('u266');

var u64 = document.getElementById('u64');

var u239 = document.getElementById('u239');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'center';
var u302 = document.getElementById('u302');

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u120 = document.getElementById('u120');

if (bIE) u120.attachEvent("onfocus", Focusu120);
else u120.addEventListener("focus", Focusu120, true);
function Focusu120(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u120', '');

}

}

if (bIE) u120.attachEvent("onblur", LostFocusu120);
else u120.addEventListener("blur", LostFocusu120, true);
function LostFocusu120(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u120', 'Zoek een medium');

}

}

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u293 = document.getElementById('u293');

u293.style.cursor = 'pointer';
if (bIE) u293.attachEvent("onclick", Clicku293);
else u293.addEventListener("click", Clicku293, true);
function Clicku293(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u134 = document.getElementById('u134');

var u251 = document.getElementById('u251');
gv_vAlignTable['u251'] = 'top';
var u170 = document.getElementById('u170');

var u164 = document.getElementById('u164');

var u265 = document.getElementById('u265');
gv_vAlignTable['u265'] = 'center';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'center';
var u200 = document.getElementById('u200');

u200.style.cursor = 'pointer';
if (bIE) u200.attachEvent("onclick", Clicku200);
else u200.addEventListener("click", Clicku200, true);
function Clicku200(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u201', 'pd1u201','none','',500,'fade','',500);
function waitub5ce7d085ed54d89ac5fb80e7b9d824d1() {

	SetPanelState('u201', 'pd1u201','fade','',500,'none','',500);
function waitu439656a0a9984b4ca75ff85a63f3a8401() {

	SetPanelState('u201', 'pd2u201','none','',500,'fade','',500);
function waitu0cf60025821944d7962a87d8c4374a721() {

	SetPanelState('u201', 'pd2u201','fade','',500,'none','',500);

	SetPanelState('u201', 'pd0u201','none','',500,'fade','',500);

	SetPanelState('u190', 'pd0u190','fade','',500,'none','',500);

	SetPanelState('u176', 'pd1u176','none','',500,'fade','',500);
}
setTimeout(waitu0cf60025821944d7962a87d8c4374a721, 1000);
}
setTimeout(waitu439656a0a9984b4ca75ff85a63f3a8401, 500);
}
setTimeout(waitub5ce7d085ed54d89ac5fb80e7b9d824d1, 1000);

}

}

var u314 = document.getElementById('u314');

var u292 = document.getElementById('u292');
gv_vAlignTable['u292'] = 'center';
var u77 = document.getElementById('u77');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'top';
var u147 = document.getElementById('u147');

var u58 = document.getElementById('u58');

var u116 = document.getElementById('u116');

u116.style.cursor = 'pointer';
if (bIE) u116.attachEvent("onclick", Clicku116);
else u116.addEventListener("click", Clicku116, true);
function Clicku116(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u78', 'pd2u78','none','',500,'none','',500);

}

}

if (bIE) u116.attachEvent("onmouseover", MouseOveru116);
else u116.addEventListener("mouseover", MouseOveru116, true);
function MouseOveru116(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u116',e)) return;
if (true) {

	SetPanelState('u108', 'pd1u108','fade','',500,'fade','',500);

}

}

if (bIE) u116.attachEvent("onmouseout", MouseOutu116);
else u116.addEventListener("mouseout", MouseOutu116, true);
function MouseOutu116(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u116',e)) return;
if (true) {

	SetPanelState('u108', 'pd0u108','fade','',500,'fade','',500);

}

}

var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u91', 'pd1u91','fade','',500,'fade','',500);
function waitu991fb0da9869444799c77052d0632ec81() {

	SetPanelState('u91', 'pd2u91','fade','',500,'fade','',500);
function waitu51cebc5b0d1c4c07ba6e4907060bd3021() {

	SetPanelState('u78', 'pd0u78','fade','',500,'fade','',500);

	SendToBack("u78");

rdo4NewEvent1(e);
}
setTimeout(waitu51cebc5b0d1c4c07ba6e4907060bd3021, 1000);
}
setTimeout(waitu991fb0da9869444799c77052d0632ec81, 1000);

}

}

var u213 = document.getElementById('u213');

var u191 = document.getElementById('u191');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u259 = document.getElementById('u259');

u259.style.cursor = 'pointer';
if (bIE) u259.attachEvent("onclick", Clicku259);
else u259.addEventListener("click", Clicku259, true);
function Clicku259(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd2u190','none','',500,'none','',500);

}

}

if (bIE) u259.attachEvent("onmouseover", MouseOveru259);
else u259.addEventListener("mouseover", MouseOveru259, true);
function MouseOveru259(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u259',e)) return;
if (true) {

	SetPanelState('u225', 'pd1u225','none','',500,'fade','',500);

}

}

if (bIE) u259.attachEvent("onmouseout", MouseOutu259);
else u259.addEventListener("mouseout", MouseOutu259, true);
function MouseOutu259(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u259',e)) return;
if (true) {

	SetPanelState('u225', 'pd0u225','fade','',500,'none','',500);

}

}

var u146 = document.getElementById('u146');
gv_vAlignTable['u146'] = 'center';
var u52 = document.getElementById('u52');

var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'center';
var u263 = document.getElementById('u263');
gv_vAlignTable['u263'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'center';
var u14 = document.getElementById('u14');
gv_vAlignTable['u14'] = 'top';
var u47 = document.getElementById('u47');

var u212 = document.getElementById('u212');
gv_vAlignTable['u212'] = 'top';
var u190 = document.getElementById('u190');

var u148 = document.getElementById('u148');

var u94 = document.getElementById('u94');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u145 = document.getElementById('u145');

var u118 = document.getElementById('u118');

if (bIE) u118.attachEvent("onmouseover", MouseOveru118);
else u118.addEventListener("mouseover", MouseOveru118, true);
function MouseOveru118(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u118',e)) return;
if (true) {

	SetPanelState('u111', 'pd1u111','fade','',500,'fade','',500);

}

}

if (bIE) u118.attachEvent("onmouseout", MouseOutu118);
else u118.addEventListener("mouseout", MouseOutu118, true);
function MouseOutu118(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u118',e)) return;
if (true) {

	SetPanelState('u111', 'pd0u111','fade','',500,'fade','',500);

}

}

var u262 = document.getElementById('u262');

var u276 = document.getElementById('u276');

u276.style.cursor = 'pointer';
if (bIE) u276.attachEvent("onclick", Clicku276);
else u276.addEventListener("click", Clicku276, true);
function Clicku276(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profiel.html" + GetQuerystring();

}

}

if (bIE) u276.attachEvent("onmouseover", MouseOveru276);
else u276.addEventListener("mouseover", MouseOveru276, true);
function MouseOveru276(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u276',e)) return;
if (true) {

	BringToFront("u0");

	SetPanelState('u0', 'pd1u0','swing','up',500,'swing','down',500);

}

}

if (bIE) u276.attachEvent("onmouseout", MouseOutu276);
else u276.addEventListener("mouseout", MouseOutu276, true);
function MouseOutu276(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u276',e)) return;
if (true) {

	SetPanelState('u0', 'pd0u0','swing','up',500,'swing','down',500);
function waitu409b1c1b4113481598bc94cccd6203bf1() {

	SendToBack("u0");
}
setTimeout(waitu409b1c1b4113481598bc94cccd6203bf1, 500);

}

}

var u89 = document.getElementById('u89');

if (bIE) u89.attachEvent("onfocus", Focusu89);
else u89.addEventListener("focus", Focusu89, true);
function Focusu89(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u89', '');

}

}

if (bIE) u89.attachEvent("onblur", LostFocusu89);
else u89.addEventListener("blur", LostFocusu89, true);
function LostFocusu89(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u89', 'wachtwoord');

}

}

var u186 = document.getElementById('u186');

var u249 = document.getElementById('u249');
gv_vAlignTable['u249'] = 'top';
var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u144 = document.getElementById('u144');
gv_vAlignTable['u144'] = 'center';
var u311 = document.getElementById('u311');

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u73 = document.getElementById('u73');

var u17 = document.getElementById('u17');

var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u210 = document.getElementById('u210');
gv_vAlignTable['u210'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u224 = document.getElementById('u224');

var u143 = document.getElementById('u143');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u9 = document.getElementById('u9');

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u59 = document.getElementById('u59');

var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u91 = document.getElementById('u91');

var u44 = document.getElementById('u44');

var u207 = document.getElementById('u207');
gv_vAlignTable['u207'] = 'center';
var u106 = document.getElementById('u106');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'center';
var u142 = document.getElementById('u142');
gv_vAlignTable['u142'] = 'top';
var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u237 = document.getElementById('u237');

var u156 = document.getElementById('u156');

var u188 = document.getElementById('u188');

var u273 = document.getElementById('u273');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u105 = document.getElementById('u105');

var u222 = document.getElementById('u222');

u222.style.cursor = 'pointer';
if (bIE) u222.attachEvent("onclick", Clicku222);
else u222.addEventListener("click", Clicku222, true);
function Clicku222(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd0u190','fade','',500,'none','',500);

}

}

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u209 = document.getElementById('u209');

u209.style.cursor = 'pointer';
if (bIE) u209.attachEvent("onclick", Clicku209);
else u209.addEventListener("click", Clicku209, true);
function Clicku209(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd0u190','fade','',500,'none','',500);

}

}

var u272 = document.getElementById('u272');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u235 = document.getElementById('u235');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'top';
var u271 = document.getElementById('u271');

var u174 = document.getElementById('u174');

u174.style.cursor = 'pointer';
if (bIE) u174.attachEvent("onclick", Clicku174);
else u174.addEventListener("click", Clicku174, true);
function Clicku174(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u70', 'pd1u70','swing','down',500,'swing','up',500);

}

}

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u98 = document.getElementById('u98');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'top';
var u220 = document.getElementById('u220');

var u3 = document.getElementById('u3');

var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u234 = document.getElementById('u234');

var u19 = document.getElementById('u19');

var u270 = document.getElementById('u270');
gv_vAlignTable['u270'] = 'center';
var u199 = document.getElementById('u199');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'top';
var u312 = document.getElementById('u312');
gv_vAlignTable['u312'] = 'center';
var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'center';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'top';
var u68 = document.getElementById('u68');

var u198 = document.getElementById('u198');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'center';
var u0 = document.getElementById('u0');

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'top';
var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'center';
var u313 = document.getElementById('u313');

var u232 = document.getElementById('u232');

var u309 = document.getElementById('u309');

var u246 = document.getElementById('u246');
gv_vAlignTable['u246'] = 'top';
var u62 = document.getElementById('u62');

var u219 = document.getElementById('u219');

u219.style.cursor = 'pointer';
if (bIE) u219.attachEvent("onclick", Clicku219);
else u219.addEventListener("click", Clicku219, true);
function Clicku219(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd3u190','none','',500,'none','',500);

}

}

var u291 = document.getElementById('u291');

u291.style.cursor = 'pointer';
if (bIE) u291.attachEvent("onclick", Clicku291);
else u291.addEventListener("click", Clicku291, true);
function Clicku291(e)
{
windowEvent = e;


if (true) {

	self.location.href="Courses.html" + GetQuerystring();

}

}

if (bIE) u291.attachEvent("onmouseover", MouseOveru291);
else u291.addEventListener("mouseover", MouseOveru291, true);
function MouseOveru291(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u291',e)) return;
if (true) {

	SetPanelState('u313', 'pd1u313','swing','up',500,'swing','down',500);

}

}

if (bIE) u291.attachEvent("onmouseout", MouseOutu291);
else u291.addEventListener("mouseout", MouseOutu291, true);
function MouseOutu291(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u291',e)) return;
if (true) {

	SetPanelState('u313', 'pd0u313','swing','up',500,'swing','down',500);

}

}

var u114 = document.getElementById('u114');

u114.style.cursor = 'pointer';
if (bIE) u114.attachEvent("onclick", Clicku114);
else u114.addEventListener("click", Clicku114, true);
function Clicku114(e)
{
windowEvent = e;


if (true) {

}

}

if (bIE) u114.attachEvent("onmouseover", MouseOveru114);
else u114.addEventListener("mouseover", MouseOveru114, true);
function MouseOveru114(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u114',e)) return;
if (true) {

	SetPanelState('u105', 'pd1u105','fade','',500,'fade','',500);

}

}

if (bIE) u114.attachEvent("onmouseout", MouseOutu114);
else u114.addEventListener("mouseout", MouseOutu114, true);
function MouseOutu114(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u114',e)) return;
if (true) {

	SetPanelState('u105', 'pd0u105','fade','',500,'fade','',500);

}

}

var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'top';
var u231 = document.getElementById('u231');

var u187 = document.getElementById('u187');
gv_vAlignTable['u187'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u70 = document.getElementById('u70');

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'center';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u127 = document.getElementById('u127');
gv_vAlignTable['u127'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u244 = document.getElementById('u244');
gv_vAlignTable['u244'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u83 = document.getElementById('u83');

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u88 = document.getElementById('u88');

if (bIE) u88.attachEvent("onfocus", Focusu88);
else u88.addEventListener("focus", Focusu88, true);
function Focusu88(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u88', '');

}

}

if (bIE) u88.attachEvent("onblur", LostFocusu88);
else u88.addEventListener("blur", LostFocusu88, true);
function LostFocusu88(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u88', 'Gebruikersnaam');

}

}

var u185 = document.getElementById('u185');
gv_vAlignTable['u185'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u243 = document.getElementById('u243');

var u34 = document.getElementById('u34');

var u257 = document.getElementById('u257');

u257.style.cursor = 'pointer';
if (bIE) u257.attachEvent("onclick", Clicku257);
else u257.addEventListener("click", Clicku257, true);
function Clicku257(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd2u190','none','',500,'none','',500);

}

}

if (bIE) u257.attachEvent("onmouseover", MouseOveru257);
else u257.addEventListener("mouseover", MouseOveru257, true);
function MouseOveru257(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u257',e)) return;
if (true) {

	SetPanelState('u228', 'pd1u228','none','',500,'fade','',500);

}

}

if (bIE) u257.attachEvent("onmouseout", MouseOutu257);
else u257.addEventListener("mouseout", MouseOutu257, true);
function MouseOutu257(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u257',e)) return;
if (true) {

	SetPanelState('u228', 'pd0u228','fade','',500,'none','',500);

}

}

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u289 = document.getElementById('u289');

u289.style.cursor = 'pointer';
if (bIE) u289.attachEvent("onclick", Clicku289);
else u289.addEventListener("click", Clicku289, true);
function Clicku289(e)
{
windowEvent = e;


if (true) {

	self.location.href="Mail.html" + GetQuerystring();

}

}

if (bIE) u289.attachEvent("onmouseover", MouseOveru289);
else u289.addEventListener("mouseover", MouseOveru289, true);
function MouseOveru289(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u289',e)) return;
if (true) {

	SetPanelState('u295', 'pd1u295','swing','up',500,'swing','down',500);

}

}

if (bIE) u289.attachEvent("onmouseout", MouseOutu289);
else u289.addEventListener("mouseout", MouseOutu289, true);
function MouseOutu289(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u289',e)) return;
if (true) {

	SetPanelState('u295', 'pd0u295','swing','up',500,'swing','down',500);

}

}

var u45 = document.getElementById('u45');

var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'top';
var u206 = document.getElementById('u206');

var u184 = document.getElementById('u184');

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u96 = document.getElementById('u96');

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u236 = document.getElementById('u236');
gv_vAlignTable['u236'] = 'center';
var u288 = document.getElementById('u288');
gv_vAlignTable['u288'] = 'center';
var u129 = document.getElementById('u129');

var u226 = document.getElementById('u226');

var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'top';
var u205 = document.getElementById('u205');
gv_vAlignTable['u205'] = 'center';
var u71 = document.getElementById('u71');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'center';
var u197 = document.getElementById('u197');
gv_vAlignTable['u197'] = 'top';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u255 = document.getElementById('u255');

u255.style.cursor = 'pointer';
if (bIE) u255.attachEvent("onclick", Clicku255);
else u255.addEventListener("click", Clicku255, true);
function Clicku255(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u190', 'pd2u190','none','',500,'none','',500);

}

}

if (bIE) u255.attachEvent("onmouseover", MouseOveru255);
else u255.addEventListener("mouseover", MouseOveru255, true);
function MouseOveru255(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u255',e)) return;
if (true) {

	SetPanelState('u231', 'pd1u231','none','',500,'fade','',500);

}

}

if (bIE) u255.attachEvent("onmouseout", MouseOutu255);
else u255.addEventListener("mouseout", MouseOutu255, true);
function MouseOutu255(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u255',e)) return;
if (true) {

	SetPanelState('u231', 'pd0u231','fade','',500,'none','',500);

}

}

var u15 = document.getElementById('u15');

var u128 = document.getElementById('u128');

var u60 = document.getElementById('u60');

var u75 = document.getElementById('u75');

var u204 = document.getElementById('u204');

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'top';
var u66 = document.getElementById('u66');

var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'center';
var u140 = document.getElementById('u140');

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'center';
var u7 = document.getElementById('u7');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u125 = document.getElementById('u125');

if (bIE) u125.attachEvent("onclick", Clicku125);
else u125.addEventListener("click", Clicku125, true);
function Clicku125(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u170', 'pd1u170','none','',500,'none','',500);

	SetPanelState('u128', 'pd2u128','none','',500,'none','',500);

}

}

var u181 = document.getElementById('u181');
gv_vAlignTable['u181'] = 'top';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u258 = document.getElementById('u258');
gv_vAlignTable['u258'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u217 = document.getElementById('u217');

var u195 = document.getElementById('u195');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u153 = document.getElementById('u153');

if (window.OnLoad) OnLoad();
