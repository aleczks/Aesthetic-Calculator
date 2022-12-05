let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let calculateBtn = document.getElementById("calculateBtn");
let printResult = document.getElementById("printResult");

let OP = document.querySelector('#calc')

calculateBtn.addEventListener("click", () => {
	if (isNaN(num1.value) && isNaN(num2.value)) {
		results.push("Error, faulty characters");
	} else {
		var a = Number(num1.value);
		var b = Number(num2.value);
		var result= eval(a + OP.value + b);
	}
	printResult.insertAdjacentHTML("afterbegin", "<li>" + result  + "</li>");
});