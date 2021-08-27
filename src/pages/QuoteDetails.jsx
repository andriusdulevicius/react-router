import React from 'react';
import { useParams, Route } from 'react-router-dom';
import QuoteItem from '../components/quotes/QuoteItem';
import Comments from '../components/comments/Comments';

const QuoteDetails = () => {
  const { quoteId } = useParams();

  return (
    <div>
      <h2>One quote item with id {quoteId}</h2>
      <Route path={`/quotes/${quoteId}/comments`}>
        <Comments />
      </Route>
    </div>
  );
};

export default QuoteDetails;
