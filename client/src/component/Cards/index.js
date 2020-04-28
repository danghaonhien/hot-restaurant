import React from "react";

import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
function Cards() {
  return (
    <div>
      <CardDeck>
        <Card>
          <blockquote className='blockquote mb-0 card-body'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className='blockquote-footer'>
              <small className='text-muted'>
                Someone famous in <cite title='Source Title'>Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <blockquote className='blockquote mb-0 card-body'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className='blockquote-footer'>
              <small className='text-muted'>
                Someone famous in <cite title='Source Title'>Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
        <Card>
          <blockquote className='blockquote mb-0 card-body'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a ante.
            </p>
            <footer className='blockquote-footer'>
              <small className='text-muted'>
                Someone famous in <cite title='Source Title'>Source Title</cite>
              </small>
            </footer>
          </blockquote>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Cards;
