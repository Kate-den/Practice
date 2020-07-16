var num =prompt("Сумма цифр в числе: ");

function toNine (arr) {
    var sum1 = 0;
    for(var i = 0; i < arr.length; i++){
        sum1 += +arr[i];
    }
    if (sum1 > 9){
        toNine(sum1+'');
    }else{
        alert(sum1);
    }
}
toNine(num);
