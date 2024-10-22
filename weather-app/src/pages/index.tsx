// App.tsx
import { device } from "@/styles/style.css";
import Setting from "@/pages/Setting"
import Main from "@/pages/Main"
export default function Home() {
  return (
    <>
      <div className={device}>
        {/* <Setting/> */}
        <Main/>
      </div>
    </>
  );
}
