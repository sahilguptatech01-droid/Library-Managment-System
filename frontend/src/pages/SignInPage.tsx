import { SignIn } from "@clerk/react";
import { LibraryLogo } from "../compoents/LibraryLogo";
import Banner from "../compoents/Banner";
import { useAuth } from "@clerk/react";
import Loading from "../compoents/Loading";

const SignInPage = () => {
    const { isLoaded} = useAuth();

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Mobile / Top Branding */}
      <div className="absolute left-5 top-6 z-20 sm:left-8 sm:top-8">
        <LibraryLogo />
      </div>

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* Left Side - Hidden on Mobile/Tablet */}
        <div className="hidden lg:flex">
          <Banner />
        </div>

        {/* Right Side - Clerk */}
        {!isLoaded?(<Loading  className="w-full h-full bg-transparent min-h-100"/>):
        <div className="flex min-h-screen items-center justify-center px-4 pt-20 pb-8 lg:px-8 lg:pt-8">
          <SignIn
            appearance={{
              variables: {
                colorBackground: "#1a1a1a",
                colorForeground: "#ffffff",
                colorPrimary: "#0066cc",
                colorInput: "#2a2a2a",
                colorInputForeground: "#ffffff",
                colorNeutral: "#333333",
                colorMuted: "#444444",
                colorMutedForeground: "#cccccc",
              },
              elements: {
                socialButtonsBlockButton: {
                  color: "white",
                },
              },
            }}
          />
        </div>
}
      </div>
    </div>
  );
};

export default SignInPage;