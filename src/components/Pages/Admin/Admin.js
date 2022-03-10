import React from "react";
import { Dropdown } from "react-bootstrap";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import AddProduct from "./AddProduct";
import MakeAmin from "./MakeAdmin";
import ManageOrder from "./ManageOrder";

const Admin = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="container py-5">
      <div className="my-5 d-lg-flex">
        <div className="text-center w-25">
          <h4 className="text-info mb-4 mt-sm-5"> Admin </h4>
          <Dropdown>
            <Dropdown.Toggle variant="info text-light" id="dropdown-basic">
              Admin Dashboard
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>
                <Link
                  to={`${url}/makeAdmin`}
                  className="text-decoration-none mx-2 text-info"
                >
                  Make an Admin
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link
                  to={`${url}/addProduct`}
                  className="text-decoration-none mx-2 text-info"
                >
                  Add Product
                </Link>
              </Dropdown.Item>

              <Dropdown.Item>
                <Link
                  to={`${url}/manageOrder`}
                  className="text-decoration-none mx-2 text-info"
                >
                  Manage Order
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Switch>
          <Route path={`${path}/makeAdmin`}>
            <MakeAmin></MakeAmin>
          </Route>
          <Route path={`${path}/addProduct`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/manageOrder`}>
            <ManageOrder></ManageOrder>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Admin;
