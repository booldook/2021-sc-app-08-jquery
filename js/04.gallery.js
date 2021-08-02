var products = [
	{
		name: 'Good Product1',
		src: '../img/p1.jpg',
		price: 12.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product2',
		src: '../img/p2.jpg',
		price: 13.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product3',
		src: '../img/p3.jpg',
		price: 13.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product4',
		src: '../img/p4.jpg',
		price: 14.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product5',
		src: '../img/p5.jpg',
		price: 15.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product6',
		src: '../img/p6.jpg',
		price: 16.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product7',
		src: '../img/p7.jpg',
		price: 17.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product8',
		src: '../img/p8.jpg',
		price: 18.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product9',
		src: '../img/p9.jpg',
		price: 19.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product10',
		src: '../img/p10.jpg',
		price: 120.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product11',
		src: '../img/p11.jpg',
		price: 121.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, {
		name: 'Good Product12',
		src: '../img/p12.jpg',
		price: 122.99,
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur accusantium, eum earum mollitia neque, vel est itaque placeat laborum distinctio ex ab expedita sapiente ea unde atque, nesciunt sed praesentium!',
	}, 
];


// console.log( products );
// console.log( products[1] );
// console.log( products[1].name );
// console.log( products[1].src );
// console.log( products[1].price );

// JAVA - Jackson/Gson
var json = JSON.stringify(products); // js Object -> json
var jsObj = JSON.parse(json); // json -> js Object
// console.log( json );
// console.log( jsObj );

(function init() {
	var cnt = products.length; // 12
	var html = '';
	var wrap = document.getElementsByClassName('prd-wrap')[0];
	for(var i=0; i<cnt; i++) {
		html  = '<li class="prd">';
		html += '<div class="imgs">';
		html += '<img src="'+products[i].src+'" class="w100" onclick="openModal('+i+');">';
		html += '</div>';
		html += '<div class="conts">';
		html += '<h2 class="name">'+products[i].name+'</h2>';
		html += '<p class="content">'+products[i].content+'</p>';
		html += '<div class="price">$'+products[i].price+'</div>';
		html += '</div>';
		html += '</li>';
		// console.log(html);
		wrap.innerHTML += html;
	}
})(); // IIFE(즉시실행함수)

function openModal(id) {
	// 1. 모달창을 연다.
	// 2. 이미지를 바꿔준다.
	var modal = document.getElementsByClassName('modal-wrapper')[0];
	var img = modal.getElementsByTagName('img')[0];
	img.src = products[id].src;
	modal.style.display = 'flex';
}

function closeModal() {
	// .bt-close를 클릭하면 모달창을 닫는다.
	var modal = document.getElementsByClassName('modal-wrapper')[0];
	modal.style.display = 'none';
}