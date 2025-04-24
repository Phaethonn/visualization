/*   */
$(function() {
    map();

    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map_1'));
        var data = [
            { name: '北京', value: 384 },
            { name: '天津', value: 92 },
            { name: '上海', value: 325 },
            { name: '重庆', value: 128 },
            { name: '河北', value: 156 },
            { name: '河南', value: 187 },
            { name: '云南', value: 89 },
            { name: '辽宁', value: 201 },
            { name: '黑龙江', value: 167 },
            { name: '湖南', value: 198 },
            { name: '安徽', value: 176 },
            { name: '山东', value: 245 },
            { name: '新疆', value: 67 },
            { name: '江苏', value: 312 },
            { name: '浙江', value: 289 },
            { name: '江西', value: 134 },
            { name: '湖北', value: 223 },
            { name: '广西', value: 112 },
            { name: '甘肃', value: 98 },
            { name: '山西', value: 145 },
            { name: '内蒙古', value: 78 },
            { name: '陕西', value: 178 },
            { name: '吉林', value: 156 },
            { name: '福建', value: 167 },
            { name: '贵州', value: 87 },
            { name: '广东', value: 356 },
            { name: '青海', value: 45 },
            { name: '西藏', value: 34 },
            { name: '四川', value: 234 },
            { name: '宁夏', value: 56 },
            { name: '海南', value: 67 }
        ];
        var geoCoordMap = {
            '黑龙江': [129.42, 48.04],
            '四川': [102.54, 31.26],
            '内蒙古': [111.46, 41.4],
            '陕西': [108.5, 34.45],
            '吉林': [125.35, 43.88],
            '广西': [108.22, 22.48],
            '湖南': [112.59, 28.12],
            '湖北': [114.21, 30.30],
            '甘肃': [103.4, 36.3],
            '云南': [103.4, 25.2],
            '辽宁': [123.38, 41.8],
            '福建': [119.28, 26.08],
            '江西': [115.89, 28.67],
            '新疆': [87.61, 43.79],
            '广东': [113.17, 23.8],
            '河南': [113.42, 34.36],
            '河北': [115.3, 38.3],
            '浙江': [119.37, 30.11],
            '西藏': [91.11, 29.64],
            '海南': [110.19, 20.1],
            '贵州': [106.42, 26.35],
            '宁夏': [106.26, 38.47],
            '安徽': [117.17, 31.52],
            '山西': [112.3, 37.8],
            '青海': [98.25, 35.53],
            '山东': [117, 36.4],
            '重庆': [106.33, 29.35],
            '天津': [117.43, 39.34],
            '江苏': [118.76, 32.04],
            '上海': [121.52, 30.89],
            '北京': [116.43, 40.34],
        };
        var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        };

        option = {
            title: {
                //text: '中国各省自然科学著作数量分布图',
                left: 'center',
                textStyle: {
                    color: '#8B0000',
                    fontSize: 16,
                    fontWeight: 'bold',
                    fontFamily: 'SimSun'
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (typeof(params.value)[2] == "undefined") {
                        return params.name + ' : ' + params.value;
                    } else {
                        return params.name + ' : ' + params.value[2];
                    }
                }
            },

            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#f9f6f2',
                        borderColor: '#8B0000'
                    },
                    emphasis: {
                        areaColor: '#E8C39E'
                    }
                }
            },
            series: [{
                    name: '自然科学著作数量',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(data),
                    symbolSize: function(val) {
                        return val[2] / 15;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#8B0000'
                        }
                    }
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

})