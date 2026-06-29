import React from "react";
// Removed Select and ListBox since you are using native HTML select now
import { Button, Input, Label } from "@heroui/react";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
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
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>}
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
              {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username?.message}</p>}
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
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>}
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
              {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth?.message}</p>}
            </div>

            {/* Gender Selection */}
            <div>
              <Label htmlFor="gender" className="text-sm font-medium text-gray-700 block mb-1.5">
                Gender
              </Label>
              <select
                id="gender"
                {...register('gender', {
                  required: {
                    value: true,
                    message: "Gender is required",
                  },
                })}
                defaultValue=""
                className="w-full border-2 rounded-xl px-3 py-2 bg-white text-gray-700 border-gray-200 hover:border-gray-300 transition focus:outline-none focus:border-gray-400 focus:ring-0 cursor-pointer"
              >
                <option value="" disabled hidden>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender?.message}</p>}
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
              {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password?.message}</p>}
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
              {errors.rePassword && <p className="text-red-500 text-sm mt-1">{errors.rePassword?.message}</p>}
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