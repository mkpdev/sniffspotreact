import React,{useEffect, useState} from 'react';
import {
    Grid,
    Modal,
    Typography,
   } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import IMAGES from '../res/Images';
import "../pages/mainComponent.css";
import axios from 'axios';

export const ReviewModal = (props) => {

const [review, setReview] = useState('');

const [allReviews,setAllReview] = useState([]);

const handlePost = async() => { 

    if(review == ''){
        alert('Please enter review first');
        return;
    }
  
    let formData = new FormData();

    formData.append("review[content]",review);

    setReview("");
    setAllReview([]);
    
  props.handlePost(formData);
}

useEffect(()=> {
    if(props.selectedItem != null && allReviews.length == 0){
    axios.get(`https://sniffspot.onrender.com/spots/${props.selectedItem.id}/reviews`).then((res)=> {
       setAllReview(res.data);
    })}
},[props.selectedItem])




return (
    <Modal
    open={props.reviewModalVisible}
    onClose={props.onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div style={webStyle.mainWrapper}>
    <div style={webStyle.modalWrapper}>
     {allReviews.length > 0 && <Typography style={{fontWeight:'bold',color:'#3aa648',alignSelf:'center',marginBottom:15,fontSize:28}} className="modal-title" id="modal-modal-title" variant="h6" component="h2">
        All Review
      </Typography>}

      {allReviews.map((item)=> {
        return <Typography style={{color:'#1D1350',textAlign:'left',width:'90%',fontSize:18,fontWeight:'600',marginBottom:5}} className="modal-title" id="modal-modal-title" variant="h6" component="h2">
        - {item.content}
      </Typography>
      })

      }

<Typography style={{fontWeight:'bold',color:'#3aa648',alignSelf:'center',marginBottom:15,fontSize:28}} className="modal-title" id="modal-modal-title" variant="h6" component="h2">
        Post Review
      </Typography>

      <div style={{width:"100%",height:1,backgroundColor:'#ADADAD60',marginTop:15,marginBottom:25}} />
             
               <Typography style={{color:'#1D1350',textAlign:'left',width:'90%',fontSize:18,fontWeight:'600',marginBottom:5}} className="modal-title" id="modal-modal-title" variant="h6" component="h2">
        Title
      </Typography>
              <input  value={review} type={'text'} onChange={(e)=> {setReview(e.target.value)}} placeholder="Enter title" className={`app-register-form-field-input ${props.context ? "textfield-color" : ''}`} />
      
              <Grid container>
                        <Grid item xs={12}>
                          <div className="app--create-post-form-field-button">
                            <Button className={`app-create-post-form-button ${props.context ? "btn-color color-white" : ''}`} variant="contained" style={{width:'95%',alignSelf:'center',borderRadius:21,marginTop:20,marginBottom:10}}  onClick={()=>{handlePost()}}>Post</Button>
                          </div>
                        </Grid>
                      </Grid>
  
            <div className="pointer-class" onClick={()=> {
                 setReview("");
                 setAllReview([]);             
              props.onClose()}} style={{alignItems:'center',justifyItems:'center',position:'absolute',right: 30,top:30}}>
            <img
            className="pointer-class"
            style={{height:20,width:20,marginRight:10}}
              src={IMAGES.closeImage}
            />
            </div>
      </div>
    </div>
  </Modal>
);

}

const webStyle = {
    mainWrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      backgroundColor: "transparent",
      alignSelf: "center",
      overflowY: "hidden",
      alignSelf:"center",
    },
modalWrapper: {
  backgroundColor: "white",
  width : "50%",
  padding: 15,
  height: "90%",
  position: "relative",
  overflowY:"scroll",
  borderRadius: 38,
  boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)",
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
    }
  }
