import React, { useEffect, useState } from "react"
import ReactECharts from 'echarts-for-react';
import { Table } from 'antd';
import moment from "moment";
import 'moment/locale/ru';
import { Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

export function PveChart() {
    let [fraction, setFraction] = useState('horde')
    let [raid, setRaid] = useState('castle-nathria')
    let dispatch = useDispatch();
    let pveStats = useSelector(state => state.pve.pveStats)
    let pveNames = useSelector(state => state.pve.pveNames)
    let dataTable = useSelector(state => state.pve.dataTable)
    let loading = useSelector(state => state.pve.loading)
    moment.locale('ru')
    const selectFraction = function (event) {
        setFraction(event)
    }
    const selectRaid = function (event) {
        setRaid(event)
    }

    useEffect(() => {
        dispatch({ type: 'GET_PVESTATS', fraction, raid });
    }, [dispatch, fraction, raid]);
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
            <Table className='tablePveStats' dataSource={dataTable} columns={columns} pagination={false} rowKey='rank' loading={loading} />
            <ReactECharts
                option={option}
            />
        </div>
    )
}