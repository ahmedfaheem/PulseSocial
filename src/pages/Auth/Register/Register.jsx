import React from "react";
// Removed Select and ListBox since you are using native HTML select now
import { Button, Input, Label, Select,ListBox  } from "@heroui/react";
import { Controller, useForm } from "react-hook-form";
import ValidationMessage from "../../../components/Shared/ValidationMessage/ValidationMessage";
export default function Register() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, touchedFields },
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      dateOfBirth: "",
    },
    mode: "onBlur", // Validate on blur
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-400 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-3xl text-white">
            🚀
          </div>
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>
          <p className="mt-2 text-gray-500">
            Join our social community today.
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Full Name */}
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-1.5">Full Name</Label>
              <Input 
                id="name" 
                placeholder="John Doe"  
                variant="bordered" 
                className="w-full"
                {...register('name', {
                  required: {
                    value: true,
                    message: "Name is required"
                  },
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters"
                  }
                })}
              />
              <ValidationMessage field={errors.name} />
             </div>

            {/* Username */}
            <div>
              <Label htmlFor="username" className="text-sm font-medium text-gray-700 block mb-1.5">Username</Label>
              <Input 
                id="username" 
                placeholder="@username"  
                variant="bordered" 
                className="w-full"
                {...register('username', {
                  required: {
                    value: true,
                    message: "Username is required",
                  },
                  minLength: {
                    value: 3,
                    message: "Username must be at least 3 characters",
                  },
                  maxLength: { 
                    value: 20,
                    message: "Username must be at most 20 characters",
                  },
                })}
              />
              <ValidationMessage field={errors.username} />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1.5">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                variant="bordered"
                className="w-full"
                {...register('email', {
                  required: {
                    value: true,
                    message: "Email is required"
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              <ValidationMessage field={errors.email} />
            </div>

            {/* Date of Birth */}
            <div>
              <Label htmlFor="dob" className="text-sm font-medium text-gray-700 block mb-1.5">Date of Birth</Label>
              <Input 
                id="dob" 
                type="date"  
                variant="bordered" 
                className="w-full" 
                {...register('dateOfBirth', {
                  required: {
                    value: true,
                    message: "Date of Birth is required"
                  },
                  valueAsDate: true,
                  validate: (value) => {
                    if(new Date().getFullYear() - new Date(value).getFullYear() < 13){
                      return "You must be at least 13 years old";
                    }
                    return true;
                  }
                })}
              />
              <ValidationMessage field={errors.dateOfBirth} />
            </div>

            {/* Gender Selection */}
       
            <div>
         <Controller 
          control={control}
          name="gender"
          rules={{
            required:{
              value:true,
              message:"Gender is Required"
            }
          }}
          render={({field})=>
              <Select placeholder="Select Gender" {...field}>
                <Label>Gender</Label>

                <Select.Trigger>
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover>
                  <ListBox>
                    <ListBox.Item id="male" textValue="Male">
                      Male
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="female" textValue="Female">
                      Female
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            }
         />
          <ValidationMessage field={errors.gender} />
</div>
         
            
            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1.5">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                variant="bordered"
                className="w-full"
                {...register('password', {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
              />
              {/* FIXED: Moved error inside the password div */}
              <ValidationMessage field={errors.password} />
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 block mb-1.5">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="********"
                variant="bordered"
                className="w-full"
                {...register('rePassword', {
                  required: {
                    value: true,
                    message: "Please confirm your password",
                  },
                  validate: (value) => value === watch('password') || "Passwords do not match",
                })}
              />
              {/* FIXED: Moved error inside the confirm password div */}
              <ValidationMessage field={errors.rePassword} />
            </div>

          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button type="submit" color="primary" className="w-full md:w-1/2 h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md transition">
              Create Account
            </Button>
          </div>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-sm text-gray-400 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Navigation Footer */}
        <p className="text-center text-gray-500 text-sm">
          Already have an account?{" "}
          <a href="/login" className="font-semibold text-blue-600 hover:underline transition">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}