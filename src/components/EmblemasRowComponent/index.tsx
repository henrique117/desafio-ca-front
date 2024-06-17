import { EmblemaComponent } from '../exports'
import './emblemasRowstyle.css'

interface RowProps {
    emblemas: any[]
}

const EmblemasRowComponent: React.FC<RowProps> = ({ emblemas }) => {
    return (
        <div>
            {emblemas.map((emblema, index) => (
                <EmblemaComponent name={emblema.name} image={emblema.image} key={index} />
            ))}
        </div>
    )
}

export default EmblemasRowComponent