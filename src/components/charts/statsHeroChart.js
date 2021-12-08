import React, { useState, useEffect } from "react"
import ReactECharts from 'echarts-for-react';
import { SelectHero } from "../component/selectHero";
import { getCharacterStats } from "../../api/api";
import { message } from 'antd';
import { TableStatsHero } from "../component/tableStatsHero";
import { useDispatch, useSelector } from "react-redux";


export function StatsHeroChart() {
    let [heroName1, setHeroName1] = useState(), //первый вырбранный персонаж для статистики
        [heroName2, setHeroName2] = useState(), ///второй выбранный персонаж для статистики
        [classTableStats1, setClassTableStats1] = useState('classTableStatsOff'), //имя класса для первой таблицы
        [classTableStats2, setClassTableStats2] = useState('classTableStatsOff'); //имя класса для второй таблицы
    let dispatch = useDispatch();
    let listCharacters = useSelector(state => state.stats.names) //получение имен персонажей
    let listRealms = useSelector(state => state.stats.realms) //получение реалма для каждого персонажа
    let loadingTable1 = useSelector(state => state.stats.loadingStats1) //статус загрузки статистики для первого выбранного персонажа
    let loadingTable2 = useSelector(state => state.stats.loadingStats2) //статус загрузки статистики для второго выбранного персонажа
    let heroStats1 = useSelector(state => state.stats.heroStats1) //получение статистики для первого выбранного персонажа
    let heroStats2 = useSelector(state => state.stats.heroStats2) //получение статистики для второго выбранного персонажа
    let table1, table2; //таблицы вывода статистики персонажа

    if (loadingTable1) { //вывод первой таблицы после загрузки статистики
        table1 = <TableStatsHero class={classTableStats1} data={heroStats1} />
    }else{
        table1 = <div className='tableStats1'></div>
    }
    if (loadingTable2) {//вывод второй таблицы после загрузки статистики
        table2 = <TableStatsHero class={classTableStats2} data={heroStats2} />
    }else{
        table2 = <div className='tableStats2'></div>
    }

    const selectHero1 = function (event) { //функция выбора первого персоанажа для показа статистики
        let infoHero = {
            name: listCharacters[event].toLowerCase(),
            realm: listRealms[event]
        }
        dispatch({ type: 'GET_STATSHERO1', infoHero });
        setHeroName1(listCharacters[event])
        setClassTableStats1('tableStats1')
    }
    const selectHero2 = function (event) { //функция выбора второго персонажа для показа статистики
        let infoHero = {
            name: listCharacters[event].toLowerCase(),
            realm: listRealms[event]
        }
        dispatch({ type: 'GET_STATSHERO2', infoHero });
        setHeroName2(listCharacters[event])
        setClassTableStats2('tableStats2')
    }

    let option = { //опции для графика
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
        dispatch({ type: 'GET_LISTHERO' }); //получение списка персонажей в redux
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