function arrayFill(value, length) { 
	var arr = [];
	for (var i = 0; i < length; i++) {
		arr.push(value);
	}
	return arr;
}

alert("Запишите подряд 4 буквы a: "+ arrayFill('a', 4));