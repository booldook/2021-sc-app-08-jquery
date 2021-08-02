var foods = [
	{ name: 'Popcicle', src: '../img/f1.jpg' },
	{ name: 'Salmon', src: '../img/f2.jpg' },
	{ name: 'Sandwitch', src: '../img/f3.jpg' },
	{ name: 'Steak', src: '../img/f4.jpg' },
	{ name: 'Wine', src: '../img/f5.jpg' },
	{ name: 'Cherry', src: '../img/f6.jpg' },
	{ name: 'Croissant', src: '../img/f7.jpg' }
];

// console.log( document.querySelector('.list-wrap') );	// 객체(처음 만나는 el)
// console.log( document.querySelectorAll('.list-wrap') );	// 배열(모든 el)

for(var i=0, html; i<foods.length; i++) {
	html  = '<li class="list">';
	html += '<img src="'+foods[i].src+'" class="w100 thumb" alt="'+foods[i].name+'">';
	html += '</li>';
	document.querySelector('.list-wrap').innerHTML += html;
}

console.log( document.querySelectorAll('.list-wrap .list') );