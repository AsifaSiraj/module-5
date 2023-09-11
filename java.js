

$(function (){
$("nav-link").blur(function(event){
var screenWidth = window.innerWidth;
if (screenWidth < 768){
  $("nav-link").collapse('hide');
}
});
});