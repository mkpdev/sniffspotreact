import React from 'react';
import { BannerComponent } from './BannerComponent';
import { HeaderComponent } from './HeaderComponent';
import './mainComponent.css';
import CallApi from '../ApiService/CallApi';
import IMAGES from '../res/Images';
import { PostModal } from '../Components.js/PostModel';
import SliderComponent from './SliderComponent';
import axios from 'axios';
import { ReviewModal } from '../Components.js/ReviewModal';

const callApi = new CallApi();

class MainComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            postModalVisible: false,
            data: [],
            selectedEditItem:null,
            reviewModalVisible:false
        }

        this.uploadImgRef = React.createRef();
    }

    postReview = async (formdata) => {
        this.setState({reviewModalVisible:false,selectedEditItem:null});
        const {data} = await axios.post(`https://sniffspot.onrender.com/spots/${this.state.selectedEditItem.id}/reviews`, formdata, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    }

    handlePost = async (postData) => {
        this.setState({postModalVisible:false})
        
        if(this.state.selectedEditItem == null){
        const {data} = await axios.post("https://sniffspot.onrender.com/spots", postData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })} else {
        const {data} = await axios.patch(`https://sniffspot.onrender.com/spots/${this.state.selectedEditItem.id}`, postData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    }

    this.setState({selectedEditItem:null});
                this.getData();
    }

   

    getData(){
        callApi.getDashboardData().then(res => {
            this.setState({data:res.data})
       })
    }

    componentDidMount(){
        this.getData();
    }

render() {
    return(
        <>
<div className="main-class" >

<HeaderComponent />

<BannerComponent />

<div className="main-class sports-class">

    <div className="main-class flatlist-container">
    <h2 class="flatlist-heading">Popular private dog parks near Seattle, Washington</h2>
       
       <div className="flatlist-class">

{this.state.data.map((item,index)=> {
    return <div className="flatlist-item" key={index}> <SliderComponent onReviewClick={(item)=> this.setState({selectedEditItem:item,reviewModalVisible:true})} onEdit={(item)=> {
    this.setState({selectedEditItem:item},()=>{
        this.setState({postModalVisible:true})
    })
    }} item={item} /> </div>
})
    }

       </div>
       
        </div>

    </div>

    <div onClick={()=> this.setState({postModalVisible:true})} className="add-main-class">
      <img className="add-main-class-img" src={IMAGES.addImage} alt="add" />
    </div>

</div>
<PostModal selectedItem={this.state.selectedEditItem} handlePost={(data)=> this.handlePost(data)} postModalVisible={this.state.postModalVisible} onClose={()=> this.setState({postModalVisible:false,selectedEditItem:null})} uploadImgRef={this.uploadImgRef} />
<ReviewModal handlePost={(formdata)=> this.postReview(formdata)} selectedItem={this.state.selectedEditItem} onClose={()=> {this.setState({reviewModalVisible:false,selectedEditItem:false})}} reviewModalVisible={this.state.reviewModalVisible}  />
</>
    );
}
}

export default MainComponent;
