
var PageName = 'Portfolio';
var PageId = '399e261914594a6c8484a6763ce5e6bb'
var PageUrl = 'Portfolio.html'
document.title = 'Portfolio';
var PageNotes = 
{
"pageName":"Portfolio",
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
gv_vAlignTable['u122'] = 'top';
var u127 = document.getElementById('u127');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'top';
var u156 = document.getElementById('u156');
gv_vAlignTable['u156'] = 'center';
var u45 = document.getElementById('u45');
gv_vAlignTable['u45'] = 'top';
var u79 = document.getElementById('u79');

var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{
windowEvent = e;


if (true) {

	self.location.href="Xplora.html" + GetQuerystring();

}

}

if (bIE) u161.attachEvent("onmouseover", MouseOveru161);
else u161.addEventListener("mouseover", MouseOveru161, true);
function MouseOveru161(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u161',e)) return;
if (true) {

	SetPanelState('u154', 'pd1u154','swing','up',500,'swing','down',500);

}

}

if (bIE) u161.attachEvent("onmouseout", MouseOutu161);
else u161.addEventListener("mouseout", MouseOutu161, true);
function MouseOutu161(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u161',e)) return;
if (true) {

	SetPanelState('u154', 'pd0u154','swing','up',500,'none','',500);

}

}

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

var u17 = document.getElementById('u17');

var u135 = document.getElementById('u135');
gv_vAlignTable['u135'] = 'top';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'top';
var u159 = document.getElementById('u159');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'top';
var u55 = document.getElementById('u55');
gv_vAlignTable['u55'] = 'center';
var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u14 = document.getElementById('u14');

var u5 = document.getElementById('u5');

var u105 = document.getElementById('u105');
gv_vAlignTable['u105'] = 'top';
var u27 = document.getElementById('u27');

var u138 = document.getElementById('u138');

var u52 = document.getElementById('u52');

u52.style.cursor = 'pointer';
if (bIE) u52.attachEvent("onclick", Clicku52);
else u52.addEventListener("click", Clicku52, true);
function Clicku52(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u68', 'pd1u68','none','',500,'fade','',500);

}

}

var u192 = document.getElementById('u192');

var u181 = document.getElementById('u181');

