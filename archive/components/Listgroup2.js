import React from "react";
import { Card, ListGroup } from "react-bootstrap";


const Listgroup2 = ({Title,Data}) => {

    return (

            <ListGroup variant="flush" >
                <ListGroup.Item>{Title}</ListGroup.Item>
                <ListGroup.Item>${Data}</ListGroup.Item>
            </ListGroup>


    );
};
export default Listgroup2