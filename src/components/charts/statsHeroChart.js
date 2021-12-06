import React, { useState, useEffect } from "react"
import ReactECharts from 'echarts-for-react';
import { SelectHero } from "../component/selectHero";
import { getCharacterStats, getHeroUser } from "../../api/api";
import { message } from 'antd';
import { TableStatsHero } from "../component/tableStatsHero";

export function StatsHeroChart() {
    let [listCharacters, setListCharacters] = useState([])
    let [listRealms, setListRealms] = useState([])
    let [heroStats1, setHeroStats1] = useState([]),
        [heroStats2, setHeroStats2] = useState([]),
        [heroName1, setHeroName1] = useState(),
        [heroName2, setHeroName2] = useState(),
        [classTableStats1, setClassTableStats1] = useState('classTableStatsOff'),
        [classTableStats2, setClassTableStats2] = useState('classTableStatsOff');

    const selectHero1 = function (event) {
        let copyHeroStats1 = Object.assign([], ...heroStats1);
        getCharacterStats(localStorage.token, listCharacters[event].toLowerCase(), listRealms[event]).then((response) => {
            setHeroName1(listCharacters[event])
            copyHeroStats1.push(response.data.stamina.effective, response.data.spell_haste.rating, response.data.mastery.rating, response.data.versatility, response.data.spell_crit.rating, response.data.health)
            setHeroStats1(copyHeroStats1)
            setClassTableStats1('tableStats1')
        }).catch(() => {
            message.info('Произошла ошибка, персонаж долгое время был неактивен.');
        })
    }
    const selectHero2 = function (event) {
        let copyHeroStats2 = Object.assign([], ...heroStats2);
        getCharacterStats(localStorage.token, listCharacters[event].toLowerCase(), listRealms[event]).then((response) => {
            setHeroName2(listCharacters[event])
            copyHeroStats2.push(response.data.stamina.effective, response.data.spell_haste.rating, response.data.mastery.rating, response.data.versatility, response.data.spell_crit.rating, response.data.health)
            setHeroStats2(copyHeroStats2)
            setClassTableStats2('tableStats2')
        }).catch(() => {
            message.info('Произошла ошибка, персонаж долгое время был неактивен.');
        })
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
        getHeroUser(localStorage.token).then(response => {
            let copyListCharacters = Object.assign([], listCharacters);
            let copyListRealms = Object.assign([], listRealms);
            response.data.wow_accounts.map((item) => {
                return (item.characters.map((item) => {
                    copyListCharacters.push(item.name)
                    copyListRealms.push(item.realm.slug)
                }))
            })
            setListCharacters(copyListCharacters)
            setListRealms(copyListRealms)
        })
    }, [])

    return (
        <div class='chartStats'>
            <TableStatsHero class={classTableStats1} data={heroStats1} />
            <div className='chartStatsBlock'>
                <SelectHero selectHero1={selectHero1} selectHero2={selectHero2} listCharacters={listCharacters} />
                <ReactECharts
                    option={option}
                    notMerge={true}
                    lazyUpdate={true}
                    theme={"theme_name"}
                />

            </div>

            <TableStatsHero class={classTableStats2} data={heroStats2} />
        </div>
    )
}