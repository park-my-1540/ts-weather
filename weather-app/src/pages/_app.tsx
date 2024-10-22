import "@/styles/globals.css";
import { device } from "@/styles/style.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil"; // RecoilRoot 가져오기
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }:AppProps) {
  return (
    <RecoilRoot>
      <div className={device}>
      <AnimatePresence mode="wait" initial={false}>
          <Component {...pageProps} />

      </AnimatePresence>
          </div>
    </RecoilRoot>
  );
}
