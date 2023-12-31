import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-32">
      <h1 className="text-8xl text-themeDark font-extrabold">Quizzy</h1>
      <Link href="/categories">
        <button className="bg-themeLight py-4 px-8 rounded-full text-xl font-bold text-themeDark]">Play</button>
      </Link>
    </div>
  );
}
