
import domtoimage from 'dom-to-image';

import { useEffect, useRef, useState } from "react";
import Menu from "./components/Menu";
import "./components/style.css";

function App() {
const canvasRef = useRef(null);
const ctxRef = useRef(null);
const [isDrawing, setIsDrawing] = useState(false);
const [lineWidth, setLineWidth] = useState(5);
const [lineColor, setLineColor] = useState("black");
const [lineOpacity, setLineOpacity] = useState(1);

// Initialization when the component
// mounts for the first time
useEffect(() => {
	const canvas = canvasRef.current;
	const ctx = canvas.getContext("2d");
	ctx.lineCap = "round";
	ctx.lineJoin = "round";
	ctx.globalAlpha = lineOpacity;
	ctx.strokeStyle = lineColor;
	ctx.lineWidth = lineWidth;
	ctxRef.current = ctx;

}, [lineColor, lineOpacity, lineWidth]);

function DownloadCanvasAsImage(){
	var node = document.getElementById('capture');
	domtoimage.toPng(node)
		.then(function (dataUrl) {
			var img = new Image();
			img.src = dataUrl;
			document.body.appendChild(img);
			console.log(img.src)
			var a = document.createElement("a");
			a.href = img.src
			a.download = "Image.png";
			a.click();
		})
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
}

function setImage (e ) {
	let base64String = ''
	const reader = new FileReader();
	reader.onload = function () {
        base64String = reader.result
		var img = new Image(700, 720);
		img.src = base64String
		console.log(img.src)
		const capture = document.getElementById('capture')
		capture.style.background = `url(${base64String})`
		capture.style.backgroundSize = 'contain !important'
		capture.style.backgroundRepeat = 'no-repeat !important'
		// img.height = 600
		// img.width = 720
		// var imgData = canvas.toDataURL("image/jpeg");
		// img.src = imgData;
		// ctx.drawImage(img,0, 0); 
	}
	reader.readAsDataURL(e.target.files[0])
}

useEffect(() => {
}, [])

// Function for starting the drawing
const startDrawing = (e) => {
	ctxRef.current.beginPath();
	ctxRef.current.moveTo(
	e.nativeEvent.offsetX,
	e.nativeEvent.offsetY
	);
	setIsDrawing(true);
};

// Function for ending the drawing
const endDrawing = () => {
	ctxRef.current.closePath();
	setIsDrawing(false);
};

const draw = (e) => {
	if (!isDrawing) {
	return;
	}
	ctxRef.current.lineTo(
	e.nativeEvent.offsetX,
	e.nativeEvent.offsetY
	);
	
	ctxRef.current.stroke();
};

return (
	<div className="App">
	{/* <h1>UPM TEST LOGS</h1> */}
	<div className="draw-area" id="capture" style={{ backgroundRepeat: 'no-repeat !important'}}>
		<canvas
		onMouseDown={startDrawing}
		onMouseUp={endDrawing}
		onMouseMove={draw}
		ref={canvasRef}
		width={`1000px`}
		height={`600px`}
		/>
	</div>
	<Menu
		setLineColor={setLineColor}
		setImage={setImage}
		setLineWidth={setLineWidth}
		setLineOpacity={setLineOpacity}
		DownloadCanvasAsImage={DownloadCanvasAsImage}
		/> 
	</div>
);
}

export default App;
