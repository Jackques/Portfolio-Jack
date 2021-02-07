
var PageName = 'Home';
var PageId = 'fb46ad8d03ae4fca84031ead2a1e4212'
var PageUrl = 'Home.html'
document.title = 'Home';
var PageNotes = 
{
"pageName":"Home",
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
  value = value.replace(/\[\[GenDay\]\]/g, '24');
  value = value.replace(/\[\[GenMonth\]\]/g, '2');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'februari');
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

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u28 = document.getElementById('u28');

u28.style.cursor = 'pointer';
if (bIE) u28.attachEvent("onclick", Clicku28);
else u28.addEventListener("click", Clicku28, true);
function Clicku28(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

	BringToFront("u13");

}

}

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'center';
var u8 = document.getElementById('u8');

u8.style.cursor = 'pointer';
if (bIE) u8.attachEvent("onclick", Clicku8);
else u8.addEventListener("click", Clicku8, true);
function Clicku8(e)
{
windowEvent = e;


if (true) {

	self.location.href="Mail.html" + GetQuerystring();

}

}

var u30 = document.getElementById('u30');

u30.style.cursor = 'pointer';
if (bIE) u30.attachEvent("onclick", Clicku30);
else u30.addEventListener("click", Clicku30, true);
function Clicku30(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

	BringToFront("u13");

}

}

var u6 = document.getElementById('u6');

u6.style.cursor = 'pointer';
if (bIE) u6.attachEvent("onclick", Clicku6);
else u6.addEventListener("click", Clicku6, true);
function Clicku6(e)
{
windowEvent = e;


if (true) {

	self.location.href="courses.html" + GetQuerystring();

}

}

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'center';
var u32 = document.getElementById('u32');

u32.style.cursor = 'pointer';
if (bIE) u32.attachEvent("onclick", Clicku32);
else u32.addEventListener("click", Clicku32, true);
function Clicku32(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

	BringToFront("u13");

}

}

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'center';
var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u13 = document.getElementById('u13');

var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u44 = document.getElementById('u44');

u44.style.cursor = 'pointer';
if (bIE) u44.attachEvent("onclick", Clicku44);
else u44.addEventListener("click", Clicku44, true);
function Clicku44(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u39', 'pd3u39','fade','',500,'fade','',500);

}

}

var u4 = document.getElementById('u4');

u4.style.cursor = 'pointer';
if (bIE) u4.attachEvent("onclick", Clicku4);
else u4.addEventListener("click", Clicku4, true);
function Clicku4(e)
{
windowEvent = e;


if (true) {

	self.location.href="profiel.html" + GetQuerystring();

}

}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u26 = document.getElementById('u26');

u26.style.cursor = 'pointer';
if (bIE) u26.attachEvent("onclick", Clicku26);
else u26.addEventListener("click", Clicku26, true);
function Clicku26(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd3u13','none','',500,'none','',500);

	BringToFront("u13");

}

}

var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'center';
var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'center';
var u38 = document.getElementById('u38');

var u12 = document.getElementById('u12');

var u39 = document.getElementById('u39');

var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'center';
var u40 = document.getElementById('u40');

u40.style.cursor = 'pointer';
if (bIE) u40.attachEvent("onclick", Clicku40);
else u40.addEventListener("click", Clicku40, true);
function Clicku40(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u39', 'pd2u39','fade','',500,'fade','',500);

}

}

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'center';
var u42 = document.getElementById('u42');

var u20 = document.getElementById('u20');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'center';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'center';
var u53 = document.getElementById('u53');
gv_vAlignTable['u53'] = 'center';
var u54 = document.getElementById('u54');

var u2 = document.getElementById('u2');

u2.style.cursor = 'pointer';
if (bIE) u2.attachEvent("onclick", Clicku2);
else u2.addEventListener("click", Clicku2, true);
function Clicku2(e)
{
windowEvent = e;


if (true) {

	self.location.href="resources/reload.html#" + encodeURI(PageUrl + GetQuerystring());

}

}

var u18 = document.getElementById('u18');

u18.style.cursor = 'pointer';
if (bIE) u18.attachEvent("onclick", Clicku18);
else u18.addEventListener("click", Clicku18, true);
function Clicku18(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd4u13','none','',500,'none','',500);

}

}

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u10 = document.getElementById('u10');

u10.style.cursor = 'pointer';
if (bIE) u10.attachEvent("onclick", Clicku10);
else u10.addEventListener("click", Clicku10, true);
function Clicku10(e)
{
windowEvent = e;


if (true) {

	self.location.href="documenten.html" + GetQuerystring();

}

}

var u36 = document.getElementById('u36');

u36.style.cursor = 'pointer';
if (bIE) u36.attachEvent("onclick", Clicku36);
else u36.addEventListener("click", Clicku36, true);
function Clicku36(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd1u13','none','',500,'none','',500);

	BringToFront("u13");

}

}

var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'center';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u48 = document.getElementById('u48');

var u22 = document.getElementById('u22');

u22.style.cursor = 'pointer';
if (bIE) u22.attachEvent("onclick", Clicku22);
else u22.addEventListener("click", Clicku22, true);
function Clicku22(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd0u13','none','',500,'none','',500);

}

}

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u50 = document.getElementById('u50');

u50.style.cursor = 'pointer';
if (bIE) u50.attachEvent("onclick", Clicku50);
else u50.addEventListener("click", Clicku50, true);
function Clicku50(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u39', 'pd2u39','fade','',500,'fade','',500);

}

}

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u39', 'pd1u39','none','',500,'none','',500);

	BringToFront("u39");

}

}

var u46 = document.getElementById('u46');

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'center';
var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'center';
var u34 = document.getElementById('u34');

u34.style.cursor = 'pointer';
if (bIE) u34.attachEvent("onclick", Clicku34);
else u34.addEventListener("click", Clicku34, true);
function Clicku34(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u13', 'pd2u13','none','',500,'none','',500);

	BringToFront("u13");

}

}

var u0 = document.getElementById('u0');

if (window.OnLoad) OnLoad();
