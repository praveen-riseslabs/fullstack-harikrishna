import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './style.css'

const DragandDrop = () => {

    const [widgets, setWidgets] = useState([]);

    const handleOnDrag = (e, widgetType) => {
        e.dataTransfer.setData("widgetType", widgetType);
    }

    const handleOnDrop = (e) => {
        const widgetType = e.dataTransfer.getData("widgetType");
        // console.log("widgetType", widgetType)
        setWidgets([...widgets, widgetType])
    }

    const handleDragOver = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <Navbar />
            <div className="d-flex">
                <div className="p-2 cont" style={{ background: "#454545" }} onDrop={handleOnDrop} onDragOver={handleDragOver}>
                    {widgets.map((widget, index) => {
                        return <div className="dropped-widget" key={index}>
                            <button type="button" className={`btn-${widget.toLowerCase(0)}`}>{widget}</button>
                        </div>
                    })}
                </div>
                <div className="p-2 cont2">
                    <h1>Buttons</h1>
                    <button type="button" className="btn-first" draggable onDragStart={(e) => handleOnDrag(e, "First")}>First</button>
                    <button type="button" className="btn-second" draggable onDragStart={(e) => handleOnDrag(e, "Second")}>Second</button>
                    <button type="button" className="btn-third" draggable onDragStart={(e) => handleOnDrag(e, "Third")}>Third</button>
                    <button type="button" className="btn-fourth" draggable onDragStart={(e) => handleOnDrag(e, "Fourth")}>Fourth</button>
                    <button type="button" className="btn-fifth" draggable onDragStart={(e) => handleOnDrag(e, "Fifth")}>Fifth</button>
                </div>
            </div>
        </div>
    )
}

export default DragandDrop
