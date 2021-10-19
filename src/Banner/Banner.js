import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <div>
            <Carousel className="my-height mb-5">
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fit"
                        src="https://bloximages.newyork1.vip.townnews.com/fox10tv.com/content/tncms/assets/v3/editorial/a/50/a50f4171-724c-5bce-80ca-ef20f74f8968/601cd20eedb32.image.jpg?resize=1476%2C984"
                        alt="First slide" height={500}
                    />
                    <Carousel.Caption className='bg-success rounded-2 opacity-75'>
                        <h3>Master Web & App Development</h3>
                        <p>Get the best teaching environment with extreme care and be a developer in no time.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fit"
                        src="https://www.stephenmccaffreybarrister.com/sites/default/files/2019-08/pharmacist.jpg"
                        alt="Second slide" height={500}
                    />

                    <Carousel.Caption className='bg-danger rounded-2 opacity-75'>
                        <h3 className='text-light'>Master the Art of Graphics Design</h3>
                        <p className='text-light'>Get the best teaching environment with extreme care and be a designer in no time.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img-fit "
                        src="https://media.npr.org/assets/img/2016/06/14/cost-dying_custom-41c275fb0f3ddc703086b39343a9ec3443261e95-s1600-c85.webp"
                        alt="Third slide" height={500}
                    />

                    <Carousel.Caption className='bg-primary rounded-2 opacity-75'>
                        <h3>Emergency First Aid</h3>
                        <p>You will get the best possible Emergency First Aid near your door anytime.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;