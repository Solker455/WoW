import React, { useEffect } from "react"
import ReactECharts from 'echarts-for-react';
import { useDispatch, useSelector } from "react-redux";

export function PvpChart() {
    let dispatch = useDispatch();
    let loading = useSelector(state => state.pvp.loading);
    let pvpStats = useSelector(state => state.pvp.data)
    console.log(pvpStats)
    useEffect(() => {
        dispatch({ type: 'GET_PVPSTATS' });
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
                data: pvpStats,
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
            <h1>Топ 10 в мире PvP убийств</h1>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
            />
        </div>
    )
}