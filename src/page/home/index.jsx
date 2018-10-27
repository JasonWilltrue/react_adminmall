import React from 'react'
import { Row,Col } from 'antd';
import Header from '../../common/header.jsx';
import Footer from '../../common/footer.jsx';
import NavLeft from '../../common/navleft.jsx';
// import './style/common.less'

class Home extends React.Component{
    render(){
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span="20" className="main">
                    <Header/>
                    <Row className="content">
                      {/* {this.props.children} */}
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    }
}
export default Home