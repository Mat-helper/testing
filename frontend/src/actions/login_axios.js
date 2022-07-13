import axios from "axios";
export const submit = async(data) =>{
  var formdata1  = new FormData();
  try {
  console.log("axios data>>>>>>>>>>  >>>>",data);
    
  if(data){
    
    formdata1.append('selectedFile',data.username)
    formdata1.append('display_Name',data.password)
    
    console.log("form data ",formdata);
  }
  try {
    let respData = await axios({
      'method': 'POST',
      'url': "http://localhost:2001/v1/save",
      'headers': {
        'content-Type': 'multipart/form-data', 
      },
      data: formdata1,

    });
    return {
      //data: respData.data
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