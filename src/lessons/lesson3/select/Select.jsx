
export const Select = (id) => {
 const changeName = ({ cities, setCity }) => {
        if (value.length >= 2) {
            setName(value)
        }
    }
    return <>
         <select onChange={e => setCity(e.target.value)}>
            <option disabled selected>בחר עיר</option>
            {cities && cities.map((c, i) => <option key={i}>{c}</option>)}
        </select>
    </>
}