import { RegisterForm } from "@/components/auth/register-form"

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen bg-[#680011]">
      {/* Nửa bên trái (trống hoặc sau này có thể thêm banner, text, v.v.) */}
      <div className="w-1/2"></div>

      {/* Nửa bên phải chứa logo và form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white/90 p-12">
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
