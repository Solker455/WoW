import { Select } from 'antd';

const { Option } = Select;

export function SelectHero(props) {

    let options;
    options = props.data.map((item) => {
        return (<Option className='option' key={item.id} value={item.id - 1}>{item.name}</Option>)
    })


    return (
        <div className='selectsPvpStats'>
            <Select defaultValue='default' onChange={props.selectHero1} className='selectPvpStats1'>
                <Option value='default' disabled>Выберите героя</Option>
                {options}
            </Select>
            <div className='colorPvpStats1'></div>
            <Select defaultValue='default' onChange={props.selectHero2} className='selectPvpStats2'>
                <Option value='default' disabled>Выберите героя</Option>
                {options}
            </Select>
            <div className='colorPvpStats2'></div>
        </div>
    )
}