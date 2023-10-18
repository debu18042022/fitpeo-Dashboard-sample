import React from 'react'

function InfoCards() {
  return (
    <section className='section info__card'>
    <div className='container'>
        <div className='flex flex--wrap'>
            <div className='flex__item flex__item--25 flex__item--M50 flex__item--SM100'>
                <div className='flex info__card--item'>
                    <div className='flex__item info__card--item-logo bg--green'><i class='bx bx-dollar-circle text--green'></i></div>
                    <div className='flex__item info__card--item-content'>
                       <p>Earning</p>
                       <h3>$198K</h3>
                       <p><span className="text--green"><i class='bx bx-up-arrow-alt' ></i> 37.8%</span> this month</p>
                    </div>
                </div>
            </div>
            <div className='flex__item flex__item--25 flex__item--M50 flex__item--SM100'>
                <div className='flex info__card--item'>
                    <div className='flex__item info__card--item-logo bg--purple'><i class='bx bx-notepad text--purple'></i></div>
                    <div className='flex__item info__card--item-content'>
                       <p>Orders</p>
                       <h3>$2.4K</h3>
                       <p><span className='text--pink'><i class='bx bx-down-arrow-alt' ></i> 2%</span> this month</p>
                    </div>
                </div>
            </div>
            <div className='flex__item flex__item--25 flex__item--M50 flex__item--SM100'>
                <div className='flex info__card--item'>
                    <div className='flex__item info__card--item-logo bg--blue'><i class='bx bx-coin-stack text--blue'></i></div>
                    <div className='flex__item info__card--item-content'>
                       <p>Balance</p>
                       <h3>$2.4K</h3>
                       <p><span className='text--pink'><i class='bx bx-down-arrow-alt' ></i> 2%</span> this month</p>
                    </div>
                </div>
            </div>
            <div className='flex__item flex__item--25 flex__item--M50 flex__item--SM100'>
                <div className='flex info__card--item'>
                    <div className='flex__item info__card--item-logo bg--pink'><i class='bx bx-shopping-bag text--pink'></i></div>
                    <div className='flex__item info__card--item-content'>
                       <p>Total Sales</p>
                       <h3>$89K</h3>
                       <p><span  className='text--green'><i class='bx bx-up-arrow-alt' ></i> 11%</span> this week</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default InfoCards