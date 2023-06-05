function addStyle(){
	
	var para =document.getElementById('demo');
	para.classList.add('active');
}

function removeStyle(){
	
	var para =document.getElementById('demo');
	para.classList.remove('active');
}

function toggleStyle(){
	
	var para =document.getElementById('demo');
	para.classList.toggle('active');
}