/* 
$('.bt-on').on('click', function(){ 
	console.log('ON');
});

for(var i=0; i<document.getElementsByClassName('bt-on').length; i++) {
	document.getElementsByClassName('bt-on')[i].addEventListener('click', function() {
		console.log('ON');
	})
}

for(var i=0; i<document.querySelectorAll('.bt-on').length; i++) {
	document.querySelectorAll('.bt-on')[i].addEventListener('click', function() {
		console.log('ON');
	})
}
*/



/*
ES5/ES6/jQuery 선택자
document.getElementById('idName') -> html
document.getElementsByClassName('className') -> Array[html, html]
document.getElementsByTagName('tagName') -> Array[html, html]
document.querySelector('.w100') -> html
document.querySelectorAll('.w100') -> Array[html, html]
$('.w100') -> jQuery

document.getElementById('a').getElementsByTagName('ul')[0].getElementsByTagName('li')[1].innerHTML;
$('#a li:nth-child(2)')[0].innerHTML;
document.querySelectorAll('#a li')[1].innerHTML;
*/


