import React, { useEffect, useState } from "react"
import ReactECharts from 'echarts-for-react';
import { getPvpStats } from "../../api/api";
import { Select } from 'antd';

const { Option } = Select;

export function PvpChart() {
    let [pvpStats, setPvpStats] = useState([])
    let [pvpName, setPvpName] = useState([])
    let [pvpLadder, setPvpLadder] = useState('2v2')
    useEffect(() => {
        getPvpStats(localStorage.token, pvpLadder).then((response) => {
            setPvpStats(response.data.entries.slice(0, 11).map((item) => {
                return (item.rating)
            }))
            setPvpName(response.data.entries.slice(0, 11).map((item) => {
                return (item.character.name)
            }))
        })
    }, [pvpLadder]);

    const selectPvpLadder = function (event) {
        setPvpLadder(event)
    }

    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        textStyle: {
            color: '#ebdec2',
            fontWeight: 'bold',
            textBorderColor: '#000',
            textBorderWidth: '3',
            textBorderType: 'solid'
        },
        color: '#d37f00',
        xAxis: [
            {
                type: 'category',
                data: pvpName,
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
        series: [
            {
                name: 'Рейтинг',
                type: 'bar',
                barWidth: '60%',
                data: pvpStats
            }
        ]
    };
    return (
        <div>
            <h1 className='titleStats'>Таблица лидеров арены PvP</h1>
            <Select defaultValue='2v2' onChange={selectPvpLadder}>
                <Option value='2v2'>2v2</Option>
                <Option value='3v3'>3v3</Option>
            </Select>
            <ReactECharts
                option={option}
            />
        </div>
    )
}