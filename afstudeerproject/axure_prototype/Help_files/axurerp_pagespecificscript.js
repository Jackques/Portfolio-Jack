
var PageName = 'Help';
var PageId = 'd3468d25f7e74dbab660dbf8cbef02f5'
var PageUrl = 'Help.html'
document.title = 'Help';
var PageNotes = 
{
"pageName":"Help",
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

var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'center';
var u27 = document.getElementById('u27');
gv_vAlignTable['u27'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u28 = document.getElementById('u28');

var u42 = document.getElementById('u42');

var u29 = document.getElementById('u29');

var u8 = document.getElementById('u8');
gv_vAlignTable['u8'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u51 = document.getElementById('u51');

var u35 = document.getElementById('u35');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u44 = document.getElementById('u44');

var u4 = document.getElementById('u4');
gv_vAlignTable['u4'] = 'center';
var u1 = document.getElementById('u1');

var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'center';
var u11 = document.getElementById('u11');

var u38 = document.getElementById('u38');

var u12 = document.getElementById('u12');

var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u9 = document.getElementById('u9');

u9.style.cursor = 'pointer';
if (bIE) u9.attachEvent("onclick", Clicku9);
else u9.addEventListener("click", Clicku9, true);
function Clicku9(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profiel.html" + GetQuerystring();

}

}

if (bIE) u9.attachEvent("onmouseover", MouseOveru9);
else u9.addEventListener("mouseover", MouseOveru9, true);
function MouseOveru9(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u9',e)) return;
if (true) {

	SetPanelState('u0', 'pd1u0','swing','up',500,'swing','down',500);

}

}

if (bIE) u9.attachEvent("onmouseout", MouseOutu9);
else u9.addEventListener("mouseout", MouseOutu9, true);
function MouseOutu9(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u9',e)) return;
if (true) {

	SetPanelState('u0', 'pd0u0','swing','up',500,'swing','down',500);

}

}

var u40 = document.getElementById('u40');

var u7 = document.getElementById('u7');

var u3 = document.getElementById('u3');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

u24.style.cursor = 'pointer';
if (bIE) u24.attachEvent("onclick", Clicku24);
else u24.addEventListener("click", Clicku24, true);
function Clicku24(e)
{
windowEvent = e;


if (true) {

	self.location.href="Courses.html" + GetQuerystring();

}

}

if (bIE) u24.attachEvent("onmouseover", MouseOveru24);
else u24.addEventListener("mouseover", MouseOveru24, true);
function MouseOveru24(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u24',e)) return;
if (true) {

	SetPanelState('u46', 'pd1u46','swing','up',500,'swing','down',500);

}

}

if (bIE) u24.attachEvent("onmouseout", MouseOutu24);
else u24.addEventListener("mouseout", MouseOutu24, true);
function MouseOutu24(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u24',e)) return;
if (true) {

	SetPanelState('u46', 'pd0u46','swing','up',500,'swing','down',500);

}

}

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u47 = document.getElementById('u47');

var u2 = document.getElementById('u2');
gv_vAlignTable['u2'] = 'center';
var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{
windowEvent = e;


if (true) {

	self.location.href="Xplora.html" + GetQuerystring();

}

}

if (bIE) u18.attachEvent("onmouseover", MouseOveru18);
else u18.addEventListener("mouseover", MouseOveru18, true);
function MouseOveru18(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u18',e)) return;
if (true) {

	SetPanelState('u11', 'pd1u11','swing','up',500,'swing','down',500);

}

}

if (bIE) u18.attachEvent("onmouseout", MouseOutu18);
else u18.addEventListener("mouseout", MouseOutu18, true);
function MouseOutu18(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u18',e)) return;
if (true) {

	SetPanelState('u11', 'pd0u11','swing','up',500,'none','',500);

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u20 = document.getElementById('u20');

u20.style.cursor = 'pointer';
if (bIE) u20.attachEvent("onclick", Clicku20);
else u20.addEventListener("click", Clicku20, true);
function Clicku20(e)
{
windowEvent = e;


if (true) {

	self.location.href="Documenten.html" + GetQuerystring();

}

}

if (bIE) u20.attachEvent("onmouseover", MouseOveru20);
else u20.addEventListener("mouseover", MouseOveru20, true);
function MouseOveru20(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u20',e)) return;
if (true) {

	SetPanelState('u37', 'pd1u37','swing','up',500,'swing','down',500);

}

}

if (bIE) u20.attachEvent("onmouseout", MouseOutu20);
else u20.addEventListener("mouseout", MouseOutu20, true);
function MouseOutu20(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u20',e)) return;
if (true) {

	SetPanelState('u37', 'pd0u37','swing','up',500,'swing','down',500);

}

}

var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u5 = document.getElementById('u5');

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{
windowEvent = e;


if (true) {

	self.location.href="Mail.html" + GetQuerystring();

}

}

if (bIE) u22.attachEvent("onmouseover", MouseOveru22);
else u22.addEventListener("mouseover", MouseOveru22, true);
function MouseOveru22(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u22',e)) return;
if (true) {

	SetPanelState('u28', 'pd1u28','swing','up',500,'swing','down',500);

}

}

if (bIE) u22.attachEvent("onmouseout", MouseOutu22);
else u22.addEventListener("mouseout", MouseOutu22, true);
function MouseOutu22(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u22',e)) return;
if (true) {

	SetPanelState('u28', 'pd0u28','swing','up',500,'swing','down',500);

}

}

var u49 = document.getElementById('u49');

var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u37 = document.getElementById('u37');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u46 = document.getElementById('u46');

var u33 = document.getElementById('u33');

var u31 = document.getElementById('u31');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u0 = document.getElementById('u0');

if (window.OnLoad) OnLoad();
