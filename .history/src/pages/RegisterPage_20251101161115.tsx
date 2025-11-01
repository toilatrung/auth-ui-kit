import { GalleryVerticalEnd } from "lucide-react"
import { SignupForm } from "@/components/auth/signup-form"

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen flex-col  justify-end bg-background">
      <div className="w-full max-w-md space-y-6 p-8">
        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-2">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
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
