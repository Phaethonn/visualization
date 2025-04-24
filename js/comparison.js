// 科技成果数据
const achievementData = {
    medical: {
        title: "医药技术",
        ancient: [
            { name: "本草纲目", value: 1892, unit: "种药材" },
            { name: "伤寒论", value: 397, unit: "方剂" },
            { name: "针灸", value: 365, unit: "穴位" },
            { name: "脉诊", value: 28, unit: "脉象" },
            { name: "中医诊断", value: 800, unit: "方剂" },
            { name: "金匮要略", value: 262, unit: "方剂" }
        ],
        modern: [
            { name: "现代制药", value: 5000, unit: "种药物" },
            { name: "基因药物", value: 1200, unit: "种类" },
            { name: "针灸治疗", value: 2000, unit: "适应症" },
            { name: "精准医疗", value: 500, unit: "技术" },
            { name: "中西医结合", value: 3000, unit: "临床方案" },
            { name: "智能诊断", value: 1500, unit: "模型" }
        ],
        flow: [
            { source: "本草纲目", target: "现代制药", value: 100 },
            { source: "本草纲目", target: "基因药物", value: 80 },
            { source: "伤寒论", target: "中西医结合", value: 90 },
            { source: "伤寒论", target: "精准医疗", value: 70 },
            { source: "针灸", target: "针灸治疗", value: 95 },
            { source: "针灸", target: "中西医结合", value: 85 },
            { source: "脉诊", target: "智能诊断", value: 75 },
            { source: "中医诊断", target: "中西医结合", value: 90 },
            { source: "金匮要略", target: "精准医疗", value: 80 },
            { source: "金匮要略", target: "现代制药", value: 70 }
        ]
    },
    agriculture: {
        title: "农业技术",
        ancient: [
            { name: "水利灌溉", value: 500, unit: "工程" },
            { name: "农具改良", value: 300, unit: "种类" },
            { name: "作物驯化", value: 200, unit: "品种" },
            { name: "农时历法", value: 24, unit: "节气" },
            { name: "耕作技术", value: 150, unit: "方法" }
        ],
        modern: [
            { name: "现代灌溉", value: 2000, unit: "系统" },
            { name: "农业机械", value: 1000, unit: "设备" },
            { name: "基因育种", value: 800, unit: "新品种" },
            { name: "智慧农业", value: 500, unit: "系统" },
            { name: "生态农业", value: 600, unit: "模式" }
        ],
        flow: [
            { source: "水利灌溉", target: "现代灌溉", value: 100 },
            { source: "水利灌溉", target: "智慧农业", value: 80 },
            { source: "农具改良", target: "农业机械", value: 90 },
            { source: "作物驯化", target: "基因育种", value: 95 },
            { source: "作物驯化", target: "生态农业", value: 85 },
            { source: "农时历法", target: "智慧农业", value: 70 },
            { source: "耕作技术", target: "生态农业", value: 80 },
            { source: "耕作技术", target: "现代灌溉", value: 75 }
        ]
    },
    mathematics: {
        title: "数学技术",
        ancient: [
            { name: "九章算术", value: 246, unit: "问题" },
            { name: "勾股定理", value: 100, unit: "应用" },
            { name: "算盘", value: 150, unit: "算法" },
            { name: "珠算", value: 80, unit: "方法" },
            { name: "容术", value: 50, unit: "公式" }
        ],
        modern: [
            { name: "数值分析", value: 1000, unit: "方法" },
            { name: "密码学", value: 800, unit: "算法" },
            { name: "大数据算法", value: 2000, unit: "模型" },
            { name: "人工智能", value: 1500, unit: "算法" },
            { name: "计算机科学", value: 3000, unit: "理论" }
        ],
        flow: [
            { source: "九章算术", target: "数值分析", value: 100 },
            { source: "九章算术", target: "大数据算法", value: 90 },
            { source: "勾股定理", target: "数值分析", value: 85 },
            { source: "算盘", target: "计算机科学", value: 95 },
            { source: "算盘", target: "大数据算法", value: 80 },
            { source: "珠算", target: "计算机科学", value: 75 },
            { source: "容术", target: "数值分析", value: 70 },
            { source: "容术", target: "人工智能", value: 65 }
        ]
    },
    chemistry: {
        title: "化学工艺",
        ancient: [
            { name: "火药配方", value: 100, unit: "种" },
            { name: "陶瓷工艺", value: 400, unit: "工序" },
            { name: "染料制作", value: 150, unit: "配方" },
            { name: "冶金技术", value: 200, unit: "方法" },
            { name: "制纸术", value: 300, unit: "工艺" }
        ],
        modern: [
            { name: "现代火工", value: 1000, unit: "应用" },
            { name: "新材料", value: 2000, unit: "品种" },
            { name: "化工产业", value: 1500, unit: "工艺" },
            { name: "纳米技术", value: 800, unit: "应用" },
            { name: "环保材料", value: 1200, unit: "种类" }
        ],
        flow: [
            { source: "火药配方", target: "现代火工", value: 100 },
            { source: "火药配方", target: "化工产业", value: 85 },
            { source: "陶瓷工艺", target: "新材料", value: 90 },
            { source: "陶瓷工艺", target: "纳米技术", value: 80 },
            { source: "染料制作", target: "化工产业", value: 95 },
            { source: "染料制作", target: "环保材料", value: 75 },
            { source: "冶金技术", target: "新材料", value: 85 },
            { source: "制纸术", target: "环保材料", value: 80 }
        ]
    },
    astronomy: {
        title: "天文历法",
        ancient: [
            { name: "浑天仪", value: 50, unit: "观测项" },
            { name: "历法改革", value: 30, unit: "次" },
            { name: "星象记录", value: 800, unit: "条" },
            { name: "日食预测", value: 100, unit: "次" },
            { name: "天文计算", value: 200, unit: "方法" }
        ],
        modern: [
            { name: "天文望远镜", value: 500, unit: "台" },
            { name: "卫星导航", value: 300, unit: "系统" },
            { name: "空间站", value: 100, unit: "模块" },
            { name: "天文计算", value: 1000, unit: "模型" },
            { name: "航天技术", value: 800, unit: "项" }
        ],
        flow: [
            { source: "浑天仪", target: "天文望远镜", value: 100 },
            { source: "浑天仪", target: "航天技术", value: 80 },
            { source: "历法改革", target: "卫星导航", value: 90 },
            { source: "星象记录", target: "天文计算", value: 95 },
            { source: "日食预测", target: "天文计算", value: 85 },
            { source: "天文计算", target: "航天技术", value: 75 },
            { source: "天文计算", target: "空间站", value: 70 }
        ]
    }
};

