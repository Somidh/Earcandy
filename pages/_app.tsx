import Navbar from "@/components/Navbar";
import AppWrapper from "@/server/wrapper/AppWrapper";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <AppWrapper>
        <div className="px-40 bg-primary">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </AppWrapper>
    </UserProvider>
  );
}

export default MyApp;
