import React, { useEffect } from "react"
import ReactECharts from 'echarts-for-react';
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'antd';

export function PvpChart() {
    let dispatch = useDispatch();
    let pvpStats = useSelector(state => state.pvp.data)
    useEffect(() => {
        dispatch({ type: 'GET_PVPSTATS' });
    }, [dispatch]);
    let names = pvpStats.map((item) => {
        return (item.name)
    })
    let option = {
        xAxis: {
            type: 'category',
            data: names
        },
        textStyle: {
            color: '#ebdec2',
            fontWeight: 'bold',
            textBorderColor: '#000',
            textBorderWidth: '3',
            textBorderType: 'solid'
        },
        color: '#d37f00',
        height: 500,
        yAxis: {
            splitNumber: 8,
            type: 'value',
        },
        series: [
            {
                type: 'bar',
                data: pvpStats
            }
        ]
    };
    return (
        <div>
            <h1>Топ 10 в мире PvP убийств</h1>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
            />
        </div>
    )
}