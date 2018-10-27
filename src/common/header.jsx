import React,{Component} from 'react';
import { Layout, Menu, Breadcrumb,Avatar } from 'antd';

const { Header, Content, Footer } = Layout;



export default class Head extends Component{
     render(){
         return(
            <Layout>
          <Header style={{ background: "#fff", padding: 0 }} />
        </Layout>
         )
     }

}