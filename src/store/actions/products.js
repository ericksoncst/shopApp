/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import Product from '../../models/product';

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => {
  return async dispatch => {
    try {
      const response = await fetch(
        'https://shopapp-ab178.firebaseio.com/products.json'
      );

      if (!response.ok) {
        throw new Error('Someting went wrong!');
      }

      const responseData = await response.json();
      const loadedProducts = [];
      for (const key in responseData) {
        loadedProducts.push(
          new Product(
            key,
            'u1',
            responseData[key].title,
            responseData[key].imageUrl,
            responseData[key].description,
            responseData[key].price
          )
        );
      }
      dispatch({ type: SET_PRODUCTS, products: loadedProducts });
    } catch (error) {
      throw error;
    }
  };
};

export const deleteProduct = productId => {
  return async dispatch => {
    await fetch(
      `https://shopapp-ab178.firebaseio.com/products/${productId}.json`,
      {
        method: 'DELETE',
      }
    );
    dispatch({ type: DELETE_PRODUCT, pid: productId });
  };
};

export const createProduct = (title, description, imageUrl, price) => {
  return async dispatch => {
    const response = await fetch(
      'https://shopapp-ab178.firebaseio.com/products.json',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ title, description, imageUrl, price }),
      }
    );

    const responseData = await response.json();

    dispatch({
      type: CREATE_PRODUCT,
      productData: {
        id: responseData.name,
        title,
        description,
        imageUrl,
        price,
      },
    });
  };
};

export const updateProduct = (id, title, description, imageUrl) => {
  return async dispatch => {
    await fetch(`https://shopapp-ab178.firebaseio.com/products/${id}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        description,
        imageUrl,
      }),
    });

    dispatch({
      type: UPDATE_PRODUCT,
      pid: id,
      productData: {
        title,
        description,
        imageUrl,
      },
    });
  };
};
