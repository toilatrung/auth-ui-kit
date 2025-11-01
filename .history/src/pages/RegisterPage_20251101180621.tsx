import { RegisterForm } from "@/components/auth/register-form"

const RegisterPage = () => {
  return (
    <div className="relative flex min-h-screen bg-white md:bg-[#680011]">
      {/* Form section */}
      <div className="flex flex-col justify-center items-start w-full max-w-md md:items-center md:ml-auto md:bg-white/75 md:backdrop-blur-sm p-6 md:p-10 shadow-none md:shadow-lg">
        {/* Logo + Title (ẩn trên mobile để gọn hơn, hiện khi md trở lên) */}
        <div className="hidden md:flex items-center justify-center gap-3 mb-6">
          <img
            src="/tcl_logo.svg"
            alt="Troy Logo"
            className="h-30 w-auto"
          />
        </div>

        {/* Form */}
        <RegisterForm />
      </div>

      {/* Logo Classic Troy ở góc trái bên dưới (ẩn khi mobile) */}
      <img
        src="/classic_troy_logo.svg"
        alt="Classic Troy Logo"
        className="hidden md:block absolute bottom-4 left-4 w-[25vw] max-w-[300px] min-w-[140px] h-auto opacity-35"
      />
    </div>
  )
}

export default RegisterPage
