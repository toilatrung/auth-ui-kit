import { LoginForm } from "@/components/auth/login-form"

const LoginPage = () => {
  return (
    <div className="relative flex min-h-screen flex-col md:flex-row bg-white md:bg-[#680011]">
      {/* Khu vực form + logo */}
      <div className="flex flex-col justify-center items-center w-full md:max-w-md md:ml-auto bg-white p-8 md:bg-white/75 md:backdrop-blur-sm md:p-10 shadow-none md:shadow-lg">
        
        {/* Logo luôn căn giữa */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <img
            src="/tcl_logo.svg"
            alt="Troy Logo"
            className="h-20 md:h-28 w-auto"
          />
        </div>

        {/* Form đăng nhập */}
        <div className="w-full">
          <LoginForm />
        </div>
      </div>

      {/* Logo Classic Troy ở góc trái bên dưới (chỉ hiện trên desktop) */}
      <img
        src="/classic_troy_logo.svg"
        alt="Classic Troy Logo"
        className="hidden md:block absolute bottom-4 left-4 w-[25vw] max-w-[300px] min-w-[140px] h-auto opacity-35"
      />
    </div>
  )
}

export default LoginPage
