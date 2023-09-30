import React, { useState } from 'react';
import LayoutAuthentication from '../layout/LayoutAuthentication';
import FormField from '../components/common/FormField';
import { Label } from '../components/label';
import { Input } from '../components/input';
import { useForm } from 'react-hook-form';
import { Button } from '../components/button';
import { Link, NavLink } from 'react-router-dom';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import IconEyes from '../components/icons/IconEyes';

const schema = yup.object({
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
      } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
      });
 
  const handleSignIn =  (values) => {

  };

    const [showPassword , setShowPassword] = useState(false)
   const handleTogglePassword =()=>{
     setShowPassword(!showPassword)
   }
    return (
        <LayoutAuthentication heading="Welcome back !">
            <form onSubmit ={handleSubmit(handleSignIn)}>
                <FormField>
                <Label>Email*</Label>
                <Input control ={control} name="email" type="email" placeholder="thuong@gmail.com" error={errors.email?.message}></Input>
                </FormField>
                <FormField>
                <Label>Password*</Label>
                <Input control ={control} name="password" type ={`${showPassword ? "text" : "password"}`} placeholder="create a password"  error={errors.password?.message}>
                    <IconEyes
                            open={showPassword}
                            onClick={handleTogglePassword}
                        ></IconEyes>
                </Input>
                </FormField>
                <NavLink to={"/"} className='flex items-end justify-end mb-3 text-primary mr-11 '>Forgot your password ?</NavLink>
                <Button className='w-[355px] bg-primary' type="submit">
                    Sign In
                </Button>
            </form>
            <p className='mt-3 text-center text-text3 '>Don’t have an account?<Link to="/sign-up" className='text-primary'>Sign Up</Link></p>
        </LayoutAuthentication>
    );
};

export default SignInPage;