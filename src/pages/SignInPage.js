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

const SignUpPage = () => {
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
      });
 
  const handleSignUp =  (values) => {

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
        <LayoutAuthentication heading="Đăng nhập">
           <form onSubmit ={handleSubmit(handleSignUp)}>
                <FormField>
                    <Label>Email*</Label>
                    <Input 
                        control ={control} 
                        name="email" 
                        type="email" 
                        placeholder="example: shecodes@gmail.com"
                        error={errors.email?.message}
                        >
                    </Input>
                </FormField>
                <FormField>
                    <Label>Password*</Label>
                    <Input 
                        control={control}
                        name="password"
                        type ={`${showPassword ? "text" : "password"}`}
                        placeholder="Tạo mật khẩu"
                        error={errors.password?.message}
                        >
                        <IconEyes
                            open={showPassword}
                            onClick={handleTogglePassword}
                            ></IconEyes>
                    </Input>
                </FormField>
                <div className="flex items-start mb-3 gap-x-2 lg:gap-x-3 lg:mx-11">
                </div>
                <Button className='w-[355px] bg-primary ' type="submit">
                    Đăng kí
                </Button>
           </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;