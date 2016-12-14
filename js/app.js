document.addEventListener('DOMContentLoaded',() => {
	const keyCode = "a2k";
	const arr = [];
	document.addEventListener('keyup',(e) => {
		arr.push(e.key);
		arr.splice(-keyCode.length-1,arr.length - keyCode.length);
		if(keyCode === arr.join("").toLowerCase())
			cornify_add();
	});
});
