import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// ✅ Zod schema for form validation
const registerFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  username: z.string().min(4, "Username must be at least 4 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .refine(
      (val) => val.endsWith("@troy.edu") || val.endsWith("@sis.hust.edu.vn"),
      "Email must end with @troy.edu or @sis.hust.edu.vn"
    ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number, and one special character"
    ),
});

type RegisterFormData = z.infer<typeof registerFormSchema>;

export function RegisterFormTemplate({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // ✅ React Hook Form setup (no API or navigation)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  // Dummy handler (no backend call)
  async function onSubmit(data: RegisterFormData) {
    console.log("Form submitted (demo only):", data);
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 border-border">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col items-center text-center gap-2">
                <img
                  src="/troycourselab_logo.svg"
                  alt="TroyCourseLab Logo"
                  className="h-12"
                />
                <h1 className="text-2xl font-bold font-montserrat">
                  Troy Course Lab
                </h1>
                <p className="text-muted-foreground text-balance text-sm font-montserrat">
                  Welcome to Troy Course Lab! Please register to continue.
                </p>
              </div>

              {/* Full Name */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <label htmlFor="lastname" className="block text-sm">
                    Last name
                  </label>
                  <Input
                    id="lastname"
                    type="text"
                    placeholder="Last name"
                    {...register("lastName")}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-600">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="firstname" className="block text-sm">
                    First name
                  </label>
                  <Input
                    id="firstname"
                    type="text"
                    placeholder="First name"
                    {...register("firstName")}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-600">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Username */}
              <div className="flex flex-col gap-3">
                <label htmlFor="username" className="block text-sm">
                  Username
                </label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                />
                {errors.username && (
                  <p className="text-sm text-red-600">
                    {errors.username.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-3">
                <label htmlFor="email" className="block text-sm">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-3">
                <label htmlFor="password" className="block text-sm">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-sm text-red-600">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full text-bold text-white bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                Register
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                If you already have an account,{" "}
                <a href="#" className="underline underline-offset-4">
                  log in here
                </a>
                .
              </div>
            </div>
          </form>

          {/* Right-side image (optional) */}
          <div className="bg-muted relative hidden md:block">
            <img
              src="/placeholderRegister.png"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover object-[25%_50%]"
            />
          </div>
        </CardContent>
      </Card>

      <div className="px-6 text-center text-sm text-balance md:px-0 text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline underline-offset-4">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
