import React from "react";

function Header() {
  return (
    <section className="section panel__header">
      <div className="container">
        <div className="flex flex--wrap flex--justifyBetween flex--alignCenter">
          <div className="flex__item flex__item--M5  flex__item--SM100">
            <div className="flex content">
              <button id="btn-hamburger" style={{display: "none"}}
              class="btn btn--icon btn--thick btn--primary btn-hamburger"><i class='bx bx-menu'></i></button>
              <h3>Hello Shahrukh</h3>
              <i class="bx bxs-hand"></i>,
            </div>
          </div>
          <div className="flex__item flex__item--SM100">
            <div className="input-container">
              <i class="bx bx-search-alt-2 icon"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
