import { Search, Ship } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useState } from 'react'
import { DialogDemo } from './DialogDemo'

const initialVessels = [
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

    //NEED TO IMPLEMENT A FOURTH STATUS WHICH WILL REPRESENT 'WAITING' IN FRONT OF THE HARBOR TO BE TAKEN FOR DELOADING OF CARGO

]

export function VesselList() {
    const [vessels, setVessels] = useState(initialVessels);

    const addVessel = (newVessel) => {
        setVessels([...vessels, {
            ...newVessel,
            id: `vessel-${vessels.length + 1}`,
        }]);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Vessels</CardTitle>
                <CardDescription>Manage and track all vessels</CardDescription>
                <div className="">
                    <DialogDemo onAddVessel={addVessel} />
                </div>
            </CardHeader>
            <CardContent>
                <div className="mb-4 flex flex-col gap-4 sm:flex-row">
                    <div className="relative flex-1">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input type="search" placeholder="Search vessels..." className="pl-8" />
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="all-statuses">
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent className="bg-blue-800">
                                <SelectItem value="all-statuses" className="border-black border-1" >All Statuses</SelectItem>
                                <SelectItem value="berthed" className="border-black border-1" >Berthed</SelectItem>
                                <SelectItem value="scheduled" className="border-black border-1" >Scheduled</SelectItem>
                                <SelectItem value="en-route" className="border-black border-1" >En Route</SelectItem>
                                <SelectItem value="waiting" className="border-black border-1" >Waiting</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select defaultValue="all-types">
                            <SelectTrigger className="w-[140px]">
                                <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent className="bg-blue-800 ">
                                <SelectItem value="all-types" className="border-black border-1 ">All Types</SelectItem>
                                <SelectItem value="tanker" className="border-black border-1">Tanker</SelectItem>
                                <SelectItem value="container" className="border-black border-1">Container</SelectItem>
                                <SelectItem value="passenger" className="border-black border-1">Passenger</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]"></TableHead>
                                <TableHead>Vessel</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Dimensions</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>ETA</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {vessels.map((vessel) => (
                                <TableRow key={vessel.id}>
                                    <TableCell>
                                        <Ship className="h-5 w-5 text-muted-foreground" />
                                    </TableCell>
                                    <TableCell className="font-medium">{vessel.name}</TableCell>
                                    <TableCell>{vessel.type}</TableCell>
                                    <TableCell>{vessel.dimensions}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant="outline"
                                            className={
                                                vessel.status === "berthed"
                                                    ? "border-green-500 bg-green-50 text-green-700"
                                                    : vessel.status === "scheduled"
                                                        ? "border-blue-500 bg-blue-50 text-blue-700"
                                                        : vessel.status === "en-route"
                                                            ? "border-amber-500 bg-amber-50 text-amber-700"
                                                            : "border-gray-500 bg-gray-50 text-gray-700"
                                            }
                                        >
                                            {vessel.status === "berthed"
                                                ? "Berthed"
                                                : vessel.status === "scheduled"
                                                    ? "Scheduled"
                                                    : vessel.status === "en-route"
                                                        ? "En Route"
                                                        : "Waiting"}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{vessel.eta}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardContent>
        </Card>
    )
}