var u65 = document.getElementById('u65');
gv_vAlignTable['u65'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'top';
var u2 = document.getElementById('u2');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'top';
var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'top';
var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'top';
var u37 = document.getElementById('u37');
gv_vAlignTable['u37'] = 'center';
var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'top';
var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'top';
var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'top';
var u75 = document.getElementById('u75');
gv_vAlignTable['u75'] = 'top';
var u133 = document.getElementById('u133');
gv_vAlignTable['u133'] = 'center';
var u88 = document.getElementById('u88');

var u7 = document.getElementById('u7');

var u176 = document.getElementById('u176');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'center';
var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u103 = document.getElementById('u103');
gv_vAlignTable['u103'] = 'top';
var u154 = document.getElementById('u154');

var u31 = document.getElementById('u31');
gv_vAlignTable['u31'] = 'top';
var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u146 = document.getElementById('u146');

var u187 = document.getElementById('u187');

var u94 = document.getElementById('u94');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'top';
var u78 = document.getElementById('u78');

var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'center';
var u57 = document.getElementById('u57');
gv_vAlignTable['u57'] = 'center';
var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u8 = document.getElementById('u8');

var u16 = document.getElementById('u16');
gv_vAlignTable['u16'] = 'center';
var u125 = document.getElementById('u125');

var u151 = document.getElementById('u151');
gv_vAlignTable['u151'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u41 = document.getElementById('u41');
gv_vAlignTable['u41'] = 'top';
var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u119 = document.getElementById('u119');
gv_vAlignTable['u119'] = 'top';
var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'top';
var u54 = document.getElementById('u54');

var u195 = document.getElementById('u195');
gv_vAlignTable['u195'] = 'center';
var u131 = document.getElementById('u131');
gv_vAlignTable['u131'] = 'top';
var u173 = document.getElementById('u173');
gv_vAlignTable['u173'] = 'center';
var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'top';
var u174 = document.getElementById('u174');

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u85 = document.getElementById('u85');
gv_vAlignTable['u85'] = 'top';
var u99 = document.getElementById('u99');
gv_vAlignTable['u99'] = 'top';
var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'center';
var u77 = document.getElementById('u77');

var u144 = document.getElementById('u144');

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u36 = document.getElementById('u36');

var u101 = document.getElementById('u101');
gv_vAlignTable['u101'] = 'top';
var u95 = document.getElementById('u95');

var u61 = document.getElementById('u61');
gv_vAlignTable['u61'] = 'top';
var u143 = document.getElementById('u143');

var u180 = document.getElementById('u180');

var u74 = document.getElementById('u74');

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'top';
var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u163 = document.getElementById('u163');

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{
windowEvent = e;


if (true) {

	self.location.href="Documenten.html" + GetQuerystring();

}

}

if (bIE) u163.attachEvent("onmouseover", MouseOveru163);
else u163.addEventListener("mouseover", MouseOveru163, true);
function MouseOveru163(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u163',e)) return;
if (true) {

	SetPanelState('u180', 'pd1u180','swing','up',500,'swing','down',500);

}

}

if (bIE) u163.attachEvent("onmouseout", MouseOutu163);
else u163.addEventListener("mouseout", MouseOutu163, true);
function MouseOutu163(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u163',e)) return;
if (true) {

	SetPanelState('u180', 'pd0u180','swing','up',500,'swing','down',500);

}

}

var u33 = document.getElementById('u33');
gv_vAlignTable['u33'] = 'top';
var u157 = document.getElementById('u157');

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'top';
var u92 = document.getElementById('u92');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'top';
var u34 = document.getElementById('u34');

var u71 = document.getElementById('u71');

u71.style.cursor = 'pointer';
if (bIE) u71.attachEvent("onclick", Clicku71);
else u71.addEventListener("click", Clicku71, true);
function Clicku71(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u68', 'pd0u68','fade','',500,'none','',500);

}

}

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u136 = document.getElementById('u136');
gv_vAlignTable['u136'] = 'top';
var u43 = document.getElementById('u43');
gv_vAlignTable['u43'] = 'top';
var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'center';
var u169 = document.getElementById('u169');

u169.style.cursor = 'pointer';
if (bIE) u169.attachEvent("onclick", Clicku169);
else u169.addEventListener("click", Clicku169, true);
function Clicku169(e)
{
windowEvent = e;


if (true) {

	self.location.href="Home.html" + GetQuerystring();

}

}

var u56 = document.getElementById('u56');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'top';
var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u68', 'pd0u68','fade','',500,'none','',500);

}

}

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'top';
var u53 = document.getElementById('u53');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u87 = document.getElementById('u87');
gv_vAlignTable['u87'] = 'top';
var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'top';
var u109 = document.getElementById('u109');
gv_vAlignTable['u109'] = 'top';
var u121 = document.getElementById('u121');
gv_vAlignTable['u121'] = 'top';
var u67 = document.getElementById('u67');
gv_vAlignTable['u67'] = 'top';
var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'top';
var u155 = document.getElementById('u155');

var u9 = document.getElementById('u9');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u50 = document.getElementById('u50');

var u171 = document.getElementById('u171');

var u97 = document.getElementById('u97');

u97.style.cursor = 'pointer';
if (bIE) u97.attachEvent("onclick", Clicku97);
else u97.addEventListener("click", Clicku97, true);
function Clicku97(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u68', 'pd0u68','none','',500,'none','',500);

}

}

var u63 = document.getElementById('u63');
gv_vAlignTable['u63'] = 'top';
var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'center';
var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'top';
var u134 = document.getElementById('u134');

var u172 = document.getElementById('u172');

var u81 = document.getElementById('u81');

var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'center';
var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'top';
var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'top';
var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'top';
var u185 = document.getElementById('u185');

var u73 = document.getElementById('u73');
gv_vAlignTable['u73'] = 'top';
var u113 = document.getElementById('u113');
gv_vAlignTable['u113'] = 'top';
var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u167 = document.getElementById('u167');

u167.style.cursor = 'pointer';
if (bIE) u167.attachEvent("onclick", Clicku167);
else u167.addEventListener("click", Clicku167, true);
function Clicku167(e)
{
windowEvent = e;


if (true) {

	self.location.href="Courses.html" + GetQuerystring();

}

}

if (bIE) u167.attachEvent("onmouseover", MouseOveru167);
else u167.addEventListener("mouseover", MouseOveru167, true);
function MouseOveru167(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u167',e)) return;
if (true) {

	SetPanelState('u189', 'pd1u189','swing','up',500,'swing','down',500);

}

}

if (bIE) u167.attachEvent("onmouseout", MouseOutu167);
else u167.addEventListener("mouseout", MouseOutu167, true);
function MouseOutu167(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u167',e)) return;
if (true) {

	SetPanelState('u189', 'pd0u189','swing','up',500,'swing','down',500);

}

}

var u91 = document.getElementById('u91');
gv_vAlignTable['u91'] = 'center';
var u19 = document.getElementById('u19');

var u194 = document.getElementById('u194');

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u140 = document.getElementById('u140');

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u117 = document.getElementById('u117');
gv_vAlignTable['u117'] = 'top';
var u190 = document.getElementById('u190');

