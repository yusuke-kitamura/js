var max = 100;
var num = 1;
var count = 0;

while(num < max){
	num = num * 2;
	count = count + 1;
}

alert('2をかけ続けて' + max + 'を超えるのに必要な回数は' + count + '回です')