import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

const AmenitiesSection = () => {
  const amenities = [
    {
      image: '/images/gallery1.png',
      description: 'Olympic-size swimming pool with separate kids pool'
    },
    {
      image: '/images/gallery6.png',
      description: 'Beautiful gardens with walking trails and seating areas'
    },
    {
      image: '/images/gallery5.png',
      description: 'State-of-the-art gym with modern equipment'
    },
    {
      image: '/images/gallery3.png',
      description: 'Community clubhouse for events and gatherings'
    },
    {
      image: '/images/gallery7.png',
      description: 'Covered parking with EV charging stations'
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Live the lifestyle you deserve, closer to nature
          </p>
        </div>

        {/* Amenities Carousel */}
        <div className="relative mb-16 max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl shadow-2xl">
            <Swiper
              spaceBetween={30}
              effect={'fade'}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[EffectFade, Autoplay, Navigation, Pagination]}
              className="mySwiper"
            >
              {amenities.map((amenity, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={amenity.image}
                    alt={`gallery-${index}`}
                    loading='lazy'
                    className="custom-h w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
