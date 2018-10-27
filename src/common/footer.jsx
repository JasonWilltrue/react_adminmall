import React,{Component} from 'react';
import { Layout, Menu, Breadcrumb,Avatar } from 'antd';

const { Header, Content, Footer } = Layout;



export default class Head extends Component{
     render(){
         return(
            <Layout>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
         )
     }

}