import React from 'react';
import {HomePageBody, Footer} from '../components/index';
import FileHeaderContainer from './FileHeader';
import '../scss/FileIndex.scss';


class HomePage extends React.Component {
    render() {
        return (
            <div className="youyun-container">
                <FileHeaderContainer/>
                <HomePageBody/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;