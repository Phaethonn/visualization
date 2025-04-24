// 典籍数据
const bookData = {
    "本草纲目": {
        title: "《本草纲目》",
        author: "李时珍",
        year: 1578,
        category: "医药",
        intro: "中国最完备的一部药学巨著，收载药物1892种，附图1109幅。全书记载了大量药物的产地、采集、炮制、性味、功效等内容，是中医药学的经典著作。",
        significance: [
            "系统整理了中国传统医药学知识",
            "建立了完整的药物分类系统",
            "记录了大量民间药用验方",
            "对世界医药学发展有重要影响"
        ],
        events: [
            { year: 1578, location: [30.5928, 114.3055], city: "武昌", country: "中国", event: "《本草纲目》完成" },
            { year: 1593, location: [34.2830, 108.9286], city: "西安", country: "中国", event: "首次刊印" },
            { year: 1606, location: [35.6762, 139.6503], city: "江户", country: "日本", event: "传入日本" },
            { year: 1656, location: [37.5665, 126.9780], city: "汉城", country: "朝鲜", event: "传入朝鲜" },
            { year: 1735, location: [48.8566, 2.3522], city: "巴黎", country: "法国", event: "传入欧洲" },
            { year: 1850, location: [51.5074, -0.1278], city: "伦敦", country: "英国", event: "英译本出版" }
        ]
    },
    "天工开物": {
        title: "《天工开物》",
        author: "宋应星",
        year: 1637,
        category: "工艺",
        intro: "明代科学技术著作，被誉为'中国17世纪的工艺百科全书'。详细记述了农业、手工业等各个领域的生产技术，是研究中国古代工艺技术的重要文献。",
        significance: [
            "系统记录明代生产技术",
            "详述农业和手工业工艺",
            "展现中国古代科技成就",
            "对东亚工业发展有重要影响"
        ],
        events: [
            { year: 1637, location: [29.8683, 121.5440], city: "宁波", country: "中国", event: "《天工开物》完成" },
            { year: 1645, location: [35.6762, 139.6503], city: "江户", country: "日本", event: "传入日本" },
            { year: 1771, location: [37.5665, 126.9780], city: "汉城", country: "朝鲜", event: "传入朝鲜" },
            { year: 1840, location: [48.8566, 2.3522], city: "巴黎", country: "法国", event: "法译本出版" },
            { year: 1853, location: [52.5200, 13.4050], city: "柏林", country: "德国", event: "德译本出版" }
        ]
    },
    "梦溪笔谈": {
        title: "《梦溪笔谈》",
        author: "沈括",
        year: 1086,
        category: "综合",
        intro: "北宋科学家沈括撰写的一部笔记体著作，涉及天文、地理、物理、化学、生物等诸多领域，被誉为'中国科学史上的里程碑'。",
        significance: [
            "记录大量科学发现和发明",
            "涵盖自然科学多个领域",
            "体现宋代科技发展水平",
            "对后世科学研究有深远影响"
        ],
        events: [
            { year: 1086, location: [30.2741, 120.1551], city: "杭州", country: "中国", event: "《梦溪笔谈》完成" },
            { year: 1095, location: [34.2830, 108.9286], city: "西安", country: "中国", event: "首次刊印" },
            { year: 1620, location: [35.6762, 139.6503], city: "江户", country: "日本", event: "传入日本" },
            { year: 1800, location: [48.8566, 2.3522], city: "巴黎", country: "法国", event: "法译本摘录" },
            { year: 1900, location: [51.5074, -0.1278], city: "伦敦", country: "英国", event: "英译本出版" }
        ]
    },
    "农政全书": {
        title: "《农政全书》",
        author: "徐光启",
        year: 1639,
        category: "农业",
        intro: "明代最完备的农书，集中国传统农学之大成。全书详细记载了农业生产技术、水利工程、农具改良等内容，是中国古代农学的集大成之作。",
        significance: [
            "系统总结中国传统农业技术",
            "引入西方先进农业技术",
            "推动农业科技发展",
            "影响东亚农业现代化"
        ],
        events: [
            { year: 1639, location: [31.2304, 121.4737], city: "上海", country: "中国", event: "《农政全书》完成" },
            { year: 1640, location: [39.9042, 116.4074], city: "北京", country: "中国", event: "刊印出版" },
            { year: 1700, location: [35.6762, 139.6503], city: "江户", country: "日本", event: "传入日本" },
            { year: 1850, location: [48.8566, 2.3522], city: "巴黎", country: "法国", event: "法文节译" }
        ]
    },
    "九章算术": {
        title: "《九章算术》",
        author: "多位数学家",
        year: -100,
        category: "数学",
        intro: "中国古代最重要的数学著作之一，收录246个数学问题和解法。涵盖面积、比例、分数、方程等多个数学领域，对中国和东亚数学发展有深远影响。",
        significance: [
            "奠定中国古代数学基础",
            "创立独特的数学解题方法",
            "影响东亚数学教育体系",
            "推动世界数学发展"
        ],
        events: [
            { year: -100, location: [34.2830, 108.9286], city: "长安", country: "中国", event: "《九章算术》编撰" },
            { year: 263, location: [34.2830, 108.9286], city: "长安", country: "中国", event: "刘徽注释" },
            { year: 1247, location: [37.5665, 126.9780], city: "开城", country: "高丽", event: "传入高丽" },
            { year: 1299, location: [35.6762, 139.6503], city: "镰仓", country: "日本", event: "传入日本" }
        ]
    }
};

