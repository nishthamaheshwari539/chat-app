import React from 'react';
import { Container, Grid, Panel, Row, Col, Button, Icon } from 'rsuite';


const SignIn = () => (
    
        <Container>
            <Grid className="mt-page">
                <Row>
                    <Col xs={24} md={12} mdOffset={6}>
                        <Panel>
                            <div className="text-center">
                                <h2>Welcome</h2>
                                <p>Progressive Chat Platform</p>
                            </div>
                            <div className="mt-3">
                                <Button block color="blue">
                                    <Icon icon="facebook" /> Continue with Facebook
                                </Button>
                                <Button block color="green">
                                    <Icon icon="google" /> Continue with Google
                                </Button>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </Container>
    
    );

export default SignIn;
