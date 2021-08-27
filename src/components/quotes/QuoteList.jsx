import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const QuoteList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
        {(props.quotes || []).map((quote) => (
          <Link to={`/quotes/${quote.id}`}>
            <QuoteItem key={quote.id} id={quote.id} author={quote.author} text={quote.text} />
          </Link>
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
