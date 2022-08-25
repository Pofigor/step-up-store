function Header() {
  return (
    <header className="d-flex justify-between	align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.svg" alt="logo" className="logo" />
        <div>
          <h3>REACT SNEAKERS</h3>
          <p className="opacity-5" >Магазин фирменных кросовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30">
          <img width={18} height={18} src="/img/icons/cart.svg" alt="card"></img>
          <span>1200 руб.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/icons/user.svg" alt="user"></img>
        </li>
      </ul>

    </header>
  )
}

export default Header;
