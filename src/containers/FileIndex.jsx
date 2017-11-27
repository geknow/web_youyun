
import React from 'react';
import { FileHeader } from '../components/index';
import { FileFooter } from '../components/index';

class FileIndex extends React.Component {
    render() {
        return (
            <div>
                <FileHeader />
                {/* todo body */}
                <FileFooter/>
            </div>
        );
    }
}

export default FileIndex;