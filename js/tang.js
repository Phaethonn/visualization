function initSubjectDistribution() {
    const chart = echarts.init(document.getElementById('subject-distribution'));
    const option = {
        title: {
            text: '唐代科学著作学科分布',
            left: 'center',
            textStyle: {
                color: '#6B5B45'  // 更新标题颜色
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['天文', '医学', '数学', '农业'],
            textStyle: {
                color: '#6B5B45'  // 更新图例文字颜色
            }
        },
        series: [{
            name: '学科分布',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: true,
                position: 'outside',
                color: '#6B5B45'  // 更新标签颜色
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            data: [
                { value: 15, name: '天文', itemStyle: { color: '#B4A582' } },  // 淡金褐色
                { value: 25, name: '医学', itemStyle: { color: '#D8C3A5' } },  // 浅米色
                { value: 10, name: '数学', itemStyle: { color: '#8E806A' } },  // 灰褐色
                { value: 20, name: '农业', itemStyle: { color: '#C5B8A5' } }   // 米褐色
            ]
        }]
    };
    chart.setOption(option);
}

// 时间线图表
function initTimeline() {
    const chart = echarts.init(document.getElementById('timeline'));
    const option = {
        title: {
            text: '唐代重要科技成就统计',
            left: 'center',
            textStyle: {
                color: '#6B5B45',
                fontSize: 18
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                const data = params[0];
                return `${data.name}<br/>${data.value}项<br/>${data.data.details}`;
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
            data: ['天文历法', '医药学', '农学技术', '数学成就', '工艺技术'],
            axisLabel: {
                interval: 0,
                fontSize: 14,
                color: '#6B5B45'
            }
        },
        yAxis: {
            type: 'value',
            name: '重要成就数量',
            nameTextStyle: {
                fontSize: 14,
                color: '#6B5B45'
            },
            axisLabel: {
                fontSize: 12,
                color: '#6B5B45'
            }
        },
        series: [{
            name: '科技成就',
            type: 'bar',
            data: [
                {
                    value: 12,
                    itemStyle: { color: '#B4A582' },
                    details: '大衍历、麟德历、五纬历等\n观星台建设与天文观测\n天文仪器改进'
                },
                {
                    value: 18,
                    itemStyle: { color: '#D8C3A5' },
                    details: '《千金要方》《外台秘要》\n医学教育制度确立\n药物学发展与中药理论'
                },
                {
                    value: 15,
                    itemStyle: { color: '#C5B8A5' },
                    details: '水利工程技术\n农具改良与推广\n茶叶、果树种植技术'
                },
                {
                    value: 10,
                    itemStyle: { color: '#8E806A' },
                    details: '《缉古算经》《九章算术音义》\n印度数学引入\n测量技术发展'
                },
                {
                    value: 16,
                    itemStyle: { color: '#A69B88' },
                    details: '瓷器制造工艺\n纺织印染技术\n冶金技术发展'
                }
            ],
            label: {
                show: true,
                position: 'top',
                fontSize: 14,
                color: '#6B5B45'
            },
            barWidth: '40%'
        }]
    };
    chart.setOption(option);
}

// 学科发展趋势图
function initSubjectTrend() {
    const chart = echarts.init(document.getElementById('subject-trend'));
    const option = {
        title: {
            text: '各学科著作数量变化趋势',
            left: 'center',
            textStyle: {
                color: '#6B5B45'
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['天文', '医学', '数学', '农业'],
            bottom: 0,
            textStyle: {
                color: '#6B5B45'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['初唐', '盛唐', '中唐', '晚唐'],
            axisLabel: {
                color: '#6B5B45'
            }
        },
        yAxis: {
            type: 'value',
            name: '著作数量',
            nameTextStyle: {
                color: '#6B5B45'
            },
            axisLabel: {
                color: '#6B5B45'
            }
        },
        series: [{
            name: '天文',
            type: 'line',
            data: [3, 5, 4, 3],
            itemStyle: { color: '#B4A582' }
        },
        {
            name: '医学',
            type: 'line',
            data: [5, 8, 7, 5],
            itemStyle: { color: '#D8C3A5' }
        },
        {
            name: '数学',
            type: 'line',
            data: [2, 4, 3, 1],
            itemStyle: { color: '#8E806A' }
        },
        {
            name: '农业',
            type: 'line',
            data: [4, 6, 5, 5],
            itemStyle: { color: '#C5B8A5' }
        }]
    };
    chart.setOption(option);
}

// 地理分布热力图
function initGeographyHeatmap() {
    const chart = echarts.init(document.getElementById('geography-heatmap'));
    const option = {
        title: {
            text: '科学活动地理分布',
            left: 'center',
            textStyle: {
                color: '#6B5B45'
            }
        },
        tooltip: {
            position: 'top'
        },
        grid: {
            height: '50%',
            top: '10%'
        },
        xAxis: {
            type: 'category',
            data: ['长安', '洛阳', '成都', '扬州', '广州'],
            splitArea: {
                show: true
            },
            axisLabel: {
                color: '#6B5B45'
            }
        },
        yAxis: {
            type: 'category',
            data: ['天文', '医学', '数学', '农业'],
            splitArea: {
                show: true
            },
            axisLabel: {
                color: '#6B5B45'
            }
        },
        visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%',
            textStyle: {
                color: '#6B5B45'
            },
            inRange: {
                color: ['#EAE6DD', '#8E806A']  // 从浅色到深色的过渡
            }
        },
        series: [{
            name: '活动热度',
            type: 'heatmap',
            data: [
                [0, 0, 10], [0, 1, 8], [0, 2, 6], [0, 3, 7],
                [1, 0, 7], [1, 1, 9], [1, 2, 5], [1, 3, 8],
                [2, 0, 5], [2, 1, 7], [2, 2, 4], [2, 3, 6],
                [3, 0, 4], [3, 1, 6], [3, 2, 3], [3, 3, 5],
                [4, 0, 3], [4, 1, 5], [4, 2, 2], [4, 3, 4]
            ],
            label: {
                show: true,
                color: '#6B5B45'
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    chart.setOption(option);
} 