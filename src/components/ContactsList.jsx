import React from 'react';
import { ListGroup } from 'reactstrap';
import { ContactItem } from './ContactItem'

export const ContactsList = (props) => {

  const items = props.data.map((item) => {
    return (
      <ContactItem key={item.id} item={item} />
    )
  });

  return (
    <>
      <ListGroup>
        {items}
      </ListGroup>
    </>
  );
}