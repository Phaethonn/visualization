/*   */
$(function () {
echarts_1();
echarts_4();
echarts_5();
echarts_6();

// 柱状图1 - 历代经典著作数量
function echarts_1() {
    var myChart = echarts.init(document.getElementById('echart1'));
    option = {
        title: {
            textStyle: {
                color: '#8B0000'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top:'10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['唐朝', '宋朝', '元朝','明朝','清朝'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(139, 0, 0, 0.3)",
                    width: 1,
                    type: "solid"
                },
            },
            axisTick: {
                show: false,
            },
            axisLabel:  {
                interval: 0,
                show: true,
                splitNumber: 15,
                textStyle: {
                    color: "#8B0000",
                    fontSize: '14',
                },
            },
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                show:true,
                textStyle: {
                    color: "#8B0000",
                    fontSize: '14',
                },
            },
            axisTick: {
                show: false,
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(139, 0, 0, 0.3)",
                    width: 1,
                    type: "solid"
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(139, 0, 0, 0.1)",
                }
            }
        }],
        series: [
            {
                type: 'bar',
                data: [120, 200, 80, 230, 290],
                barWidth:'35%',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = ['#8B0000', '#D4AF37', '#E8C39E', '#4A0404', '#2C1810'];
                            return colorList[params.dataIndex];
                        },
                        opacity: 0.8,
                        barBorderRadius: 5,
                    }
                }
            }
        ]
    };     
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

