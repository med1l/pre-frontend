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