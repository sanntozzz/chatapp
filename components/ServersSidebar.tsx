export function ServersSidebar() {
    return (
        <div
            id="Sidebar"
            className="flex h-screen flex-col items-center gap-2 overflow-y-scroll bg-neutral-900 px-4 py-3"
        >
            <ServerIcon />
            <Divider />
            <ServerIcon />
            {Array.from({ length: 10 }, (_, i) => {
                return <ServerIcon key={i} />
            })}
        </div>
    )
}

function ServerIcon() {
    return (
        <>
            <div className="group relative flex h-12 w-12 flex-none cursor-pointer items-center justify-center rounded-full bg-neutral-700 transition-all  hover:rounded-2xl hover:bg-indigo-500 hover:text-white"></div>
        </>
    )
}

function Divider() {
    return (
        <div className="h-0.5 w-8 flex-none rounded-full bg-neutral-700"></div>
    )
}
