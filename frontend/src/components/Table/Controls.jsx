import React from 'react';

import { AppContext } from '../../App';

const Controls = () => {
    const Ctx = React.useContext(AppContext);

  return (
    <div className='Controls'>

        {Ctx.dbChapterIdx !== 0 && Ctx.presentRows[0]===0 ? (
            <button
                onClick={()=>Ctx.setDbChapterIdx(Ctx.dbChapterIdx - 1)}
            ><i className='bx bx-chevrons-left'></i></button>
        ) : (
            <button
                disabled={Ctx.presentRows[0]===0 ? true : false}
                onClick={()=>Ctx.setPresentRows([Ctx.presentRows[0]-9, Ctx.presentRows[1]-9])}
            ><i className='bx bx-chevron-left'></i></button>
        )}

        
        <div>
            <p>rozdział: {Ctx.dbChapterIdx+1}</p>
            <p>strona: {Ctx.presentRows[0]/9+1}</p>
        </div>
        
        {Ctx.dbChapterIdx !== Ctx.db.length-1 && Ctx.presentRows[1] > Ctx.db[Ctx.dbChapterIdx]?.length ? (
            <button
                onClick={()=>Ctx.setDbChapterIdx(Ctx.dbChapterIdx + 1)}
            ><i className='bx bxs-chevrons-right'></i></button>
        ) : (
            <button
                disabled={Ctx.presentRows[1] > Ctx.db[Ctx.dbChapterIdx]?.length}
                onClick={()=>Ctx.setPresentRows([Ctx.presentRows[0]+9, Ctx.presentRows[1]+9])}
            ><i className='bx bx-chevron-right'></i></button>
        )}
    </div>
  )
}

export default Controls;