// 新的配色方案
const themeColors = {
    ancient: {
        primary: '#8B0000',    // 深红色
        secondary: '#A52A2A',  // 褐红色
        highlight: '#B22222'   // 火砖红
    },
    modern: {
        primary: '#D4AF37',    // 金色
        secondary: '#DAA520',  // 暗金色
        highlight: '#FFD700'   // 亮金色
    },
    background: '#E8C39E',     // 典雅米色
    text: '#2C1810'           // 深褐色
};

// 科学成果对比模块
function initComparison() {
    const container = document.getElementById('comparison-container');
    container.innerHTML = '';

    // 创建布局结构
    const layout = document.createElement('div');
    layout.className = 'comparison-layout';
    container.appendChild(layout);

    // 创建顶部标题
    const header = document.createElement('div');
    header.innerHTML = '<h1 class="chart-title">古今科技成果对比</h1>';
    layout.appendChild(header);

    // 创建主体容器
    const mainContent = document.createElement('div');
    mainContent.className = 'chart-container';
    layout.appendChild(mainContent);

    // 创建左右图表容器
    const barChartContainer = document.createElement('div');
    barChartContainer.className = 'chart-box';
    mainContent.appendChild(barChartContainer);

    const sankeyContainer = document.createElement('div');
    sankeyContainer.className = 'chart-box';
    mainContent.appendChild(sankeyContainer);

    // 创建底部按钮容器
    const footer = document.createElement('div');
    footer.className = 'category-selector';
    layout.appendChild(footer);

    // 添加切换按钮
    const categories = [
        { key: 'medical', name: '医药' },
        { key: 'agriculture', name: '农业' },
        { key: 'mathematics', name: '数学' },
        { key: 'chemistry', name: '化工' },
        { key: 'astronomy', name: '天文' }
    ];

    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-button';
        button.textContent = category.name;
        button.onclick = () => {
            updateCharts(category.key);
            // 更新所有按钮样式
            footer.querySelectorAll('button').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');
        };
        footer.appendChild(button);
    });

    // 初始化图表
    const barChart = echarts.init(barChartContainer);
    const sankeyChart = echarts.init(sankeyContainer);

    // 窗口大小改变时自动调整图表大小
    window.addEventListener('resize', () => {
        barChart.resize();
        sankeyChart.resize();
    });

    // 更新图表函数
    function updateCharts(category) {
        const data = achievementData[category];
        
        // 更新双柱状图
        const barOption = {
            title: {
                text: data.title + '发展对比',
                left: 'center',
                top: 10,
                textStyle: {
                    fontSize: 16,
                    color: themeColors.text,
                    fontWeight: 'bold',
                    fontFamily: "'Noto Serif SC', serif"
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params) {
                    const item = params[0];
                    const sourceData = item.componentIndex === 0 
                        ? data.ancient[item.dataIndex]
                        : data.modern[item.dataIndex];
                    return `${sourceData.name}<br/>${item.value} ${sourceData.unit}`;
                },
                textStyle: {
                    fontFamily: "'Noto Serif SC', serif"
                }
            },
            legend: {
                data: ['古代技术', '现代应用'],
                top: 40,
                textStyle: {
                    color: themeColors.text,
                    fontFamily: "'Noto Serif SC', serif"
                }
            },
            grid: {
                top: 80,
                left: '10%',
                right: '10%',
                bottom: '15%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: data.ancient.map(item => item.name),
                    axisLine: { 
                        show: true,
                        lineStyle: { color: themeColors.text }
                    },
                    axisTick: { show: false },
                    axisLabel: {
                        rotate: 30,
                        fontSize: 12,
                        interval: 0,
                        color: themeColors.text,
                        fontFamily: "'Noto Serif SC', serif"
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: '数量',
                    nameTextStyle: {
                        padding: [0, 0, 0, 30],
                        color: themeColors.text,
                        fontFamily: "'Noto Serif SC', serif"
                    },
                    axisLine: { 
                        show: true,
                        lineStyle: { color: themeColors.text }
                    },
                    axisTick: { show: false },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(44, 24, 16, 0.1)'
                        }
                    },
                    axisLabel: {
                        color: themeColors.text,
                        fontFamily: "'Noto Serif SC', serif"
                    }
                }
            ],
            series: [
                {
                    name: '古代技术',
                    type: 'bar',
                    barWidth: '20%',
                    barGap: '100%',
                    data: data.ancient.map(item => item.value),
                    itemStyle: {
                        color: themeColors.ancient.primary,
                        borderRadius: [5, 5, 0, 0]
                    },
                    emphasis: {
                        itemStyle: {
                            color: themeColors.ancient.highlight
                        }
                    }
                },
                {
                    name: '现代应用',
                    type: 'bar',
                    barWidth: '20%',
                    data: data.modern.map(item => item.value),
                    itemStyle: {
                        color: themeColors.modern.primary,
                        borderRadius: [5, 5, 0, 0]
                    },
                    emphasis: {
                        itemStyle: {
                            color: themeColors.modern.highlight
                        }
                    }
                }
            ]
        };

        // 更新桑基图
        const sankeyOption = {
            title: {
                text: '技术发展流向图',
                left: 'center',
                top: 10,
                textStyle: {
                    fontSize: 16,
                    color: themeColors.text,
                    fontWeight: 'bold',
                    fontFamily: "'Noto Serif SC', serif"
                }
            },
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                formatter: function(params) {
                    if (params.dataType === 'node') {
                        const item = [...data.ancient, ...data.modern].find(i => i.name === params.name);
                        return `${params.name}<br/>数量: ${params.value} ${item.unit}`;
                    }
                    return `${params.data.source} → ${params.data.target}<br/>关联强度: ${params.data.value}%`;
                },
                textStyle: {
                    fontFamily: "'Noto Serif SC', serif"
                }
            },
            series: [{
                type: 'sankey',
                left: '8%',
                right: '8%',
                top: 50,
                bottom: '5%',
                nodeWidth: 24,
                nodeGap: 16,
                layout: 'none',
                nodeAlign: 'justify',
                orient: 'horizontal',
                draggable: false,
                emphasis: {
                    focus: 'adjacency',
                    itemStyle: {
                        borderColor: themeColors.text,
                        borderWidth: 2
                    },
                    lineStyle: {
                        opacity: 0.9,
                        width: 4
                    },
                    label: {
                        fontSize: 13,
                        fontWeight: 'bold'
                    }
                },
                data: [
                    ...data.ancient.map((item, index) => {
                        const nodeSize = Math.max(30, Math.min(100, item.value / 20));
                        return {
                            name: item.name,
                            value: item.value,
                            itemStyle: {
                                color: themeColors.ancient.primary,
                                borderColor: themeColors.ancient.secondary,
                                borderWidth: 1
                            },
                            label: {
                                position: 'left',
                                distance: 10,
                                fontFamily: "'Noto Serif SC', serif",
                                color: themeColors.text,
                                fontSize: 12
                            },
                            x: 0,
                            y: index * (nodeSize + 20)
                        };
                    }),
                    ...data.modern.map((item, index) => {
                        const nodeSize = Math.max(30, Math.min(100, item.value / 20));
                        return {
                            name: item.name,
                            value: item.value,
                            itemStyle: {
                                color: themeColors.modern.primary,
                                borderColor: themeColors.modern.secondary,
                                borderWidth: 1
                            },
                            label: {
                                position: 'right',
                                distance: 15,
                                fontFamily: "'Noto Serif SC', serif",
                                color: themeColors.text,
                                fontSize: 12
                            },
                            x: 1,
                            y: index * (nodeSize + 20)
                        };
                    })
                ],
                links: data.flow.map(link => ({
                    ...link,
                    lineStyle: {
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: themeColors.ancient.primary
                            }, {
                                offset: 1,
                                color: themeColors.modern.primary
                            }]
                        },
                        opacity: 0.6,
                        curveness: 0.5
                    }
                })),
                label: {
                    show: true,
                    formatter: function(params) {
                        return params.name;
                    }
                },
                layoutIterations: 32,
                nodeWidth: 24,
                nodeGap: 16,
                emphasis: {
                    focus: 'adjacency',
                    label: {
                        fontSize: 13,
                        fontWeight: 'bold'
                    }
                }
            }]
        };

        barChart.setOption(barOption);
        sankeyChart.setOption(sankeyOption);
    }

    // 初始显示医药类别的数据并高亮对应按钮
    updateCharts('medical');
    footer.querySelector('button').classList.add('active');
}

// 导出初始化函数
window.initComparison = initComparison; 