import { SignupForm } from "@/components/auth/signup-form"

const RegisterPage = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-start justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/authetication_page_png.png')" }}
    >
      <div className="w-full max-w-md space-y-6 p-8">
        {/* Logo + Title */}
        <div className="flex items-center justify-start gap-3">
          <img
            src="/troy_logo.svg"
            alt="Troy Logo"
            className="h-8 w-8"
          />
          <span className="text-xl font-semibold text-foreground">
            Troy Course Lab
          </span>
        </div>

        {/* Form */}
        <SignupForm />
      </div>
    </div>
  )
}

export default RegisterPage
