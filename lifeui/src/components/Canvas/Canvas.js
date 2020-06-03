import React, { Component } from 'react';


class Canvas extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        // ctx.fillText(this.props.text, 210, 75);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(300, 150);
        ctx.stroke();
    }

    render() {
        return (
            <div>
                <canvas ref="canvas" width={640} height={425} />
            </div>
        );
    }
}

export default Canvas;