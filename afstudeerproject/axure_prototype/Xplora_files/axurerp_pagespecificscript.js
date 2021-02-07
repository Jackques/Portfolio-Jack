
var PageName = 'Xplora';
var PageId = '3d4eb911eb7d48dbb3e97b4f43207878'
var PageUrl = 'Xplora.html'
document.title = 'Xplora';
var PageNotes = 
{
"pageName":"Xplora",
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

var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u25 = document.getElementById('u25');

var u16 = document.getElementById('u16');

var u55 = document.getElementById('u55');

var u46 = document.getElementById('u46');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'top';
var u76 = document.getElementById('u76');

var u48 = document.getElementById('u48');

var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u32 = document.getElementById('u32');

var u23 = document.getElementById('u23');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u53 = document.getElementById('u53');

var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'center';
var u1 = document.getElementById('u1');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u7 = document.getElementById('u7');

var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'center';
var u97 = document.getElementById('u97');
gv_vAlignTable['u97'] = 'center';
var u104 = document.getElementById('u104');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u30 = document.getElementById('u30');

var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u94 = document.getElementById('u94');

u94.style.cursor = 'pointer';
if (bIE) u94.attachEvent("onclick", Clicku94);
else u94.addEventListener("click", Clicku94, true);
function Clicku94(e)
{
windowEvent = e;


if (true) {

	self.location.href="Mail.html" + GetQuerystring();

}

}

if (bIE) u94.attachEvent("onmouseover", MouseOveru94);
else u94.addEventListener("mouseover", MouseOveru94, true);
function MouseOveru94(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u94',e)) return;
if (true) {

	SetPanelState('u16', 'pd1u16','swing','up',500,'swing','down',500);

}

}

if (bIE) u94.attachEvent("onmouseout", MouseOutu94);
else u94.addEventListener("mouseout", MouseOutu94, true);
function MouseOutu94(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u94',e)) return;
if (true) {

	SetPanelState('u16', 'pd0u16','swing','up',500,'swing','down',500);

}

}

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u34 = document.getElementById('u34');

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'top';
var u19 = document.getElementById('u19');

var u49 = document.getElementById('u49');

var u79 = document.getElementById('u79');
gv_vAlignTable['u79'] = 'center';
var u81 = document.getElementById('u81');
gv_vAlignTable['u81'] = 'center';
var u102 = document.getElementById('u102');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u41 = document.getElementById('u41');

var u17 = document.getElementById('u17');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u45 = document.getElementById('u45');

if (bIE) u45.attachEvent("onfocus", Focusu45);
else u45.addEventListener("focus", Focusu45, true);
function Focusu45(e)
{
windowEvent = e;


if (true) {

SetWidgetFormText('u45', '');

}

}

if (bIE) u45.attachEvent("onblur", LostFocusu45);
else u45.addEventListener("blur", LostFocusu45, true);
function LostFocusu45(e)
{
windowEvent = e;


if ((GetWidgetFormText('u45')) == ('')) {

SetWidgetFormText('u45', 'Zoek iets');

}

}

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'center';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u87 = document.getElementById('u87');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u92 = document.getElementById('u92');

u92.style.cursor = 'pointer';
if (bIE) u92.attachEvent("onclick", Clicku92);
else u92.addEventListener("click", Clicku92, true);
function Clicku92(e)
{
windowEvent = e;


if (true) {

	self.location.href="Documenten.html" + GetQuerystring();

}

}

if (bIE) u92.attachEvent("onmouseover", MouseOveru92);
else u92.addEventListener("mouseover", MouseOveru92, true);
function MouseOveru92(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u92',e)) return;
if (true) {

	SetPanelState('u25', 'pd1u25','swing','up',500,'swing','down',500);

}

}

if (bIE) u92.attachEvent("onmouseout", MouseOutu92);
else u92.addEventListener("mouseout", MouseOutu92, true);
function MouseOutu92(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u92',e)) return;
if (true) {

	SetPanelState('u25', 'pd0u25','swing','up',500,'swing','down',500);

}

}

var u83 = document.getElementById('u83');
gv_vAlignTable['u83'] = 'top';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'top';
var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u52 = document.getElementById('u52');

var u43 = document.getElementById('u43');

var u0 = document.getElementById('u0');

var u3 = document.getElementById('u3');

var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u77 = document.getElementById('u77');
gv_vAlignTable['u77'] = 'center';
var u90 = document.getElementById('u90');

u90.style.cursor = 'pointer';
if (bIE) u90.attachEvent("onclick", Clicku90);
else u90.addEventListener("click", Clicku90, true);
function Clicku90(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

if (bIE) u90.attachEvent("onmouseover", MouseOveru90);
else u90.addEventListener("mouseover", MouseOveru90, true);
function MouseOveru90(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u90',e)) return;
if (true) {

	SetPanelState('u9', 'pd1u9','swing','up',500,'swing','down',500);

}

}

if (bIE) u90.attachEvent("onmouseout", MouseOutu90);
else u90.addEventListener("mouseout", MouseOutu90, true);
function MouseOutu90(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u90',e)) return;
if (true) {

	SetPanelState('u9', 'pd0u9','swing','up',500,'none','',500);

}

}

var u28 = document.getElementById('u28');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u50 = document.getElementById('u50');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u98 = document.getElementById('u98');

u98.style.cursor = 'pointer';
if (bIE) u98.attachEvent("onclick", Clicku98);
else u98.addEventListener("click", Clicku98, true);
function Clicku98(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u107 = document.getElementById('u107');

var u39 = document.getElementById('u39');

var u69 = document.getElementById('u69');
gv_vAlignTable['u69'] = 'top';
var u84 = document.getElementById('u84');

var u71 = document.getElementById('u71');
gv_vAlignTable['u71'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u96 = document.getElementById('u96');

u96.style.cursor = 'pointer';
if (bIE) u96.attachEvent("onclick", Clicku96);
else u96.addEventListener("click", Clicku96, true);
function Clicku96(e)
{
windowEvent = e;


if (true) {

	self.location.href="Courses.html" + GetQuerystring();

}

}

if (bIE) u96.attachEvent("onmouseover", MouseOveru96);
else u96.addEventListener("mouseover", MouseOveru96, true);
function MouseOveru96(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u96',e)) return;
if (true) {

	SetPanelState('u34', 'pd1u34','swing','up',500,'swing','down',500);

}

}

if (bIE) u96.attachEvent("onmouseout", MouseOutu96);
else u96.addEventListener("mouseout", MouseOutu96, true);
function MouseOutu96(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u96',e)) return;
if (true) {

	SetPanelState('u34', 'pd0u34','swing','up',500,'swing','down',500);

}

}

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u35 = document.getElementById('u35');

var u26 = document.getElementById('u26');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'top';
var u5 = document.getElementById('u5');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'center';
var u95 = document.getElementById('u95');
gv_vAlignTable['u95'] = 'center';
var u82 = document.getElementById('u82');

var u12 = document.getElementById('u12');

var u9 = document.getElementById('u9');

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'top';
var u63 = document.getElementById('u63');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u37 = document.getElementById('u37');

var u88 = document.getElementById('u88');

u88.style.cursor = 'pointer';
if (bIE) u88.attachEvent("onclick", Clicku88);
else u88.addEventListener("click", Clicku88, true);
function Clicku88(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profiel.html" + GetQuerystring();

}

}

if (bIE) u88.attachEvent("onmouseover", MouseOveru88);
else u88.addEventListener("mouseover", MouseOveru88, true);
function MouseOveru88(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u88',e)) return;
if (true) {

	SetPanelState('u0', 'pd1u0','swing','up',500,'swing','down',500);

}

}

if (bIE) u88.attachEvent("onmouseout", MouseOutu88);
else u88.addEventListener("mouseout", MouseOutu88, true);
function MouseOutu88(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u88',e)) return;
if (true) {

	SetPanelState('u0', 'pd0u0','swing','up',500,'swing','down',500);

}

}

var u58 = document.getElementById('u58');

var u80 = document.getElementById('u80');

var u10 = document.getElementById('u10');

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

var u74 = document.getElementById('u74');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'center';
var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
if (window.OnLoad) OnLoad();
