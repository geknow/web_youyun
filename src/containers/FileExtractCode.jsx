/**
 * Created by GEK on 2017/12/3.
 */

import React from 'react';
import {FileHeaderContainer, FileExtractCodeBody, Footer} from '../components/index';
import '../scss/FileIndex.scss';


class FileExtractCode extends React.Component {
    render() {
        return (
            <div className="container">
                <FileHeaderContainer />
                <FileExtractCodeBody/>
                <Footer/>
            </div>
        );
    }
}

export default FileExtractCode;