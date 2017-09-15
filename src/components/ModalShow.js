import React from 'react';
import { Modal } from 'antd';
import { connect } from 'dva';
import EchartsForReact from './EchartsForReact';

const ModalShow = (props) => {
  const dataInfo = props.dataInfo || {};
  const style = props.style || {};
  const onChartReady = (chart) =>{
    chart.hideLoading();
  }
  return (
    <Modal
      visible={props.visible}
      closable
      onCancel={props.cancelView.bind(this)}
      footer={null}
      width='900'
      maskClosable={false}
    >
      <EchartsForReact style={style} option={dataInfo}  showLoading={true} onChartReady={onChartReady} onEvents={props.onEvents}/>
    </Modal>
  );
};

ModalShow.propTypes = {
  // eslint-disable-next-line
  ctrlName: React.PropTypes.string,
  visible: React.PropTypes.bool,
  dataInfo: React.PropTypes.object,
  style: React.PropTypes.object,
  onEvents: React.PropTypes.object,
};
function mapDispatchToProps(dispatch, props) {
  return {
    cancelView: () => {
      dispatch({type: 'echarts/cancelView',ctrlName: props.ctrlName});
    },
  };
}
export default connect(null, mapDispatchToProps)(ModalShow);
