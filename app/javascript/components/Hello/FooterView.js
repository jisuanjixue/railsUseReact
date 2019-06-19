import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ textAlign: 'center'}}>
    <Fragment>
      Copyright <Icon type="copyright" /> 2019 蚂蚁金服体验技术部出品
    </Fragment>
  </Footer>
);
export default FooterView;
