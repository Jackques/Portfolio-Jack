
var PageName = 'Nieuwe course 4.3';
var PageId = '47d0d50aef3b4628b1d43ef67b415ba1'
var PageUrl = 'Nieuwe_course_4.3.html'
document.title = 'Nieuwe course 4.3';
var PageNotes = 
{
"pageName":"Nieuwe course 4.3",
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
gv_vAlignTable['u45'] = 'top';
var u27 = document.getElementById('u27');

var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'top';
var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u29 = document.getElementById('u29');

var u8 = document.getElementById('u8');

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u6 = document.getElementById('u6');
gv_vAlignTable['u6'] = 'center';
var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u51 = document.getElementById('u51');
gv_vAlignTable['u51'] = 'top';
var u35 = document.getElementById('u35');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'center';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'top';
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

SetWidgetFormText('u4', 'Zoek iets');

}

}

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u10 = document.getElementById('u10');
gv_vAlignTable['u10'] = 'center';
var u39 = document.getElementById('u39');

var u11 = document.getElementById('u11');

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u12 = document.getElementById('u12');

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u9 = document.getElementById('u9');

var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u7 = document.getElementById('u7');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'center';
var u23 = document.getElementById('u23');

var u24 = document.getElementById('u24');
gv_vAlignTable['u24'] = 'center';
var u25 = document.getElementById('u25');

var u47 = document.getElementById('u47');
gv_vAlignTable['u47'] = 'top';
var u2 = document.getElementById('u2');

var u18 = document.getElementById('u18');
gv_vAlignTable['u18'] = 'top';
var u19 = document.getElementById('u19');

var u20 = document.getElementById('u20');
gv_vAlignTable['u20'] = 'center';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u5 = document.getElementById('u5');

var u48 = document.getElementById('u48');

var u22 = document.getElementById('u22');
gv_vAlignTable['u22'] = 'center';
var u49 = document.getElementById('u49');
gv_vAlignTable['u49'] = 'top';
var u50 = document.getElementById('u50');

var u37 = document.getElementById('u37');

var u21 = document.getElementById('u21');

var u52 = document.getElementById('u52');

var u46 = document.getElementById('u46');

var u53 = document.getElementById('u53');

var u33 = document.getElementById('u33');

var u31 = document.getElementById('u31');

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u0 = document.getElementById('u0');

if (window.OnLoad) OnLoad();
