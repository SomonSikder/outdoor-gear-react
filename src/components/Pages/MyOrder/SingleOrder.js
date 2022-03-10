const SingleOrder = ({ product, handleDelete }) => {
  const { name, img, price } = product.orderInfo;

  return (
    <div className="card mb-3 shadow-lg">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={img}
            className="img-fluid rounded-start"
            alt="..."
            width="150px"
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text text-danger">Price : $ {price}</p>
            <button
              onClick={() => handleDelete(product._id)}
              className="btn btn-danger"
            >
              Cancle Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOrder;
