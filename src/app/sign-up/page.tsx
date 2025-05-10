"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaEyeSlash, FaGoogle, FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col gap-4 w-[400px] p-8 rounded-lg shadow-lg bg-white">
        <div className="flex flex-col items-center justify-center gap-3">
          <Link href="/" className="">
            <Image src="/logo.png" alt="logo" width={64} height={64} />
          </Link>
          <span className="hidden lg:block text-2xl">Appl.ai</span>
        </div>
        <input
          type="text"
          placeholder="Enter your name"
          className="p-2 border rounded-md mt-[10px]"
        />
        <input
          type="text"
          placeholder="Enter your email"
          className="p-2 border rounded-md"
        />
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Choose a password"
            className="p-2 border rounded-md w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <FaEyeSlash className="w-5 h-5" />
            ) : (
              <FaEye className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            className="p-2 border rounded-md w-full"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? (
              <FaEyeSlash className="w-5 h-5" />
            ) : (
              <FaEye className="w-5 h-5" />
            )}
          </button>
        </div>
        <button className="bg-customSkyLight text-gray-500 text-bold p-2 rounded-md hover:bg-customSky transition-colors mt-5">
          Sign Up
        </button>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-gray-500">Already a member?</span>
          <a href="/" className="text-sm text-gray-500">
            Sign In
          </a>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <span className="text-sm text-gray-400">Or you can sign up with</span>
          <div className="flex gap-6 mt-2">
            <button className="p-2 rounded-full transition-colors">
              <FaGoogle className="w-6 h-6 text-gray-400 hover:text-red-500" />
            </button>
            <button className="p-2 rounded-full transition-colors">
              <FaGithub className="w-6 h-6 text-gray-400 hover:text-black" />
            </button>
            <button className="p-2 rounded-full transition-colors">
              <FaFacebook className="w-6 h-6 text-gray-400 hover:text-blue-500" />
            </button>
            <button className="p-2 rounded-full transition-colors">
              <FaLinkedin className="w-6 h-6 text-gray-400 hover:text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
