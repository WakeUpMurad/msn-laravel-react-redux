import React, {useState} from 'react';
import classes from "./Pagination.module.css";
import MyButton from "../MyButton/MyButton";

const Pagination = ({page, changePage, totalItemsCount, limit, portionSize= 5}) => {

    const totalPages = Math.ceil(totalItemsCount / limit)
    let pages = []
    for (let i = 1; i < totalPages; i++) {
        pages.push(i)
    }

    const portionCount = (totalPages / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={classes.pagination}>
            { portionNumber > 1 &&
                <MyButton className={`${classes.page} ${classes.pageDark}`} onClick={() => {setPortionNumber(portionNumber - 1 )}}>PRE</MyButton>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p =>
                    <MyButton
                        onClick={() => changePage(p)}
                        key={p}
                        className={page !== p ? classes.page : `${classes.page} ${classes.pageDark} ${classes.active}`}>
                        {p}
                    </MyButton>
            )}
            { portionCount > portionNumber &&
                <MyButton className={`${classes.page} ${classes.pageDark}`} onClick={() => {setPortionNumber(portionNumber + 1 )}}>NEXT</MyButton>}
        </div>
    );
};

export default Pagination;
