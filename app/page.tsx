import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-7xl">Hola mundo</h1>
      <button className="bg-blue-700 py-3 px-2 border-4" >
        <Link href={"./about"}>
          Ir a funcionalidad
        </Link>
      </button>
    </main>
  );
}
