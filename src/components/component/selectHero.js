import { Select } from 'antd';

const { Option } = Select;

export function SelectHero(props) {
    let options;
    options = props.listCharacters.map((item, key) => {
        return (<Option className='option' key={key} value={key}>{item}</Option>)
    })

    return (
        <div className='selectsPvpStats'>
            <Select defaultValue='default' onChange={props.selectHero1} className='selectPvpStats1'>
                <Option value='default' disabled>Выберите героя</Option>
                {options}
            </Select>
            <Select defaultValue='default' onChange={props.selectHero2} className='selectPvpStats2'>
                <Option value='default' disabled>Выберите героя</Option>
                {options}
            </Select>
        </div>
    )
}