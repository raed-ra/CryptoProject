import React from "react";
import { Card, ListGroup } from "react-bootstrap";


const Listgroup2 = props => {

    return (

            <ListGroup variant="flush" >
                <ListGroup.Item>{props.Title}</ListGroup.Item>
                <ListGroup.Item>Data</ListGroup.Item>
            </ListGroup>


    );
};
export default Listgroup2