import axios from "axios";
export const submit = async(data) =>{
  var formdata  = new FormData();
  try {
  console.log("axios data>>>>>>>>>>  >>>>",data);
    
  if(data){
    
    formdata.append('selectedFile',data.selectedFile)
    formdata.append('display_Name',data.display_Name)
    formdata.append('custom_Url',data.custom_Url)
    formdata.append('portfolio',data.portfolio)
    formdata.append('email',data.email)
    formdata.append('bio',data.bio)
    formdata.append('twitter',data.twitter)
    formdata.append('facebook',data.facebook)
    formdata.append('instagram',data.instagram)
    formdata.append('youtube',data.youtube)
    formdata.append('username',data.username)
    formdata.append('password',data.password)
    console.log("form data ",formdata);
  }
  // axios.post("http://localhost:2030/v1/save",formdata,config)
  // .then((data)=>console.log("data success>>>",data))
  // .catch((e)=>console.log("error>>>",e))
  try {
    let respData = await axios({
      'method': 'POST',
      'url': "http://localhost:2001/v1/save",
      'headers': {
        'content-Type': 'multipart/form-data', 
      },
      data: formdata,

    });
    console.log("respdata",respData);
    return {
      data: respData
    }
  }
  catch (err) {
    return {
      // error: err.response.data
    }
  }
}
catch(e){}
}

export const login = async(data) =>{
  var formdata1  = new FormData();
  try {
  console.log("axios data>>>>>>>>>>  >>>>",data);
    
  if(data){
    
    formdata1.append('username',data.username)
    formdata1.append('password',data.password)
    
    console.log("form data ",formdata1);
  }
  try {
    let respdata = await axios({
      'method': 'POST',
      'url': "http://localhost:2001/v1/getuser",
      'credentials': true,
      'headers': {
        'content-Type':'application/json',
        // 'content-Type': 'multipart/form-data', 
      },
      data: formdata1,

    });
    console.log("response",respdata);
    return {
      data: respdata.data
    }
  }
  catch (err) {
    return {
      // error: err.response.data
    }
  }
}
catch(e){}
}
export const loaddetail=async(data)=>{
  
  console.log("aaa",data)
  
 
  try {
    let respData = await axios({
      'method': 'GET',
      'url': "http://localhost:2001/v1/loadprofile",
      
      
      params: data,

    });
    console.log("respdata",respData);
    return {
      data: respData
    }
  }
  catch (err) {
    return {
         error: err.response.data
    }
  }

  
}
export const create1=async(data)=>{
  console.log("aaa",data)
  var formdata  = new FormData();
  formdata.append('username',data.username);
  formdata.append('tknname',data.tknname);
  formdata.append('token',data.token);
  formdata.append('price',data.price);
  formdata.append('total',data.total);
  try {
    let respData = await axios({
      'method': 'POST',
      'url': "http://localhost:2001/v1/createsingle",
      'credentials': 'include',
      headers: {
        withCredentials: 'true',
        test: document.cookie,
    },
      
      data: formdata,

    });
    console.log("respdata",respData);
    return {
      data: respData
    }
  }
  catch (err) {
    return {
         error: err.response.data
    }
  }

  
}
export const randomimg=async()=>{
  try {
    let respData = await axios({
      'method': 'GET',
      'url': "http://localhost:2001/v1/getrandom",
      
  });
    console.log("respdata",respData);
    return {
      data: respData
    }
  }
  catch (err) {
    return {
         error: err.response.data
    }
  }
}

