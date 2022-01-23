import React from 'react';
import CartArticle from './CartArticle';

const ListArticles = ({data}) => {
  return (
    <>
      {data.map((el)=>(<CartArticle key={el.id} el={el}/>))}
    </>
  )
}

export default ListArticles;