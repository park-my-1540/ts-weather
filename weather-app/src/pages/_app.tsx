import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil"; // RecoilRoot 가져오기
export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}