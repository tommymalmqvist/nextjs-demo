import Image from 'next/image'
import Table from "@/app/components/Table";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="relative flex place-items-center">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mt-12 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left">
          <Table />
      </div>
    </main>
  )
}
