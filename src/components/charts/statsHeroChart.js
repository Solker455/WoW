import React from "react"
import ReactECharts from 'echarts-for-react';

export function StatsHeroChart() {
    let option = {
        legend: {
            data: ['Гонгрик', 'Горгомелл']
        },
        radar: {
            indicator: [
                { name: 'Ловкость', max: 2000 },
                { name: 'Выносливость', max: 2000 },
                { name: 'Скорость', max: 1000 },
                { name: 'Искусность', max: 1000 },
                { name: 'Универсальность', max: 1000 },
                { name: 'Критический удар', max: 1000 },
                { name: 'Здоровье', max: 50000 },
            ]
        },
        series: [
            {
                type: 'radar',
                data: [
                    {
                        value: [1107, 1897, 508, 140, 658, 585, 37940],
                        name: 'Гонгрик'
                    },
                    {
                        value: [517, 731, 202, 114, 101, 273, 14620],
                        name: 'Горгомелл'
                    }
                ]
            }
        ]
    };
    return (
        <div>
            <h1>Сравнение двух персонажей</h1>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
            />
        </div>
    )
}