// 雷达图 - 著作领域分布对比
function echarts_2() {
    var myChart = echarts.init(document.getElementById('echart2'));
    option = {
        title: {
            //text: '《梦溪笔谈》与《本草纲目》学科领域对比',
            textStyle: {
                color: '#E8C39E'
            }
        },
        legend: {
            data: ['梦溪笔谈', '本草纲目'],
            textStyle: {
                color: '#E8C39E'
            },
            orient: 'vertical',
            right: '5%',
            top: 'center'
        },
        radar: {
            indicator: [
                {"name": "天文", "max": 100},
                {"name": "数学", "max": 100},
                {"name": "医学", "max": 100},
                {"name": "农学", "max": 100},
                {"name": "工艺", "max": 100}
            ],
            splitArea: {
                areaStyle: {
                    color: ['rgba(139, 0, 0, 0.1)', 'rgba(139, 0, 0, 0.2)',
                           'rgba(139, 0, 0, 0.3)', 'rgba(139, 0, 0, 0.4)',
                           'rgba(139, 0, 0, 0.5)']
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(232, 195, 158, 0.3)'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(232, 195, 158, 0.3)'
                }
            },
            name: {
                textStyle: {
                    color: '#E8C39E'
                }
            }
        },
        series: [
            {
                name: '著作领域分布',
                type: 'radar',
                data: [
                    {
                        name: "梦溪笔谈",
                        value: [80, 70, 50, 60, 85],
                        itemStyle: {
                            color: '#D4AF37'
                        }
                    },
                    {
                        name: "本草纲目",
                        value: [20, 30, 95, 70, 40],
                        itemStyle: {
                            color: '#8B0000'
                        }
                    }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

// 环形图1 - 天工开物
function echarts_31() {
    var myChart = echarts.init(document.getElementById('fb1'));
    option = {
        title: {
            text: '《天工开物》',
            textStyle: {
                color: '#E8C39E',
                fontSize: '14'
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        series: [{
            name: '领域占比',
            type: 'pie',
            radius: ['40%', '55%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#8B0000',
                borderWidth: 2
            },
            label: {
                show: true,
                color: '#E8C39E',
                formatter: '{b}\n{d}%',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            },
            data: [
                { value: 45, name: '工艺技术', itemStyle: { color: '#8B0000' } },
                { value: 35, name: '农业技术', itemStyle: { color: '#D4AF37' } },
                { value: 20, name: '冶金技术', itemStyle: { color: '#E8C39E' } }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

// 环形图2 - 梦溪笔谈
function echarts_32() {
    var myChart = echarts.init(document.getElementById('fb2'));
    option = {
        title: {
            text: '《梦溪笔谈》',
            textStyle: {
                color: '#E8C39E',
                fontSize: '14'
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        series: [{
            name: '领域占比',
            type: 'pie',
            radius: ['40%', '55%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#8B0000',
                borderWidth: 2
            },
            label: {
                show: true,
                color: '#E8C39E',
                formatter: '{b}\n{d}%',
                fontSize: 12
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '14',
                    fontWeight: 'bold'
                }
            },
            data: [
                { value: 40, name: '天文物理', itemStyle: { color: '#8B0000' } },
                { value: 35, name: '数学科技', itemStyle: { color: '#D4AF37' } },
                { value: 25, name: '地质生物', itemStyle: { color: '#E8C39E' } }
            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

// 折线图 - 著作数量变化
function echarts_4() {
    var myChart = echarts.init(document.getElementById('echart4'));
    option = {
        title: {
            //text: '唐宋元明清自然科学经典著作数量变化',
            textStyle: {
                color: '#8B0000'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['天文学', '数学', '医学', '农业'],
            textStyle: {
                color: '#8B0000'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['唐', '宋', '元', '明', '清'],
            axisLine: {
                lineStyle: {
                    color: '#8B0000'
                }
            },
            axisLabel: {
                color: '#8B0000',
                fontSize: 14
            }
        },
        yAxis: {
            type: 'value',
            name: '著作数量 (部)',
            nameTextStyle: {
                color: '#8B0000'
            },
            axisLine: {
                lineStyle: {
                    color: '#8B0000'
                }
            },
            axisLabel: {
                color: '#8B0000',
                fontSize: 14
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(139, 0, 0, 0.1)'
                }
            }
        },
        series: [
            {
                name: '天文学',
                type: 'line',
                stack: 'Total',
                data: [5, 10, 8, 15, 12],
                itemStyle: {
                    color: '#8B0000'
                }
            },
            {
                name: '数学',
                type: 'line',
                stack: 'Total',
                data: [3, 8, 4, 10, 8],
                itemStyle: {
                    color: '#D4AF37'
                }
            },
            {
                name: '医学',
                type: 'line',
                stack: 'Total',
                data: [6, 12, 6, 20, 15],
                itemStyle: {
                    color: '#E8C39E'
                }
            },
            {
                name: '农业',
                type: 'line',
                stack: 'Total',
                data: [1, 5, 2, 8, 6],
                itemStyle: {
                    color: '#4A0404'
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

// 桑基图 - 著作传承关系
function echarts_5() {
    var myChart = echarts.init(document.getElementById('echart5'));
    option = {
        title: {
            //text: '中华自然科学经典著作传承与引用关系',
            textStyle: {
                color: '#E8C39E'
            }
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        series: [
            {
                type: 'sankey',
                data: [
                    { name: '大衍历 (唐)', itemStyle: { color: '#8B0000' } },
                    { name: '新仪象法要 (宋)', itemStyle: { color: '#D4AF37' } },
                    { name: '九章算术注 (宋)', itemStyle: { color: '#E8C39E' } },
                    { name: '授时历 (元)', itemStyle: { color: '#4A0404' } },
                    { name: '本草纲目 (明)', itemStyle: { color: '#8B0000' } },
                    { name: '崇祯历书 (明)', itemStyle: { color: '#D4AF37' } },
                    { name: '医林改错 (清)', itemStyle: { color: '#E8C39E' } },
                    { name: '数理精蕴 (清)', itemStyle: { color: '#4A0404' } }
                ],
                links: [
                    { source: '大衍历 (唐)', target: '新仪象法要 (宋)', value: 8, lineStyle: { color: '#8B0000' } },
                    { source: '新仪象法要 (宋)', target: '授时历 (元)', value: 7, lineStyle: { color: '#D4AF37' } },
                    { source: '九章算术注 (宋)', target: '崇祯历书 (明)', value: 6, lineStyle: { color: '#E8C39E' } },
                    { source: '授时历 (元)', target: '崇祯历书 (明)', value: 9, lineStyle: { color: '#4A0404' } },
                    { source: '本草纲目 (明)', target: '医林改错 (清)', value: 10, lineStyle: { color: '#8B0000' } },
                    { source: '崇祯历书 (明)', target: '数理精蕴 (清)', value: 8, lineStyle: { color: '#D4AF37' } }
                ],
                lineStyle: {
                    curveness: 0.5
                },
                label: {
                    show: true,
                    position: 'right',
                    color: '#8B0000',
                    fontSize: 14,
                    fontWeight: 'bold'
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

// 玫瑰图 - 技术应用分布
function echarts_6() {
    var myChart = echarts.init(document.getElementById('echart6'));
    option = {
        title: {
            textStyle: {
                color: '#E8C39E'
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            right: '5%',
            top: 'center',
            textStyle: {
                color: '#8B0000'
            }
        },
        series: [
            {
                name: '技术应用领域',
                type: 'pie',
                radius: [20, 140],
                center: ['40%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderColor: '#8B0000',
                    borderWidth: 2
                },
                label: {
                    color: '#E8C39E'
                },
                data: [
                    { value: 10, name: '农耕技术', itemStyle: { color: '#8B0000' } },
                    { value: 8, name: '药物制备', itemStyle: { color: '#D4AF37' } },
                    { value: 6, name: '机械制造', itemStyle: { color: '#E8C39E' } },
                    { value: 5, name: '观测仪器', itemStyle: { color: '#4A0404' } },
                    { value: 4, name: '算术方法', itemStyle: { color: '#2C1810' } },
                    { value: 3, name: '建筑技术', itemStyle: { color: '#6B4423' } }
                ]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}
})

		


		









