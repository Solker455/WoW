import React, { useEffect } from "react"
import ReactECharts from 'echarts-for-react';
import { useDispatch, useSelector } from "react-redux";
import { Table } from 'antd';

export function PveChart() {
    let dispatch = useDispatch();
    let pveStats = useSelector(state => state.pve.data)
    let loading = useSelector(state => state.pve.loading)
    useEffect(() => {
        dispatch({ type: 'GET_PVESTATS' });
    }, [dispatch]);
    let option = {
        tooltip: {
            trigger: 'item'
        },
        textStyle: {
            color: '#ebdec2',
            fontWeight: 'bold',
            fontSize: 16

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
    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: '_id'
        },
        {
            title: 'M+ Score',
            dataIndex: 'value',
            key: '_id'
        },
    ];
    return (
        <div>
            <h1>Топ 10 в мире M+ Score</h1>
            <Table className='tablePveStats' dataSource={pveStats} columns={columns} pagination={false} rowKey='_id' loading={loading} />
            <ReactECharts
                option={option}
                notMerge={true}
                lazyUpdate={true}
                theme={"theme_name"}
            />
        </div>
    )
}