import React from 'react';

const Input = ({ label, error, className = '', ...props }) => {
    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && (
                <label className="text-sm font-medium text-[#F1F1F1]/70 mb-1">
                    {label}
                </label>
            )}
            <input
                className="bg-[#1F1F1F] border border-white/10 rounded-md px-4 py-3 text-[#F1F1F1] focus:outline-none focus:border-[#00C896] focus:ring-1 focus:ring-[#00C896]/20 transition-all placeholder:text-white/20"
                {...props}
            />
            {error && (
                <span className="text-red-500 text-xs mt-1">{error}</span>
            )}
        </div>
    );
};

export default Input;
