import { RegisterForm } from "@/components/auth/register-form"

const RegisterPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col md:flex-row bg-white md:bg-[#680011]">
      {/* Form section */}
      <div className="flex flex-col justify-center items-start w-full md:max-w-md md:ml-auto bg-white p-6 md:bg-white/75 md:backdrop-blur-sm md:p-10 shadow-none md:shadow-lg">
        {/* Logo + Title */}
        <div className="flex items-center justify-start md:justify-center gap-3 mb-6">
          <img
            src="/tcl_logo.svg"
            alt="Troy Logo"
            className="h-20 w-auto md:h-30"
          />
        </div>

        {/* Form */}
        <RegisterForm />
      </div>

      {/* Logo Classic Troy ở góc trái bên dưới (ẩn trên mobile để tránh chiếm chỗ) */}
      <img
        src="/classic_troy_logo.svg"
        alt="Classic Troy Logo"
        className="hidden md:block absolute bottom-4 left-4 w-[25vw] max-w-[300px] min-w-[140px] h-auto opacity-35"
      />
    </div>
  )
}

export default RegisterPage
