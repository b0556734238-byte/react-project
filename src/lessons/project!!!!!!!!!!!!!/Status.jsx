import { useSelector } from "react-redux"


export const Status = () => {
    const list = useSelector(state => state.useres)


    return <>


    </>
}
export const Form = (props) => {

    const { name } = props


    return <>
        <div >
            <h2>{name}</h2>
         
        </div>
    </>
}