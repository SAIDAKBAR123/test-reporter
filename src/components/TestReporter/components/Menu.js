import React from "react";
import "./style.css";

const Menu = ({ setLineColor, setLineWidth, DownloadCanvasAsImage, setImage,
setLineOpacity }) => {
return (
	<div className="Menu">
	<label>Brush Color </label>
	<input
		type="color"
		onChange={(e) => {
		setLineColor(e.target.value);
		}}
	/>
	<label>Brush Width </label>
	<input
		type="range"
		min="3"
		max="20"
		onChange={(e) => {
		setLineWidth(e.target.value);
		}}
	/>
	<label>Brush Opacity</label>
	<input
		type="range"
		min="1"
		max="100"
		onChange={(e) => {
		setLineOpacity(e.target.value / 100);
		}}
	/>
	<label>Image upload</label>
	<input
		type="file"
		onChange={setImage}
		accept="image/jpeg, image/png, image/jpg"
	/>
	<button onClick={DownloadCanvasAsImage}>Download</button>
	</div>
);
};

export default Menu;
