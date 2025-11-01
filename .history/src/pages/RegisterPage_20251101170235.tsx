import { SignupForm } from "@/components/auth/signup-form"

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 p-8">
        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-3">
          <img
            src="/troy_logo.svg"
            alt="Troy Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold">Troy Course Lab</span>
        </div>

        {/* Form */}
        <SignupForm />
      </div>
    </div>
  )
}

export default RegisterPage
