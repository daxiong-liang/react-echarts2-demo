import React from 'react';
import { connect } from 'dva';
import styles from './Echarts.css';
import { Table, Button, Spin, Modal } from 'antd';
import ModalShow from '../../components/ModalShow';

function Echarts(props) {
  const onChartClick = (option, param)=>{
    const data = param.data;
    const links = option.series[0].links;
    const nodes = option.series[0].nodes;
    if (
      data.source != null
      && data.target != null
    ) { //点击的是边
      var sourceNode = nodes.filter(function (n) {return n.name == data.source})[0];
      var targetNode = nodes.filter(function (n) {return n.name == data.target})[0];
      console.log("选中了边 " + sourceNode.name + ' -> ' + targetNode.name + ' (' + data.weight + ')');
    } else { // 点击的是点
      console.log("选中了" + data.name + '(' + data.value + ')');
    }
  }
  let onEvents;
  if (props.forceCtrl) {
    onEvents = {
      'click': onChartClick.bind(this, props.forceCtrl.dataInfo),
    }
  }
  return (
    <div className={styles.normal}>
      {//===============饼状图start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewPieChart.bind(this)}>饼状图</Button>
      <ModalShow {...props.pieChartCtrl} ctrlName='pieChartCtrl' style={{ width: 750, height: 350 }}/>
      {//===============饼状图end=============================
      }
      {//===============折线图start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewPieChart.bind(this)}>折线图</Button>
      <ModalShow {...props.breakLinetCtrl} ctrlName='breakLinetCtrl' style={{ width: 850, height: 350 }}/>
      {//===============折线图end=============================
      }
      {//===============条形图start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewBar.bind(this)}>条形图</Button>
      <ModalShow {...props.barCtrl} ctrlName='barCtrl' style={{ width: 850, height: 350 }}/>
      {//===============条形图end=============================
      }
      {//===============散点图start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewScatter.bind(this)}>散点图</Button>
      <ModalShow {...props.scatterCtrl} ctrlName='scatterCtrl' style={{ width: 850, height: 350 }}/>
      {//===============散点图end=============================
      }
      {//===============关系图start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewForce.bind(this)}>关系图</Button>

      <ModalShow {...props.forceCtrl} ctrlName='forceCtrl' style={{ width: 850, height: 350 }} onEvents={onEvents}/>
      {//===============关系图end=============================
      }
      {//===============树图start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewTree.bind(this)}>树图</Button>

      <ModalShow {...props.treeCtrl} ctrlName='treeCtrl' style={{ width: 850, height: 350 }}/>
      {//===============树图end=============================
      }
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pieChartCtrl: state.echarts.pieChartCtrl || {},
    breakLinetCtrl: state.echarts.breakLinetCtrl || {},
    barCtrl: state.echarts.barCtrl || {},
    scatterCtrl: state.echarts.scatterCtrl || {},
    forceCtrl: state.echarts.forceCtrl || {},
    treeCtrl: state.echarts.treeCtrl || {},
  };
}
function mapDispatchToProps(dispatch, props) {
  return {
    ViewPieChart: () => {
      dispatch({type: 'echarts/ViewPieChart'});
    },
    ViewBreakLine: () => {
    dispatch({type: 'echarts/ViewBreakLine'});
    },
    ViewBar: () => {
      dispatch({type: 'echarts/ViewBar'});
    },
    ViewScatter: () => {
      dispatch({type: 'echarts/ViewScatter'});
    },
    ViewForce: () => {
      dispatch({type: 'echarts/ViewForce'});
    },
    ViewTree: () => {
      dispatch({type: 'echarts/ViewTree'});
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Echarts);
