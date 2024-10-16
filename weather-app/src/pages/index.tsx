// App.tsx
import { device } from "@/styles/style.css";
import Setting from "@/pages/Setting"
export default function Home() {
  return (
    <>
      <div className={device}>
        <Setting/>
      </div>
    </>
  );
}
