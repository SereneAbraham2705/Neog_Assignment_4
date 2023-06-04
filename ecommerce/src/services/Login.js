import axios from "axios";

export const loginService =async  (email, password,dispatchAuth) => {
   try{
    const res=await axios({
      mathod:'post',
      url:'/api/auth/login',
      data:{
        email:email,
        password:password
      }
    });
    if(res.status===200){
      console.log(res.data.foundUser)
      dispatchAuth({
        type:"GET_USER_DETAILS",
        payload:res.data.foundUser,
      });
      localStorage.setItem("Token",res.data.encodedToken)
    }
   }
   catch(e){
    console.error(e);
   }
  };