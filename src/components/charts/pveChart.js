import React, { useEffect, useState } from "react"
import ReactECharts from 'echarts-for-react';
import { Table } from 'antd';
import { getPveStats } from "../../api/api";
import moment from "moment";
import 'moment/locale/ru';
import { Select } from 'antd';

const { Option } = Select;

export function PveChart() {
    let [pveStats, setPveStats] = useState()
    let [pveNames, setNames] = useState()
    let [data, setData] = useState()
    let [loading, setLoading] = useState(true)
    let [fraction, setFraction] = useState('horde')
    let [raid, setRaid] = useState('castle-nathria')

    moment.locale('ru')
    const selectFraction = function (event) {
        setFraction(event)
    }
    const selectRaid = function (event) {
        setRaid(event)
    }

    useEffect(() => {
        getPveStats(localStorage.token, fraction, raid).then((response) => {
            setPveStats(response.data.entries.slice(0, 10).map((item) => {
                setLoading(false)
                return (
                    item.rank
                )
            }))
            setNames(response.data.entries.slice(0, 10).map((item) => {
                return (
                    item.guild.name
                )
            }))
            setData(response.data.entries.slice(0, 10).map((item) => {
                return {
                    rank: item.rank,
                    name: item.guild.name,
                    time: moment(item.timestamp).format('Do MMMM YYYY'),
                    fraction: item.faction.type,
                    region: item.region
                }
            }))
        })
    }, [loading, fraction, raid]);
    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: pveNames,
                axisTick: {
                    alignWithLabel: true
                }
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        textStyle: {
            color: '#ebdec2',
            fontWeight: 'bold',
            textBorderColor: '#000',
            textBorderWidth: '3',
            textBorderType: 'solid'
        },
        color: '#d37f00',
        series: [
            {
                name: 'Место',
                type: 'bar',
                barWidth: '60%',
                data: pveStats
            }
        ]
    };

    const columns = [
        {
            title: 'Ранг',
            dataIndex: 'rank',
            key: 'rank'
        },
        {
            title: 'Название гильдии',
            dataIndex: 'name',
            key: 'rank'
        },
        {
            title: 'Дата',
            dataIndex: 'time',
            key: 'rank'
        },
        {
            title: 'Фракция',
            dataIndex: 'fraction',
            key: 'rank'
        },
        {
            title: 'Регион',
            dataIndex: 'region',
            key: 'rank'
        },
    ];
    return (
        <div>
            <h1 className='titleStats'>Таблица лидеров мифических рейдов</h1>
            <Select defaultValue='horde' onChange={selectFraction} className='selectFraction'>
                <Option value='horde'>Орда</Option>
                <Option value='alliance'>Альянс</Option>
            </Select>
            <Select defaultValue='castle-nathria' onChange={selectRaid}>
                <Option value='castle-nathria'>Замок Нафрия</Option>
                <Option value='sanctum-of-domination'>Святилище Господства</Option>
            </Select>
            <Table className='tablePveStats' dataSource={data} columns={columns} pagination={false} rowKey='rank' loading={loading} />
            <ReactECharts
                option={option}
            />
        </div>
    )
}