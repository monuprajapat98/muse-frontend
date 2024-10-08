"use client"
import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import { useRouter } from 'next/navigation';

export default function Profile() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., validation, API call, etc.)
        console.log({ email, password });
    };
    return (
        <>
            <div className="min-h-[calc(100vh-145px)]  flex items-center justify-center">
                <div className="w-full max-w-[840px]">
                    <h2 className="text-[32px] font-semibold text-center mb-6 text-grey">Profile</h2>
                    <form onSubmit={handleSubmit} className="grid gap-4 grid-cols-2">
                        <div className="inputField">
                            <label className="block text-gray text-sm font-medium mb-2 text-[#989898]" htmlFor="name">
                                Name
                            </label>
                            <Input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                bordered
                                placeholder="Enter your Name"
                                className="w-full"
                                color="primary"
                                radius="sm"
                                required
                            />
                        </div>
                        <div className="inputField">
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
                        <div className="inputField">
                            <label className="block text-[#989898] text-sm font-medium mb-2" htmlFor="password">
                                Password
                            </label>
                            <Input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                bordered
                                placeholder="Enter your password"
                                className="w-full"
                                color="primary"
                                radius="sm"
                                required
                            />
                        </div>
                        <div className="inputField">
                            <label className="block text-[#989898] text-sm font-medium mb-2" htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <Input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                bordered
                                placeholder="Enter your password"
                                className="w-full"
                                color="primary"
                                radius="sm"
                                required
                            />
                        </div>
                    </form>
                    <div className="flex items-center justify-center mt-6">
                        <Button
                            onClick={(e) => {
                                handleSubmit(e);
                                router.push('/');
                            }}
                            className="hover:bg-blue bg-white border-blue border-[1px] rounded-lg text-grey hover:text-white hover:!opacity-100"
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}