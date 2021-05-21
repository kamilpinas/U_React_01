import React from 'react';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Image from 'react-bootstrap/Image'

export function ContactItem({ item }) {
  return (
    <>
      <ListGroupItem>
        <Image roundedCircle src={item.imgURL} style={{ float: "left", margin: "0 1rem" }} />
        <ListGroupItemHeading style={{ margin: '2%' }}>{item.name} </ListGroupItemHeading>
        <ListGroupItemText>{item.title} </ListGroupItemText>
      </ListGroupItem>

    </>
  );
};