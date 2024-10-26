// src/components/SmoothMoveBlog.jsx
import Slider from 'react-slick'
import Truck from '../assets/truck.png'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SmoothMoveBlog = () => {
  // Sample blog post data
  const blogPosts = [
    {
      image: Truck,
      date: 'JULY 10, 2024',
      title:
        'Settling into a new home: Strategies for an effortless movement, hassle-free',
    },
    {
      image: Truck,
      date: 'JULY 10, 2024',
      title: 'Packing Tips: Efficient ways to organize and pack for your move',
    },
    {
      image: Truck,
      date: 'JULY 10, 2024',
      title: 'How to choose the right moving company for your relocation',
    },
  ]

  // Slider settings
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust to show more slides if needed
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true, // Show next/previous arrows
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <section className='bg-bgColor text-white py-16'>
      <div className='container mx-auto relative'>
        {/* Section Title */}
        <h2 className='text-[24px] animated-text md:text-4xl text-center font-bold mb-4'>
          THE SMOOTH MOVE BLOG
        </h2>
        <p className='text-[18px] md:text-xl text-center font-semibold mb-4'>
          MOVING AND RELOCATION TIPS AND EVERYTHING IN BETWEEN
        </p>
        <p className='text-white text-sm md:text-[18px] text-center mb-12 max-w-xl mx-auto'>
          Check out our blog for helpful tips and guides on making your move as
          smooth as possible. Topics include packing tips, moving checklists,
          and more.
        </p>

        {/* Blog Posts Carousel using react-slick */}
        <Slider {...settings} className='px-12 overflow-hidden'>
          {blogPosts.map((blog, index) => (
            <div key={index} className='px-4'>
              <div className='bg-bgColor border border-[#535558] shadow-lg'>
                <img
                  src={blog.image}
                  alt='Blog post'
                  className='w-full h-64 object-cover'
                />
                <div className='p-6'>
                  <p className='text-[18px] text-[#DEDEDE]'>{blog.date}</p>
                  <h4 className='text-[20px] font-bold my-4'>{blog.title}</h4>
                  <button className='bg-priRed hover:bg-red-600 text-white py-2 px-6 rounded-lg'>
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default SmoothMoveBlog
