///Loading Process
(function(){
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let i = 0;
	let loadingArc = setInterval(function(){
		i+= 0.1;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		ctx.beginPath();
		ctx.arc(60,60,40,0,Math.PI*2);
		ctx.fillStyle = '#fc5000';
		ctx.fill();
		ctx.closePath();

		ctx.beginPath();
		ctx.arc(60,60,50,0,Math.PI*i);
		ctx.strokeStyle = '#fc5000';
		ctx.lineWidth = 10;
		ctx.stroke();
		ctx.closePath();

		ctx.beginPath();
		ctx.font = "bold 20px arial";
		ctx.fillStyle = '#ffffff';
		ctx.fillText(Math.floor(i*50)+"%",37,68);
		ctx.closePath();

		ctx.beginPath();
		ctx.font = "bold 20px arial";
		ctx.fillStyle = '#fc5000';
		ctx.fillText('Loading...',120,68);
		ctx.closePath();
		if(i >= 2){
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.beginPath();
			ctx.arc(60,60,40,0,Math.PI*2);
			ctx.fillStyle = '#fc5000';
			ctx.fill();
			ctx.closePath();

			ctx.beginPath();
			ctx.arc(60,60,50,0,Math.PI*i);
			ctx.strokeStyle = '#fc5000';
			ctx.lineWidth = 10;
			ctx.stroke();
			ctx.closePath();

			ctx.beginPath();
			ctx.font = "bold 20px arial";
			ctx.fillStyle = '#ffffff';
			ctx.fillText(Math.floor(i*50)+"%",37,68);
			ctx.closePath();
			ctx.beginPath();
			ctx.font = "bold 20px arial";
			ctx.fillStyle = '#fc5000';
			ctx.fillText('Process complete.',120,68);
			ctx.closePath();
			clearInterval(loadingArc);
		}
	},1000);
})();
