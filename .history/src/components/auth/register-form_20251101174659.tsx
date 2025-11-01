import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const formSchema = z
  .object({
    name: z.string().min(1, "Full name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type FormData = z.infer<typeof formSchema>

export function RegisterForm({ className, ...props }: React.ComponentProps<"form">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6 max-w-md mx-auto", className)}
      {...props}
    >
      <div className="text-center">
        <h2 className="text-2xl font-bold">Create your account</h2>
        <p className="text-muted-foreground text-sm">
          Fill in the form below to create Troy Course Lab account
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="font-medium">Full Name</label>
        <Input id="name" type="text" placeholder="John Doe" {...register("name")} />
        {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">Email</label>
        <Input id="email" type="email" placeholder="m@example.com" {...register("email")} />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        <p className="text-xs text-gray-500">
          We&apos;ll use this to contact you. We won&apos;t share your email.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-medium">Password</label>
        <Input id="password" type="password" {...register("password")} />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
        <p className="text-xs text-gray-500">Must be at least 8 characters long.</p>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="confirmPassword" className="font-medium">Confirm Password</label>
        <Input id="confirmPassword" type="password" {...register("confirmPassword")} />
        {errors.confirmPassword && (
          <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
        )}
        <p className="text-xs text-gray-500">Please confirm your password.</p>
      </div>

      <Button type="submit">Create Account</Button>

      <p className="text-center text-sm">
        Already have an account? <a href="#" className="text-blue-500">Sign in</a>
      </p>
    </form>
  )
}
