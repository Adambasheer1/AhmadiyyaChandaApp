
function getSelectedChanda() {

	var selectedChanda = document.getElementById("chanda").value;
	return selectedChanda;

}


function GetChandaValue() {

	let getIncome_value = document.getElementById("Income").value;

	if (getIncome_value <= '0' || getIncome_value == 'null' || getIncome_value == 'undefined' || getIncome_value == 'string') {
		var display = 'Invalid income!';
		document.getElementById("finaloutput").value = display;

	}

	else {
		if (getSelectedChanda() == "Chanda Aam") {
			let result = (1 / 16 * getIncome_value);
			result = "GH₵ " + result.toFixed(2);
			document.getElementById("finaloutput").value = result;

		}

		else if (getSelectedChanda() == "Jalsa Salana") {
			result = (1 / 120 * getIncome_value);
			result = "GH₵ " + result.toFixed(2);
			document.getElementById("finaloutput").value = result;

		}

		else if (getSelectedChanda() == "Wassiyat") {
			result = (1 / 10 * getIncome_value);
			result = "GH₵ " + result.toFixed(2);
			document.getElementById("finaloutput").value = result;

		}

	}

}

