/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useRef } from 'react';
import {
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
} from 'react-icons/fa';

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit = async (data: ContactFormData) => {
    try {
      if (!formRef.current) return;

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message!');
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 md:px-20 grid md:grid-cols-2 gap-10 bg-background text-foreground">
      {/* Contact Form */}
      <div>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400">
            Get in Touch
          </h2>
          <div>
            <Input placeholder="Your Name" {...register('name')} />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input placeholder="Your Email" {...register('email')} />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Textarea placeholder="Your Message" rows={6}  {...register('message')} />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>

        {/* CTA Buttons */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            WhatsApp
          </a>

          <a
            href="https://www.youtube.com/@yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300"
          >
            <FaYoutube className="text-xl" />
            YouTube
          </a>

          <a
            href="https://www.instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-pink-600 hover:bg-pink-700 rounded-lg transition-all duration-300"
          >
            <FaInstagram className="text-xl" />
            Instagram
          </a>

          <a
            href="https://t.me/yourtelegram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300"
          >
            <FaTelegramPlane className="text-xl" />
            Telegram
          </a>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-[400px] md:h-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14393.356137883125!2d85.1067803037594!3d25.5936480416968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed581270368427%3A0xe526d92f4bacc843!2sGardanibagh%2C%20Patna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1750911542477!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
