import React from 'react';

const TableRow = ({ data }) => {
  return (
    <tr className='TableRow'>
        <td className='pl'>{data.pl}</td>
        <td className='en'>{data.en}</td>
    </tr>
  )
}

export default TableRow;