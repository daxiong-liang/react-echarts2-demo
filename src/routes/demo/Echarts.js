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
  const theme1 = 'infographic';
  return (
    <div className={styles.normal}>
      {//===============饼状图start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewPieChart.bind(this)}>饼状图</Button>
      <ModalShow {...props.pieChartCtrl} ctrlName='pieChartCtrl' style={{ width: 750, height: 350 }} theme={theme1}/>
      {//===============饼状图end=============================
      }
      {//===============折线图start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewBreakLinet.bind(this)}>折线图</Button>
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
      {//===============热力图加地图 start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewHeatAndMap.bind(this)}>热力图加地图</Button>

      <ModalShow {...props.headAndMapCtrl} ctrlName='headAndMapCtrl' style={{ width: 850, height: 350 }}/>
      {//===============热力图加地图 end=============================
      }
      {//===============漏斗图 start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewFunnel.bind(this)}>漏斗图</Button>

      <ModalShow {...props.funnelCtrl} ctrlName='funnelCtrl' style={{ width: 850, height: 350 }} />
      {//===============漏斗图 end=============================
      }
      {//===============漏斗图 start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewFunnel2.bind(this)}>漏斗图-theme:infographic</Button>

      <ModalShow {...props.funnel2Ctrl} ctrlName='funnel2Ctrl' style={{ width: 850, height: 350 }}  theme={theme1}/>
      {//===============漏斗图 end=============================
      }
      {//===============迁徙图 start=============================
      }
      <Button type="primary" style={{ marginLeft: 8 }} onClick={props.ViewMigrate.bind(this)}>迁徙图--地图不知道怎样搭上</Button>

      <ModalShow {...props.migrateCtrl} ctrlName='migrateCtrl' style={{ width: 850, height: 350 }}/>
      {//===============迁徙图 end=============================
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
    headAndMapCtrl: state.echarts.headAndMapCtrl || {},
    funnelCtrl: state.echarts.funnelCtrl || {},
    funnel2Ctrl: state.echarts.funnel2Ctrl || {},
    migrateCtrl: state.echarts.migrateCtrl || {},
  };
}
function mapDispatchToProps(dispatch, props) {
  return {
    ViewPieChart: () => {
      dispatch({type: 'echarts/ViewPieChart'});
    },
    ViewBreakLinet: () => {
    dispatch({type: 'echarts/ViewBreakLinet'});
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
    ViewHeatAndMap: () => {
      dispatch({type: 'echarts/ViewHeatAndMap'});
    },
    ViewMigrate: () => {
      dispatch({type: 'echarts/ViewMigrate'});
    },
    ViewFunnel: () => {
      dispatch({type: 'echarts/ViewFunnel'});
    },
    ViewFunnel2: () => {
      dispatch({type: 'echarts/ViewFunnel2'});
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Echarts);
