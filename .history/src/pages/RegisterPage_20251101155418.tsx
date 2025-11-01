import { GalleryVerticalEnd } from "lucide-react";
import { SignupForm } from "@/components/auth/signup-form";

const RegisterPage = () => {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left side with background image */}
      <div
        className="relative hidden lg:block bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg')",
        }}
      >
        {/* Optional dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
      </div>

      {/* Right side with form */}
      <div className="flex flex-col justify-center px-6 md:px-16">
        <div className="flex justify-start mb-8">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="w-full max-w-md ml-auto">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
