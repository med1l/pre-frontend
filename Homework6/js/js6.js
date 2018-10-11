function goToPage()
{
	document.location.href = "index.html";
}
function style () {
	document.body.style.background = 'none';
	document.getElementsByTagName('div')[0].style.backgroundColor = 'red';
	document.getElementsByTagName('div')[0].style.border = '5px solid black';
	document.getElementById('content').style.borderRadius = '50%';
	document.getElementsByTagName('a')[1].style.fontSize = '40px';
	document.getElementsByTagName('a')[1].style.color = 'black';
	document.getElementsByTagName('a')[0].style.fontSize = '15px';
	document.getElementsByTagName('a')[0].style.color = 'black';
}
function clearBox()
{
    document.getElementsByTagName("div")[0].innerHTML = '';
    document.getElementsByTagName("div")[0].innerHTML += '<div id="box1"> \
                                							<div id="box2"> \
                                    							<div id="box3"> \
                                    							 <a href="homework5.html">BACk</a>\
                                    							</div> \
                                							</div> \
                            							</div>';
}
function toggleSidebar(ref) {
	ref.classList.toggle('active');
	document.getElementById('sidebar').classList.toggle('active');
}
function validateForm() {
    var x = document.forms["forma"]["User"].value;
    var User = document.querySelector("input[name=User]");
    var Pass = document.querySelector("input[name=Pass]");
    if (x == "") {
    	User.setAttribute('disabled', true);
    	Pass.setAttribute('disabled', true);
        return false;
    }
} 

    	// alert("FAIL");
    	// document.getElementById('userIn').setAttribute('disabled', 'disabled');