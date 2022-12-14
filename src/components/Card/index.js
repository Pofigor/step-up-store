import React from 'react';
import ContentLoader from "react-content-loader";

import AppContext from '../../context';

import styles from './Card.module.scss';

function Card({
  id,
  name,
  imageUrl,
  price,
  onFavourite,
  onPlus,
  favourited = false,
  loading = false
}) {

  const {isItemAdded} = React.useContext(AppContext);
  const [isFavourite, setIsFavourite] = React.useState(favourited);
  const obj = {id, parentId: id, name, imageUrl, price}

  const onClickPlus = () => {
    onPlus(obj)
  }

  const onClickFavourite = () => {
    onFavourite(obj)
    setIsFavourite(!isFavourite);
  }


  return (
    <div className={styles.card}>
      {
        loading ? <ContentLoader
          speed={2}
          width={210}
          height={220}
          viewBox="0 0 210 220"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="116" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="140" rx="3" ry="3" width="90" height="15" />
          <rect x="0" y="182" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="174" rx="8" ry="8" width="32" height="32" />
        </ContentLoader> :
          <>
            {onFavourite && (
              <div className={styles.favourite} onClick={onClickFavourite}>
              <img width={20} height={20} src={isFavourite ? "img/icons/liked.svg" : "img/icons/unliked.svg"} alt="unliked" />
            </div>
            )}
            <img width={133} height={112} src={imageUrl} alt="Sneakers"></img>
            <h5>{name}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>{price} руб.</b>
              </div>
              <div>
                {onPlus && <img className={styles.cardBtn}
                  onClick={onClickPlus}
                  src={isItemAdded(id) ? "img/icons/btn-checked.svg" : "img/icons/cardBtn.svg"}
                  alt="card button"></img>}
              </div>
            </div>
          </>
      }
    </div>

  )
}



export default Card;