// 文化传承模块
function initCulture() {
    // 获取容器元素
    const bookIntro = document.querySelector('#book-intro .book-content');
    const mapContainer = document.getElementById('map-container');
    const timeline = document.getElementById('timeline');

    // 初始化地图
    const map = L.map(mapContainer).setView([30, 110], 3);
    
    // 使用水墨风格地图
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // 创建底部典籍选择按钮
    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        gap: 10px;
        z-index: 1000;
        background: rgba(255, 255, 255, 0.9);
        padding: 10px 20px;
        border-radius: 20px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    `;

    Object.keys(bookData).forEach(book => {
        const button = document.createElement('button');
        button.textContent = book;
        button.style.cssText = `
            padding: 8px 20px;
            border: 2px solid #c41e3a;
            border-radius: 20px;
            background: white;
            color: #c41e3a;
            cursor: pointer;
            font-family: 'Noto Serif SC', serif;
            font-size: 14px;
            transition: all 0.3s;
        `;
        button.onmouseover = () => {
            button.style.background = '#c41e3a';
            button.style.color = 'white';
        };
        button.onmouseout = () => {
            button.style.background = 'white';
            button.style.color = '#c41e3a';
        };
        button.onclick = () => showBook(book, bookIntro, map, timeline);
        buttonContainer.appendChild(button);
    });

    document.body.appendChild(buttonContainer);

    // 显示初始典籍（本草纲目）
    showBook("本草纲目", bookIntro, map, timeline);
}

// 修改显示典籍函数
function showBook(bookName, introPanel, map, timelineContainer) {
    const book = bookData[bookName];
    
    // 更新介绍面板
    introPanel.innerHTML = `
        <div style="
            opacity: 0;
            transform: translateY(20px);
            animation: fadeIn 0.5s forwards;
        ">
            <h3 style="
                font-size: 24px;
                color: #c41e3a;
                margin-bottom: 20px;
            ">${book.title}</h3>
            
            <div style="
                margin-bottom: 20px;
                padding: 15px;
                background: #f8f4e8;
                border-radius: 8px;
            ">
                <p style="margin-bottom: 10px;"><strong>作者：</strong>${book.author}</p>
                <p style="margin-bottom: 10px;"><strong>年代：</strong>${book.year > 0 ? book.year + '年' : '公元前' + Math.abs(book.year) + '年'}</p>
                <p style="margin-bottom: 10px;"><strong>类别：</strong>${book.category}</p>
            </div>

            <div style="margin-bottom: 20px;">
                <h3 style="
                    font-size: 18px;
                    color: #666;
                    margin-bottom: 10px;
                ">内容简介</h3>
                <p style="
                    line-height: 1.6;
                    text-indent: 2em;
                ">${book.intro}</p>
            </div>

            <div>
                <h3 style="
                    font-size: 18px;
                    color: #666;
                    margin-bottom: 10px;
                ">历史意义</h3>
                <ul style="
                    list-style: none;
                    padding-left: 0;
                ">
                    ${book.significance.map(item => `
                        <li style="
                            margin-bottom: 10px;
                            padding-left: 20px;
                            position: relative;
                        ">
                            <span style="
                                position: absolute;
                                left: 0;
                                color: #c41e3a;
                            ">•</span>
                            ${item}
                        </li>
                    `).join('')}
                </ul>
            </div>
        </div>
    `;

    // 清除地图上的现有标记
    map.eachLayer((layer) => {
        if (layer instanceof L.Marker || layer instanceof L.Polyline) {
            map.removeLayer(layer);
        }
    });

    // 创建传播路径
    const coordinates = book.events.map(event => event.location);
    const path = L.polyline(coordinates, {
        color: '#c41e3a',
        weight: 2,
        opacity: 0.6,
        dashArray: '5, 10'
    }).addTo(map);

    // 添加标记点和动画
    book.events.forEach((event, index) => {
        setTimeout(() => {
            const marker = L.marker(event.location, {
                icon: L.divIcon({
                    className: 'custom-marker',
                    html: `<div style="
                        width: 20px;
                        height: 20px;
                        background: #c41e3a;
                        border-radius: 50%;
                        opacity: 0.8;
                        border: 2px solid white;
                        box-shadow: 0 0 10px rgba(196, 30, 58, 0.5);
                        animation: pulse 1.5s infinite;
                    "></div>`,
                    iconSize: [20, 20]
                })
            }).addTo(map);

            marker.bindPopup(`
                <div style="font-family: 'Noto Serif SC', serif;">
                    <h3>${event.city}·${event.country}</h3>
                    <p>${event.year > 0 ? event.year + '年' : '公元前' + Math.abs(event.year) + '年'}</p>
                    <p>${event.event}</p>
                </div>
            `);
        }, index * 500);
    });

    // 调整地图视图以适应所有标记点
    map.fitBounds(path.getBounds(), { padding: [50, 50] });

    // 更新时间轴
    updateTimeline(book, timelineContainer, map);
}

// 更新时间轴函数
function updateTimeline(book, container, map) {
    // 清除现有内容
    container.innerHTML = '<div class="timeline-line"></div>';
    
    // 计算时间范围
    const events = book.events;
    const years = events.map(e => e.year);
    const minYear = Math.min(...years);
    const maxYear = Math.max(...years);
    const timeSpan = maxYear - minYear;

    // 添加时间节点
    events.forEach((event, index) => {
        // 计算垂直位置（从上到下）
        const position = ((event.year - minYear) / timeSpan) * 80 + 10; // 10% 到 90% 的容器高度
        const node = document.createElement('div');
        node.className = 'timeline-node';
        node.style.top = `${position}%`; // 设置垂直位置
        node.style.left = '50%'; // 水平居中对齐
        
        const label = document.createElement('div');
        label.className = 'timeline-label';
        label.innerHTML = `
            <div>${event.year > 0 ? event.year + '年' : '公元前' + Math.abs(event.year) + '年'}</div>
            <div>${event.city}</div>
            <div>${event.event}</div>
        `;
        
        node.appendChild(label);
        container.appendChild(node);

        // 添加交互效果
        node.addEventListener('mouseenter', () => {
            node.style.transform = 'translate(-50%, -50%) scale(1.2)';
            // 在地图上显示对应的标记
            map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    const latLng = layer.getLatLng();
                    if (latLng.lat === event.location[0] && latLng.lng === event.location[1]) {
                        layer.openPopup();
                    }
                }
            });
        });

        node.addEventListener('mouseleave', () => {
            node.style.transform = 'translate(-50%, -50%) scale(1)';
            // 关闭地图上的弹出窗口
            map.eachLayer((layer) => {
                if (layer instanceof L.Marker) {
                    layer.closePopup();
                }
            });
        });
    });
}

// 添加动画样式
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(196, 30, 58, 0.4);
        }
        70% {
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(196, 30, 58, 0);
        }
        100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(196, 30, 58, 0);
        }
    }
`;
document.head.appendChild(style);

// 导出初始化函数
window.initCulture = initCulture; 