import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil"; // RecoilRoot 가져오기
import Layout from '@/components/Layout';
export default function App({ Component, pageProps }:AppProps) {

  return (
    <RecoilRoot>
      <Layout> 
          <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
