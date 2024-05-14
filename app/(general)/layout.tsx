import { Navbar } from "@/components";

export default function GeneralLayout({children}: {children: React.ReactNode;}) {
  return (
    <>
        <Navbar />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <h1>Hello Root Layout General</h1>
            <h1 style={{textAlign: "center", fontSize: "8rem "}}>{children}</h1> 
        </div>
    </>
  );
}