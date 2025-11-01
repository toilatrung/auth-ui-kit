import { RegisterForm } from "@/components/auth/register-form"

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen bg-[#680011]">
      {/* Phần form chiếm toàn bộ chiều cao, nằm bên phải */}
      <div className="flex flex-col justify-center items-center w-full max-w-md ml-auto bg-white/60 backdrop-blur-sm p-10 shadow-lg">
        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src="/tcl_logo.svg"
            alt="Troy Logo"
            className="h-10 w-10"
          />
          <span className="text-3xl font-semibold text-[#680011]">
            Troy Course Lab
          </span>
        </div>

        {/* Form */}
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage
