import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
      <div className="navbar-text"><a className="nav-link" href="#">Carrito <FontAwesomeIcon icon={ faShoppingCart } />
      </a>
      </div>
    );
  }
  
  export default CartWidget;