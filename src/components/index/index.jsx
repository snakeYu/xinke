import React from 'react'
import {Link} from 'react-router-dom'
import './index.scss'
import 'antd/dist/antd.css'
import {Carousel,Card} from 'antd'
export default class Index extends React.Component{
  constructor(){
    super()
    this.state={}
  }
  render(){
    return (

      <div className="index">
        <div className="container">
          <div className="box">
            <Carousel autoplay>
            <div className='item b1'>
            </div>
            <div className="item b2">
            </div>
            </Carousel>
            <ul className="list">
              <li className="list-item">
                <span className="img money"></span>
                <div className="rt">
                  <h4>财务服务</h4>
                  <span className="c-item">
                    代理记账
                  </span>
                  <span className="c-item">
                    税务代办
                  </span>
                  <span className="c-item">
                    财务审计
                  </span>
                </div>
              </li>

              <li className="list-item">
                <span className="img build"></span>
                <div className="rt">
                  <h4>公司工商</h4>
                  <span className="c-item">
                    公司注册
                  </span>
                  <span className="c-item">
                    公司变更
                  </span>
                </div>
              </li>

              <li className="list-item">
                <span className="img money1"></span>
                <div className="rt">
                  <h4>社保代缴</h4>
                  <span className="c-item">
                    个人社保
                  </span>
                  <span className="c-item">
                    企业社保
                  </span>
                </div>
              </li>

              <li className="list-item">
                <span className="img tianping"></span>
                <div className="rt">
                  <h4>人事外包</h4>
                  <span className="c-item">
                    人事代理
                  </span>
                  <span className="c-item">
                    人事派遣
                  </span>
                  <span className="c-item">
                    专项外包
                  </span>
                  <span className="c-item">
                    证件服务
                  </span>
                </div>
              </li>
            </ul>{/* 轮播图的兄弟列表 ul */}
          </div>{/* 轮播图容器 box */}
          <div className="recommendBox">
            <h4 className="title">明星产品推荐
              <span className='up'></span>
            </h4>
            <ul className="star clear">
              <li className="item sw">
                  <span className="img"></span>
                  <h5>税务服务</h5>
                  <p className="msg">
                    定制化社保代理，定制化待缴服务
                  </p>
                  <p className="price">
                    <span className="num">20</span>元/人/月
                  </p>
                  <button className='btn'>查询详情</button>
              </li>
              <li className="item gs">
                  <span className="img"></span>
                  <h5>公司工商</h5>
                  <p className="msg">
                   一键完成注册，快速开发公司
                  </p>
                  <p className="price">
                    <span className="num">600</span>元/次
                  </p>
                  <button className='btn'>查询详情</button>
              </li>
              <li className="item sb">
                  <span className="img"></span>
                  <h5>知识产权</h5>
                  <p className="msg">
                   专业跨级报税，高效、便捷、贴心
                  </p>
                  <p className="price">
                    <span className="num">600</span>元/次
                  </p>
                  <button className='btn'>查询详情</button>
              </li>
              <li className="item zs">
                  <span className="img"></span>
                  <h5>公司工商</h5>
                  <p className="msg">
                   一键完成注册，快速开发公司
                  </p>
                  <p className="price">
                    <span className="num">600</span>元/次
                  </p>
                  <button className='btn'>查询详情</button>
              </li>

            </ul>

            <h4 className="title">
              初创企业必备
              <span className='up'></span>
            </h4>
            <ul className="star clear">
              <li className="item jz">
                  <span className="img"></span>
                  <h5>小规模代理记账</h5>
                  <p className="msg">
                    专业会计报税、高效、便捷、贴心
                  </p>
                  <p className="price">
                    <span className="num">600</span>元/次
                  </p>
                  <button className='btn'>查询详情</button>
              </li>
              <li className="item ot">
                  <span className="img"></span>
                  <h5>公司工商</h5>
                  <p className="msg">
                   一键完成注册，快速开发公司
                  </p>
                  <p className="price">
                    <span className="num">600</span>元/次
                  </p>
                  <button className='btn'>查询详情</button>
              </li>
              <li className="item ot">
                  <span className="img"></span>
                  <h5>知识产权</h5>
                  <p className="msg">
                   专业跨级报税，高效、便捷、贴心
                  </p>
                  <p className="price">
                    <span className="num">600</span>元/次
                  </p>
                  <button className='btn'>查询详情</button>
              </li>
              <li className="item ot">
                  <span className="img"></span>
                  <h5>公司工商</h5>
                  <p className="msg">
                   一键完成注册，快速开发公司
                  </p>
                  <p className="price">
                    <span className="num">600</span>元/次
                  </p>
                  <button className='btn'>查询详情</button>
              </li>

            </ul>
            <h4 className="title">
              人事外包
              <span className='up left'></span>
            </h4> 
            <div className="peopleBox clear"> 
              <div className="fl big">
                    <div className="inner">
                      <span className="sTitle">人事外包</span>
                      <ul className="list">
                        <li>人事代理</li>
                        <li>专项外包</li>
                        <li>人才派遣</li>
                      </ul>
                    </div>
              </div>
              <div className="fr clear">
                <div className="fl"></div>
                <div className="fr">

                </div>
                <div className="bottom">
                </div>
              </div>
            </div>      

          </div>{/* 推荐服务 recommend */}

        </div>{/* container */}
      </div>
    ) 
  }
} 