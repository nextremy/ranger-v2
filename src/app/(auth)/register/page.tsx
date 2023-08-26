"use client";

import { Form } from "@/components/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEventHandler, useId } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z
  .object({
    username: z
      .string()
      .min(1, "Username is required")
      .max(12, "Username cannot contain more than 12 characters")
      .regex(
        /^[a-z0-9_]*/,
        "Username can contain only lowercase letters, numbers, and underscores",
      ),
    displayName: z
      .string()
      .min(1, "Display name is required")
      .max(24, "Display name cannot contain more than 24 characters"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password cannot contain fewer than 8 characters")
      .max(256, "Password cannot contain more than 256 characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });
type FormSchema = z.infer<typeof formSchema>;

export default function Register() {
  const usernameInputId = useId();
  const displayNameInputId = useId();
  const passwordInputId = useId();
  const confirmPasswordInputId = useId();
  const form = useForm<FormSchema>({ resolver: zodResolver(formSchema) });
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    form.handleSubmit(async (data) => {
      const response = await fetch("/api/users/register", {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        if (response.status === 409) {
          form.setError("username", { message: "Username is taken" });
          return;
        }
        form.setError("root", { message: "Unknown server error" });
        return;
      }
      router.replace("/login");
    })(event);
  };

  return (
    <form
      className="flex w-full max-w-sm flex-col rounded-lg border border-gray-300 p-4 dark:border-gray-700"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-xl font-bold">Register</h1>
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
      <Form.Label className="mt-8" htmlFor={displayNameInputId}>
        Display name
      </Form.Label>
      <Form.TextInput
        className="mt-2"
        id={displayNameInputId}
        type="text"
        {...form.register("displayName")}
      />
      {form.formState.errors.displayName ? (
        <Form.Error className="mt-2">
          {form.formState.errors.displayName.message}
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
      <Form.Label
        className="mt-8 duration-150"
        htmlFor={confirmPasswordInputId}
      >
        Confirm password
      </Form.Label>
      <Form.TextInput
        className="mt-2"
        id={confirmPasswordInputId}
        type="password"
        {...form.register("confirmPassword")}
      />
      {form.formState.errors.confirmPassword ? (
        <Form.Error className="mt-2">
          {form.formState.errors.confirmPassword.message}
        </Form.Error>
      ) : null}
      <button
        className="mt-8 h-12 rounded-md bg-blue-700 font-bold text-gray-100 transition-colors duration-150 hover:bg-blue-800 dark:bg-blue-300 dark:text-gray-900 dark:hover:bg-blue-400"
        type="submit"
      >
        Register
      </button>
      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link
          className="text-blue-700 hover:underline dark:text-blue-300"
          href="/login"
        >
          Log in here.
        </Link>
      </p>
    </form>
  );
}
