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
              "Dinner at Hot Restaurant was an absolute highlight out of all the
              restaurants I have dinned at over the years."
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
              "Food was excellent as was the wine pairing. Staff very friendly
              and helpful. Was a unforgettable evening. Just needs more ladies
              toilets, long lines!"
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
              "We celebrated my son’s birthday at Hot Restaurant. The 6 course
              degustation was our choice, and we thoroughly enjoyed each
              course."
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
