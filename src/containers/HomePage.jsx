
import React from 'react';
import { FileHeaderContainer,HomePageBody,Footer } from '../components/index';
import '../scss/FileIndex.scss';


class HomePage extends React.Component {
    render() {
        return (
            <div className="container">
                <FileHeaderContainer />
                <HomePageBody/>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;