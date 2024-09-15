function up() {
    const all = parseFloat(document.getElementById("allzalog").value);
    const local = parseFloat(document.getElementById("localzalog").value);
    const sum = parseFloat(document.getElementById("Sum").value);

    const operation = (local / all) * 100;
    const calculate = (sum / all) * 2;

    if ((operation >=83.33) && (operation<=100)) {
        document.getElementById("ResultItog").textContent = "Покупатель подходит для повышенной выдачи,  процент выкупа равняется "+operation.toFixed(2)+"%";
        document.getElementById("ResultSum").textContent = "Максимальная сумма для займа по повышеной выдаче: " + calculate.toFixed(2);
    } else if(operation >100){        
	document.getElementById("ResultItog").textContent = "Общее число залогов не может превышать число выкупленых залогов";
        document.getElementById("ResultSum").textContent = "";}
	
	else {
        document.getElementById("ResultItog").textContent = "Покупатель не подходит для повышенной выдачи";
        document.getElementById("ResultSum").textContent = "";
    }
}