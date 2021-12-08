import React, { useEffect, useState } from "react"
import ReactECharts from 'echarts-for-react';
import { Select } from 'antd';
import { useDispatch, useSelector } from "react-redux";

const { Option } = Select;

export function PvpChart() {
    let [pvpLadder, setPvpLadder] = useState('2v2') //ладдер статистики
    let dispatch = useDispatch();
    let pvpStats = useSelector(state => state.pvp.pvpStats) //получение рейтинга статистики
    let pvpName = useSelector(state => state.pvp.pvpNames) //получение имен лидеров
    useEffect(() => {
        dispatch({ type: 'GET_PVPSTATS', pvpLadder }); //получение всей pvp статистики в redux
    }, [dispatch, pvpLadder]);

    const selectPvpLadder = function (event) { //функция выбора ладдера статистики
        setPvpLadder(event)
    }

    let option = { //опции для графика
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