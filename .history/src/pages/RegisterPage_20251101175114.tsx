import { RegisterForm } from "@/components/auth/register-form"

const RegisterPage = () => {
  return (
    <div className="relative flex min-h-screen bg-[#680011]">
      {/* Phần form chiếm toàn bộ chiều cao, nằm bên phải */}
      <div className="flex flex-col justify-center items-center w-full max-w-md ml-auto bg-white/75 backdrop-blur-sm p-10 shadow-lg">
        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src="/tcl_logo.svg"
            alt="Troy Logo"
            className="h-12 w-auto"
          />
        </div>

        {/* Form */}
        <RegisterForm />
      </div>

      {/* Logo Classic Troy ở góc trái bên dưới */}
      <img
        src="/classic_troy_logo.svg"
        alt="Classic Troy Logo"
        className="h-45 absolute bottom-4 left-4 h-12 w-auto opacity-80"
      />
    </div>
  )
}

export default RegisterPage
