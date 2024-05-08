'use client';

import { useState } from 'react';

import { Input } from './widgets/Input';
import { TextArea } from './widgets/TextArea';

export default function ContactForm() {
  const [formState, setFormState] = useState<
    'idle' | 'sending' | 'error' | 'success'
  >('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    setMessage('');
    setFormState('sending');
    try {
      const formData = new FormData(form);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedbacks`, {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      setMessage(data.message);
      setFormState('success');
    } catch (error) {
      setFormState('error');
      setMessage('Failed to send feedback. Please try again later.');
    } finally {
      setTimeout(() => {
        setFormState('idle');
        setMessage('');
      }, 5000);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="relative grow mt-8 md:mt-32 flex flex-col gap-6"
    >
      <div className="flex flex-col md:flex-row gap-6">
        <Input
          containerClassName="basis-[50%]"
          label="Full Name *"
          required
          name="full_name"
          type="text"
          className="input"
          placeholder="Your Full Name"
        />
        <Input
          containerClassName="basis-[50%]"
          label="Email *"
          required
          name="email"
          type="email"
          className="input"
          placeholder="Your Email"
        />
      </div>
      <TextArea
        required
        label="Message *"
        containerClassName="flex-grow-1"
        className="input resize-none"
        placeholder="Tell us what You think"
        rows={10}
      />
      {!!message && (
        <p
          className={`md:absolute bottom-[5%] ${
            formState === 'error' && 'text-red-500'
          } ${formState === 'success' && 'text-green-400'}`}
        >
          {message}
        </p>
      )}
      <button
        type="submit"
        className="button w-[149px] self-end"
        disabled={formState === 'sending'}
      >
        {formState === 'sending' ? 'Sending' : 'Send'}
      </button>
    </form>
  );
}
