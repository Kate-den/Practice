var str = 'index.html';
alert("Проверьте, что строка http://index.html заканчивается на .html");
if (str.substr(-5) == '.html') {
	alert('Да');
} else {
	alert('Нет');
}