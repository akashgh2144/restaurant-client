import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json()) // Corrected `than` to `then`
            .then(data => setReviews(data)) // Corrected `than` to `then`
            .catch(error => console.error('Error fetching reviews:', error)); // Optional: Add error handling
    }, []);

    return (
        <section>
            <SectionTitle subHeading="What Our Clients say" heading="Testimonials" />
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {reviews.map(review => (
                    <SwiperSlide key={review._id}>
                        <div className='flex flex-col items-center m-24'>
                        <Rating
                     style={{ maxWidth: 180 }}
                     value={review.rating}
                      readOnly
                      />
                            <p>{review.details}</p>
                            <h3 className="text-2xl text-orange-600">{review.name}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Testimonials;
