import Image from "next/image";


import { redirect } from "next/navigation";
import { auth } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await auth()
    if(!session){
        redirect("/login")
    }
  return (
    <h1 className="text-3xl font-bold text-center">Hello Edupoly</h1>
  );
}
