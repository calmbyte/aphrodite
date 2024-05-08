'use client';

import React, { HTMLProps, forwardRef } from 'react';

export type InputProps = {
  label: string;
  containerClassName?: string;
} & HTMLProps<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, containerClassName = '', ...inputProps }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${containerClassName}`}>
        <label htmlFor={name} className="text-translucent-8">
          {label}
        </label>
        <input {...inputProps} name={name} ref={ref} />
      </div>
    );
  }
);
