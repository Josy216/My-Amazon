import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../components/layout/Layout';
import { db } from '../../utils/Firebase';
import { DataContext } from '../../components/DataProvider/DataProvider';
import SingleProduct from '../../components/single/SingleProduct';
import classes from './order.module.css';
import { FaArrowTrendUp } from 'react-icons/fa6';

function Order() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created', 'desc')
        .onSnapshot((snapshot) => {
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <Layout>
      <section className={classes.order}>
        <div className={classes.order__container}>
          <h2>Your Order</h2>
          {orders?.length === 0 && (
            <div className={classes.empty}>
              <h3>
                You have no order yet.
              </h3>
            </div>
          )}
          <div>
            {orders?.map((eachOrder) => (
              <div key={eachOrder.id}>
                <hr />
                <p>Id : {eachOrder?.id}</p>
                {eachOrder?.data?.basket?.map((item) => (
                  <SingleProduct
                    key={item.id}
                    products={item}
                    renderDesc={true}
                    flex={true}
                    cartclass={true}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Order;