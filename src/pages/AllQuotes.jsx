import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const AllQuotes = () => {
  const DUMMY_QUOTES = [
    { id: 'q1', author: 'Mike', text: 'Learning React is fun!' },

    { id: 'q2', author: 'Jane', text: 'Learning React is great!' },
    { id: 'q3', author: 'James', text: 'Learning React is easy!' },
  ];
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
