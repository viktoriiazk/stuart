import React, {useState} from "react";
import Header from "./components/Header/Header";
import style from './App.scss';
import BlogPostPreview from "./components/Blog-post-preview/Blog-post-preview";
import Popup from "./components/Popup/Popup";
import Footer from "./components/Footer/Footer";

function App() {


    return (
        <div className={style.App}>
            <Header></Header>
            <main>
                <div className="container">
                    <h2 className="title">Business</h2>
                    <BlogPostPreview></BlogPostPreview>
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
