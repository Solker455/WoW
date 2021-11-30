import React from "react"
import ReactECharts from 'echarts-for-react';

export function Header() {
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
                    { value: 5078612, name: 'Бензетидин' },
                    { value: 1804132, name: 'Краайзи' },
                    { value: 1355348, name: 'Эндофстори' },
                    { value: 1084547, name: 'Витень' },
                    { value: 924121, name: 'Медище' },
                    { value: 809414, name: 'Искранадежды' },
                    { value: 719479, name: 'Иносказатель' },
                    { value: 589850, name: 'Микепукотука' },
                    { value: 585835, name: 'Санторо' },
                    { value: 565302, name: 'Бодмод' },
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
    let option1 = {
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
    let option2 = {
        legend: {
            data: ['Гонгрик', 'Горгомелл']
          },
        radar: {
            // shape: 'circle',
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
            <h1>Топ 10 в мире PvP убийств</h1>
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
            />
            <h1>Топ 10 в мире M+ Score</h1>
            <ReactECharts
                option={option1}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
            />
            <h1>Сравнение двух персонажей</h1>
            <ReactECharts
                option={option2}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
            />
        </div>
    )
}