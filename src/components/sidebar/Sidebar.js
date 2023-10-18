import React from 'react'

function Sidebar() {
  return (
      <>
      <aside id='sidebar' className='sidebar' >
        <div className="mobile-logo">
            <div class="logo dark-text"><i class='bx bx-cube-alt' ></i> <span>Dashboard</span></div>
        </div>
        <nav>
            <ul className="navigation list--styleNone ">
                <li class="active"><a href="#"><span><i class='bx bxs-dashboard'></i> Dashboard</span></a></li>
                <li><a href="#"><span><i class='bx bxl-product-hunt' ></i> Product</span><i class='bx bx-chevron-right' ></i></a></li>
                <li><a href="#"><span><i class='bx bx-user-pin' ></i> Customers</span><i class='bx bx-chevron-right' ></i></a></li>
                <li><a href="#"><span><i class='bx bx-wallet-alt' ></i> Income</span><i class='bx bx-chevron-right' ></i></a></li>
                <li><a href="#"><span><i class='bx bx-loader-circle' ></i> Promote</span><i class='bx bx-chevron-right' ></i></a></li>
                <li><a href="#"><span><i class='bx bx-help-circle' ></i> Help</span><i class='bx bx-chevron-right' ></i></a></li>
            </ul>
        </nav>
        {/* <div className='flex profile'>
            <div className='flex flex--alignCenter'>
                <img src={require('../../assets/images/profile.png')} alt='profile' />
                <div>
                    <p>Evane</p>
                    <p>Project Manager</p>
                </div>
            </div>
            <i class='bx bx-chevron-down' ></i>
        </div> */}
    </aside>
    <div id="aside-overlay" class="aside-overlay"></div>
      </>
  )
}

export default Sidebar