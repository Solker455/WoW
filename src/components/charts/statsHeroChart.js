import React, { useState } from "react"
import ReactECharts from 'echarts-for-react';
import { SelectHero } from "../component/selectHero";

export function StatsHeroChart() {
    let data = {
        heroes: [
            { id: '1', name: 'Гонгрик', value: [1897, 508, 140, 658, 585, 37940] },
            { id: '2', name: 'Горгомелл', value: [112, 202, 114, 101, 273, 14620] },
            { id: '3', name: 'Алексееей', value: [752, 344, 155, 544, 544, 25444] },
            { id: '4', name: 'Герцог', value: [578, 321, 112, 177, 500, 28245] },
            { id: '5', name: 'Язаспиной', value: [977, 300, 100, 285, 475, 29245] },
            { id: '6', name: 'Убиватор', value: [1052, 255, 98, 297, 411, 35544] },
            { id: '7', name: 'Магохил', value: [1574, 243, 115, 287, 421, 38725] },
            { id: '8', name: 'Силушка', value: [447, 277, 118, 300, 430, 48852] },
            { id: '9', name: 'Уничтожитор', value: [155, 271, 120, 544, 150, 27455] }
        ]
    }
    let [heroStats1, setHeroStats1] = useState(),
        [heroStats2, setHeroStats2] = useState(),
        [heroName1, setHeroName1] = useState(),
        [heroName2, setHeroName2] = useState();

    const selectHero1 = function (event) {
        setHeroStats1(data.heroes[event.target.value].value)
        setHeroName1(data.heroes[event.target.value].name)
    }
    const selectHero2 = function (event) {
        setHeroStats2(data.heroes[event.target.value].value)
        setHeroName2(data.heroes[event.target.value].name)
    }
    let option = {
        radar: {
            indicator: [
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
                        value: heroStats1,
                        name: heroName1
                    },
                    {
                        value: heroStats2,
                        name: heroName2
                    }
                ]
            }
        ]
    };
    return (
        <div>
            <h1>Сравнение двух персонажей</h1>

            <SelectHero selectHero1={selectHero1} selectHero2={selectHero2} data={data.heroes} />

            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
            />
        </div>
    )
}