import { BerthMap } from "./components/BerthMap"
import { OperationEvents } from "./components/OperationEvents"
import { PortUtilizationCard } from "./components/PortUtilizationCard"
import { VesselList } from "./components/VesselList"

function App() {
    return (
        <div className="flex min-h-screen flex-col bg-muted/40">
            <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-6">
                <h1 className="text-xl font-semibold">Ship Management Dashboard</h1>
                <nav className="ml-auto flex gap-4">
                    <button className="text-sm font-medium text-muted-foreground hover:text-foreground">Dashboard</button>
                    <button className="text-sm font-medium text-muted-foreground hover:text-foreground">Vessels</button>
                    <button className="text-sm font-medium text-muted-foreground hover:text-foreground">Schedules</button>
                    <button className="text-sm font-medium text-muted-foreground hover:text-foreground">Reports</button>
                </nav>
            </header>
            <main className="flex-1 p-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <PortUtilizationCard />
                    <div className="grid gap-6 md:col-span-2">
                        <BerthMap />
                    </div>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <VesselList />
                    <OperationEvents />
                </div>
            </main>
        </div>
    )
}

export default App