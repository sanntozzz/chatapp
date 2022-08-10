import Avatar from 'boring-avatars'
import {
    Bell,
    Hash,
    MagnifyingGlass,
    PushPin,
    Question,
    Tray,
    Users,
} from 'phosphor-react'

function Topbar() {
    return (
        <>
            <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-600 p-4 text-white">
                <div className="flex items-center gap-2">
                    <Hash weight="bold" className="text-2xl text-neutral-300" />
                    <div className="font-bold line-clamp-1">
                        🎮 EAT. SLEEP. GAME. REPEAT
                    </div>
                </div>
                <div className="flex items-center gap-4 text-neutral-300">
                    <Bell
                        weight="fill"
                        className="flex-none cursor-pointer text-2xl hover:text-white"
                    />
                    <PushPin
                        weight="fill"
                        className="flex-none cursor-pointer text-2xl hover:text-white"
                    />
                    <Users
                        weight="fill"
                        className="flex-none cursor-pointer text-2xl hover:text-white"
                    />
                    <div className="relative flex items-center">
                        <input
                            type="text"
                            placeholder="Search"
                            className="rounded-md bg-neutral-800 px-2 py-0.5 pr-8 text-sm text-white placeholder:text-neutral-400 focus:outline-none"
                        />
                        <MagnifyingGlass
                            weight="bold"
                            className="absolute right-2 text-neutral-400"
                        />
                    </div>
                    <Tray
                        weight="fill"
                        className="flex-none cursor-pointer text-2xl hover:text-white"
                    />
                    <Question
                        weight="fill"
                        className="flex-none cursor-pointer text-2xl hover:text-white"
                    />
                </div>
            </div>
        </>
    )
}

function ChannelMembers() {
    return (
        <div className="w-72 bg-neutral-700 ">
            <div
                id="ChannelMembers"
                className="flex h-full flex-col gap-6 overflow-y-auto p-4"
            >
                <div className="text-sm font-bold text-neutral-400">
                    Members - 11
                </div>
                <div className="flex cursor-pointer items-center gap-2">
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
                    <div className="text-sm font-bold text-white">Sanntozz</div>
                </div>
                {Array.from({ length: 10 }, (_, i) => {
                    return (
                        <div
                            key={i}
                            className="flex cursor-pointer items-center gap-2"
                        >
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
                                <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-neutral-800 bg-red-400"></span>
                            </div>
                            <div className="text-sm font-bold text-white">
                                Unamed
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

function Feed() {
    return <div>sss</div>
}

export function Channel() {
    return (
        <div className="flex h-screen w-full flex-col bg-neutral-600">
            <Topbar />
            <div className="flex flex-1 overflow-hidden">
                <div className="flex-1 p-4">
                    <Feed />
                </div>
                <ChannelMembers />
            </div>
        </div>
    )
}
