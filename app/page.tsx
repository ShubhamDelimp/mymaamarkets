import dynamic from "next/dynamic";
import styles from "./index.module.css";
const HP = dynamic(()=>import("@/components/HP"), { ssr: true });

export default function Page(){
  return (
    <main className="main-canvas">
      <HP />
    </main>
  );
}
