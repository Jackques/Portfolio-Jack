
var PageName = 'Documenten';
var PageId = 'c3067e7c29234a93ab7b2dc320135a59'
var PageUrl = 'Documenten.html'
document.title = 'Documenten';
var PageNotes = 
{
"pageName":"Documenten",
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
gv_vAlignTable['u86'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u16 = document.getElementById('u16');

var u55 = document.getElementById('u55');

var u46 = document.getElementById('u46');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u76 = document.getElementById('u76');

var u48 = document.getElementById('u48');

var u27 = document.getElementById('u27');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u8 = document.getElementById('u8');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u62 = document.getElementById('u62');

var u53 = document.getElementById('u53');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u7 = document.getElementById('u7');

if (bIE) u7.attachEvent("onfocus", Focusu7);
else u7.addEventListener("focus", Focusu7, true);
function Focusu7(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u7', '');

}

}

if (bIE) u7.attachEvent("onblur", LostFocusu7);
else u7.addEventListener("blur", LostFocusu7, true);
function LostFocusu7(e)
{
windowEvent = e;


if ((GetWidgetFormText('u7')) == ('')) {

SetWidgetFormText('u7', 'Zoek iets');

}

}

var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u64 = document.getElementById('u64');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'top';
var u11 = document.getElementById('u11');

var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u15 = document.getElementById('u15');

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u66 = document.getElementById('u66');

var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u2 = document.getElementById('u2');

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u57 = document.getElementById('u57');

var u22 = document.getElementById('u22');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u52 = document.getElementById('u52');

var u43 = document.getElementById('u43');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u20 = document.getElementById('u20');

var u50 = document.getElementById('u50');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'top';
var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profiel.html" + GetQuerystring();

}

}

if (bIE) u24.attachEvent("onmouseover", MouseOveru24);
else u24.addEventListener("mouseover", MouseOveru24, true);
function MouseOveru24(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u24',e)) return;
if (true) {

	SetPanelState('u15', 'pd1u15','swing','up',500,'swing','down',500);

}

}

if (bIE) u24.attachEvent("onmouseout", MouseOutu24);
else u24.addEventListener("mouseout", MouseOutu24, true);
function MouseOutu24(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u24',e)) return;
if (true) {

	SetPanelState('u15', 'pd0u15','swing','up',500,'swing','down',500);

}

}

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u39 = document.getElementById('u39');

u39.style.cursor = 'pointer';
if (bIE) u39.attachEvent("onclick", Clicku39);
else u39.addEventListener("click", Clicku39, true);
function Clicku39(e)
{
windowEvent = e;


if (true) {

	self.location.href="Courses.html" + GetQuerystring();

}

}

if (bIE) u39.attachEvent("onmouseover", MouseOveru39);
else u39.addEventListener("mouseover", MouseOveru39, true);
function MouseOveru39(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u39',e)) return;
if (true) {

	SetPanelState('u61', 'pd1u61','swing','up',500,'swing','down',500);

}

}

if (bIE) u39.attachEvent("onmouseout", MouseOutu39);
else u39.addEventListener("mouseout", MouseOutu39, true);
function MouseOutu39(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u39',e)) return;
if (true) {

	SetPanelState('u61', 'pd0u61','swing','up',500,'swing','down',500);

}

}

var u69 = document.getElementById('u69');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u31 = document.getElementById('u31');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'top';
var u61 = document.getElementById('u61');

var u35 = document.getElementById('u35');

u35.style.cursor = 'pointer';
if (bIE) u35.attachEvent("onclick", Clicku35);
else u35.addEventListener("click", Clicku35, true);
function Clicku35(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

if (bIE) u35.attachEvent("onmouseover", MouseOveru35);
else u35.addEventListener("mouseover", MouseOveru35, true);
function MouseOveru35(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u35',e)) return;
if (true) {

	SetPanelState('u52', 'pd1u52','swing','up',500,'swing','down',500);

}

}

if (bIE) u35.attachEvent("onmouseout", MouseOutu35);
else u35.addEventListener("mouseout", MouseOutu35, true);
function MouseOutu35(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u35',e)) return;
if (true) {

	SetPanelState('u52', 'pd0u52','swing','up',500,'swing','down',500);

}

}

var u26 = document.getElementById('u26');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u5 = document.getElementById('u5');

var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'top';
var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u12 = document.getElementById('u12');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{
windowEvent = e;


if (true) {

	self.location.href="Xplora.html" + GetQuerystring();

}

}

if (bIE) u33.attachEvent("onmouseover", MouseOveru33);
else u33.addEventListener("mouseover", MouseOveru33, true);
function MouseOveru33(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u33',e)) return;
if (true) {

	SetPanelState('u26', 'pd1u26','swing','up',500,'swing','down',500);

}

}

if (bIE) u33.attachEvent("onmouseout", MouseOutu33);
else u33.addEventListener("mouseout", MouseOutu33, true);
function MouseOutu33(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u33',e)) return;
if (true) {

	SetPanelState('u26', 'pd0u26','swing','up',500,'none','',500);

}

}

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u18 = document.getElementById('u18');

var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	self.location.href="Mail.html" + GetQuerystring();

}

}

if (bIE) u37.attachEvent("onmouseover", MouseOveru37);
else u37.addEventListener("mouseover", MouseOveru37, true);
function MouseOveru37(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u37',e)) return;
if (true) {

	SetPanelState('u43', 'pd1u43','swing','up',500,'swing','down',500);

}

}

if (bIE) u37.attachEvent("onmouseout", MouseOutu37);
else u37.addEventListener("mouseout", MouseOutu37, true);
function MouseOutu37(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u37',e)) return;
if (true) {

	SetPanelState('u43', 'pd0u43','swing','up',500,'swing','down',500);

}

}

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'top';
var u10 = document.getElementById('u10');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u14 = document.getElementById('u14');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u44 = document.getElementById('u44');

var u78 = document.getElementById('u78');

var u74 = document.getElementById('u74');

var u29 = document.getElementById('u29');

var u59 = document.getElementById('u59');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
if (window.OnLoad) OnLoad();
