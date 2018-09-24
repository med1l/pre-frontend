function goToPage()
{
	document.location.href = "index.html";
}
function style () {
	var flag = true;
	document.getElementById("submit").onclick = function () {
		if (flag == true) {
			document.getElementsByTagName('div')[0].style.backgroundColor = 'red';
			flag = false;
		}
		else {
        document.getElementsByTagName('div')[0].style.backgroundColor = 'green';
        flag = true;
    }
	
}