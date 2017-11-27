
import React from 'react';
import { FileHeader,FileBody,Footer } from '../components/index';

class FileIndex extends React.Component {
    render() {
        return (
            <div>
                <FileHeader />
                <FileBody/>
                <Footer/>
            </div>
        );
    }
}

export default FileIndex;