var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();
var date = month + '-' + day + '-' + year;
console.log(date);
$(function(){
	$('#dp1').fdatepicker({
		initialDate: date,
		format: 'mm-dd-yyyy',
		disableDblClickSelection: true
	});
});
