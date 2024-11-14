import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="w-screen h-screen flex flex-col gap-8 items-center justify-center bg-white">
        <Link href="https://mcss.club">
          <Image src="/logo-2025.png" alt="MCSS Logo" width={600} height={500} />
        </Link>
        <p className="text-primary-background">
          This page is under construction for DeerHacks IV
        </p>
        <p className="text-primary-background font-bold txe">
          See our past hackathons
        </p>
        <div className="flex gap-x-8 gap-y-4 flex-col md:flex-row">
          <Link className={buttonVariants({ variant: 'default' })} href="https://2022.deerhacks.ca">
            DeerHacks I (2022)
          </Link>
          <Link className={buttonVariants({ variant: 'default' })} href="https://2023.deerhacks.ca">
            DeerHacks II (2023)
          </Link>
          <Link className={buttonVariants({ variant: 'default' })} href="https://2024.deerhacks.ca">
            DeerHacks III (2024)
          </Link>
        </div>
      </main>
    </div>
  );
}
