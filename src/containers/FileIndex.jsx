
import React from 'react';
import { FileHeader,FileBody,Footer } from '../components/index';
import '../scss/FileIndex.scss';


class FileIndex extends React.Component {
    render() {
        return (
            <div className="container">
                <FileHeader />
                <FileBody/>
                <Footer/>
            </div>
        );
    }
}

export default FileIndex;