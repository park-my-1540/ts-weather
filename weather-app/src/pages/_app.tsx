import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil"; // RecoilRoot 가져오기
import Layout from '@/components/atom/Layout';

export default function App({ Component, pageProps }:AppProps) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Layout> 
            <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
