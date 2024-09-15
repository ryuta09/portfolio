'use client'
import React, { useEffect } from 'react'
import SectionHeading from './sectionHeading'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../components/ui/form'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { useMailForm } from '@/hook/useMailForm'
import ClipLoader from 'react-spinners/ClipLoader'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion } from 'framer-motion'

export default function MailForm() {
  const { form, onSubmit } = useMailForm()
  useEffect(() => {
    if (form.formState.isSubmitSuccessful) {
      toast.success('メール送信に成功しました。')
    }
  }, [form.formState.isSubmitSuccessful])
  return (
    <>
      <motion.section
        id="contact"
        className="max-w-[800px] w-full flex flex-col gap-2 mt-20"
        variants={{
          offscreen: {
            y: 100,
            opacity: 0,
          },
          onscreen: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
      >
        <SectionHeading title="Contact" />
        <Form {...form}>
          <ToastContainer />
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input type="text" placeholder="氏名" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="メールアドレス"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Input type="text" placeholder="件名" {...field} />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel />
                  <FormControl>
                    <Textarea
                      placeholder="本文"
                      {...field}
                      className="min-h-[250px]"
                    />
                  </FormControl>
                  <FormDescription />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="max-w-[100px] w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? <ClipLoader /> : '送信'}
            </Button>
          </form>
        </Form>
      </motion.section>
    </>
  )
}
