for(var i = 1; i <= 20; i++){
    console.log(i);
    if(i > 5){
        break;
    }
}
var items = ['bottle', 'mouse', 'sunglass', 'pen', 'phone', 'bag' ];
for(var i =0; i < items.length; i++){
    var item = items[i];
    if(item == 'phone'){
        break;
    }
    console.log(item);
}
var numbers = [45, 87, 89, 56, 89, 56, 32, 51, 25, 25, 98, 100, 906];
 for (var i = 0; i < numbers.length; i++){
     var number = numbers[i];
     if(number > 100){
        break;
     }
    console.log(number);
}