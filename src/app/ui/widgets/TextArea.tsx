'use client';

import React, { HTMLProps, forwardRef } from 'react';

export type TextArea = {
  label: string;
  containerClassName?: string;
} & HTMLProps<HTMLTextAreaElement>;

// eslint-disable-next-line react/display-name
export const TextArea = forwardRef<HTMLTextAreaElement, TextArea>(
  ({ name, label, containerClassName = '', ...textAreaProps }, ref) => {
    return (
      <div className={`flex flex-col gap-2 ${containerClassName}`}>
        <label htmlFor={name} className="text-translucent-8">
          {label}
        </label>
        <textarea {...textAreaProps} name={name} ref={ref} />
      </div>
    );
  }
);
