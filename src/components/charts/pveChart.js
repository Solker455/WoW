import React from "react"
import ReactECharts from 'echarts-for-react';

export function PveChart() {
    let option = {
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: '80%',
                data: [
                    { value: 2851.80, name: 'ПВЕ Драконы' },
                    { value: 2484.59, name: 'Battle Crabs' },
                    { value: 2357.30, name: 'Колхоз им Лунной Совы' },
                    { value: 2214.35, name: 'Команда R' },
                    { value: 2142.44, name: 'Vindicators crab club' },
                    { value: 2049.80, name: 'Мимимифик' },
                    { value: 1848.66, name: 'MFNP' },
                    { value: 1815.52, name: 'Куб Кенария' },
                    { value: 1120.36, name: 'Киберкотлеты' }
                ],
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