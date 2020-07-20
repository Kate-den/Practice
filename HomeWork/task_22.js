//Выведите на экран текущие день, месяц и год в формате 'год-месяц-день'.
var date = new Date();
alert('Сегодня ' + date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate());