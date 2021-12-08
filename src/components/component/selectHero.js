import { Select } from 'antd';
import { useSelector } from 'react-redux';

const { Option } = Select;

export function SelectHero(props) {
    let listCharacters = useSelector(state => state.stats.names)
    let loading = useSelector(state => state.stats.loadingList)
    let options;
    if (loading) {
        options = listCharacters.map((item, key) => {
            return (<Option className='option' key={key} value={key}>{item}</Option>)
        })
    }

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