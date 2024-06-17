import './dashboardStyle.css'
import { EmblemasRowComponent } from '../../components/exports'
import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import tokenToId from '../../utils/tokenToId'

const Dashboard: React.FC = () => {
    const [emblemas, setEmblemas] = useState<any[]>([])

    useEffect(() => {
        const userid = tokenToId()

        if(userid) {
            const fetchEmblemas = async (userID: string) => {
                try {
                    const response = await api.get(`emblemas/users/${userID}`)
                    setEmblemas(response.data)
                } catch (error) {
                    console.error(error)
                }
            }
    
            fetchEmblemas(userid)
        }
    }, [])

    const dividirEmblemasPorLinhas = (emblemas: any[]): any[][] => {
        const linhas: any[][] = []
        for (let i = 0; i < emblemas.length; i += 4) {
          linhas.push(emblemas.slice(i, i + 4))
        }
        return linhas
    };

    let emblemasTratados: any[] = []

    emblemas.forEach((e, index) => {
        emblemasTratados[index] = e.emblema
    });

    const emblemasPorLinhas = dividirEmblemasPorLinhas(emblemasTratados)

    const handleNewEmblema = async () => {
        try {
            const response = await api.post('emblemas/associate-emblema')
            console.log(response.data)
            if(response.data.statusCode == 200) alert(response.data.message)
        } catch (e) {
            console.error(e)
        } finally {
            window.location.reload()
        }
    }

    return (
        <div className="geral bg-blue-200">
            <div className="header w-full h-36">
                <h1 className="dashboardTitle font-sans text-6xl antialiased font-bold text-blue-600 h-full">Dashboard</h1>
                <div className="h-1/2 w-full profileClass"> 
                    <img src="src/assets/profileIcon.png" alt="profileimg" className="h-full"/>
                </div>
            </div>
            <div className="body w-4/5 bg-gray-100 rounded-lg">
                <div className="w-4/5 border-b-2 border-gray-300 flex dashboardTop">
                    <h1 className="emblemasTitle font-sans text-6xl antialiased font-bold text-blue-600">Emblemas:</h1>
                    <button onClick={handleNewEmblema} className="emblemasButton w-1/5 h-2/5 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded focus:outline-none focus:shadow-outline">Novo Emblema</button>
                </div>
                <div className="emblemasIcons">
                    {emblemasPorLinhas.map((linha, index) => (
                        <EmblemasRowComponent key={index} emblemas={linha}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard