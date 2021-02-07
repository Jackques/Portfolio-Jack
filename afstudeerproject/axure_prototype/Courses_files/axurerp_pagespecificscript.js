
var PageName = 'Courses';
var PageId = 'f1530b8c27ac4a75b619da6115c3fd61'
var PageUrl = 'Courses.html'
document.title = 'Courses';
var PageNotes = 
{
"pageName":"Courses",
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

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u16 = document.getElementById('u16');

var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u46 = document.getElementById('u46');

u46.style.cursor = 'pointer';
if (bIE) u46.attachEvent("onclick", Clicku46);
else u46.addEventListener("click", Clicku46, true);
function Clicku46(e)
{
windowEvent = e;


if (true) {

	self.location.href="Xplora.html" + GetQuerystring();

}

}

if (bIE) u46.attachEvent("onmouseover", MouseOveru46);
else u46.addEventListener("mouseover", MouseOveru46, true);
function MouseOveru46(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u46',e)) return;
if (true) {

	SetPanelState('u39', 'pd1u39','swing','up',500,'swing','down',500);

}

}

if (bIE) u46.attachEvent("onmouseout", MouseOutu46);
else u46.addEventListener("mouseout", MouseOutu46, true);
function MouseOutu46(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u46',e)) return;
if (true) {

	SetPanelState('u39', 'pd0u39','swing','up',500,'none','',500);

}

}

var u68 = document.getElementById('u68');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u48 = document.getElementById('u48');

u48.style.cursor = 'pointer';
if (bIE) u48.attachEvent("onclick", Clicku48);
else u48.addEventListener("click", Clicku48, true);
function Clicku48(e)
{
windowEvent = e;


if (true) {

	self.location.href="Documenten.html" + GetQuerystring();

}

}

if (bIE) u48.attachEvent("onmouseover", MouseOveru48);
else u48.addEventListener("mouseover", MouseOveru48, true);
function MouseOveru48(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u48',e)) return;
if (true) {

	SetPanelState('u65', 'pd1u65','swing','up',500,'swing','down',500);

}

}

if (bIE) u48.attachEvent("onmouseout", MouseOutu48);
else u48.addEventListener("mouseout", MouseOutu48, true);
function MouseOutu48(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u48',e)) return;
if (true) {

	SetPanelState('u65', 'pd0u65','swing','up',500,'swing','down',500);

}

}

var u27 = document.getElementById('u27');

var u8 = document.getElementById('u8');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u23 = document.getElementById('u23');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u7 = document.getElementById('u7');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u79 = document.getElementById('u79');

var u11 = document.getElementById('u11');

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u75 = document.getElementById('u75');

var u66 = document.getElementById('u66');

var u2 = document.getElementById('u2');

var u57 = document.getElementById('u57');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

if (bIE) u52.attachEvent("onmouseover", MouseOveru52);
else u52.addEventListener("mouseover", MouseOveru52, true);
function MouseOveru52(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u52',e)) return;
if (true) {

	SetPanelState('u74', 'pd1u74','swing','up',500,'swing','down',500);

}

}

if (bIE) u52.attachEvent("onmouseout", MouseOutu52);
else u52.addEventListener("mouseout", MouseOutu52, true);
function MouseOutu52(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u52',e)) return;
if (true) {

	SetPanelState('u74', 'pd0u74','swing','up',500,'swing','down',500);

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u77 = document.getElementById('u77');

var u28 = document.getElementById('u28');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'top';
var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	self.location.href="Mail.html" + GetQuerystring();

}

}

if (bIE) u50.attachEvent("onmouseover", MouseOveru50);
else u50.addEventListener("mouseover", MouseOveru50, true);
function MouseOveru50(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u50',e)) return;
if (true) {

	SetPanelState('u56', 'pd1u56','swing','up',500,'swing','down',500);

}

}

if (bIE) u50.attachEvent("onmouseout", MouseOutu50);
else u50.addEventListener("mouseout", MouseOutu50, true);
function MouseOutu50(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u50',e)) return;
if (true) {

	SetPanelState('u56', 'pd0u56','swing','up',500,'swing','down',500);

}

}

var u24 = document.getElementById('u24');

var u54 = document.getElementById('u54');

u54.style.cursor = 'pointer';
if (bIE) u54.attachEvent("onclick", Clicku54);
else u54.addEventListener("click", Clicku54, true);
function Clicku54(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u39 = document.getElementById('u39');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'center';
var u31 = document.getElementById('u31');

var u61 = document.getElementById('u61');

var u35 = document.getElementById('u35');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u65 = document.getElementById('u65');

var u56 = document.getElementById('u56');

var u5 = document.getElementById('u5');

var u12 = document.getElementById('u12');

var u9 = document.getElementById('u9');

var u42 = document.getElementById('u42');

var u33 = document.getElementById('u33');

var u72 = document.getElementById('u72');

var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profiel.html" + GetQuerystring();

}

}

if (bIE) u37.attachEvent("onmouseover", MouseOveru37);
else u37.addEventListener("mouseover", MouseOveru37, true);
function MouseOveru37(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u37',e)) return;
if (true) {

	SetPanelState('u28', 'pd1u28','swing','up',500,'swing','down',500);

}

}

if (bIE) u37.attachEvent("onmouseout", MouseOutu37);
else u37.addEventListener("mouseout", MouseOutu37, true);
function MouseOutu37(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u37',e)) return;
if (true) {

	SetPanelState('u28', 'pd0u28','swing','up',500,'swing','down',500);

}

}

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u40 = document.getElementById('u40');

var u70 = document.getElementById('u70');

var u14 = document.getElementById('u14');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'center';
var u44 = document.getElementById('u44');

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u74 = document.getElementById('u74');

var u29 = document.getElementById('u29');

var u59 = document.getElementById('u59');

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

if (window.OnLoad) OnLoad();
