export const SelectCity = ({ cities, setCity }) => {
 {/* {name !== 'אנונימי' && !selectedCity && <<Select></Select> countries={countries} setCountry={setSelectedCountry}></SelectCountry>} */}

    return <>
        <label>בחר עיר:</label>
        <select onChange={e => setCity(e.target.value)}>
            <option disabled selected>בחר עיר</option>
            {cities && cities.map((c, i) => <option key={i}>{c}</option>)}
        </select>
    </>
}