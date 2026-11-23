import './style.css'
import { cerate } from "./cerate"

export const Album = ({famliy}) => {
    return <>
        <div className="album" >
            {famliy.map((x, i) => <Page key={i} imageInfo={x}></Page>)}
        </div>
    </>
}
export const Page = ({ imageInfo }) => {
    return <>
        <div className="page" style={{ borderColor: imageInfo.min = 'זכר' ? 'blue' : 'pink' }}>
            <img className="img" src={`./pic/${imageInfo.picture}`}></img>
            <p className="p" style={{ color: imageInfo.color }}>{imageInfo.name} {imageInfo.date}</p>
             {cerate} 
        </div>
    </>
}