import React, { useState } from 'react';
import LayoutAuthentication from '../layout/LayoutAuthentication';
import { useForm } from 'react-hook-form';
import { Label } from '../components/label';
import { Input } from '../components/input';
import FormField from '../components/common/FormField';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';
import { CheckBox } from '../components/checkbox';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import IconEyes from '../components/icons/IconEyes';
import {signInWithEmailAndPassword} from "firebase/auth"
import {auth} from '../firebase/firebase-config'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    name: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("This field is required"),
    password: yup
      .string()
      .required("This field is required")
      .min(8, "Password must be 8 character "),
  });

// firebase
const SignUp = async () => {

}



const SignUpPage = () => {
    const {
        handleSubmit,
        control,
        reset,
        register,
        
        formState: { errors },
      } = useForm({
        // resolver: yupResolver(schema),
        mode: "onSubmit",
      });

      const navigate = useNavigate();
 
  const handleSignUp =  (values) => {

  };
    const [SignUpName , setSignUpName] = useState("")
    const [SignUpEmail , setSignUpEmail] = useState("")
    const [SignUpPassword , setSignUpPassword] = useState("")

   
 
    const signUp = ({email, password}) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            localStorage.setItem('isLoggedUp', true);
            navigate('/')
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    
    const [acceptTerm , setAcceptTerm] = useState(false)
    const [showPassword , setShowPassword] = useState(false)
    const handleToggleTerm =()=>{
    setAcceptTerm(!acceptTerm)
   }
   const handleTogglePassword =()=>{
     setShowPassword(!showPassword)
   }

   

    return (
        <LayoutAuthentication heading="Đăng kí">
           <form onSubmit ={handleSubmit(signUp)}>
                <FormField>
                    <Label>Họ và tên*</Label>
                    <Input 
                        control ={control} 
                        {...register('name')}
                        >
                    </Input>
                </FormField>
                <FormField>
                    <Label>Email*</Label>
                    <Input 
                        control ={control} 
                        {...register('email')}
                        >
                    </Input>
                </FormField>
                <FormField>
<Label>Password*</Label>
                    <Input 
                        control={control}
                        {...register('password')}
                        >
                        <IconEyes
                            open={showPassword}
                            onClick={handleTogglePassword}
                            ></IconEyes>
                    </Input>
                </FormField>
                <div className="flex items-start mb-3 gap-x-2 lg:gap-x-3 lg:mx-11">
                <CheckBox name="term" checked={acceptTerm} onClick={handleToggleTerm}>
                    <p className="text-sm text-[9px] lg:text-base font-medium text-text3 flex-1">Tôi đã đọc và đồng ý <span className='text-primary'>Điều khoản</span> và <span className="text-primary">Chính sách bảo mật</span></p>
                    </CheckBox>
                </div>
                <Button className='w-[355px] bg-primary' type = 'submit' 
                
                >
                    Sign Up
                </Button>
           </form>
           <p className='mt-3 text-center text-text3 '>Bạn đã có tài khoản?<Link to="/sign-in" className='text-primary'>Đăng nhập</Link></p>
           <p className='mt-3 text-center text-text3 '>Bạn đã có tài khoản?<Link to="/sign-in" className='text-primary'>Đăng nhập</Link></p>
        </LayoutAuthentication>
    );
};

export default SignUpPage;