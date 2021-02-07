
var PageName = 'Opdrachten';
var PageId = 'f1530b8c27ac4a75b619da6115c3fd61'
var PageUrl = 'Opdrachten.html'
document.title = 'Opdrachten';
var PageNotes = 
{
"pageName":"Opdrachten",
"showNotesNames":"False"}
var $OnLoadVariable = '';

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
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '31');
  value = value.replace(/\[\[GenMonth\]\]/g, '12');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'december');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'dinsdag');
  value = value.replace(/\[\[GenYear\]\]/g, '2013');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u27 = document.getElementById('u27');

var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u29 = document.getElementById('u29');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u35 = document.getElementById('u35');

var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');

u14.style.cursor = 'pointer';
if (bIE) u14.attachEvent("onclick", Clicku14);
else u14.addEventListener("click", Clicku14, true);
function Clicku14(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profiel.html" + GetQuerystring();

}

}

if (bIE) u14.attachEvent("onmouseover", MouseOveru14);
else u14.addEventListener("mouseover", MouseOveru14, true);
function MouseOveru14(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u14',e)) return;
if (true) {

	SetPanelState('u11', 'pd1u11','none','',500,'swing','down',500);

}

}

if (bIE) u14.attachEvent("onmouseout", MouseOutu14);
else u14.addEventListener("mouseout", MouseOutu14, true);
function MouseOutu14(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u14',e)) return;
if (true) {

	SetPanelState('u11', 'pd0u11','swing','up',500,'none','',500);

}

}

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u41 = document.getElementById('u41');

var u44 = document.getElementById('u44');

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

SetWidgetFormText('u4', 'Zoek een document');

}

}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u26 = document.getElementById('u26');

var u11 = document.getElementById('u11');

var u38 = document.getElementById('u38');

var u12 = document.getElementById('u12');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{
windowEvent = e;


if (true) {

	self.location.href="Mail.html" + GetQuerystring();

}

}

var u40 = document.getElementById('u40');

var u7 = document.getElementById('u7');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u23 = document.getElementById('u23');

u23.style.cursor = 'pointer';
if (bIE) u23.attachEvent("onclick", Clicku23);
else u23.addEventListener("click", Clicku23, true);
function Clicku23(e)
{
windowEvent = e;


if (true) {

	self.location.href="Xplora.html" + GetQuerystring();

}

}

if (bIE) u23.attachEvent("onmouseover", MouseOveru23);
else u23.addEventListener("mouseover", MouseOveru23, true);
function MouseOveru23(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u23',e)) return;
if (true) {

	SetPanelState('u16', 'pd1u16','swing','up',500,'swing','down',500);

}

}

if (bIE) u23.attachEvent("onmouseout", MouseOutu23);
else u23.addEventListener("mouseout", MouseOutu23, true);
function MouseOutu23(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u23',e)) return;
if (true) {

	SetPanelState('u16', 'pd0u16','swing','up',500,'none','',500);

}

}

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

var u2 = document.getElementById('u2');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u19 = document.getElementById('u19');

var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u5 = document.getElementById('u5');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u21 = document.getElementById('u21');

var u33 = document.getElementById('u33');

var u31 = document.getElementById('u31');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u0 = document.getElementById('u0');

if (window.OnLoad) OnLoad();
