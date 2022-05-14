
function convertir_images(element){
		let img = element.files[0];
	// console.log(img)
	if(img!=undefined){
		let canvas = document.createElement("canvas");
		canvas.id = "canvas_243";
		
		canvas.style.display = "none";
		document.body.appendChild(canvas);
		let balise_img = document.createElement("img");
		balise_img.id = "img_243";
		balise_img.style.width = "100%";
		balise_img.style.height = "100%";
		balise_img.style.display = "none";

		balise_img.src = window.URL.createObjectURL(img)
		document.body.appendChild(balise_img);
		let image = document.querySelector("#img_243");

		setTimeout(function(){
			canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
			document.body.appendChild(canvas);
			let data = canvas.toDataURL('image/png');
			let a = document.createElement("a");
			a.textContent = "telecharger";
			a.id = "images_finale243";
			a.download = "converti";
			a.href = data;
			document.querySelector("#result").appendChild(a);
		}, 500);
		
	}
}



let btn_converter = document.querySelector("#start_convert");
btn_converter.addEventListener("click", function(e){
	e.preventDefault();
	convertir_images(document.querySelector("#file"));

})