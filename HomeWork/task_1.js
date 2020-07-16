var str = 'hello';
str = str[0].toUpperCase() + str.substr(1);
alert("Напиши hello с заглавной буквы: "+ str);

var str = 'hello';
str = str.split('');
str[0] = str[0].toUpperCase();
var result = str.join('');
alert("Напиши hello с заглавной буквы: "+ result);
