import React from "react";
import { Card, ListGroup } from "react-bootstrap";

import Listgroup2 from "../components/Listgroup2";

const Listgroup4 = props => {
    console.log(props.Title3)

    return (

        <ListGroup variant="flush" style={{ width: "14rem" }}>
            <ListGroup.Item><Listgroup2 Title={props.Title1} /></ListGroup.Item>
            <ListGroup.Item><Listgroup2 Title={props.Title2} /></ListGroup.Item>
            <ListGroup.Item><Listgroup2 Title={props.Title3} /></ListGroup.Item>
        </ListGroup>

    );
};
export default Listgroup4