"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import axios from 'axios';

export default function SignIn() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({ email: '', password: '' }); // Error messages for each field

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [id]: '',
        }));
    };

    const validateForm = () => {
        const { email, password } = formData;
        let isValid = true;

   
        setErrors({ email: '', password: '' });

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            setErrors((prev) => ({ ...prev, email: 'Email is required.' }));
            isValid = false;
        } else if (!emailPattern.test(email)) {
            setErrors((prev) => ({ ...prev, email: 'Please enter a valid email address.' }));
            isValid = false;
        }

        if (!password) {
            setErrors((prev) => ({ ...prev, password: 'Password is required.' }));
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true); 

        try {
            const response = await axios.post('http://localhost:8088/auth/login', formData);
            console.log(response.data);
            router.push('/home');
        } catch (error) {
            console.error('Error during login:', error);
            setErrors({ email: '', password: 'Invalid email or password. Please try again.' }); // Show error for password
        } finally {
            setLoading(false);
        }
    };

    const formFields = [
        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
        { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
    ];

    return (
        <>
            <div className="min-h-[calc(100vh-145px)] flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-[32px] font-semibold text-center mb-6 text-grey">Login</h2>
                    <form onSubmit={handleSubmit}>
                        {formFields.map((field) => (
                            <div key={field.id} className="mb-4 inputField">
                                <label className="block text-gray text-sm font-medium mb-2 text-[#989898]" htmlFor={field.id}>
                                    {field.label}
                                </label>
                                <Input
                                    type={field.type}
                                    id={field.id}
                                    value={formData[field.id]}
                                    onChange={handleInputChange}
                                    bordered
                                    placeholder={field.placeholder}
                                    className="w-full"
                                    color="primary"
                                    radius="sm"
                                    
                                />
    
                                {errors[field.id] && <p className="text-red-500 text-sm mt-1">{errors[field.id]}</p>}
                            </div>
                        ))}

                        <div className="flex items-center justify-between">
                            <Button
                                type="submit"
                                className="hover:bg-blue bg-white border-blue border-[1px] rounded-lg text-grey hover:text-white hover:!opacity-100"
                                disabled={loading} // Disable button while loading
                            >
                                {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
                            </Button>
                            
                            <span className="text-blue font-[16px]" onClick={() => router.push('/forgot')}>Forgot your password?</span>
                        </div>
                    </form>
                    <div className="flex items-center justify-center mt-5">
                        <p className="text-[#989898] text-[16px] flex items-center justify-center gap-2">
                            Don’t have an account?
                            <span className="text-blue font-medium cursor-pointer" onClick={() => router.push('/signup')}>Get an API Key now.</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
