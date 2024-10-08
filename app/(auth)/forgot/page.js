"use client";
import { useRouter } from 'next/navigation'
import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import OtpInput from "react-otp-input";

export default function ForgotPassword() {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState("");

    const handleChange = (code) => setCode(code);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., validation, API call, etc.)
        console.log({ email, password });
    };
    return (
        <>
            <div className="min-h-[calc(100vh-145px)]  flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-[32px] font-semibold text-center mb-6 text-grey">Forgot password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4 inputField">
                            <label className="block text-gray text-sm font-medium mb-2 text-[#989898]" htmlFor="email">
                                Email Address
                            </label>
                            <Input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                bordered
                                placeholder="Enter your email"
                                className="w-full"
                                color="primary"
                                radius="sm"
                                required
                            />
                        </div>
                        <div className="mb-4 inputField inputFieldOtp">
                            <label className="block text-gray text-sm font-medium mb-2 text-[#989898]" htmlFor="email">
                                OTP
                            </label>
                            <OtpInput
                                value={code}
                                onChange={handleChange}
                                numInputs={6}
                                separator={<span style={{ width: "8px" }}></span>}
                                isInputNum={true}
                                shouldAutoFocus={true}
                                renderInput={(props) => <input {...props} />}
                                inputStyle={{
                                    border: "1px solid blue",
                                    borderRadius: "8px",
                                    width: "54px",
                                    height: "54px",
                                    fontSize: "16px",
                                    color: "#000",
                                    fontWeight: "500",
                                    caretColor: "blue"
                                }}
                                focusStyle={{
                                    border: "1px solid red",
                                    outline: "none"
                                }}
                            />
                        </div>

                        <div className="flex items-center justify-center">
                            <Button
                                className="hover:bg-blue bg-white border-blue border-[1px] rounded-lg text-grey hover:text-white hover:!opacity-100"
                            >
                                Send Code
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}