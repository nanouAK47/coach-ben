"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Il doit avoir au moins 3 caractères.",
  }),
  email: z
    .string()
    .min(5, { message: "Il doit avoir au moins 5 caractères." })
    .email("Ce n'est pas un email valide."),
  message: z.string().min(10, {
    message: "Il doit avoir au moins 10 caractères.",
  }),
});

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div id="contact" className="py-5 my-10 px-5">
      <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <h2 className="text-4xl -tracking-wider py-5 text-center mb-5 underline decoration-primary decoration-[7px] underline-offset-8">
        Contact
      </h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-xl m-auto"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Votre prénom..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Votre email..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Votre message..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <p className="text-muted-foreground text-sm">
            Envoyer directement un email à :{" "}
            <a href="mailto:nael.boulayoune@gmail.com" className="underline">
              nael.boulayoune@gmail.com
            </a>
          </p>
          <Button type="submit">
            {loading ? "Chargement..." : "Envoyer !"}
          </Button>
        </form>
      </Form>
    </div>
  );
};
