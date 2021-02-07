
var PageName = 'Databank';
var PageId = '3d4eb911eb7d48dbb3e97b4f43207878'
var PageUrl = 'Databank.html'
document.title = 'Databank';
var PageNotes = 
{
"pageName":"Databank",
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

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'top';
var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u17 = document.getElementById('u17');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u29 = document.getElementById('u29');

var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	self.location.href="Opdrachten.html" + GetQuerystring();

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u58 = document.getElementById('u58');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'top';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');

u15.style.cursor = 'pointer';
if (bIE) u15.attachEvent("onclick", Clicku15);
else u15.addEventListener("click", Clicku15, true);
function Clicku15(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profiel.html" + GetQuerystring();

}

}

if (bIE) u15.attachEvent("onmouseover", MouseOveru15);
else u15.addEventListener("mouseover", MouseOveru15, true);
function MouseOveru15(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u15',e)) return;
if (true) {

	SetPanelState('u12', 'pd1u12','none','',500,'swing','down',500);

}

}

if (bIE) u15.attachEvent("onmouseout", MouseOutu15);
else u15.addEventListener("mouseout", MouseOutu15, true);
function MouseOutu15(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u15',e)) return;
if (true) {

	SetPanelState('u12', 'pd0u12','swing','up',500,'none','',500);

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
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
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'top';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u11 = document.getElementById('u11');

u11.style.cursor = 'pointer';
if (bIE) u11.attachEvent("onclick", Clicku11);
else u11.addEventListener("click", Clicku11, true);
function Clicku11(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u12 = document.getElementById('u12');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
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
gv_vAlignTable['u40'] = 'top';
var u7 = document.getElementById('u7');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u54 = document.getElementById('u54');

var u2 = document.getElementById('u2');

var u18 = document.getElementById('u18');

var u56 = document.getElementById('u56');

var u19 = document.getElementById('u19');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'top';
var u5 = document.getElementById('u5');

var u48 = document.getElementById('u48');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u50 = document.getElementById('u50');

var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'top';
var u21 = document.getElementById('u21');

var u52 = document.getElementById('u52');

var u46 = document.getElementById('u46');

var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'top';
var u59 = document.getElementById('u59');

var u0 = document.getElementById('u0');

if (window.OnLoad) OnLoad();
