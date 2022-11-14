
let date = 3, month = 11, year = 2022;
console.log("Date : " + date + "/" + month + "/" + year);

if (month<3 || month>6) 
	console.log("False"); 
else if((date<20 && month==3) || (date>20 && month==6)) 
	console.log("False");
else
    console.log("True");