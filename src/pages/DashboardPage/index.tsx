import './dashboardStyle.css'
import { EmblemasRowComponent } from '../../components/exports'

export default function Dashboard() {
    return (
        <div className="geral bg-blue-200">
            <div className="header w-full h-36">
                <h1 className="dashboardTitle font-sans text-6xl antialiased font-bold text-blue-600 h-full">Dashboard</h1>
                <div className="h-1/2 w-full profileClass">
                    <img src="src/assets/profileIcon.png" alt="profileimg" className="h-full"/>
                </div>
            </div>
            <div className="body w-4/5 bg-gray-100 rounded-lg">
                <div className="w-4/5 border-b-2 border-gray-300">
                    <h1 className="emblemasTitle font-sans text-6xl antialiased font-bold text-blue-600">Emblemas:</h1>
                </div>
                <div className="emblemasIcons">
                    <EmblemasRowComponent />
                </div>
            </div>
        </div>
    )
}