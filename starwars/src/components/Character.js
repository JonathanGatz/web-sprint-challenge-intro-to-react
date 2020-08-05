// Write your Character component here
import React from 'react';
import {Card, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap'
//import styled from "styled-components";



function Cards(props){
    console.log(props.characterArray, 'MAY THE FORCE BE WITH YOU')
    return (
        <Container>
        <Row>
            {props.characterArray.map((species) =>{
                return(
                    <Col xs='3'>
                    <Card key ={species.created}>
                        <div>*Type Of*</div>
                        <CardTitle>{species.name}</CardTitle>
                        <div>*classification*</div>
                        <CardSubtitle>{species.classification}</CardSubtitle>
                        <div>*Average Height*</div>
                        <CardSubtitle>{species.average_height}</CardSubtitle>
                        <div>*Skin Color*</div>
                        <CardSubtitle>{species.skin_colors}</CardSubtitle>
                    </Card>
                    </Col>
                )
        })}
            </Row>
            </Container>
    )

};






export default Cards;