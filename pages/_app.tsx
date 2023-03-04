import AppWrapper from "@/server/wrapper/AppWrapper";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </UserProvider>
  );
}

export default MyApp;
