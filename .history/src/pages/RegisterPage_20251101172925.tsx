import { RegisterForm } from "@/components/auth/register-form"

const RegisterPage = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-end bg-[#680011]"
    >
      <div className="w-full max-w-md space-y-6 p-8 bg-white/80 mr-12">
        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-3">
          <img
            src="/tcl_logo.svg"
            alt="Troy Logo"
            className="h-8 w-8"
          />
          <span className="text-2xl font-semibold">Troy Course Lab</span>
        </div>

        {/* Form */}
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
