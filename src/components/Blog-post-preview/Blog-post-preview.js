import React,{useState} from 'react';
import style from './Blog-post-preview.module.scss';
import Popup from "../Popup/Popup";

function BlogPostPreview () {
const [isOpen, setIsOpen] = useState(false);

const togglePopup = () => {
    console.log('click')
    setIsOpen(!isOpen);
}
return (
    <div className={style.blogPostWrap}>
        <div className={style.blogPostItem}  onClick={togglePopup}>
            <img src={require('../../assets/images/blog_3.png')} alt="blog image"/>
            <h3>
                <span className={style.blogPostItem__title}>Co-op x Stuart: 1 hour store-to-door grocery delivery</span>
            </h3>
            <p className={style.blogPostItem__desc}> Stuart and Co-op have collaborated to bring their fast customer delivery promise to life. Starting as a 2 hour proposition, this swiftly evolved due to its success to include an exciting 1 hour offer launching across multiple stores. With an aligned vision and goal, where the partnership goes beyond the delivery element, you can see why this is a recipe for success. </p>
        </div>
        <div className={style.blogPostItem}  onClick={togglePopup}>
            <img src={require('../../assets/images/blog_2.png')} alt="blog image"/>
            <h3>
                <span className={style.blogPostItem__title}>5 Last-mile trends to know in 2022</span>
            </h3>
            <p className={style.blogPostItem__desc}>Discover the key last-mile trends to know in 2022 and explore how changing habits will drive delivery needs across grocery, retail and food this year.</p>
        </div>
        <div className={style.blogPostItem} onClick={togglePopup}>
            <img src={require('../../assets/images/blog_4.png')} alt="blog image"/>
            <h3>
                <span className={style.blogPostItem__title}>6 ways to make your delivery sustainable</span>
            </h3>
            <p className={style.blogPostItem__desc}> Today's customers expect retailers to offer both fast and sustainable delivery. But how to reconcile these expectations? Here are Stuart's tips to help retailers achieve sustainability while delivering a rewarding customer experience. </p>
        </div>
        <div className={style.blogPostItem} onClick={togglePopup}>
            <img src={require('../../assets/images/blog_1.png')} alt="blog image"/>
            <h3>
                <span className={style.blogPostItem__title}>Valentine’s Day 2022: Deliver happiness, receive loyalty</span>
            </h3>
            <p className={style.blogPostItem__desc}>Discover the key last-mile trends to know in 2022 and explore how changing habits will drive delivery needs across grocery, retail and food this year.</p>
        </div>
        {isOpen && <Popup
            handleClose={togglePopup}
        />}
    </div>

    );

};


export default BlogPostPreview;
