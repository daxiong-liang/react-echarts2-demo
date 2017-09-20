
export default {
  namespace: 'echarts',
  state: {
    pieChartCtrl: {
      visible: false,
      dataInfo: {},
    },
    breakLinetCtrl: {
      visible: false,
      dataInfo: {},
    },
    barCtrl: {
      visible: false,
      dataInfo: {},
    },
    scatterCtrl: {
      visible: false,
      dataInfo: {},
    },
    forceCtrl: {
      visible: false,
      dataInfo: {},
    },
    treeCtrl: {
      visible: false,
      dataInfo: {},
    },
    headAndMapCtrl: {
      visible: false,
      dataInfo: {},
    },
    migrateCtrl: {
      visible: false,
      dataInfo: {},
    },
    funnelCtrl: {
      visible: false,
      dataInfo: {},
    },
    funnel2Ctrl: {
      visible: false,
      dataInfo: {},
    },
  },
  reducers: {
    ViewPieChart(state){
      let idx = 1;
      //noinspection JSAnnotator
      const dataInfo = {
        timeline : {
          data : [
            '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01',
            { name:'2013-06-01', symbol:'emptyStar6', symbolSize:8 },
            '2013-07-01', '2013-08-01', '2013-09-01', '2013-10-01', '2013-11-01',
            { name:'2013-12-01', symbol:'star6', symbolSize:8 }
          ],
            label : {
            formatter : function(s) {
              return s.slice(0, 7);
            }
          }
        },
        options : [
          {
            title : {
              text: '浏览器占比变化',
              subtext: '纯属虚构'
            },
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              data:['Chrome','Firefox','Safari','IE9+','IE8-']
            },
            toolbox: {
              show : true,
              feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {
                  show: true,
                  type: ['pie', 'funnel'],
                  option: {
                    funnel: {
                      x: '25%',
                      width: '50%',
                      funnelAlign: 'left',
                      max: 1700
                    }
                  }
                },
                restore : {show: true},
                saveAsImage : {show: true}
              }
            },
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                center: ['50%', '45%'],
                radius: '50%',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          },
          {
            series : [
              {
                name:'浏览器（数据纯属虚构）',
                type:'pie',
                data:[
                  {value: idx * 128 + 80,  name:'Chrome'},
                  {value: idx * 64  + 160,  name:'Firefox'},
                  {value: idx * 32  + 320,  name:'Safari'},
                  {value: idx * 16  + 640,  name:'IE9+'},
                  {value: idx++ * 8  + 1280, name:'IE8-'}
                ]
              }
            ]
          }
        ]
      };
      return { ...state,
        pieChartCtrl: { visible: true, dataInfo },

      };
    },
    ViewBreakLinet(state){
      let idx = 1;
      //noinspection JSAnnotator
      const dataInfo = {
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        toolbox: {
          show : true,
          feature : {
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        calculable : true,
        xAxis : [
          {
            type : 'category',
            boundaryGap : false,
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        series : [
          {
            name:'邮件营销',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
          },
          {
            name:'直接访问',
            type:'line',
            stack: '总量',
            data:[320, 332, 301, 334, 390, 330, 320]
          },
          {
            name:'搜索引擎',
            type:'line',
            stack: '总量',
            data:[820, 932, 901, 934, 1290, 1330, 1320]
          }
        ]
      };

      return { ...state,
        breakLinetCtrl: { visible: true, dataInfo },

      };
    },
    ViewBar(state){
      let idx = 1;
      //noinspection JSAnnotator
      const dataInfo = {
        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data:['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
        },
        toolbox: {
          show : true,
          feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          }
        },
        calculable : true,
        xAxis : [
          {
            type : 'value'
          }
        ],
        yAxis : [
          {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
          }
        ],
        series : [
          {
            name:'直接访问',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[320, 302, 301, 334, 390, 330, 320]
          },
          {
            name:'邮件营销',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[120, 132, 101, 134, 90, 230, 210]
          },
          {
            name:'联盟广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[220, 182, 191, 234, 290, 330, 310]
          },
          {
            name:'视频广告',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[150, 212, 201, 154, 190, 330, 410]
          },
          {
            name:'搜索引擎',
            type:'bar',
            stack: '总量',
            itemStyle : { normal: {label : {show: true, position: 'insideRight'}}},
            data:[820, 832, 901, 934, 1290, 1330, 1320]
          }
        ]
      };

      return { ...state,
        barCtrl: { visible: true, dataInfo },

      };
    },
    ViewScatter(state){
      let idx = 1;
      //noinspection JSAnnotator
      const dataInfo = {
        title : {
          text : '时间坐标散点图',
          subtext : 'dataZoom支持'
        },
        tooltip : {
          trigger: 'axis',
          axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
              type : 'dashed',
              width : 1
            }
          }
        },
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        dataZoom: {
          show: true,
          start : 30,
          end : 70
        },
        legend : {
          data : ['series1']
        },
        dataRange: {
          min: 0,
          max: 100,
          orient: 'horizontal',
          y: 30,
          x: 'center',
          //text:['高','低'],           // 文本，默认为数值文本
          color:['lightgreen','orange'],
          splitNumber: 5
        },
        grid: {
          y2: 80
        },
        xAxis : [
          {
            type : 'time',
            splitNumber:10
          }
        ],
        yAxis : [
          {
            type : 'value'
          }
        ],
        animation: false,
        series : [
          {
            name:'series1',
            type:'scatter',
            tooltip : {
              trigger: 'axis',
              formatter : function (params) {
                var date = new Date(params.value[0]);
                return params.seriesName
                  + ' （'
                  + date.getFullYear() + '-'
                  + (date.getMonth() + 1) + '-'
                  + date.getDate() + ' '
                  + date.getHours() + ':'
                  + date.getMinutes()
                  +  '）<br/>'
                  + params.value[1] + ', '
                  + params.value[2];
              },
              axisPointer:{
                type : 'cross',
                lineStyle: {
                  type : 'dashed',
                  width : 1
                }
              }
            },
            symbolSize: function (value){
              return Math.round(value[2]/10);
            },
            data: (function () {
              var d = [];
              var len = 0;
              var now = new Date();
              var value;
              while (len++ < 1500) {
                d.push([
                  new Date(2014, 9, 1, 0, Math.round(Math.random()*10000)),
                  (Math.random()*30).toFixed(2) - 0,
                  (Math.random()*100).toFixed(2) - 0
                ]);
              }
              return d;
            })()
          }
        ]
      };

      return { ...state,
        scatterCtrl: { visible: true, dataInfo },

      };
    },
    ViewForce(state){
      let idx = 1;
      //noinspection JSAnnotator
      const dataInfo = {
        title : {
          text: '人物关系：乔布斯',
          subtext: '数据来自人立方',
          x:'right',
          y:'bottom'
        },
        tooltip : {
          trigger: 'item',
          formatter: '{a} : {b}'
        },
        toolbox: {
          show : true,
          feature : {
            restore : {show: true},
            magicType: {show: true, type: ['force', 'chord']},
            saveAsImage : {show: true}
          }
        },
        legend: {
          x: 'left',
          data:['家人','朋友']
        },
        series : [
          {
            type:'force',
            name : "人物关系",
            ribbonType: false,
            categories : [
              {
                name: '人物'
              },
              {
                name: '家人'
              },
              {
                name:'朋友'
              }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  textStyle: {
                    color: '#333'
                  }
                },
                nodeStyle : {
                  brushType : 'both',
                  borderColor : 'rgba(255,215,0,0.4)',
                  borderWidth : 1
                },
                linkStyle: {
                  type: 'curve'
                }
              },
              emphasis: {
                label: {
                  show: false
                  // textStyle: null      // 默认使用全局文本样式，详见TEXTSTYLE
                },
                nodeStyle : {
                  //r: 30
                },
                linkStyle : {}
              }
            },
            useWorker: false,
            minRadius : 15,
            maxRadius : 25,
            gravity: 1.1,
            scaling: 1.1,
            roam: 'move',
            nodes:[
              {category:0, name: '乔布斯', value : 10, label: '乔布斯\n（主要）'},
              {category:1, name: '丽萨-乔布斯',value : 2},
              {category:1, name: '保罗-乔布斯',value : 3},
              {category:1, name: '克拉拉-乔布斯',value : 3},
              {category:1, name: '劳伦-鲍威尔',value : 7},
              {category:2, name: '史蒂夫-沃兹尼艾克',value : 5},
              {category:2, name: '奥巴马',value : 8},
              {category:2, name: '比尔-盖茨',value : 9},
              {category:2, name: '乔纳森-艾夫',value : 4},
              {category:2, name: '蒂姆-库克',value : 4},
              {category:2, name: '龙-韦恩',value : 1},
            ],
            links : [
              {source : '丽萨-乔布斯', target : '乔布斯', weight : 1, name: '女儿'},
              {source : '保罗-乔布斯', target : '乔布斯', weight : 2, name: '父亲'},
              {source : '克拉拉-乔布斯', target : '乔布斯', weight : 1, name: '母亲'},
              {source : '劳伦-鲍威尔', target : '乔布斯', weight : 2},
              {source : '史蒂夫-沃兹尼艾克', target : '乔布斯', weight : 3, name: '合伙人'},
              {source : '奥巴马', target : '乔布斯', weight : 1},
              {source : '比尔-盖茨', target : '乔布斯', weight : 6, name: '竞争对手'},
              {source : '乔纳森-艾夫', target : '乔布斯', weight : 1, name: '爱将'},
              {source : '蒂姆-库克', target : '乔布斯', weight : 1},
              {source : '龙-韦恩', target : '乔布斯', weight : 1},
              {source : '克拉拉-乔布斯', target : '保罗-乔布斯', weight : 1},
              {source : '奥巴马', target : '保罗-乔布斯', weight : 1},
              {source : '奥巴马', target : '克拉拉-乔布斯', weight : 1},
              {source : '奥巴马', target : '劳伦-鲍威尔', weight : 1},
              {source : '奥巴马', target : '史蒂夫-沃兹尼艾克', weight : 1},
              {source : '比尔-盖茨', target : '奥巴马', weight : 6},
              {source : '比尔-盖茨', target : '克拉拉-乔布斯', weight : 1},
              {source : '蒂姆-库克', target : '奥巴马', weight : 1}
            ]
          }
        ]
      };

      return { ...state,
        forceCtrl: { visible: true, dataInfo },

      };
    },
    ViewTree(state){
      let idx = 1;
      //noinspection JSAnnotator
      const dataInfo =  {
        title : {
          text: '树图',
          subtext: '虚构数据'
        },
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        calculable : false,

        series : [
          {
            name:'树图',
            type:'tree',
            orient: 'vertical',  // vertical horizontal
            rootLocation: {x: 'center',y: 50}, // 根节点位置  {x: 100, y: 'center'}
            nodePadding: 1,
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  formatter: "{b}"
                },
                lineStyle: {
                  color: '#48b',
                  shadowColor: '#000',
                  shadowBlur: 3,
                  shadowOffsetX: 3,
                  shadowOffsetY: 5,
                  type: 'curve' // 'curve'|'broken'|'solid'|'dotted'|'dashed'

                }
              },
              emphasis: {
                label: {
                  show: true
                }
              }
            },

            data: [
              {
                name: '根节点',
                value: 6,
                children: [
                  {
                    name: '节点1',
                    value: 4,
                    children: [
                      {
                        name: '叶子节点1',
                        value: 4
                      },
                      {
                        name: '叶子节点2',
                        value: 4
                      },
                      {
                        name: '叶子节点3',
                        value: 2
                      },
                      {
                        name: '叶子节点4',
                        value: 2
                      },
                      {
                        name: '叶子节点5',
                        value: 2
                      },
                      {
                        name: '叶子节点6',
                        value: 4
                      }
                    ]
                  },
                  {
                    name: '节点2',
                    value: 4,
                    children: [{
                      name: '叶子节点7',
                      value: 4
                    },
                      {
                        name: '叶子节点8',
                        value: 4
                      }]
                  },
                  {
                    name: '节点3',
                    value: 1,
                    children: [
                      {
                        name: '叶子节点9',
                        value: 4
                      },
                      {
                        name: '叶子节点10',
                        value: 4
                      },
                      {
                        name: '叶子节点11',
                        value: 2
                      },
                      {
                        name: '叶子节点12',
                        value: 2
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      };

      return { ...state,
        treeCtrl: { visible: true, dataInfo },

      };
    },
    ViewHeatAndMap(state){
      let idx = 1;
      let heatData = [];
      for (let i = 0; i < 200; ++i) {
        heatData.push([
          100 + Math.random() * 20,
          24 + Math.random() * 16,
          Math.random()
        ]);
      }
      for (let j = 0; j < 10; ++j) {
        let x = 100 + Math.random() * 16;
        let y = 24 + Math.random() * 12;
        let cnt = 30 * Math.random();
        for (let i = 0; i < cnt; ++i) {
          heatData.push([
            x + Math.random() * 2,
            y + Math.random() * 2,
            Math.random()
          ]);
        }
      }
      //noinspection JSAnnotator
      const dataInfo =  {
        backgroundColor: '#1b1b1b',
        title : {
          text: '热力图结合地图',
          x:'center',
          textStyle: {
            color: 'white'
          }
        },
        tooltip : {
          trigger: 'item',
          formatter: '{b}'
        },
        toolbox: {
          show : true,
          orient : 'vertical',
          x: 'right',
          y: 'center',
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        series : [
          {
            name: '北京',
            type: 'map',
            mapType: 'china',
            roam: true,
            hoverable: false,
            data:[],
            heatmap: {
              minAlpha: 0.1,
              data: heatData
            },
            itemStyle: {
              normal: {
                borderColor:'rgba(100,149,237,0.6)',
                borderWidth:0.5,
                areaStyle: {
                  color: '#1b1b1b'
                }
              }
            }
          }
        ]
      };

      return { ...state,
        headAndMapCtrl: { visible: true, dataInfo },

      };
    },
    ViewMigrate(state){
      //noinspection JSAnnotator
      const dataInfo =  {
        color: ['gold','aqua','lime'],
        title : {
          text: '模拟迁徙',
          subtext:'数据纯属虚构',
          x:'right'
        },
        tooltip : {
          trigger: 'item',
          formatter: function (v) {
            return v[1].replace(':', ' > ');
          }
        },
        legend: {
          orient: 'vertical',
          x:'left',
          data:['北京', '上海', '广州'],
          selectedMode: 'single',
          selected:{
            '上海' : false,
            '广州' : false
          }
        },
        toolbox: {
          show : true,
          orient : 'vertical',
          x: 'right',
          y: 'center',
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        dataRange: {
          min : 0,
          max : 100,
          y: '60%',
          calculable : true,
          color: ['#ff3333', 'orange', 'yellow','lime','aqua']
        },
        series : [
          {
            name:'北京',
            type:'map',
            mapType: 'none',
            data:[],
            geoCoord: {
              '上海': [121.4648,31.2891],
              '东莞': [113.8953,22.901],
              '东营': [118.7073,37.5513],
              '中山': [113.4229,22.478],
              '临汾': [111.4783,36.1615],
              '临沂': [118.3118,35.2936],
              '丹东': [124.541,40.4242],
              '丽水': [119.5642,28.1854],
              '乌鲁木齐': [87.9236,43.5883],
              '佛山': [112.8955,23.1097],
              '保定': [115.0488,39.0948],
              '兰州': [103.5901,36.3043],
              '包头': [110.3467,41.4899],
              '北京': [116.4551,40.2539],
              '北海': [109.314,21.6211],
              '南京': [118.8062,31.9208],
              '南宁': [108.479,23.1152],
              '南昌': [116.0046,28.6633],
              '南通': [121.1023,32.1625],
              '厦门': [118.1689,24.6478],
              '台州': [121.1353,28.6688],
              '合肥': [117.29,32.0581],
              '呼和浩特': [111.4124,40.4901],
              '咸阳': [108.4131,34.8706],
              '哈尔滨': [127.9688,45.368],
              '唐山': [118.4766,39.6826],
              '嘉兴': [120.9155,30.6354],
              '大同': [113.7854,39.8035],
              '大连': [122.2229,39.4409],
              '天津': [117.4219,39.4189],
              '太原': [112.3352,37.9413],
              '威海': [121.9482,37.1393],
              '宁波': [121.5967,29.6466],
              '宝鸡': [107.1826,34.3433],
              '宿迁': [118.5535,33.7775],
              '常州': [119.4543,31.5582],
              '广州': [113.5107,23.2196],
              '廊坊': [116.521,39.0509],
              '延安': [109.1052,36.4252],
              '张家口': [115.1477,40.8527],
              '徐州': [117.5208,34.3268],
              '德州': [116.6858,37.2107],
              '惠州': [114.6204,23.1647],
              '成都': [103.9526,30.7617],
              '扬州': [119.4653,32.8162],
              '承德': [117.5757,41.4075],
              '拉萨': [91.1865,30.1465],
              '无锡': [120.3442,31.5527],
              '日照': [119.2786,35.5023],
              '昆明': [102.9199,25.4663],
              '杭州': [119.5313,29.8773],
              '枣庄': [117.323,34.8926],
              '柳州': [109.3799,24.9774],
              '株洲': [113.5327,27.0319],
              '武汉': [114.3896,30.6628],
              '汕头': [117.1692,23.3405],
              '江门': [112.6318,22.1484],
              '沈阳': [123.1238,42.1216],
              '沧州': [116.8286,38.2104],
              '河源': [114.917,23.9722],
              '泉州': [118.3228,25.1147],
              '泰安': [117.0264,36.0516],
              '泰州': [120.0586,32.5525],
              '济南': [117.1582,36.8701],
              '济宁': [116.8286,35.3375],
              '海口': [110.3893,19.8516],
              '淄博': [118.0371,36.6064],
              '淮安': [118.927,33.4039],
              '深圳': [114.5435,22.5439],
              '清远': [112.9175,24.3292],
              '温州': [120.498,27.8119],
              '渭南': [109.7864,35.0299],
              '湖州': [119.8608,30.7782],
              '湘潭': [112.5439,27.7075],
              '滨州': [117.8174,37.4963],
              '潍坊': [119.0918,36.524],
              '烟台': [120.7397,37.5128],
              '玉溪': [101.9312,23.8898],
              '珠海': [113.7305,22.1155],
              '盐城': [120.2234,33.5577],
              '盘锦': [121.9482,41.0449],
              '石家庄': [114.4995,38.1006],
              '福州': [119.4543,25.9222],
              '秦皇岛': [119.2126,40.0232],
              '绍兴': [120.564,29.7565],
              '聊城': [115.9167,36.4032],
              '肇庆': [112.1265,23.5822],
              '舟山': [122.2559,30.2234],
              '苏州': [120.6519,31.3989],
              '莱芜': [117.6526,36.2714],
              '菏泽': [115.6201,35.2057],
              '营口': [122.4316,40.4297],
              '葫芦岛': [120.1575,40.578],
              '衡水': [115.8838,37.7161],
              '衢州': [118.6853,28.8666],
              '西宁': [101.4038,36.8207],
              '西安': [109.1162,34.2004],
              '贵阳': [106.6992,26.7682],
              '连云港': [119.1248,34.552],
              '邢台': [114.8071,37.2821],
              '邯郸': [114.4775,36.535],
              '郑州': [113.4668,34.6234],
              '鄂尔多斯': [108.9734,39.2487],
              '重庆': [107.7539,30.1904],
              '金华': [120.0037,29.1028],
              '铜川': [109.0393,35.1947],
              '银川': [106.3586,38.1775],
              '镇江': [119.4763,31.9702],
              '长春': [125.8154,44.2584],
              '长沙': [113.0823,28.2568],
              '长治': [112.8625,36.4746],
              '阳泉': [113.4778,38.0951],
              '青岛': [120.4651,36.3373],
              '韶关': [113.7964,24.7028]
            },

            markLine : {
              smooth:true,
              effect : {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle : {
                normal: {
                  borderWidth:1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data : [
                [{name:'北京'}, {name:'上海',value:95}],
                [{name:'北京'}, {name:'广州',value:90}],
                [{name:'北京'}, {name:'大连',value:80}],
                [{name:'北京'}, {name:'南宁',value:70}],
                [{name:'北京'}, {name:'南昌',value:60}],
                [{name:'北京'}, {name:'拉萨',value:50}],
                [{name:'北京'}, {name:'长春',value:40}],
                [{name:'北京'}, {name:'包头',value:30}],
                [{name:'北京'}, {name:'重庆',value:20}],
                [{name:'北京'}, {name:'常州',value:10}]
              ]
            },
            markPoint : {
              symbol:'emptyCircle',
              symbolSize : function (v){
                return 10 + v/10
              },
              effect : {
                show: true,
                shadowBlur : 0
              },
              itemStyle:{
                normal:{
                  label:{show:false}
                }
              },
              data : [
                {name:'上海',value:95},
                {name:'广州',value:90},
                {name:'大连',value:80},
                {name:'南宁',value:70},
                {name:'南昌',value:60},
                {name:'拉萨',value:50},
                {name:'长春',value:40},
                {name:'包头',value:30},
                {name:'重庆',value:20},
                {name:'常州',value:10}
              ]
            }

          },
          {
            name:'上海',
            type:'map',
            mapType: 'none',
            data:[],
            markLine : {
              smooth:true,
              effect : {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle : {
                normal: {
                  borderWidth:1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data : [
                [{name:'上海'},{name:'包头',value:95}],
                [{name:'上海'},{name:'昆明',value:90}],
                [{name:'上海'},{name:'广州',value:80}],
                [{name:'上海'},{name:'郑州',value:70}],
                [{name:'上海'},{name:'长春',value:60}],
                [{name:'上海'},{name:'重庆',value:50}],
                [{name:'上海'},{name:'长沙',value:40}],
                [{name:'上海'},{name:'北京',value:30}],
                [{name:'上海'},{name:'丹东',value:20}],
                [{name:'上海'},{name:'大连',value:10}]
              ]
            },
            markPoint : {
              symbol:'emptyCircle',
              symbolSize : function (v){
                return 10 + v/10
              },
              effect : {
                show: true,
                shadowBlur : 0
              },
              itemStyle:{
                normal:{
                  label:{show:false}
                }
              },
              data : [
                {name:'包头',value:95},
                {name:'昆明',value:90},
                {name:'广州',value:80},
                {name:'郑州',value:70},
                {name:'长春',value:60},
                {name:'重庆',value:50},
                {name:'长沙',value:40},
                {name:'北京',value:30},
                {name:'丹东',value:20},
                {name:'大连',value:10}
              ]
            }
          },
          {
            name:'广州',
            type:'map',
            mapType: 'none',
            data:[],
            markLine : {
              smooth:true,
              effect : {
                show: true,
                scaleSize: 1,
                period: 30,
                color: '#fff',
                shadowBlur: 10
              },
              itemStyle : {
                normal: {
                  borderWidth:1,
                  lineStyle: {
                    type: 'solid',
                    shadowBlur: 10
                  }
                }
              },
              data : [
                [{name:'广州'},{name:'福州',value:95}],
                [{name:'广州'},{name:'太原',value:90}],
                [{name:'广州'},{name:'长春',value:80}],
                [{name:'广州'},{name:'重庆',value:70}],
                [{name:'广州'},{name:'西安',value:60}],
                [{name:'广州'},{name:'成都',value:50}],
                [{name:'广州'},{name:'常州',value:40}],
                [{name:'广州'},{name:'北京',value:30}],
                [{name:'广州'},{name:'北海',value:20}],
                [{name:'广州'},{name:'海口',value:10}]
              ]
            },
            markPoint : {
              symbol:'emptyCircle',
              symbolSize : function (v){
                return 10 + v/10
              },
              effect : {
                show: true,
                shadowBlur : 0
              },
              itemStyle:{
                normal:{
                  label:{show:false}
                }
              },
              data : [
                {name:'福州',value:95},
                {name:'太原',value:90},
                {name:'长春',value:80},
                {name:'重庆',value:70},
                {name:'西安',value:60},
                {name:'成都',value:50},
                {name:'常州',value:40},
                {name:'北京',value:30},
                {name:'北海',value:20},
                {name:'海口',value:10}
              ]
            }
          },
          {
            name:'全国',
            type:'map',
            mapType: 'none',
            data:[],
            markLine : {
              smooth:true,
              symbol: ['none', 'circle'],
              symbolSize : 1,
              itemStyle : {
                normal: {
                  color:'#fff',
                  borderWidth:1,
                  borderColor:'rgba(30,144,255,0.5)'
                }
              },
              data : [
                [{name:'北京'},{name:'包头'}],
                [{name:'北京'},{name:'北海'}],
                [{name:'北京'},{name:'广州'}],
                [{name:'北京'},{name:'郑州'}],
                [{name:'北京'},{name:'长春'}],
                [{name:'北京'},{name:'长治'}],
                [{name:'北京'},{name:'重庆'}],
                [{name:'北京'},{name:'长沙'}],
                [{name:'北京'},{name:'成都'}],
                [{name:'北京'},{name:'常州'}],
                [{name:'北京'},{name:'丹东'}],
                [{name:'北京'},{name:'大连'}],
                [{name:'北京'},{name:'东营'}],
                [{name:'北京'},{name:'延安'}],
                [{name:'北京'},{name:'福州'}],
                [{name:'北京'},{name:'海口'}],
                [{name:'北京'},{name:'呼和浩特'}],
                [{name:'北京'},{name:'合肥'}],
                [{name:'北京'},{name:'杭州'}],
                [{name:'北京'},{name:'哈尔滨'}],
                [{name:'北京'},{name:'舟山'}],
                [{name:'北京'},{name:'银川'}],
                [{name:'北京'},{name:'衢州'}],
                [{name:'北京'},{name:'南昌'}],
                [{name:'北京'},{name:'昆明'}],
                [{name:'北京'},{name:'贵阳'}],
                [{name:'北京'},{name:'兰州'}],
                [{name:'北京'},{name:'拉萨'}],
                [{name:'北京'},{name:'连云港'}],
                [{name:'北京'},{name:'临沂'}],
                [{name:'北京'},{name:'柳州'}],
                [{name:'北京'},{name:'宁波'}],
                [{name:'北京'},{name:'南京'}],
                [{name:'北京'},{name:'南宁'}],
                [{name:'北京'},{name:'南通'}],
                [{name:'北京'},{name:'上海'}],
                [{name:'北京'},{name:'沈阳'}],
                [{name:'北京'},{name:'西安'}],
                [{name:'北京'},{name:'汕头'}],
                [{name:'北京'},{name:'深圳'}],
                [{name:'北京'},{name:'青岛'}],
                [{name:'北京'},{name:'济南'}],
                [{name:'北京'},{name:'太原'}],
                [{name:'北京'},{name:'乌鲁木齐'}],
                [{name:'北京'},{name:'潍坊'}],
                [{name:'北京'},{name:'威海'}],
                [{name:'北京'},{name:'温州'}],
                [{name:'北京'},{name:'武汉'}],
                [{name:'北京'},{name:'无锡'}],
                [{name:'北京'},{name:'厦门'}],
                [{name:'北京'},{name:'西宁'}],
                [{name:'北京'},{name:'徐州'}],
                [{name:'北京'},{name:'烟台'}],
                [{name:'北京'},{name:'盐城'}],
                [{name:'北京'},{name:'珠海'}],
                [{name:'上海'},{name:'包头'}],
                [{name:'上海'},{name:'北海'}],
                [{name:'上海'},{name:'广州'}],
                [{name:'上海'},{name:'郑州'}],
                [{name:'上海'},{name:'长春'}],
                [{name:'上海'},{name:'重庆'}],
                [{name:'上海'},{name:'长沙'}],
                [{name:'上海'},{name:'成都'}],
                [{name:'上海'},{name:'丹东'}],
                [{name:'上海'},{name:'大连'}],
                [{name:'上海'},{name:'福州'}],
                [{name:'上海'},{name:'海口'}],
                [{name:'上海'},{name:'呼和浩特'}],
                [{name:'上海'},{name:'合肥'}],
                [{name:'上海'},{name:'哈尔滨'}],
                [{name:'上海'},{name:'舟山'}],
                [{name:'上海'},{name:'银川'}],
                [{name:'上海'},{name:'南昌'}],
                [{name:'上海'},{name:'昆明'}],
                [{name:'上海'},{name:'贵阳'}],
                [{name:'上海'},{name:'兰州'}],
                [{name:'上海'},{name:'拉萨'}],
                [{name:'上海'},{name:'连云港'}],
                [{name:'上海'},{name:'临沂'}],
                [{name:'上海'},{name:'柳州'}],
                [{name:'上海'},{name:'宁波'}],
                [{name:'上海'},{name:'南宁'}],
                [{name:'上海'},{name:'北京'}],
                [{name:'上海'},{name:'沈阳'}],
                [{name:'上海'},{name:'秦皇岛'}],
                [{name:'上海'},{name:'西安'}],
                [{name:'上海'},{name:'石家庄'}],
                [{name:'上海'},{name:'汕头'}],
                [{name:'上海'},{name:'深圳'}],
                [{name:'上海'},{name:'青岛'}],
                [{name:'上海'},{name:'济南'}],
                [{name:'上海'},{name:'天津'}],
                [{name:'上海'},{name:'太原'}],
                [{name:'上海'},{name:'乌鲁木齐'}],
                [{name:'上海'},{name:'潍坊'}],
                [{name:'上海'},{name:'威海'}],
                [{name:'上海'},{name:'温州'}],
                [{name:'上海'},{name:'武汉'}],
                [{name:'上海'},{name:'厦门'}],
                [{name:'上海'},{name:'西宁'}],
                [{name:'上海'},{name:'徐州'}],
                [{name:'上海'},{name:'烟台'}],
                [{name:'上海'},{name:'珠海'}],
                [{name:'广州'},{name:'北海'}],
                [{name:'广州'},{name:'郑州'}],
                [{name:'广州'},{name:'长春'}],
                [{name:'广州'},{name:'重庆'}],
                [{name:'广州'},{name:'长沙'}],
                [{name:'广州'},{name:'成都'}],
                [{name:'广州'},{name:'常州'}],
                [{name:'广州'},{name:'大连'}],
                [{name:'广州'},{name:'福州'}],
                [{name:'广州'},{name:'海口'}],
                [{name:'广州'},{name:'呼和浩特'}],
                [{name:'广州'},{name:'合肥'}],
                [{name:'广州'},{name:'杭州'}],
                [{name:'广州'},{name:'哈尔滨'}],
                [{name:'广州'},{name:'舟山'}],
                [{name:'广州'},{name:'银川'}],
                [{name:'广州'},{name:'南昌'}],
                [{name:'广州'},{name:'昆明'}],
                [{name:'广州'},{name:'贵阳'}],
                [{name:'广州'},{name:'兰州'}],
                [{name:'广州'},{name:'拉萨'}],
                [{name:'广州'},{name:'连云港'}],
                [{name:'广州'},{name:'临沂'}],
                [{name:'广州'},{name:'柳州'}],
                [{name:'广州'},{name:'宁波'}],
                [{name:'广州'},{name:'南京'}],
                [{name:'广州'},{name:'南宁'}],
                [{name:'广州'},{name:'南通'}],
                [{name:'广州'},{name:'北京'}],
                [{name:'广州'},{name:'上海'}],
                [{name:'广州'},{name:'沈阳'}],
                [{name:'广州'},{name:'西安'}],
                [{name:'广州'},{name:'石家庄'}],
                [{name:'广州'},{name:'汕头'}],
                [{name:'广州'},{name:'青岛'}],
                [{name:'广州'},{name:'济南'}],
                [{name:'广州'},{name:'天津'}],
                [{name:'广州'},{name:'太原'}],
                [{name:'广州'},{name:'乌鲁木齐'}],
                [{name:'广州'},{name:'温州'}],
                [{name:'广州'},{name:'武汉'}],
                [{name:'广州'},{name:'无锡'}],
                [{name:'广州'},{name:'厦门'}],
                [{name:'广州'},{name:'西宁'}],
                [{name:'广州'},{name:'徐州'}],
                [{name:'广州'},{name:'烟台'}],
                [{name:'广州'},{name:'盐城'}]
              ]
            }
          }
        ]
      };;

      return { ...state,
        migrateCtrl: { visible: true, dataInfo },

      };
    },
    ViewFunnel(state){
      //noinspection JSAnnotator
      const dataInfo = {
        title : {
          text: '漏斗图',
          subtext: '纯属虚构'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        legend: {
          data : ['展现','点击','访问','咨询','订单']
        },
        calculable : true,
        series : [
          {
            name:'漏斗图',
            type:'funnel',
            width: '40%',
            data:[
              {value:60, name:'访问'},
              {value:40, name:'咨询'},
              {value:20, name:'订单'},
              {value:80, name:'点击'},
              {value:100, name:'展现'}
            ]
          },
          {
            name:'金字塔',
            type:'funnel',
            x : '50%',
            sort : 'ascending',
            itemStyle: {
              normal: {
                // color: 各异,
                label: {
                  position: 'left'
                }
              }
            },
            data:[
              {value:60, name:'访问'},
              {value:40, name:'咨询'},
              {value:20, name:'订单'},
              {value:80, name:'点击'},
              {value:100, name:'展现'}
            ]
          }
        ]
      };

      return { ...state,
        funnelCtrl: { visible: true, dataInfo },
      };
    },
    ViewFunnel2(state){
      //noinspection JSAnnotator
      const dataInfo = {
        title : {
          text: '漏斗图',
          subtext: '纯属虚构'
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c}%"
        },
        toolbox: {
          show : true,
          feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            restore : {show: true},
            saveAsImage : {show: true}
          }
        },
        legend: {
          data : ['展现','点击','访问','咨询','订单']
        },
        calculable : true,
        series : [
          {
            name:'漏斗图',
            type:'funnel',
            width: '40%',
            data:[
              {value:60, name:'访问'},
              {value:40, name:'咨询'},
              {value:20, name:'订单'},
              {value:80, name:'点击'},
              {value:100, name:'展现'}
            ]
          },
          {
            name:'金字塔',
            type:'funnel',
            x : '50%',
            sort : 'ascending',
            itemStyle: {
              normal: {
                // color: 各异,
                label: {
                  position: 'left'
                }
              }
            },
            data:[
              {value:60, name:'访问'},
              {value:40, name:'咨询'},
              {value:20, name:'订单'},
              {value:80, name:'点击'},
              {value:100, name:'展现'}
            ]
          }
        ]
      };

      return { ...state,
        funnel2Ctrl: { visible: true, dataInfo },
      };
    },
    cancelView(state, { ctrlName }){
      const ctrlObj = state[ctrlName];
      return {...state,
        [ctrlName] : {visible: false, dataInfo : {}}
      };
    }
  },
  effects: {},
  subscriptions: {},
};
