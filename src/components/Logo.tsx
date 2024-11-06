import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ variant = 'dark', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  const colorClasses = {
    light: 'text-white',
    dark: 'text-neutral-900'
  };

  return (
    <div className={`font-serif ${sizeClasses[size]} ${colorClasses[variant]} flex items-center`}>
      <div className="relative">
        <span className="absolute -inset-1 border border-current transform -skew-x-12"></span>
        <span className="relative">H</span>
      </div>
      <div className="ml-1">G</div>
      <span className="ml-3 font-light tracking-wide">HARSHITA GUPTA</span>
    </div>
  );
}