
import React from 'react';
import {FooterComponent} from '../components';
import {FileHeaderContainer,FileUploadContainer} from '../containers';
import '../../scss/FileIndex.scss';


export default class FileUploadPage extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer/>
                <FileUploadContainer/>
                <FooterComponent/>
            </div>
        );
    }
}

