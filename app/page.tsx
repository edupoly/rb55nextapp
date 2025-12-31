import Image from "next/image";

import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth()
    if(!session){
        redirect("/login")
    }
  return (
    <h1 className="text-3xl font-bold text-center">Hello Edupoly</h1>
  );
}
