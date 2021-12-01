import React, { useEffect } from "react"
import ReactECharts from 'echarts-for-react';
import { useDispatch, useSelector } from "react-redux";

export function PveChart() {
    let dispatch = useDispatch();
    let pveStats = useSelector(state => state.pve.data)
    useEffect(() => {
        dispatch({ type: 'GET_PVESTATS' });
    }, [dispatch]);
    let option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '80%',
                data: pveStats,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    return (
        <div>
            <h1>Топ 10 в мире M+ Score</h1>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
            />
        </div>
    )
}