import React from "react";

function ProductShell() {
  return (
    <section className="section">
      <div className="container">
        <div className="product__shell">
          <div className="flex flex--wrap flex--alignCenter flex--justifyBetween">
            <div className="flex__item flex__item--50 flex__item--M100">
              <h3>Product Shell</h3>
            </div>
            <div className="flex__item flex__item--50 flex__item--M100">
              <div className="flex flex--wrap">
                <div className="flex__item flex__item--50">
                  <div className="input-container bg--lightgray">
                    <i class="bx bx-search-alt-2 icon"></i>
                    <input type="text" placeholder="Search" className="bg--lightgray" />
                  </div>
                </div>
                <div className="flex__item flex__item--50">
                  <div className="input-container dropdown bg--lightgray">
                    <p>Last 30 days</p>
                    <i class='bx bx-chevron-down'></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="prouct__shell--table">
        <table>
  <tr>
    <th>Product Name</th>
    <th>Stock</th>
    <th>Price</th>
    <th>Total Sales</th>
  </tr>
  <tr>
    <td>
      <div className="image__container">
        <img src="https://images.pexels.com/photos/63340/pexels-photo-63340.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        <div>
          <h4>Abstract 3D</h4>
          <p>lorem ipsum lorem ipsum  lorem ipsum </p>
        </div>
      </div>
      </td>
    <td>32 in stock</td>
    <td><h3>$ 45.99</h3></td>
    <td>20</td>
  </tr>
  <tr>
    <td>
    <div className="image__container">
        <img src="https://images.unsplash.com/photo-1530533718754-001d2668365a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJsdWV8ZW58MHx8MHx8fDA%3D&w=1000&q=80" />
        <div>
          <h4>Abstract 3D</h4>
          <p>lorem ipsum lorem ipsum  lorem ipsum </p>
        </div>
      </div>
    </td>
    <td>32 in stock</td>
    <td><h3>$ 45.99</h3></td>
    <td>20</td>
  </tr>
 
</table>
        </div>
      </div>
    </section>
  );
}

export default ProductShell;
