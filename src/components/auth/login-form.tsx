import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})

type LoginData = z.infer<typeof loginSchema>

export function LoginForm({ className, ...props }: React.ComponentProps<"form">) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginData) => {
    console.log("Login submitted:", data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("flex flex-col gap-6 max-w-md mx-auto", className)}
      {...props}
    >
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold">Sign in to your account</h2>
        <p className="text-muted-foreground text-sm">
          Enter your credentials to access Troy Course Lab
        </p>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="font-medium">Email</label>
        <Input id="email" type="email" placeholder="m@example.com" {...register("email")} />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        <p className="text-xs text-gray-500">
          Use your @troy.edu or @sis.hust.edu.vn email to receive additional benefits.
        </p>
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="font-medium">Password</label>
        <Input id="password" type="password" placeholder="********" {...register("password")} />
        {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
      </div>

      {/* Submit */}
      <Button type="submit">Sign In</Button>

      {/* Footer */}
      <p className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Create one
        </a>
      </p>
    </form>
  )
}
