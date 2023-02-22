import React,{useEffect, useState} from 'react';
import './mainComponent.css';
import SimpleImageSlider from "react-simple-image-slider";
import EditImage from '../Assets/edit.png'

const SliderComponent = (props) => {

const [count,setCount] = useState(1);

let allImages = props.item.images.map((item)=> {
    return {url : "https://sniffspot.onrender.com" + item}
})

console.log('params',props)

return (
<div>
    <div className="slider-item">
       <SimpleImageSlider
        width={360}
        height={250}
        style={{borderRadius: '10px',overflow:'hidden'}}
        images={allImages}
        showBullets={false}
        onCompleteSlide={(index) => {setCount(index)}}
        showNavs={allImages.length > 1 ? true : false}
        navStyle={{type: 1,size: 15}}
      />
      <div className="bullets-item-class" style={{alignItems:'center',justifyContent:'center'}}>
        <p className="bullets-item-text-class">{count} of {props.item.images.length}</p>
      </div>

      <div class="top-spot-class">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <g clip-path="url(#a)" fill="#3AA648">
                <path d="M15 20a.623.623 0 0 1-.53-.292l-3.052-4.844a7.477 7.477 0 0 1-2.836 0l-3.054 4.844a.621.621 0 0 1-.6.288.628.628 0 0 1-.52-.423l-1.136-3.406-2.77-.555a.628.628 0 0 1-.465-.401.63.63 0 0 1 .104-.607l3.122-3.815A7.507 7.507 0 0 1 2.5 7.5C2.5 3.364 5.864 0 10 0s7.5 3.364 7.5 7.5c0 1.137-.263 2.27-.762 3.29l3.121 3.814a.626.626 0 0 1-.361 1.009l-2.77.554-1.135 3.405A.626.626 0 0 1 15 20Zm-.175-2.075.833-2.498a.624.624 0 0 1 .47-.415l2.105-.42-2.183-2.667a7.552 7.552 0 0 1-3.38 2.583l2.155 3.417ZM3.873 15.012c.219.044.4.204.47.415l.832 2.497 2.153-3.417a7.553 7.553 0 0 1-3.38-2.583l-2.182 2.667 2.107.421ZM10 1.25A6.257 6.257 0 0 0 3.75 7.5 6.258 6.258 0 0 0 10 13.75a6.258 6.258 0 0 0 6.25-6.25A6.258 6.258 0 0 0 10 1.25Z"></path><path d="M7.577 11.433a1.105 1.105 0 0 1-.967-.555 1.123 1.123 0 0 1-.064-.991l.734-1.685-1.322-1.3c-.21-.205-.33-.481-.335-.778a1.102 1.102 0 0 1 .313-.79c.21-.218.492-.338.79-.338h1.408l.867-1.704a1.129 1.129 0 0 1 1.524-.478c.2.106.363.268.47.47L11.864 5h1.412c.591 0 1.085.486 1.1 1.083.007.31-.116.61-.339.825l-1.317 1.294.73 1.676a1.12 1.12 0 0 1-.594 1.469 1.118 1.118 0 0 1-.992-.064L10 10.232l-1.873 1.054a1.105 1.105 0 0 1-.55.146ZM10 8.891c.107 0 .213.027.307.08l1.836 1.033-.739-1.698a.628.628 0 0 1 .135-.695l1.385-1.361h-1.441a.623.623 0 0 1-.558-.342L10 4.086l-.926 1.819a.622.622 0 0 1-.556.342H7.075L8.462 7.61c.183.18.237.459.135.695l-.74 1.698 1.837-1.033A.62.62 0 0 1 10 8.89Z">
                    </path>
                    </g>
                    <defs>
                        <clipPath id="a">
                            <path fill="#fff" d="M0 0h20v20H0z"></path>
                        </clipPath></defs></svg><span>Top spot</span>
      </div>

      <div onClick={()=> props.onEdit(props.item)} style={{width: '30px',alignItems:'center',justifyContent:'center',display:'flex', height: '30px',borderRadius:"50%",backgroundColor:'white', position: 'absolute', top: 20, right: 30}}>
        <img src={EditImage} style={{width: '50%', height: '50%', tintColor: 'white'}}/>
      </div>

      </div>

 <div className="item-details">
 <div class="main-class item-detail-title"><span>{props.item.title ?? ''}</span></div>
 <p class="item-detail-description">{props.item.description ?? ''}</p>
 <div class="item-detail-price">
    <div class="item-detail-price-left">
        <span class="price-tag">${props.item.price ?? '0'}</span>
        <span class="price-per-tag"> dog / hour</span>
    </div>
    <div onClick={()=> props.onReviewClick(props.item)}>
        <span class="price-per-tag">Reviews</span>
    </div>
        </div>
 </div>
    </div>
);
}

export default SliderComponent;
