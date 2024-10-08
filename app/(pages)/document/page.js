"use client"
import Loader from '@/app/components/loaders/loader';
import { RedocStandalone } from 'redoc';
import { useState } from 'react';

const APIDocs = () => {
    const [loading, setLoading] = useState(true);

    const handleOnLoaded = () => {
        setLoading(false);
    };

    return (
        <div>
            {loading && (
                <div className="custom-loader">
                    <Loader />
                </div>
            )}


            <div style={{ display: loading ? 'none' : 'block' }}>
                <RedocStandalone
                    specUrl="/openapi.json"
                    onLoaded={handleOnLoaded}
                />
            </div>


            <style>
                {`
                .redoc-wrap .loading-bar {
                    display: none !important; /* Hides default Redoc loader */
                }
                .custom-loader {
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    z-index: 9999;
                    font-size: 20px;
                    color: #333;
                    text-align: center;
                }
                `}
            </style>
        </div>
    );
};

export default APIDocs;