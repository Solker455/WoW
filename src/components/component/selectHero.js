export function SelectHero(props) {

    let options;
    options = props.data.map((item) => {
        return (<option key={item.id} value={item.id - 1}>{item.name}</option>)
    })


    return (
        <div>
            <select defaultValue='default' onChange={(event) => props.selectHero1(event)}>
                <option value='default' disabled>Выберите героя</option>
                {options}
            </select>
            <select defaultValue='default' onChange={(event) => props.selectHero2(event)}>
                <option value='default' disabled>Выберите героя</option>
                {options}
            </select>
        </div>
    )
}