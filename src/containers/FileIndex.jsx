import React from 'react';
import {FileBody, Footer} from '../components/index';
import FileHeaderContainer from './FileHeader';
import '../scss/FileIndex.scss';




class FileIndex extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer/>
                <FileBody/>
                <Footer/>
            </div>
        );
    }
}

export default FileIndex;