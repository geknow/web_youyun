
import React from 'react';
import { FileHeaderContainer,FileUploadBodyContainer,Footer } from '../components/index';
import '../scss/FileIndex.scss';


class FileUpload extends React.Component {
    render() {
        return (
            <div className="container">
                <FileHeaderContainer />
                <FileUploadBodyContainer/>
                <Footer/>
            </div>
        );
    }
}

export default FileUpload;