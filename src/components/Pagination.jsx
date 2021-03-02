import React from 'react'

const Pagination = ({totalPosts, ppg, pagination}) => {
    const pageNumbers = [];

    for( let i = 1; i <= Math.ceil(totalPosts / ppg); i++ ) {
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={ () => pagination(number) } href="!#" className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
