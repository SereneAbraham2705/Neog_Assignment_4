import axios from "axios";

export const signupService =async  (firstName,lastName,email, password) => {
   try{
    const res=await axios({
      mathod:'post',
      url:'/api/auth/signup',
      data:{
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:password
      }
    });
    if(res.status===201){
      console.log(res.data.createdUser)
      localStorage.setItem("Token",res.data.encodedToken)
    }
   }
   catch(e){
    console.error(e);
   }
  };