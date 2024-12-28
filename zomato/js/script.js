let a = document.querySelectorAll('.loc1');
for(i = 0;i < a.length ; i++){
	a[i].style.display = 'none';
}
function show(){
	let a = document.querySelectorAll('.loc1');
	for(i = 0;i < a.length ; i++){
	a[i].style.display = 'block';
	}
	document.getElementById('show').style.display = 'none';
}
function less(){
	let a = document.querySelectorAll('.loc1');
	for(i = 0;i < a.length ; i++){
	a[i].style.display = 'none';
	}
	document.getElementById('show').style.display = 'block';
}

$('.e-mail').click(function abc(){
	$('#box').show('slow');
	$('#tel').hide('slow')
});

$('.phone-no').click(function abc(){
	$('#tel').toggle('slow');
	$('#box').hide('slow');
});

$('.ee1').click(function abc(){
	$('.explore-list1').toggle('100');
});

$('.ee2').click(function abc(){
	$('.explore-list2').toggle('100');
});

$('.ee3').click(function abc(){
	$('.explore-list3').toggle('100');
});

$('.ee4').click(function abc(){
	$('.explore-list4').toggle('100');
});

// function hide(){
// 	document.querySelector('#box').style.display = "block";
// }
