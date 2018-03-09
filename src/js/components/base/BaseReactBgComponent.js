import React from 'react';

function fillBg(canvasId, bodyId) {
    let canvas = document.getElementById(canvasId);
    if (canvas.getContext) {
        let downloadBody = document.getElementById(bodyId);
        let cWidth = downloadBody.clientWidth;
        let cHeight = downloadBody.clientHeight - 20;
        let ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        //每次绘制都清空一下画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.mozImageSmoothingEnabled = true;
        ctx.fillStyle = '#61a3e8';
        ctx.beginPath();
        ctx.moveTo(cWidth, 0);
        ctx.lineTo(cWidth, cHeight);
        ctx.lineTo(0, cHeight);
        ctx.lineTo(cWidth, cHeight + cWidth);
        ctx.lineTo(cWidth + cWidth, cWidth);
        ctx.closePath();
        ctx.fill();
    }
}


/**
 * 调用父类构造函数的时候，props要传递
 */
export default class BaseReactBgComponent extends React.Component{
    constructor(canvasId, bodyId, props){
        super(props);
        this.state = {
            canvasId: canvasId,
            bodyId: bodyId
        };
    }

    componentDidMount(){
        const canvasId = this.state.canvasId;
        const bodyId = this.state.bodyId;
        fillBg(canvasId, bodyId);
        //添加对窗口大小改变的监听，每次窗口大小变化，就从新绘制背景
        window.addEventListener('resize', () => {
            fillBg(canvasId, bodyId);
        });
    }
}
