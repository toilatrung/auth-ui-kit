import { SignupForm } from "@/components/auth/signup-form"

const RegisterPage = () => {
  return (
<div
  className="flex min-h-screen items-center justify-end bg-contain bg-no-repeat bg-center"
  style={{ backgroundImage: "url('/authetication_page_png.png')" }}
>
      <div className="w-full max-w-md space-y-6 p-8 bg-white/80 rounded-2xl shadow-lg mr-12">
        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-3">
          <img
            src="/tcl_logo.svg"
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
