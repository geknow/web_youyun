import React from 'react';
import {FooterComponent} from '../components/index';
import {FileHeaderContainer, FileItemContainer} from '../containers/';


export default class FileItemPage extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer/>
                <FileItemContainer/>
                <FooterComponent/>
            </div>
        );
    }
}
