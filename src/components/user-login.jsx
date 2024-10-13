import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";

export function UserLoginOrSignup({ ...props }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const router = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (
        name === localStorage.getItem("name") &&
        password === localStorage.getItem("password")
      ) {
        localStorage.setItem("isLogin", "true");
        router("/start-quizy");
      } else {
        alert("Incorrect username or password");
      }
    } else {
      if (password === confirmPassword) {
        localStorage.setItem("name", name);
        localStorage.setItem("password", password);
        alert("Account created successfully. You can now log in.");
        setIsLogin(true); 
      } else {
        alert("Passwords do not match.");
      }
    }
  };

  return (
    <Card className='flex flex-col justify-center w-full h-full '>
      <CardHeader>
        <CardTitle>{isLogin ? "Login" : "Sign Up"} to your account</CardTitle>
        <CardDescription>
          {isLogin
            ? "Enter your credentials to access your account."
            : "Create a new account."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className='grid w-full items-center gap-4'>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='name'>Name</Label>
              <Input
                onChange={(e) => setName(e.target.value)}
                id='name'
                placeholder='Enter your name'
                type='text'
                value={name}
                required
              />
            </div>
            <div className='flex flex-col space-y-1.5'>
              <Label htmlFor='password'>Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                id='password'
                placeholder='Enter your password'
                type='password'
                value={password}
                required
              />
            </div>
            {!isLogin && (
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='confirmPassword'>Confirm Password</Label>
                <Input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  id='confirmPassword'
                  placeholder='Confirm your password'
                  type='password'
                  value={confirmPassword}
                  required
                />
              </div>
            )}
          </div>
          <CardFooter className='flex flex-col w-full mt-5'>
            <Button type='submit' className='bg-white text-black border hover:bg-black hover:text-white border-b-4 border-r-4 border-black w-full'>
              {isLogin ? "Login" : "Sign Up"}
            </Button>
          </CardFooter>
        </form>
        <h1 className='mt-4 text-center'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <Link
            to={isLogin ? "/signup" : "/login"}
            className='text-blue-300 underline cursor-pointer'
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? " Sign Up" : " Login"}
          </Link>
        </h1>
      </CardContent>
    </Card>
  );
}
