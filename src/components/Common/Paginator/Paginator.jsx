import React, { useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = ({ totalItemsCount, pageSize, currentPage, paginatorBlockSize = 10, setCurrentPageHandler }) => {

   let pagesCount = Math.ceil(totalItemsCount / pageSize);

   let pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }

   const [currentBlock, setCurrentBlock] = useState(1);

   const paginatorBlocksCount = Math.ceil(pagesCount / paginatorBlockSize);
   const leftPaginatorBlockElement = ( currentBlock - 1 ) * paginatorBlockSize + 1;
   const rightPaginatorBlockElement = currentBlock * paginatorBlockSize;

   const setNextBlock = () => {
      setCurrentBlock(currentBlock + 1);
   }

   const setPrevBlock = () => {
      setCurrentBlock(currentBlock - 1);
   }

   return (
      <div className={ styles.pagination }>
         { currentBlock > 1 &&
         <>
            <button onClick={ () => setCurrentBlock(1) }>{ '<<' }</button>
            {currentPage < leftPaginatorBlockElement && <span className={ styles.selectedPage }>{currentPage}</span>}
            <button onClick={ setPrevBlock }>{ '<' }</button>
         </>
         }

         { pages.filter(page => page >= leftPaginatorBlockElement && page <= rightPaginatorBlockElement)
            .map(filteredPage => <span className={ currentPage === filteredPage ? styles.selectedPage : null }
                                       onClick={ () => setCurrentPageHandler(filteredPage) }
                                       key={ filteredPage }
            >{ filteredPage }</span>) }

         { currentBlock !== paginatorBlocksCount &&
         <>
            <button onClick={ setNextBlock }>{ '>' }</button>
            {currentPage > rightPaginatorBlockElement && <span className={ styles.selectedPage }>{currentPage}</span>}
            <button onClick={ () => setCurrentBlock(paginatorBlocksCount) }>{ '>>' }</button>
         </>
         }
         {/*{ pagesToShow.map(p => {*/ }
         {/*   return <span className={ props.currentPage === p ? styles.selectedPage : null }*/ }
         {/*                onClick={ () => {*/ }
         {/*                   props.setCurrentPageHandler(p)*/ }
         {/*                }*/ }
         {/*                }*/ }
         {/*                key={ p }*/ }
         {/*   >{ p }</span>*/ }
         {/*}) }*/ }
      </div>
   )
}

export default Paginator;
