import '../../styles/Products.css';
import { useRoutes } from 'react-router-dom';

export default function ProductItem(props) {
  // let path = useRouteMatch();
  const { productID, productName, productImage, productPrice, owner } = props;

  return (
    <div className="col mb-4">
      <div className="card" style={{ width: 'auto' }}>
        <img src={productImage} class="card-img-top w-100 vh-20" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-truncate">{productName}</h5>
          <h6 class="card-subtitle mb-2 text-muted text-truncate">{owner.join(', ')}</h6>
          {productPrice && <p class="card-text text-success">₱{productPrice}</p>}
          <a href={`products/innovations/${productID}`} className="btn btn-primary">
            View Item
          </a>
        </div>
      </div>
    </div>
  );
}
