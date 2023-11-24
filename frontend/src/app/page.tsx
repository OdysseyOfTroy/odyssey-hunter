import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <div className="flex flex-col items-center h-screen flex-grow">
        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-sky-200 before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-[#01ccff] before:dark:opacity-10 after:dark:from-[#01ccff] after:dark:via-[#01ccff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] lg:flex-1">
          <Image
            src="/logo_iceborne.png"
            alt="iceborne Logo"
            width={380}
            height={50}
            priority
          />
        </div>

        <div className="flex flex-col w-full h-full text-center lg:flex-1 lg:flex-row">
          <a
            className="flex flex-grow justify-center items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-2xl font-semibold">
              Monsters{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            className="flex flex-grow justify-center items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`text-2xl font-semibold`}>
              Equipment{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>

          <a
            className="flex flex-grow justify-center items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`text-2xl font-semibold`}>
              Items{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </a>
        </div>
      </div>
    </main>
  )
}
