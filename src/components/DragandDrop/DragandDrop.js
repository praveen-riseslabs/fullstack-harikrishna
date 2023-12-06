import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './style.css'
import Draggable from 'react-draggable';

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
            <div className="flex">
                <div className="p-2 cont" onDrop={handleOnDrop} onDragOver={handleDragOver}>
                    <div className="dropped-widget">
                        {widgets.map((widget, index) => {
                            return <div className="" key={index}>
                                <Draggable>
                                    <button type="button" className={`btn-${widget.toLowerCase(0)} dragItem`}>{widget}</button>
                                </Draggable>
                            </div>
                        })}
                    </div>
                </div>
                <div className="p-2 cont2">
                    <h1>Buttons</h1>
                    <button type="button" className="btn-first dragItem" draggable onDragStart={(e) => handleOnDrag(e, "First")}>First</button>
                    <button type="button" className="btn-second dragItem" draggable onDragStart={(e) => handleOnDrag(e, "Second")}>Second</button>
                    <button type="button" className="btn-third dragItem" draggable onDragStart={(e) => handleOnDrag(e, "Third")}>Third</button>
                    <button type="button" className="btn-fourth dragItem" draggable onDragStart={(e) => handleOnDrag(e, "Fourth")}>Fourth</button>
                    <button type="button" className="btn-fifth dragItem" draggable onDragStart={(e) => handleOnDrag(e, "Fifth")}>Fifth</button>
                </div>
            </div>
        </div>
    )
}

export default DragandDrop
