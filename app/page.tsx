import Image from "next/image";
import Navbar from "./(public)/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-4xl">Home Page</h1>
    </div>
  );
}
