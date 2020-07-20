alert("Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл:");
function func(arr) {
	alert(arr[0]);
	arr.splice(0, 1);
	if (arr.length > 0) {
		func(arr);
	}
}
alert(func(arr));