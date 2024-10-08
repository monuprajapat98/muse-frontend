"use client";
import React, { useState } from 'react';
import { Button, Input } from "@nextui-org/react";
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignUp() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
    });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
    });

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
        const { first_name, last_name, email, password, confirm_password } = formData;
        let isValid = true;
        setErrors({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: '',
        });

       
        if (!first_name) {
            setErrors((prev) => ({ ...prev, first_name: 'First name is required.' }));
            isValid = false;
        }

 
        if (!last_name) {
            setErrors((prev) => ({ ...prev, last_name: 'Last name is required.' }));
            isValid = false;
        }

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

        if (!confirm_password) {
            setErrors((prev) => ({ ...prev, confirm_password: 'Please confirm your password.' }));
            isValid = false;
        } else if (password !== confirm_password) {
            setErrors((prev) => ({ ...prev, confirm_password: 'Passwords do not match.' }));
            isValid = false;
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

    
        if (!validateForm()) return;

        setLoading(true);

        try {
            const response = await axios.post('http://localhost:8088/auth/register', formData);
            console.log(response.data);

            router.push('/signin');
        } catch (error) {
            console.error('Error during sign up:', error);
        } finally {
            setLoading(false);
        }
    };

    const formFields = [
        { id: 'first_name', label: 'First Name', type: 'text', placeholder: 'Enter your first name' },
        { id: 'last_name', label: 'Last Name', type: 'text', placeholder: 'Enter your last name' },
        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
        { id: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' },
        { id: 'confirm_password', label: 'Confirm Password', type: 'password', placeholder: 'Confirm your password' },
    ];

    return (
        <>
            <div className="min-h-[calc(100vh-145px)] flex items-center justify-center">
                <div className="w-full max-w-md">
                    <h2 className="text-[32px] font-semibold text-center mb-6 text-grey">Sign up</h2>
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

                        <div className="flex items-center justify-center">
                            <Button
                                type="submit" 
                                className="hover:bg-blue bg-white border-blue border-[1px] rounded-lg text-grey hover:text-white hover:!opacity-100"
                                disabled={loading} 
                            >
                                {loading ? 'Signing up...' : 'Sign up'} 
                            </Button>
                        </div>
                    </form>

                    <div className="flex items-center justify-center mt-5">
                        <p className="text-[#989898] text-[16px] flex items-center justify-center gap-2">
                            Already have an account?
                            <span className="text-blue font-medium cursor-pointer" onClick={() => router.push('/signin')}>Log In.</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
