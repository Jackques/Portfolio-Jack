
var PageName = 'Profiel';
var PageId = '066841d093954c3ba243f02d3ac6473d'
var PageUrl = 'Profiel.html'
document.title = 'Profiel';
var PageNotes = 
{
"pageName":"Profiel",
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

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u51 = document.getElementById('u51');

var u25 = document.getElementById('u25');

var u16 = document.getElementById('u16');

var u55 = document.getElementById('u55');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u68 = document.getElementById('u68');

u68.style.cursor = 'pointer';
if (bIE) u68.attachEvent("onclick", Clicku68);
else u68.addEventListener("click", Clicku68, true);
function Clicku68(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u48 = document.getElementById('u48');

var u27 = document.getElementById('u27');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'top';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');

var u62 = document.getElementById('u62');

u62.style.cursor = 'pointer';
if (bIE) u62.attachEvent("onclick", Clicku62);
else u62.addEventListener("click", Clicku62, true);
function Clicku62(e)
{
windowEvent = e;


if (true) {

	self.location.href="Documenten.html" + GetQuerystring();

}

}

if (bIE) u62.attachEvent("onmouseover", MouseOveru62);
else u62.addEventListener("mouseover", MouseOveru62, true);
function MouseOveru62(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u62',e)) return;
if (true) {

	SetPanelState('u27', 'pd1u27','swing','up',500,'swing','down',500);

}

}

if (bIE) u62.attachEvent("onmouseout", MouseOutu62);
else u62.addEventListener("mouseout", MouseOutu62, true);
function MouseOutu62(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u62',e)) return;
if (true) {

	SetPanelState('u27', 'pd0u27','swing','up',500,'swing','down',500);

}

}

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u1 = document.getElementById('u1');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u7 = document.getElementById('u7');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u97 = document.getElementById('u97');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u109 = document.getElementById('u109');

var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'center';
var u30 = document.getElementById('u30');

var u60 = document.getElementById('u60');

u60.style.cursor = 'pointer';
if (bIE) u60.attachEvent("onclick", Clicku60);
else u60.addEventListener("click", Clicku60, true);
function Clicku60(e)
{
windowEvent = e;


if (true) {

	self.location.href="Xplora.html" + GetQuerystring();

}

}

if (bIE) u60.attachEvent("onmouseover", MouseOveru60);
else u60.addEventListener("mouseover", MouseOveru60, true);
function MouseOveru60(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u60',e)) return;
if (true) {

	SetPanelState('u11', 'pd1u11','swing','up',500,'swing','down',500);

}

}

if (bIE) u60.attachEvent("onmouseout", MouseOutu60);
else u60.addEventListener("mouseout", MouseOutu60, true);
function MouseOutu60(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u60',e)) return;
if (true) {

	SetPanelState('u11', 'pd0u11','swing','up',500,'none','',500);

}

}

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'top';
var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'top';
var u34 = document.getElementById('u34');

var u111 = document.getElementById('u111');

var u64 = document.getElementById('u64');

u64.style.cursor = 'pointer';
if (bIE) u64.attachEvent("onclick", Clicku64);
else u64.addEventListener("click", Clicku64, true);
function Clicku64(e)
{
windowEvent = e;


if (true) {

	self.location.href="Mail.html" + GetQuerystring();

}

}

if (bIE) u64.attachEvent("onmouseover", MouseOveru64);
else u64.addEventListener("mouseover", MouseOveru64, true);
function MouseOveru64(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u64',e)) return;
if (true) {

	SetPanelState('u18', 'pd1u18','swing','up',500,'swing','down',500);

}

}

if (bIE) u64.attachEvent("onmouseout", MouseOutu64);
else u64.addEventListener("mouseout", MouseOutu64, true);
function MouseOutu64(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u64',e)) return;
if (true) {

	SetPanelState('u18', 'pd0u18','swing','up',500,'swing','down',500);

}

}

var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u19 = document.getElementById('u19');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'top';
var u81 = document.getElementById('u81');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u11 = document.getElementById('u11');

var u41 = document.getElementById('u41');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u45 = document.getElementById('u45');

var u36 = document.getElementById('u36');

var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u66 = document.getElementById('u66');

u66.style.cursor = 'pointer';
if (bIE) u66.attachEvent("onclick", Clicku66);
else u66.addEventListener("click", Clicku66, true);
function Clicku66(e)
{
windowEvent = e;


if (true) {

	self.location.href="Courses.html" + GetQuerystring();

}

}

if (bIE) u66.attachEvent("onmouseover", MouseOveru66);
else u66.addEventListener("mouseover", MouseOveru66, true);
function MouseOveru66(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u66',e)) return;
if (true) {

	SetPanelState('u36', 'pd1u36','swing','up',500,'swing','down',500);

}

}

if (bIE) u66.attachEvent("onmouseout", MouseOutu66);
else u66.addEventListener("mouseout", MouseOutu66, true);
function MouseOutu66(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u66',e)) return;
if (true) {

	SetPanelState('u36', 'pd0u36','swing','up',500,'swing','down',500);

}

}

var u87 = document.getElementById('u87');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'top';
var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u57 = document.getElementById('u57');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u52 = document.getElementById('u52');

var u43 = document.getElementById('u43');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');

var u99 = document.getElementById('u99');

var u47 = document.getElementById('u47');

if (bIE) u47.attachEvent("onfocus", Focusu47);
else u47.addEventListener("focus", Focusu47, true);
function Focusu47(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u47', '');

}

}

if (bIE) u47.attachEvent("onblur", LostFocusu47);
else u47.addEventListener("blur", LostFocusu47, true);
function LostFocusu47(e)
{
windowEvent = e;


if ((GetWidgetFormText('u47')) == ('')) {

SetWidgetFormText('u47', 'Zoek iets');

}

}

var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'top';
var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'top';
var u28 = document.getElementById('u28');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u50 = document.getElementById('u50');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u54 = document.getElementById('u54');

var u107 = document.getElementById('u107');

var u39 = document.getElementById('u39');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'center';
var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'top';
var u71 = document.getElementById('u71');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'center';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u5 = document.getElementById('u5');

var u105 = document.getElementById('u105');

var u95 = document.getElementById('u95');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u12 = document.getElementById('u12');

var u9 = document.getElementById('u9');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'center';
var u18 = document.getElementById('u18');

var u37 = document.getElementById('u37');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'top';
var u58 = document.getElementById('u58');

u58.style.cursor = 'pointer';
if (bIE) u58.attachEvent("onclick", Clicku58);
else u58.addEventListener("click", Clicku58, true);
function Clicku58(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

if (bIE) u58.attachEvent("onmouseover", MouseOveru58);
else u58.addEventListener("mouseover", MouseOveru58, true);
function MouseOveru58(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u58',e)) return;
if (true) {

	SetPanelState('u0', 'pd1u0','swing','up',500,'swing','down',500);

}

}

if (bIE) u58.attachEvent("onmouseout", MouseOutu58);
else u58.addEventListener("mouseout", MouseOutu58, true);
function MouseOutu58(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u58',e)) return;
if (true) {

	SetPanelState('u0', 'pd0u0','swing','up',500,'swing','down',500);

}

}

var u80 = document.getElementById('u80');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'top';
var u14 = document.getElementById('u14');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'top';
var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'top';
var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'top';
if (window.OnLoad) OnLoad();
