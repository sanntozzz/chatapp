import Avatar from 'boring-avatars'
import { CaretDown, Gear, Hash, Headphones, Microphone } from 'phosphor-react'

export function Sidebar() {
    return (
        <div className="flex h-screen w-72 flex-col bg-neutral-700">
            <div className="flex  cursor-pointer items-center  justify-between border-b border-neutral-800 p-4 text-white transition-all hover:bg-neutral-500">
                <div className="font-bold line-clamp-1">
                    🎮 EAT. SLEEP. GAME. REPEAT
                </div>
                <CaretDown weight="bold" className="flex-none" />
            </div>
            <div
                id="Channels"
                className="flex h-full flex-col gap-2 overflow-y-auto p-2"
            >
                {Array.from({ length: 10 }, (_, i) => {
                    return (
                        <div
                            key={i}
                            className="cursor-pointer rounded-md px-3 py-1 text-neutral-300 hover:bg-neutral-600  hover:text-white"
                        >
                            <div className="flex items-center gap-2">
                                <Hash weight="bold" className="text-xl" />
                                <span className="text-sm font-semibold">
                                    channel
                                </span>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex w-full items-center justify-between gap-4 self-baseline bg-neutral-800 p-3">
                <div className="group flex cursor-pointer items-center gap-2">
                    <div className="relative group-hover:opacity-80">
                        <Avatar
                            size={30}
                            name="Mary Baker"
                            variant="beam"
                            colors={[
                                '#92A1C6',
                                '#146A7C',
                                '#F0AB3D',
                                '#C271B4',
                                '#C20D90',
                            ]}
                        />
                        <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-neutral-800 bg-green-400"></span>
                    </div>
                    <div>
                        <div className="text-sm font-bold text-white">
                            Sanntozz
                        </div>
                        <div className="text-xs text-neutral-400">#9851</div>
                    </div>
                </div>
                <div className="flex items-center gap-1 text-xl text-neutral-400">
                    <div className="cursor-pointer rounded-md p-1.5 hover:bg-neutral-700">
                        <Microphone weight="fill" />
                    </div>
                    <div className="cursor-pointer rounded-md p-1.5 hover:bg-neutral-700">
                        <Headphones weight="fill" />
                    </div>
                    <div className="cursor-pointer rounded-md p-1.5 hover:bg-neutral-700">
                        <Gear weight="fill" />
                    </div>
                </div>
            </div>
        </div>
    )
}
