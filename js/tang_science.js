// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有图表
    initializeCharts();
    
    // 绑定事件监听器
    bindEventListeners();
});

// 图表初始化
function initializeCharts() {
    initSubjectDistribution();
    initTimeline();
    initSubjectTrend();
    initGeographyHeatmap();
}

// 学科分布环形图
function initSubjectDistribution() {
    const chart = echarts.init(document.getElementById('subject-distribution'));
    const option = {
        title: {
            text: '唐代科学著作学科分布',
            left: 'center',
            textStyle: {
                color: '#2C1810'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['天文', '医学', '数学', '农业']
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
                position: 'outside'
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '20',
                    fontWeight: 'bold'
                }
            },
            data: [
                { value: 15, name: '天文', itemStyle: { color: '#D4AF37' } },
                { value: 25, name: '医学', itemStyle: { color: '#8B0000' } },
                { value: 10, name: '数学', itemStyle: { color: '#4A0404' } },
                { value: 20, name: '农业', itemStyle: { color: '#E8C39E' } }
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
                color: '#2C1810',
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
                fontSize: 14
            }
        },
        yAxis: {
            type: 'value',
            name: '重要成就数量',
            nameTextStyle: {
                fontSize: 14
            },
            axisLabel: {
                fontSize: 12
            }
        },
        series: [{
            name: '科技成就',
            type: 'bar',
            data: [
                {
                    value: 12,
                    itemStyle: { color: '#D4AF37' },
                    details: '大衍历、麟德历、五纬历等\n观星台建设与天文观测\n天文仪器改进'
                },
                {
                    value: 18,
                    itemStyle: { color: '#8B0000' },
                    details: '《千金要方》《外台秘要》\n医学教育制度确立\n药物学发展与中药理论'
                },
                {
                    value: 15,
                    itemStyle: { color: '#E8C39E' },
                    details: '水利工程技术\n农具改良与推广\n茶叶、果树种植技术'
                },
                {
                    value: 10,
                    itemStyle: { color: '#4A0404' },
                    details: '《缉古算经》《九章算术音义》\n印度数学引入\n测量技术发展'
                },
                {
                    value: 16,
                    itemStyle: { color: '#A67C52' },
                    details: '瓷器制造工艺\n纺织印染技术\n冶金技术发展'
                }
            ],
            label: {
                show: true,
                position: 'top',
                fontSize: 14,
                color: '#2C1810'
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
            left: 'center'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['天文', '医学', '数学', '农业'],
            bottom: 0
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
            data: ['初唐', '盛唐', '中唐', '晚唐']
        },
        yAxis: {
            type: 'value',
            name: '著作数量'
        },
        series: [{
            name: '天文',
            type: 'line',
            data: [3, 5, 4, 3],
            itemStyle: { color: '#D4AF37' }
        },
        {
            name: '医学',
            type: 'line',
            data: [5, 8, 7, 5],
            itemStyle: { color: '#8B0000' }
        },
        {
            name: '数学',
            type: 'line',
            data: [2, 4, 3, 1],
            itemStyle: { color: '#4A0404' }
        },
        {
            name: '农业',
            type: 'line',
            data: [4, 6, 5, 5],
            itemStyle: { color: '#E8C39E' }
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
            left: 'center'
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
            }
        },
        yAxis: {
            type: 'category',
            data: ['天文', '医学', '数学', '农业'],
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 10,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%',
            inRange: {
                color: ['#E8C39E', '#8B0000']
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
                show: true
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

// 绑定事件监听器
function bindEventListeners() {
    // 视图切换按钮
    document.querySelectorAll('.view-btn').forEach(button => {
        button.addEventListener('click', function() {
            const view = this.dataset.view;
            switchView(view);
        });
    });

    // 时间轴滑块
    const timeSlider = document.getElementById('time-slider');
    const timeDisplay = document.getElementById('time-display');
    timeSlider.addEventListener('input', function() {
        timeDisplay.textContent = this.value + '年';
        updateChartsByYear(this.value);
    });

    // 学科筛选
    document.getElementById('subject-filter').addEventListener('change', function() {
        filterBySubject(this.value);
    });

    // 返回顶部按钮
    document.getElementById('back-to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 重要著作悬停事件
    document.querySelectorAll('.book-list li').forEach(item => {
        item.addEventListener('mouseover', function() {
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.display = 'block';
        });
        item.addEventListener('mouseout', function() {
            const tooltip = this.querySelector('.tooltip');
            tooltip.style.display = 'none';
        });
    });
}

// 切换视图
function switchView(view) {
    // 更新按钮状态
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.dataset.view === view) {
            btn.classList.add('active');
        }
    });

    // 更新视图面板
    document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(view + '-view').classList.add('active');

    // 重新调整图表大小
    const charts = document.querySelectorAll('.chart-container');
    charts.forEach(container => {
        const chart = echarts.getInstanceByDom(container);
        if(chart) {
            chart.resize();
        }
    });
}

// 根据年份更新图表
function updateChartsByYear(year) {
    // 这里可以根据年份筛选数据，更新各个图表
    console.log('Updating charts for year:', year);
}

// 根据学科筛选
function filterBySubject(subject) {
    // 这里可以根据学科筛选数据，更新各个图表
    console.log('Filtering by subject:', subject);
}

// 窗口大小改变时重新调整图表大小
window.addEventListener('resize', function() {
    const charts = document.querySelectorAll('.chart-container');
    charts.forEach(container => {
        const chart = echarts.getInstanceByDom(container);
        if(chart) {
            chart.resize();
        }
    });
}); 