import React, { useEffect, useRef } from 'react';


function Canvas() {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        // ctx.fillText(this.props.text, 210, 75);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(300, 150);
        ctx.stroke();
    });


    return (
        <div>
            <canvas ref={canvasRef} width={640} height={425} />
        </div>
    );

}

export default Canvas;