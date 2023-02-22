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

export const PostModal = (props) => {

const [title, setTitle] = useState(props.selectedItem?.title);

const [description, setDescription] = useState(props.selectedItem?.description ?? '');

const [price, setPrice] = useState(props.selectedItem?.title ? parseFloat(props.selectedItem?.price ?? 0) : 0);

const [images,setImages] = useState(['']);

const [myFiles, setMyfiles] = useState(props.selectedItem?.images ?? [])

useEffect(()=> {
  if(props.selectedItem != null){
    console.log('jim',props.selectedItem.price)
setTitle(props.selectedItem.title);
setDescription(props.selectedItem.description);
setPrice(props.selectedItem.price);
}
},[props.selectedItem])

const handlePost = async() => { 

    if(title === ''){
        alert('Please enter title');
    } else if(description === ''){
 alert('Please enter description');
    } else if(price === 0 || price === '' || price < 0 || price == -0){
 alert('Please enter valid price');
    } else if(myFiles.length === 0 && props.selectedItem == null){
alert('Please upload atleast one image');
    } else {

  let formData = new FormData();

  formData.append("spot[description]",description);
  formData.append("spot[title]",title);
  formData.append("spot[price]",parseFloat(price));
if(props.selectedItem == null){
  myFiles.forEach((item)=> {
    formData.append("spot[images][]", item);
  })}

  setTitle("");
  setImages([]);
  setMyfiles([]);
  setDescription("");
  setPrice(0);

    props.handlePost(formData);
    
  }
}

const handleChange = (e) => {
   let newFile = e.target.files[0]
  let myAllFiles = [...myFiles];
  myAllFiles.push(newFile)
  console.log("myfie", myFiles)
  setMyfiles(myAllFiles);
  setImages([URL.createObjectURL(newFile), ...images])
}

return (
    <Modal
    open={props.postModalVisible}
    onClose={props.onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <div style={webStyle.mainWrapper}>
    <div style={webStyle.modalWrapper}>
      <Typography style={{fontWeight:'bold',color:'#3aa648',alignSelf:'center',marginBottom:15,fontSize:28}} className="modal-title" id="modal-modal-title" variant="h6" component="h2">
        Post Spot
      </Typography>

      <div style={{width:"100%",height:1,backgroundColor:'#ADADAD60',marginTop:15,marginBottom:25}} />
             
               <Typography style={{color:'#1D1350',textAlign:'left',width:'90%',fontSize:18,fontWeight:'600',marginBottom:5}} className="modal-title" id="modal-modal-title" variant="h6" component="h2">
        Title
      </Typography>
              <input  value={title} type={'text'} onChange={(e)=> {setTitle(e.target.value)}} placeholder="Enter title" className={`app-register-form-field-input ${props.context ? "textfield-color" : ''}`} />

              <Typography style={{color:'#1D1350',textAlign:'left',width:'90%',fontSize:18,fontWeight:'600',marginBottom:5,marginTop:10}} className="modal-title" id="modal-modal-title" variant="h6" component="h2">
        Description
      </Typography>
              <input value={description}  type={'text'} onChange={(e)=> {setDescription(e.target.value)}} placeholder="Enter Description" className={`app-register-form-field-input ${props.context ? "textfield-color" : ''}`} />

          <Typography style={{color:'#1D1350',textAlign:'left',width:'90%',fontSize:18,fontWeight:'600',marginBottom:5,marginTop:10}} className="modal-title" id="modal-modal-title" variant="h6" component="h2">
        Price
      </Typography>
              <input  value={price}  type={'number'} onChange={(e)=> {setPrice(e.target.value)}} placeholder="Enter price" className={`app-register-form-field-input ${props.context ? "textfield-color" : ''}`} />
         {!props.selectedItem && <div style={{flex:1}} className="horizontal-image-list">
            {images.map((item, index) => {
return item == '' ?  <img
onClick={()=> props.uploadImgRef.current.click()}
style={{height:100,width:100}}
  src={IMAGES.addImage}
/> : <img
               style={{height:100,width:100}}
                 src={item}
               />
            })}
            </div>}
            <input
            ref={props.uploadImgRef}
                style={{display:'none'}}
                              type="file"
                              accept="image/*"
                              name="image-upload"
                              id="input"
                              data-test-id='file-input-handler'
                              onChange={handleChange}
                          />
              <Grid container>
                        <Grid item xs={12}>
                          <div className="app--create-post-form-field-button">
                            <Button className={`app-create-post-form-button ${props.context ? "btn-color color-white" : ''}`} variant="contained" style={{width:'95%',alignSelf:'center',borderRadius:21,marginTop:20,marginBottom:10}}  onClick={()=>{handlePost()}}>Post</Button>
                          </div>
                        </Grid>
                      </Grid>
  
            <div className="pointer-class" onClick={()=> {
               setTitle("");
               setImages([]);
               setMyfiles([]);
               setDescription("");
               setPrice(0);
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