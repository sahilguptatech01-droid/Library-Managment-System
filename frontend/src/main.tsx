import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/react'



const key=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
const signInFallbackRedirectUrl=import.meta.env.VITE_CLERK_SIGN_IN_FORCE_REDIRECT_URL
const signUpFallbackRedirectUrl=import.meta.env.VITE_CLERK_SIGN_UP_FORCE_REDIRECT_URL
const signInForceRedirectUrl=import.meta.env.VITE_CLERK_SIGN_IN_FORCE_REDIRECT_URL
const signUpForceRedirectUrl=import.meta.env.VITE_CLERK_SIGN_UP_FORCE_REDIRECT_URL
const signInUrl=import.meta.env.VITE_CLERK_SIGN_IN_URL
const signUpUrl=import.meta.env.VITE_CLERK_SIGN_UP_URL





createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={key} signInFallbackRedirectUrl={signInFallbackRedirectUrl} signUpFallbackRedirectUrl={signUpFallbackRedirectUrl} afterSignOutUrl={"/"} signInForceRedirectUrl={signInForceRedirectUrl} signUpForceRedirectUrl={signUpForceRedirectUrl} signInUrl={signInUrl} signUpUrl={signUpUrl}>
      <App />
    </ClerkProvider>
  
 
  </StrictMode>,
)
