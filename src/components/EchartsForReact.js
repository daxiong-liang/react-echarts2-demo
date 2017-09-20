import React from 'react';
import echarts from 'echarts';
// 引入所有图形组件
import 'echarts/chart/bar';
import 'echarts/chart/base';
import 'echarts/chart/chord';
import 'echarts/chart/eventRiver';
import 'echarts/chart/funnel';
import 'echarts/chart/force';
import 'echarts/chart/gauge';
import 'echarts/chart/heatmap';
import 'echarts/chart/island';
import 'echarts/chart/k';
import 'echarts/chart/line';
import 'echarts/chart/map';
import 'echarts/chart/pie';
import 'echarts/chart/radar';
import 'echarts/chart/scatter';
import 'echarts/chart/tree';
import 'echarts/chart/treemap';
import 'echarts/chart/venn';
import 'echarts/chart/wordCloud';

// // 引入相关组件组件;
import 'echarts/component/axis';
import 'echarts/component/base';
import 'echarts/component/categoryAxis';
import 'echarts/component/dataRange';
import 'echarts/component/dataView';
import 'echarts/component/dataZoom';
import 'echarts/component/grid';
import 'echarts/component/legend';
import 'echarts/component/polar';
import 'echarts/component/roamController';
import 'echarts/component/timeline';
import 'echarts/component/title';
import 'echarts/component/toolbox';
import 'echarts/component/tooltip';
import 'echarts/component/valueAxis';

import PropTypes from 'prop-types';
import elementResizeEvent from 'element-resize-event';


export default class EchartsForReact extends React.Component {
  constructor(props) {
    super(props);
    this.echartsInstance = echarts; // the echarts object.
    this.echartsElement = null; // echarts div element
  }

  // first add
  componentDidMount() {
    const echartObj = this.renderEchartDom();
    const onEvents = this.props.onEvents || {};

    this.bindEvents(echartObj, onEvents);
    // on chart ready
    if (typeof this.props.onChartReady === 'function') this.props.onChartReady(echartObj);

    // on resize
    elementResizeEvent(this.echartsElement, () => {
      echartObj.resize();
    });
  }

  // update
  componentDidUpdate() {
    this.bindEvents(this.getEchartsInstance(), this.props.onEvents || []);

    const echartObj = this.renderEchartDom();
    const onEvents = this.props.onEvents || {};

    this.bindEvents(echartObj, onEvents);
    // on chart ready
    if (typeof this.props.onChartReady === 'function') this.props.onChartReady(echartObj);

    // on resize
    elementResizeEvent(this.echartsElement, () => {
      echartObj.resize();
    });
  }

  // remove
  componentWillUnmount() {
    if (this.echartsElement) {
      // if elementResizeEvent.unbind exist, just do it.
      if (typeof elementResizeEvent.unbind === 'function') {
        elementResizeEvent.unbind(this.echartsElement);
      }
      const echartObj = this.renderEchartDom();
      echartObj.dispose(this.echartsElement);
    }
  }
  // return the echart object
  getEchartsInstance = () => this.echartsInstance.getInstanceById(this.echartsElement) ||
  this.echartsInstance.init(this.echartsElement, this.props.theme);

  // bind the events
  bindEvents = (instance, events) => {
    console.log(this.props.theme);
    const _loopEvent = (eventName) => {
      // ignore the event config which not satisfy
      if (typeof eventName === 'string' && typeof events[eventName] === 'function') {
        // binding event
        // instance.off(eventName);
        instance.on(eventName, (param) => {
          events[eventName](param, instance);
        });
      }
    };

    for (const eventName in events) {
      if (Object.prototype.hasOwnProperty.call(events, eventName)) {
        _loopEvent(eventName);
      }
    }
  };

  // render the dom
  renderEchartDom = () => {
    // init the echart object
    const echartObj = this.getEchartsInstance();
    // set the echart option
    echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false);
    // set loading mask
    if (this.props.showLoading) echartObj.showLoading(this.props.loadingOption || null);
    else echartObj.hideLoading();

    return echartObj;
  };

  render() {
    const style = this.props.style || { height: '300px' };
    // for render
    return (
      <div
        ref={(e) => { this.echartsElement = e; }}
        style={style}
        className={this.props.className}
      />
    );
  }
}

EchartsForReact.propTypes = {
  option: PropTypes.object.isRequired,  // eslint-disable-line react/forbid-prop-types
  notMerge: PropTypes.bool,
  lazyUpdate: PropTypes.bool,  // 多次调用时option选项是默认是合并（merge）的，如果不需求，可以通过参数为true阻止与上次option的合并
  style: PropTypes.object,  // eslint-disable-line react/forbid-prop-types  全局演示，width,height等
  className: PropTypes.string,
  theme: PropTypes.string,   // echart主题
  onChartReady: PropTypes.func,  // 图像加载完成后方法
  showLoading: PropTypes.bool,  // 数据加载中标识符
  loadingOption: PropTypes.object,  // eslint-disable-line react/forbid-prop-types  loading时候的样式
  onEvents: PropTypes.object,  // eslint-disable-line react/forbid-prop-types   绑定事件
};

EchartsForReact.defaultProps = {
  echarts: {},
  notMerge: false,
  lazyUpdate: false,
  style: { width: 500, height: 400 },
  className: '',
  theme: null,
  onChartReady: () => {},
  showLoading: false,
  loadingOption: null,
  onEvents: {},
};
