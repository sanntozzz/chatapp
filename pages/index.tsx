import { Channel } from 'components/Channel'
import { ServersSidebar } from 'components/ServersSidebar'
import { Sidebar } from 'components/Sidebar'

function Home() {
    return (
        <div className="flex bg-neutral-900">
            <ServersSidebar />
            <Sidebar />
            <Channel />
        </div>
    )
}

export default Home
