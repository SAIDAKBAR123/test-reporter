import React from "react";
import './style.css'
const Sidebar = () => {
return (
	<div className="draw-area-sidebar">
        <label htmlFor="asd">Title</label>
        <input id="asd"></input>
        <label className="labelTop" htmlFor="asd">Epics</label>
        <select name="cars" className="select">
            <option value="volvo">Saida</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        <label className="labelTop" htmlFor="asd">Task</label>
        <select name="cars" className="select">
            <option value="volvo">Saida</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        <label className="labelTop" htmlFor="asd">Stage</label>
        <select name="cars" className="select">
            <option value="volvo">Saida</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
        </select>
        {/* <label for="cars"></label>
        <select name="cars" className="select">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select> */}
        <label className="labelTop" htmlFor="asdasd">Description</label>
        <textarea rows={10} cols={42} id="asdasd"></textarea>
        <button type="submit">Send</button>
	</div>
);
};

export default Sidebar;
