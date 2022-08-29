import Card from "../components/Card";

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavourite, onAddToCart}) {
  return(
    <div className="content p-40">


      <div className="d-flex align-center mb-40 justify-between">
        <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
        <div className="search-block d-flex justify-start align-center">
          <img width={20} height={20} src="/img/icons/search.jpg" alt="search icon"></img>
          {searchValue && <img onClick={() => { setSearchValue('') }} className="clear cu-p" src="/img/icons/clearSearch-btn.svg" alt="Clear" />}
          <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
        </div>
      </div>

      <div className="d-flex flex-wrap justify-between p-20">

        {items
          .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, id) => (
            <Card
              key={id}
              onFavourite={(obj) => onAddToFavourite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
              {...item}
            />
          ))}
      </div>
    </div>
  )
}

export default Home;