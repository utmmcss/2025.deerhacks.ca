import Image from "next/image";

const LinkButton: React.FC<{ href: string; text: string }>= ({ href, text }) =>
  <a href={href} className="p-4 bg-slate-800 hover:bg-slate-600 text-amber-200 duration-200 rounded-lg">
    {text}
  </a>

export default function Home() {
  return (
    <div>
      <main className="w-screen h-screen flex flex-col gap-8 items-center justify-center bg-white">
        <Image src="/logo-2025.png" alt="MCSS Logo" width={600} height={500} />
        <p className="text-slate-900">
          This page is under construction for DeerHacks IV
        </p>
        <p className="text-slate-900 font-bold txe">
          See our past hackathons
        </p>
        <div className="flex gap-8">
          <LinkButton href="https://2024.deerhacks.ca" text="DeerHacks III (2024)" />
          <LinkButton href="https://2023.deerhacks.ca" text="DeerHacks II (2023)" />
          <LinkButton href="https://2022.deerhacks.ca" text="DeerHacks I (2022)" />
        </div>
      </main>
    </div>
  );
}
