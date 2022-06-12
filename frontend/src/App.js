import React from 'react';
import './App.css';
import Filtres from './components/Filtres/Filtres';
import Table from './components/Table/Table';

export const AppContext = React.createContext(null)

function App() {
  const [db, setDb] = React.useState([]); // totalnie wszystkie rozdziały
  const [dbChapterIdx, setDbChapterIdx] = React.useState(0); // index obecnego rozdziału
  const [presentRows, setPresentRows] = React.useState([0, 9]); // przedział wierszy z db[dbChapterIdx]
  const [filtresShowed, setFiltresShowed] = React.useState(false) // czy filtry są otwarte
  const [hiddenLangs, setHiddenLangs] = React.useState({pl: false, en: false}) // które języki są ukryte

  React.useEffect(()=>{
    fetch('/data')
      .then(res => res.json())
      .then(data => setDb(data))
  }, [])
  React.useEffect(()=>filtresShowed ? document.body.classList.add('filtres-showed') : document.body.classList.remove('filtres-showed'), [filtresShowed])
  React.useEffect(()=>setPresentRows([0, 9]), [dbChapterIdx])

  return (
    <div className="App">
      <AppContext.Provider value={{
          db: db,
          dbChapterIdx: dbChapterIdx,
          setDbChapterIdx: setDbChapterIdx,
          presentRows: presentRows,
          setPresentRows: setPresentRows,
          filtresShowed: filtresShowed,
          setFiltresShowed: setFiltresShowed,
          hiddenLangs: hiddenLangs,
          setHiddenLangs: setHiddenLangs
        }}>
        <Table />
        <Filtres />
      </AppContext.Provider>
    </div>
  );
}

export default App;
