import React from 'react';
import './Table.css';
import TableRow from './TableRow';
import Controls from './Controls';
import { AppContext } from '../../App';

const Table = () => {
    const Ctx = React.useContext(AppContext);

    Ctx.hiddenLangs.pl ? document.body.classList.add('pl-hidden') : document.body.classList.remove('pl-hidden');
    Ctx.hiddenLangs.en ? document.body.classList.add('en-hidden') : document.body.classList.remove('en-hidden');

  return (
    <div className='Table'>
        <Controls />
        <table>
            <thead>
                <tr>
                    <th><i
                        onClick={()=>Ctx.setHiddenLangs({...Ctx.hiddenLangs, pl: !Ctx.hiddenLangs.pl})}
                    className={Ctx.hiddenLangs.pl ? 'fa-solid fa-eye-low-vision' : "fa-solid fa-eye"}></i>Polski</th>
                    <th><i
                        onClick={()=>Ctx.setHiddenLangs({...Ctx.hiddenLangs, en: !Ctx.hiddenLangs.en})}
                    className={Ctx.hiddenLangs.en ? 'fa-solid fa-eye-low-vision' : "fa-solid fa-eye"}></i>Angielski</th>
                </tr>
            </thead>
            <tbody>

                {Ctx.db[Ctx.dbChapterIdx]?.slice(Ctx.presentRows[0], Ctx.presentRows[1]+1).map((el, i)=>(
                    <TableRow data={el} key={i} />
                ))}

            </tbody>
        </table>
    </div>
  )
}

export default Table;