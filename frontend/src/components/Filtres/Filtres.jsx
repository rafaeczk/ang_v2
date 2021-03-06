import React from 'react';
import './Filtres.css';
import { AppContext } from '../../App';
import SearchBar from './SearchBar/SearchBar.jsx';

const Filtres = () => {
    const Ctx = React.useContext(AppContext);

    const handleBtnClick = ()=>{
      Ctx.setFiltresShowed(!Ctx.filtresShowed)
    }

  return (
    <div className='Filtres'>
        <button className='toggle-filtres-btn' onClick={handleBtnClick}>
          <span>Filtry</span>
        </button>
        {(Ctx.filtresShowed) && (
          <div className="field">
            <SearchBar />
          </div>
        )}
    </div>
  )
}

export default Filtres;