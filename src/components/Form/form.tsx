"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { formSchema } from "./schema"
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

import {useTranslations} from 'next-intl';

export function ContactForm() {

    const t = useTranslations('select');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
      service: "Empresa"
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {

    await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(async (response) => {
      if (response.status !== 200 && !response.ok) throw new Error();
      toast.success(t('formSuccess'))
      form.reset()
    })
      .catch(() => {
        toast.error(t('formError'))
      })
  }

  return (
    <Form {...form}>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 z-50 bg-slate-800 rounded-lg p-5 text-slate-100">
        <div className="grid grid-cols-2 gap-4">

          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-slate-100">{t("first")}</FormLabel>
                <FormControl>
                  <Input autoComplete="cc-given-name" placeholder="name" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="space-y-2">
                <FormLabel className="text-slate-100">{t("last")}</FormLabel>
                <FormControl>
                  <Input type="text" autoComplete="cc-family-name" placeholder="Singh" {...field} />
                </FormControl>
                
                <FormMessage />
              </FormItem>
            )} />

        </div>

        <div className="grid grid-cols-2 gap-4">

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-100">Email</FormLabel>
              <FormControl>
                <Input type="email" autoComplete="email" placeholder="me@example.com" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )} />



        <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-100">{t("tel")}</FormLabel>
              <FormControl>
                <Input type="tel" autoComplete="tel" placeholder="+1 (555) 555-5555" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>)} />
            </div>

            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel className="text-slate-100">{t("ser")}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue {...field} placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Residencia">{t("res")}</SelectItem>
                      <SelectItem value="Empresa">{t("emp")}</SelectItem>
                      <SelectItem value="Inmobiliaria">{t("immo")}</SelectItem>
                      <SelectItem value="Conserjeria">{t("con")}</SelectItem>
                    </SelectContent>
                  </Select>
    
                  
                  <FormMessage />
                </FormItem>
              )}
            />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-100">{t("Message")}</FormLabel>
              <FormControl>
                <Textarea id="message" placeholder="Your message..." rows={4} {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>)} />



        <Button className="w-full mt-12" type="submit" aria-label="submit"> Submit </Button>
      </form>
    </Form>
  )
}