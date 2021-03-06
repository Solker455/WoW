import React from "react"
import { Table } from 'antd';

export function TableStatsHero(props) {
    let listNameStats = ['Выносливость', 'Скорость', 'Искусность', 'Универсальность', 'Критический удар', 'Здоровье'] //список наименования характеристик для таблицы
    let data = listNameStats.map((item, key) => { //построение данных для таблицы
        return {
            name: item,
            value: props.data[key]
        }
    })

    const columns = [ //опции для таблицы
        {
            title: 'Наименования',
            dataIndex: 'name',
            key: 'value'
        },
        {
            title: 'Значения',
            dataIndex: 'value',
            key: 'value'
        }
    ];
    return (
        <div className={props.class}>
            <Table dataSource={data} columns={columns} pagination={false} rowKey='name' />
        </div>
    )
}