var u89 = document.getElementById('u89');
gv_vAlignTable['u89'] = 'center';
var u68 = document.getElementById('u68');

var u29 = document.getElementById('u29');
gv_vAlignTable['u29'] = 'top';
var u152 = document.getElementById('u152');

u152.style.cursor = 'pointer';
if (bIE) u152.attachEvent("onclick", Clicku152);
else u152.addEventListener("click", Clicku152, true);
function Clicku152(e)
{
windowEvent = e;


if (true) {

	self.location.href="Profiel.html" + GetQuerystring();

}

}

if (bIE) u152.attachEvent("onmouseover", MouseOveru152);
else u152.addEventListener("mouseover", MouseOveru152, true);
function MouseOveru152(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u152',e)) return;
if (true) {

	SetPanelState('u143', 'pd1u143','swing','up',500,'swing','down',500);

}

}

if (bIE) u152.attachEvent("onmouseout", MouseOutu152);
else u152.addEventListener("mouseout", MouseOutu152, true);
function MouseOutu152(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u152',e)) return;
if (true) {

	SetPanelState('u143', 'pd0u143','swing','up',500,'swing','down',500);

}

}

var u141 = document.getElementById('u141');
gv_vAlignTable['u141'] = 'top';
var u175 = document.getElementById('u175');
gv_vAlignTable['u175'] = 'center';
var u150 = document.getElementById('u150');

var u129 = document.getElementById('u129');

u129.style.cursor = 'pointer';
if (bIE) u129.attachEvent("onclick", Clicku129);
else u129.addEventListener("click", Clicku129, true);
function Clicku129(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u68', 'pd0u68','fade','',500,'none','',500);

}

}

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'top';
var u183 = document.getElementById('u183');

var u11 = document.getElementById('u11');

var u39 = document.getElementById('u39');
gv_vAlignTable['u39'] = 'top';
var u111 = document.getElementById('u111');
gv_vAlignTable['u111'] = 'top';
var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'top';
var u0 = document.getElementById('u0');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'center';
var u153 = document.getElementById('u153');
gv_vAlignTable['u153'] = 'center';
var u25 = document.getElementById('u25');
gv_vAlignTable['u25'] = 'top';
var u83 = document.getElementById('u83');

var u178 = document.getElementById('u178');

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u15 = document.getElementById('u15');

var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'center';
var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'top';
var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u148 = document.getElementById('u148');

var u93 = document.getElementById('u93');
gv_vAlignTable['u93'] = 'center';
var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u165 = document.getElementById('u165');

u165.style.cursor = 'pointer';
if (bIE) u165.attachEvent("onclick", Clicku165);
else u165.addEventListener("click", Clicku165, true);
function Clicku165(e)
{
windowEvent = e;


if (true) {

	self.location.href="Mail.html" + GetQuerystring();

}

}

if (bIE) u165.attachEvent("onmouseover", MouseOveru165);
else u165.addEventListener("mouseover", MouseOveru165, true);
function MouseOveru165(e)
{
windowEvent = e;

if (!IsTrueMouseOver('u165',e)) return;
if (true) {

	SetPanelState('u171', 'pd1u171','swing','up',500,'swing','down',500);

}

}

if (bIE) u165.attachEvent("onmouseout", MouseOutu165);
else u165.addEventListener("mouseout", MouseOutu165, true);
function MouseOutu165(e)
{
windowEvent = e;

if (!IsTrueMouseOut('u165',e)) return;
if (true) {

	SetPanelState('u171', 'pd0u171','swing','up',500,'swing','down',500);

}

}

var u12 = document.getElementById('u12');

var u115 = document.getElementById('u115');
gv_vAlignTable['u115'] = 'top';
var u59 = document.getElementById('u59');
gv_vAlignTable['u59'] = 'top';
var u168 = document.getElementById('u168');
gv_vAlignTable['u168'] = 'center';
var u137 = document.getElementById('u137');

var u90 = document.getElementById('u90');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'center';
var u158 = document.getElementById('u158');
gv_vAlignTable['u158'] = 'center';
var u100 = document.getElementById('u100');

var u123 = document.getElementById('u123');
gv_vAlignTable['u123'] = 'top';
var u48 = document.getElementById('u48');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'top';
var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u107 = document.getElementById('u107');
gv_vAlignTable['u107'] = 'top';
var u189 = document.getElementById('u189');

var u35 = document.getElementById('u35');
gv_vAlignTable['u35'] = 'center';
var u69 = document.getElementById('u69');

var u166 = document.getElementById('u166');
gv_vAlignTable['u166'] = 'center';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u132 = document.getElementById('u132');

if (window.OnLoad) OnLoad();
