import React from 'react';
import { Carousel, HomePageCard, CarouselCategory, CarouselProduct } from './';

const HomePage = () => {
  return (
    <div className='bg-amazonClone-background bg-[#EAEDED]'>
        <div className="min-w-[1000px] max-w-[1500px] m-auto">
            <Carousel />
            <div className='grid grid-cols-3 xl:grid-cols-4 -mt-80'>
              <HomePageCard 
              title={"we have a serprise for you"} 
              img={"../images/home_grid_1.jpg"}
              link={"See terms and conditions"}
              />
              <HomePageCard 
              title={"Watch the ring of power"} 
              img={"../images/home_grid_2.jpg"}
              link={"Start streaming now"}
              />
              <HomePageCard 
              title={"Unlimited streaming"} 
              img={"../images/home_grid_3.jpg"}
              link={"find out more"}
              />
              <HomePageCard 
              title={"More titlesto explore"} 
              img={"../images/home_grid_4.jpg"}
              link={"Browse Kindle Unlimited"}
              />
              <HomePageCard 
              title={"Shop pet supplies"} 
              img={"../images/home_grid_5.jpg"}
              link={"See more"}
              />
              <HomePageCard 
              title={"Spring Sale"} 
              img={"../images/home_grid_6.jpg"}
              link={"See the details"}
              />
              <HomePageCard 
              title={"Echo buds"} 
              img={"../images/home_grid_7.jpg"}
              link={"See More"}
              />
              <HomePageCard 
              title={"Family Plan: 3 Months Free"} 
              img={"../images/home_grid_8.jpg"}
              link={"Learn more"}
              />

              <div className='m-3 pt-8'>
                <img className='xl:hidden' src={"../images/banner_image_2.jpg"} alt="" />
              </div>

            </div>
            <CarouselProduct />
            <CarouselCategory />
            <div className='h-[200px]'>
              <img src="../images/banner_image.jpg" className='h-[100%] m-auto' />
            </div>
        </div>
    </div>
  )
}

export default HomePage