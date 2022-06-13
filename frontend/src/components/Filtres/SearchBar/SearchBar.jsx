import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
    const inputRef = React.useRef(null);
    const [searchedDb, setSearchedDb] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');

    React.useEffect(()=>{
        fetch(`/data/search?phrase=${inputValue}`)
            .then(res=>res.json())
            .then(data=>setSearchedDb(data))
    }, [inputValue])

    const handleBtnClick = ()=>{
        inputRef.current.value = '';
        inputRef.current.focus();
        handleInputChange();
    }

    const handleInputChange = ()=>{
        setInputValue(inputRef.current.value);
    }

    const joinArr = (arr, x)=>{
        var arr_c = [];
        var fl = true;
        arr?.forEach((el, i)=>{
            if(fl){
                fl = false;
                arr_c.push(el);
            }else{
                arr_c.push(x);
                arr_c.push(el);
            }
        })
        return(arr_c);
    }

  return (
    <div className='SearchBar'>
        <div className='container'>
            <input onChange={handleInputChange} ref={inputRef} type="text" placeholder='Wprowadź frazę...' />
            <button onClick={handleBtnClick}><i className='bx bxs-trash'></i></button>
        </div>
        <div className='list'>
            {searchedDb?.map((el, i)=>(
                <p key={i}>{joinArr(el.pl, <span className='highlight'>{inputValue}</span>)?.map((el, i)=><span key={i}>{el}</span>)} - {joinArr(el.en, <span className='highlight'>{inputValue}</span>)?.map((el, i)=><span key={i}>{el}</span>)}</p>
            ))}
        </div>
    </div>
  )
}

export default SearchBar;