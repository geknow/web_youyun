import './index.scss';
import React from 'react';

import 'font-awesome/scss/font-awesome.scss';
import {Link} from 'react-router-dom';
import backendUrl from '../../actions/backendUrl';


function fillBg() {
    let canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
        let downloadBody = document.getElementById('downloadBody');
        let cWidth = downloadBody.clientWidth;
        let cHeight = downloadBody.clientHeight - 20;
        let ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        //每次绘制都清空一下画布
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.mozImageSmoothingEnabled = true;
        ctx.fillStyle = '#61a3e8';
        // ctx.fillRect(cWidth, cHeight - 20, 20, 40);
        ctx.beginPath();
        ctx.moveTo(cWidth, 0);
        ctx.lineTo(0, cHeight);
        ctx.lineTo(cWidth, cHeight + cWidth);
        ctx.lineTo(cWidth + cWidth, cWidth);
        ctx.closePath();
        ctx.fill();
    }
}

export default class FileDownloadComponent extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        let {handleCodeErr} = this.props;
        handleCodeErr({
            iscodeerr: false
        });
    }

    handleSubmit() {
        let identifyCode = this.refs['code'].value;
        if (identifyCode.trim() === '')
            return;
        let that = this;
        let {handleCodeErr} = this.props;
        fetch(`/api/file/checkdownload/${identifyCode}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                if (res.success) {
                    let encrypt = res.data;
                    let form = that.refs['form'];
                    form.action = `${backendUrl.baseUrl}/file/download/${encrypt}`;
                    form.submit();
                }
                else
                    handleCodeErr({
                        iscodeerr: true
                    });
            })
            .catch((err) => {
                handleCodeErr({
                    iscodeerr: true
                });
            });
    }

    componentDidMount() {
        fillBg();
        //添加对窗口大小改变的监听，每次窗口大小变化，就从新绘制背景
        window.addEventListener('resize', () => {
            fillBg();
        });
    }


    render() {
        let {iscodeerr} = this.props;
        return (
            <div className="home-body clearfix">
                <div>
                    <header>
                        <p>优云</p>
                        <ul>
                            <li><Link to="/">提取码</Link></li>
                            <li><Link to="/file/upload">传输文件</Link></li>
                            <li><a href="">找资源</a></li>
                            <li><a href="">分享文件</a></li>
                            <li><a href="">关注人</a></li>
                        </ul>
                    </header>
                    <canvas id={'myCanvas'}>

                    </canvas>
                    <section id={'downloadBody'}>
                        <div className={'caption'}>
                            <div className={'body-logo'}>

                            </div>
                            <p>提取码</p>
                        </div>
                        <div className={'main-body'}>
                            <form method={'get'} ref={'form'} target={'upload_target'}>
                                <div className={'info'}>
                                    <p>请输入提取码以获取文件</p>
                                </div>
                                <div className={iscodeerr ?
                                    'extract-code-text-err extract-code-text' : 'extract-code-text'}>
                                    <input type="text" ref={'code'} onClick={this.handleChange}/>
                                </div>
                                {
                                    !iscodeerr || <div className={'code-tips'}>
                                        <p>提取码错误!</p>
                                    </div>
                                }
                                <div className={'submit-btn'} onClick={this.handleSubmit}>
                                    <span>提取文件</span>
                                </div>
                            </form>
                        </div>
                        <iframe name="upload_target" ref={'catch_result'}
                                style={{height: 0, width: 0}}/>
                    </section>
                </div>
            </div>
        );
    }
}
