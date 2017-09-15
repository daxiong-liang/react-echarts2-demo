
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
    ViewPieChart(state){
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
