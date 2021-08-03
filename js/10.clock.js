var d = new Date(); // 객체의 Instance
var month = ['1월', '2월'];
console.log(d);
console.log(d.__proto__);
console.log(d.getFullYear());	// 2021
console.log(d.getMonth());		// 0 ~ 11
console.log(d.getDate());			// 3
console.log(d.getDay());			// 0(Sunday) ~ 6
console.log(d.getHours());		// 24시간제(0 ~ 23)
console.log(d.getMinutes());	// 0 ~ 59
console.log(d.getSeconds());	// 0 ~ 59

var nowDate = d.getFullYear() + '-' + zp(d.getMonth() + 1) + '-' + zp(d.getDate()) + ' ' + zp(d.getHours()) + ':' + zp(d.getMinutes()) + ':' + zp(d.getSeconds()); 
console.log(nowDate); // ISO 시간표기


