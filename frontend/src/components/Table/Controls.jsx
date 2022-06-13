import React from 'react';
import { AppContext } from '../../App';

const Controls = () => {
    const Ctx = React.useContext(AppContext);

  return (
    <div className='Controls'>

        {Ctx.dbChapterIdx !== 0 && Ctx.presentRows[0]===0 ? (
            <button
                onClick={()=>{
                    Ctx.setDbChapterIdx(Ctx.dbChapterIdx - 1);
                    Ctx.setPresentRows([parseInt(Ctx.db[Ctx.dbChapterIdx-1].length/10+1)*9-9, parseInt(Ctx.db[Ctx.dbChapterIdx-1].length/10+1)*9]);
                }}
                title='poprzedni rozdział'
            ><i className='bx bxs-chevrons-left'></i></button>
        ) : (
            <button
                disabled={Ctx.presentRows[0]===0 ? true : false}
                onClick={()=>Ctx.setPresentRows([Ctx.presentRows[0]-9, Ctx.presentRows[1]-9])}
                title='poprzednia strona'
            ><i className='bx bxs-chevron-left'></i></button>
        )}

        
        <div>
            <p>rozdział: {Ctx.dbChapterIdx+1}</p>
            <p>strona: {Ctx.presentRows[0]/9+1}</p>
        </div>
        
        {Ctx.dbChapterIdx !== Ctx.db.length-1 && Ctx.presentRows[1] > Ctx.db[Ctx.dbChapterIdx]?.length-1 ? (
            <button
                onClick={()=>{
                    Ctx.setDbChapterIdx(Ctx.dbChapterIdx + 1);
                    Ctx.setPresentRows([0, 9]);
                }}
                title='następny rozdział'
            ><i className='bx bxs-chevrons-right'></i></button>
        ) : (
            <button
                disabled={Ctx.presentRows[1] > Ctx.db[Ctx.dbChapterIdx]?.length-1}
                onClick={()=>Ctx.setPresentRows([Ctx.presentRows[0]+9, Ctx.presentRows[1]+9])}
                title='następna strona'
            ><i className='bx bxs-chevron-right'></i></button>
        )}
    </div>
  )
}

export default Controls;