import { GalleryVerticalEnd } from "lucide-react"
import { SignupForm } from "@/components/auth/signup-form"

const RegisterPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-6 p-8">
        {/* Logo + Title */}
        <div className="flex items-center justify-center gap-2">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span className="text-lg font-semibold">Acme Inc.</span>
        </div>

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl font-bold">Create your account</h1>
          <p className="text-sm text-muted-foreground">
            Fill in the form below to create your account
          </p>
        </div>

        {/* Form */}
        <SignupForm />
      </div>
    </div>
  )
}

export default RegisterPage
