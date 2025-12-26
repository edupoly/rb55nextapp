import AllUsers from "./AllUsers";

export default function UsersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
        <AllUsers></AllUsers>
        <> {children}</>
    </div>
      
  );
}
