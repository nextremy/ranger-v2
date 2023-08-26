"use client";

import { Button } from "@/components/button";
import { Form } from "@/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler, useId } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});
type FormSchema = z.infer<typeof formSchema>;

export default function Login() {
  const usernameInputId = useId();
  const passwordInputId = useId();
  const form = useForm<FormSchema>({ resolver: zodResolver(formSchema) });
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    form.handleSubmit(async (data) => {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        if (response.status === 401) {
          form.setError("root", {
            message: "Invalid username or password",
          });
          return;
        }
        form.setError("root", { message: "Unknown server error" });
        return;
      }
      router.replace("/home");
    })(event);
  };

  return (
    <form
      className="flex w-full max-w-sm flex-col rounded-lg border border-gray-300 p-4 dark:border-gray-700"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-xl font-bold">Log in</h1>
      <Form.Label className="mt-4" htmlFor={usernameInputId}>
        Username
      </Form.Label>
      <Form.TextInput
        className="mt-2"
        id={usernameInputId}
        type="text"
        {...form.register("username")}
      />
      {form.formState.errors.username ? (
        <Form.Error className="mt-2">
          {form.formState.errors.username.message}
        </Form.Error>
      ) : null}
      <Form.Label className="mt-8" htmlFor={passwordInputId}>
        Password
      </Form.Label>
      <Form.TextInput
        className="mt-2"
        id={passwordInputId}
        type="password"
        {...form.register("password")}
      />
      {form.formState.errors.password ? (
        <Form.Error className="mt-2">
          {form.formState.errors.password.message}
        </Form.Error>
      ) : null}
      <Button className="mt-8" type="submit">
        Log in
      </Button>
      {form.formState.errors.root ? (
        <Form.Error className="mt-4 text-center">
          {form.formState.errors.root.message}
        </Form.Error>
      ) : null}
      <p className="mt-4 text-center">
        Don{"'"}t have an account?{" "}
        <Link
          className="text-blue-700 hover:underline dark:text-blue-300"
          href="/register"
        >
          Register here.
        </Link>
      </p>
    </form>
  );
}
