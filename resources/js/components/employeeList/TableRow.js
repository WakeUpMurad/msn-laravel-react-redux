import React from 'react';
import TableActionButtons from "./TableActionButtons";

const TableRow = ({num, name, salary}) => {
    return (
        <tr>
            <th scope="row">{num}</th>
            <td>{name}</td>
            <td>{salary}</td>
            <td>
                <TableActionButtons eachRowId={num}/>
            </td>
        </tr>
    );
};

export default TableRow;
