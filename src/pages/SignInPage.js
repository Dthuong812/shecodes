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

import {auth} from '../firebase/firebase-config'
import {signInWithEmailAndPassword} from "firebase/auth"
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

  

const SignInPage = () => {
    const {
        handleSubmit,
        control,
        reset,
        
        formState: { errors },
        values,
        register
      } = useForm({
        // resolver: yupResolver(schema),
        mode: "onSubmit",
      });
 
      const navigate = useNavigate();

    
    const [SignInEmail , setSignInEmail] = useState("")
    const [SignInPassword , setSignInPassword] = useState("")
    const [IsSignedIn, setIsSignedIn] = useState(false)

    const signIn = ({email, password}) => {
        // console.log(SignInEmail, SignInPassword)
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            localStorage.setItem('isLoggedIn', true);
            navigate('/')
          })
          .catch((error) => {
            console.log(error);
          });
        //   console.log(SignInEmail,SignInPassword)
      };
    
    const [acceptTerm , setAcceptTerm] = useState(false)
    const [showPassword , setShowPassword] = useState(false)
    const handleToggleTerm =()=>{
    setAcceptTerm(!acceptTerm)
   }
   const handleTogglePassword =()=>{
     setShowPassword(!showPassword)
   }

   const test = (data) => {
    console.log(data)
   }
    return (
        <LayoutAuthentication heading="Đăng nhập">
                <>
                <form onSubmit={handleSubmit(signIn)}>
                
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
               
                <Button className='w-[355px] bg-primary ' 
                type='submit'>
                    Sign In
                </Button>
               
           </form>
           </>
            
           
           <p className='mt-3 text-center text-text3 '>Bạn đã chưa có tài khoản?<Link to="/sign-up" className='text-primary'> Đăng kí</Link></p>
        </LayoutAuthentication>
    
    );
};

export default SignInPage;