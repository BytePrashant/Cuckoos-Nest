import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@repo/ui/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Button appName="web">chut</Button>
      Dhat teri maa ki chut
    </>
  );
}
