import { GalleryVerticalEnd } from "lucide-react"
import { SignupForm } from "@/components/auth/signup-form"

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-md p-8 shadow-sm">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold">Acme Inc.</span>
        </div>

        {/* Form */}
        <SignupForm />
      </div>
    </div>
  )
}

export default RegisterPage
