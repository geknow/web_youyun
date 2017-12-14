import React from 'react';
import {FileHeaderContainer,FileExtractCodeContainer} from '../containers';
import {FooterComponent} from '../components';

export default class FileExtractCodePage extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer/>
                <FileExtractCodeContainer/>
                <FooterComponent/>
            </div>
        );
    }
}

