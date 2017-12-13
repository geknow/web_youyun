import React from 'react';
import {FileHeaderContainer, FileBody, Footer} from '../components/index';
import '../scss/FileIndex.scss';
import {connect} from 'react-redux';




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