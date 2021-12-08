import React, { useState, useEffect } from "react"
import ReactECharts from 'echarts-for-react';
import { SelectHero } from "../component/selectHero";
import { getCharacterStats } from "../../api/api";
import { message } from 'antd';
import { TableStatsHero } from "../component/tableStatsHero";
import { useDispatch, useSelector } from "react-redux";


export function StatsHeroChart() {
    let [heroName1, setHeroName1] = useState(),
        [heroName2, setHeroName2] = useState(),
        [classTableStats1, setClassTableStats1] = useState('classTableStatsOff'),
        [classTableStats2, setClassTableStats2] = useState('classTableStatsOff');
    let dispatch = useDispatch();
    let listCharacters = useSelector(state => state.stats.names)
    let listRealms = useSelector(state => state.stats.realms)
    let loadingTable1 = useSelector(state => state.stats.loadingStats1)
    let loadingTable2 = useSelector(state => state.stats.loadingStats2)
    let heroStats1 = useSelector(state => state.stats.heroStats1)
    let heroStats2 = useSelector(state => state.stats.heroStats2)
    let table1, table2;

    if (loadingTable1) {
        table1 = <TableStatsHero class={classTableStats1} data={heroStats1} />
    }else{
        table1 = <div className='tableStats1'></div>
    }
    if (loadingTable2) {
        table2 = <TableStatsHero class={classTableStats2} data={heroStats2} />
    }else{
        table2 = <div className='tableStats2'></div>
    }

    const selectHero1 = function (event) {
        let infoHero = {
            name: listCharacters[event].toLowerCase(),
            realm: listRealms[event]
        }
        dispatch({ type: 'GET_STATSHERO1', infoHero });
        setHeroName1(listCharacters[event])
        setClassTableStats1('tableStats1')
    }
    const selectHero2 = function (event) {
        let infoHero = {
            name: listCharacters[event].toLowerCase(),
            realm: listRealms[event]
        }
        dispatch({ type: 'GET_STATSHERO2', infoHero });
        setHeroName2(listCharacters[event])
        setClassTableStats2('tableStats2')
    }

    let option = {
        legend: {
            data: [heroName1, heroName2],
            textStyle: {
                color: '#ebdec2',
                fontWeight: 'bold',
                fontSize: 18,
                textBorderColor: '#000',
                textBorderWidth: '3',
                textBorderType: 'solid'

            }
        },
        radar: {
            indicator: [
                { name: 'Выносливость', max: 2500 },
                { name: 'Скорость', max: 2000 },
                { name: 'Искусность', max: 2000 },
                { name: 'Универсальность', max: 2000 },
                { name: 'Критический удар', max: 2000 },
                { name: 'Здоровье', max: 50000 },
            ],
            shape: 'circle',
        },
        textStyle: {
            color: '#ebdec2',
            fontWeight: 'bold',
            fontSize: 18,
            textBorderColor: '#000',
            textBorderWidth: '3',
            textBorderType: 'solid'

        },
        color: ['#d37f00', '#e63244'],
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
    useEffect(() => {
        dispatch({ type: 'GET_LISTHERO' });
    }, [dispatch])

    return (
        <div className='chartStats'>
            {table1}
            <div className='chartStatsBlock'>
                <SelectHero selectHero1={selectHero1} selectHero2={selectHero2} />
                <ReactECharts
                    option={option}
                />
            </div>
            {table2}
        </div>
    )

}