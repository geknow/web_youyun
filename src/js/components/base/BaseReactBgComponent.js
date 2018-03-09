import React from 'react';

function fillBg(canvasId, bodyId, heightOffset) {
    let canvas = document.getElementById(canvasId);
    if (canvas.getContext) {
        let downloadBody = document.getElementById(bodyId);
        let cWidth = downloadBody.clientWidth;
        let cHeight = downloadBody.clientHeight - heightOffset;
        let ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        let lingrad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        lingrad.addColorStop(0, '#45a2fb22');
        lingrad.addColorStop(1, '#fff0');
        ctx.fillStyle = lingrad;
        //每次绘制都清空一下画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.mozImageSmoothingEnabled = true;
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
    constructor(canvasId, bodyId, props, extraHeightOffset){
        super(props);
        let heightOffset = 0;
        if(extraHeightOffset){
            heightOffset = extraHeightOffset;
        }
        this.state = {
            canvasId: canvasId,
            bodyId: bodyId,
            heightOffset: heightOffset
        };
    }

    componentDidMount(){
        const canvasId = this.state.canvasId;
        const bodyId = this.state.bodyId;
        const heightOffset = this.state.heightOffset;
        fillBg(canvasId, bodyId, heightOffset);
        //添加对窗口大小改变的监听，每次窗口大小变化，就从新绘制背景
        window.addEventListener('resize', () => {
            fillBg(canvasId, bodyId, heightOffset);
        });
    }
}
