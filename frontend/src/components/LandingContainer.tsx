type LandingContainerProps = {
    target?: string;
    text: string;
}

export default function LandingContainer({target, text}: LandingContainerProps) {
    return <a
        className="flex flex-grow justify-center items-center group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 "
        href={target}
        rel="noopener noreferrer"
    >
        <h2 className="text-2xl font-semibold">
            {text}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
        </h2>
    </a>
}