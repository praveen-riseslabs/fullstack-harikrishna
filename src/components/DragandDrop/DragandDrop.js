import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import './style.css'

const DragandDrop = () => {

    const containerRef = useRef(null);
    const boxRef = useRef(null);
    const isClicked = useRef(false);
    const coords = useRef({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0
    });
    useEffect(() => {
        if (!boxRef.current || !containerRef.current) return;
        const box = boxRef.current;
        const container = containerRef.current;
        const onMouseDown = (e) => {
            isClicked.current = true;
            coords.current.startX = e.clientX;
            coords.current.startY = e.clientY;
        };
        const onMouseUp = (e) => {
            isClicked.current = false;
            coords.current.lastX = box.offsetLeft;
            coords.current.lastY = box.offsetTop;
        };
        const onMouseMove = (e) => {
            if (!isClicked.current) return;
            const nextX = e.clientX - coords.current.startX + coords.current.lastX;
            const nextY = e.clientY - coords.current.startY + coords.current.lastY;
            box.style.top = `${nextY}px`;
            box.style.left = `${nextX}px`;
        };
        box.addEventListener('mousedown', onMouseDown);
        box.addEventListener('mouseup', onMouseUp);
        container.addEventListener('mousemove', onMouseMove);
        container.addEventListener('mouseleave', onMouseUp);
        const cleanup = () => {
            box.removeEventListener('mousedown', onMouseDown);
            box.removeEventListener('mouseup', onMouseUp);
            container.removeEventListener('mousemove', onMouseMove);
            container.removeEventListener('mouseleave', onMouseUp);
        };
        return cleanup;
    }, []);

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
                <div className="p-2 cont" ref={containerRef} onDrop={handleOnDrop} onDragOver={handleDragOver}>
                    <div ref={boxRef} className="dropped-widget">
                        {widgets.map((widget, index) => {
                            return <div className="" key={index}>
                                <button type="button" className={`btn-${widget.toLowerCase(0)}`}>{widget}</button>
                            </div>
                        })}
                    </div>
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
