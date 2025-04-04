'use client'

import { Carousel } from 'react-bootstrap'

export default function MainCarousel() {
  return (
    <Carousel className="mt-5">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://placehold.co/1200x800"
          alt="First slide"
          style={{ height: '50vh', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h5>Welcome to our Community</h5>
        </Carousel.Caption>
      </Carousel.Item>
      {/* Add more Carousel.Items */}
    </Carousel>
  )
}