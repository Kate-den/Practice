var str = 'http://index.html';
alert("Проверьте, что строка http://index.html начинается на http://");
if (str.substr(0, 7) == 'http://') {
	alert('Да');
} else {
	alert('Нет');
}