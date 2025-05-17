import { Anchor, Ship } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const berths = [
    {
        id: "vessel-1",
        name: "Ocean Voyager",
        type: "Passenger",
        dimensions: "302m × 10m",
        status: "berthed",
        eta: "May 15, 06:57 PM",
    },
    {
        id: "vessel-2",
        name: "Sea Horizon",
        type: "Tanker",
        dimensions: "336m × 16m",
        status: "berthed",
        eta: "May 16, 05:20 PM",
    },
    {
        id: "vessel-11",
        name: "Southern Cross",
        type: "Passenger",
        dimensions: "276m × 17m",
        status: "scheduled",
        eta: "May 17, 07:39 AM",
    },
    {
        id: "vessel-12",
        name: "Eastern Sun",
        type: "Container",
        dimensions: "334m × 12m",
        status: "en-route",
        eta: "May 17, 05:49 PM",
    },
    {
        id: "vessel-13",
        name: "Western Moon",
        type: "Passenger",
        dimensions: "267m × 13m",
        status: "Waiting",
        eta: "May 19, 04:04 PM",
    },
]

export function BerthMap() {
    return (
        <Card className="col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                    <CardTitle>Luka Koper - Berth Map</CardTitle>
                    <CardDescription>Current berth allocation and availability</CardDescription>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                    <div className="flex items-center">
                        <span className="mr-1 h-3 w-3 rounded-full bg-green-500"></span>
                        <span>Available</span>
                    </div>
                    <div className="flex items-center">
                        <span className="mr-1 h-3 w-3 rounded-full bg-blue-500"></span>
                        <span>Occupied</span>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="mb-4 flex items-center justify-between rounded-md bg-blue-600 p-3 text-white">
                    <div className="font-medium">Harbor Entrance</div>
                    <div>Water Depth: 25m</div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {berths.map((berth) => (
                        <TooltipProvider key={berth.id}>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <div
                                        className={`relative rounded-md border p-4 transition-all hover:shadow-md ${
                                            berth.status === "available" ? "border-green-500 bg-green-50" : "border-blue-500 bg-blue-50"
                                        }`}
                                    >
                                        <div className="mb-2 flex items-center justify-between">
                                            <h3 className="text-lg font-semibold">Berth {berth.id}</h3>
                                            <Badge variant={berth.status === "available" ? "outline" : "secondary"}>
                                                {berth.status === "available" ? "Available" : "Occupied"}
                                            </Badge>
                                        </div>

                                        <div className="text-sm text-muted-foreground">
                                            <div>Max Size: {berth.maxSize}</div>
                                            <div>Max Draft: {berth.maxDraft}</div>
                                        </div>

                                        {berth.vessel ? (
                                            <div className="mt-3 rounded-md bg-white p-2 shadow-sm">
                                                <div className="flex items-center">
                                                    <Ship className="mr-2 h-4 w-4 text-blue-500" />
                                                    <span className="font-medium">{berth.vessel.name}</span>
                                                </div>
                                                <div className="mt-1 text-xs text-muted-foreground">
                                                    {berth.vessel.type} • {berth.vessel.dimensions}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="mt-3 rounded-md bg-white p-2 text-center text-sm text-muted-foreground shadow-sm">
                                                Available for Assignment
                                            </div>
                                        )}

                                        <Anchor
                                            className={`absolute right-2 top-2 h-5 w-5 ${
                                                berth.status === "available" ? "text-green-500" : "text-blue-500"
                                            }`}
                                        />
                                    </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{berth.status === "available" ? "Available for docking" : `Occupied by ${berth.vessel?.name}`}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}