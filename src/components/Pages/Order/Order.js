import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { Alert, Button } from "react-bootstrap";

const Order = () => {
  const { user } = useAuth();
  const [order, setOrder] = useState({});
  const { id } = useParams();
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);

  const history = useHistory();

  useEffect(() => {
    fetch(`https://serene-wildwood-97102.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [id]);

  const onSubmit = (data) => {
    data.orderInfo = order;

    fetch(`https://serene-wildwood-97102.herokuapp.com/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          reset();
        }
      });
    setSuccess(true);
  };

  const seeOrders = () => {
    history.push("/myOrder");
  };
  return (
    <div className="container pt-5">
      <div className="row mt-5 pt-5">
        <div className="col-lg-6">
          <div className="card mb-3" style={{ maxWidth: " 540px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={order.img}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{order.name}</h5>
                  <hr />
                  <p className="card-text">{order.description}</p>
                  <p className="card-text">
                    <h2 className="text-danger">Price: $ {order.price}</h2>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <form onSubmit={handleSubmit(onSubmit)} className="form-control py-4">
            <input
              defaultValue={user.displayName}
              {...register("name")}
              placeholder="Name"
              className="form-control my-2"
            />
            <input
              defaultValue={user.email}
              {...register("email")}
              placeholder="Email"
              className="form-control my-2"
            />
            <input
              {...register("address")}
              placeholder="Address"
              className="form-control my-2"
            />
            <input
              {...register("phone")}
              placeholder="Phone"
              className="form-control my-2"
            />
            <input
              type="submit"
              className="btn btn-warning"
              value="Place Order"
            />
          </form>
        </div>
      </div>
      {success && (
        <Alert variant="success" className="text-center">
          Successfully done your order !!{" "}
          <Button onClick={seeOrders} className="btn-warning">
            See your order
          </Button>
        </Alert>
      )}
    </div>
  );
};

export default Order;
