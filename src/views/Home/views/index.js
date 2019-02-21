import React, {Component} from "react"
import {Row, Col, Card, Icon} from 'antd'
import Typed from 'typed.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Pic from "../../../common/assets/开始按钮.png"
import Carousel_1 from "../../../common/assets/example1.jpg"
import Carousel_2 from "../../../common/assets/example2.jpg"
import Carousel_3 from "../../../common/assets/example3.jpg"

import "./style.css";




const strings = [
        'ROAD'
 ];
class HomePage extends Component {
    componentDidMount() {

        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50
        };
        // this.el refers to the <span> in the render() method
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }



  render() {
      const options = {
          items: 1,
          nav: true,
          rewind: true,
          autoplay: true
      };

      // Finally, render the div using a "ref" callback which assigns the mounted
      // elem to a class property "nv" used to add the DOM listener to.

      return (
          <div>
              <div className="bg bg-blur"/>
              <div className="content content-front">
                  <Row gutter={8}>
                      <Col span={12} >
                          <Carousel  className="setCarousel" dynamicHeight infiniteLoop showStatus={false} centerMode showArrows={false} centerSlidePercentage={50} autoPlay>
                              <div>
                                  <img src={Carousel_1} />
                                  <Icon type="align-left" className="setIcon"/>
                              </div>
                              <div>
                                  <img src={Carousel_2} />
                                  <Icon type="align-left" className="setIcon"/>
                              </div>
                              <div>
                                  <img src={Carousel_3} />
                                  <Icon type="align-left" className="setIcon"/>
                              </div>
                          </Carousel>
                      </Col>
                      <Col span={12} >
                          <div className="type-wrap" style={{lineHeight:"84px",marginTop:"200px"}}>
                              <span
                                  style={{ whiteSpace: 'pre' }}
                                  ref={(el) => { this.el = el; }}
                              />
                              <p style={{textAlign:"center",lineHeight:"unset !important",fontSize:"20px"}}>旅游就是去别人居住的地方<br/>愿你的时光在路上<br/>一键化旅行定制，为你的时光铺路</p>

                              <button type="submit" style={{textAlign:"center",lineHeight:"unset !important",width:"150px", height:"50px",background:`url(${ Pic })`,backgroundSize:"contain",backgroundRepeat:"no-repeat"}} />
                          </div>

                      </Col>
                  </Row>
              </div>
          </div>
      );
  }
}

export default HomePage;
