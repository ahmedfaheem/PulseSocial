import React from "react";
import {
  Button,
  Input,
  Label,
  Select,
  ListBox,
} from "@heroui/react";

export default function Register() {
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
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* Full Name */}
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700 block mb-1.5">Full Name</Label>
              <Input id="name" placeholder="John Doe" required variant="bordered" className="w-full" />
            </div>

            {/* Username */}
            <div>
              <Label htmlFor="username" className="text-sm font-medium text-gray-700 block mb-1.5">Username</Label>
              <Input id="username" placeholder="@username" required variant="bordered" className="w-full" />
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700 block mb-1.5">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@email.com"
                required
                variant="bordered"
                className="w-full"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <Label htmlFor="dob" className="text-sm font-medium text-gray-700 block mb-1.5">Date of Birth</Label>
              <Input id="dob" type="date" required variant="bordered" className="w-full" />
            </div>

            {/* Gender Selection (HeroUI v3 Layout) */}
            <div>
              <Select placeholder="Select Gender">
                <Label className="text-sm font-medium text-gray-700 block mb-1.5">Gender</Label>

                <Select.Trigger className="w-full border-2 rounded-xl px-3 py-2 text-left flex items-center justify-between border-gray-200 hover:border-gray-300 transition">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover className="bg-white border border-gray-100 rounded-xl shadow-lg mt-1 p-1">
                  <ListBox>
                    <ListBox.Item id="male" textValue="Male" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
                      Male
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item id="female" textValue="Female" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 cursor-pointer text-gray-700">
                      Female
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-gray-700 block mb-1.5">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                required
                variant="bordered"
                className="w-full"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 block mb-1.5">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="********"
                required
                variant="bordered"
                className="w-full"
              />
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