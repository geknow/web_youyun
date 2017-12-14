import React from 'react';
import {FooterComponent} from '../components';
import {FileHeaderContainer,FilePersonalCenterContainer} from '../containers';
import '../../scss/FileIndex.scss';


export default  class FilePersonalCenterPage extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer/>
                <FilePersonalCenterContainer/>
                <FooterComponent/>
            </div>
        );
    }
}
