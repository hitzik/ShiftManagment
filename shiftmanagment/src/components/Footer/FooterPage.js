import React from 'react';
import { Col, Container, Row, Footer } from 'mdbreact';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="mdb-color" className="font-small lighten-3 pt-4 mt-4">
                <Container className="text-center text-md-left">
                  <Row className="my-4">
                    <Col md="4" lg="4">
                      <h5 className="text-uppercase mb-4 font-weight-bold">shifts managment</h5>
                      <p>This application will help you orginize the shifts for your team.</p>
                      {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident
                          voluptate esse quasi, veritatis totam voluptas nostrum. </p> */}
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                    <Col md="2" lg="2" className="ml-auto">
                      <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                      <ul className="list-unstyled">
                        <p><a href="#!">PROJECTS</a></p>
                        <p><a href="#!">ABOUT US</a></p>
                        <p><a href="#!">BLOG</a></p>
                        <p><a href="#!">AWARDS</a></p>
                      </ul>
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                    <Col md="5" lg="3">
                      <h5 className="text-uppercase mb-4 font-weight-bold">Address</h5>
                      <p><i className="fa fa-home mr-3"></i> iHershko LTD.</p>
                      <p><i className="fa fa-home mr-3"></i> Rosh Ha'Ain, Israel</p>
                      <p><i className="fa fa-envelope mr-3"></i> itzik8686@gmail.com</p>
                      <p><i className="fa fa-phone mr-3"></i> + 972 50 229 0840</p>
                      {/* <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p> */}
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                    <Col md="2" lg="2" className="text-center">
                      <h5 className="text-uppercase mb-4 font-weight-bold">About</h5>
                      <div className="mt-2 ">
                        <a type="button" className="btn-floating btn-small btn-fb"><i className="fa fa-facebook"></i></a>
                        <a type="button" className="btn-floating btn-small btn-tw"><i className="fa fa-twitter"></i></a>
                        <a type="button" className="btn-floating btn-small btn-gplus"><i className="fa fa-google-plus"></i></a>
                        <a type="button" className="btn-floating btn-small btn-dribbble"><i className="fa fa-dribbble"></i></a>
                      </div>
                    </Col>
                    <hr className="clearfix w-100 d-md-none"/>
                  </Row>
                </Container>
                <div className="footer-copyright text-center">
                  <Container fluid>
                      &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> iHershko.com </a>
                  </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;