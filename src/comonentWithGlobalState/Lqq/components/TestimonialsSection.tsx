import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  comment: string;
}

const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // 模拟API请求延迟
    setTimeout(() => {
      setTestimonials([
        {
          id: 1,
          name: '李明',
          location: '上海',
          avatar: 'https://picsum.photos/id/1027/100/100',
          rating: 5,
          comment: '这是我参加过的最好的旅行之一！行程安排得非常合理，导游专业且热情，住宿条件也很棒。强烈推荐！',
        },
        {
          id: 2,
          name: '王芳',
          location: '北京',
          avatar: 'https://picsum.photos/id/1000/100/100',
          rating: 4.8,
          comment: 'Travel为我们家庭定制的重庆之旅简直完美！孩子们玩得很开心，所有的安排都很贴心，感谢你们让我们有了难忘的回忆。',
        },
        {
          id: 3,
          name: '张伟',
          location: '广州',
          avatar: 'https://picsum.photos/id/1012/100/100',
          rating: 4.9,
          comment: '我和朋友参加了他们的成都之旅，每个细节都处理得很好。美食推荐特别棒，让我们品尝到了正宗的当地风味。',
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-blue-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-800 mb-4">
            旅行者的心声
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            听听我们的客户怎么说，他们的真实体验和反馈是我们不断进步的动力
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          </div>
        ) : testimonials.length > 0 ? (
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonials[currentSlide].avatar}
                  alt={testimonials[currentSlide].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{testimonials[currentSlide].name}</h3>
                  <p className="text-gray-600">{testimonials[currentSlide].location}</p>
                </div>
              </div>
              <div className="mb-6">
                {Array(testimonials[currentSlide].rating)
                  .fill(0)
                  .map((_, i) => (
                    <i key={i} className="fa fa-star text-yellow-400"></i>
                  ))}
              </div>
              <p className="text-gray-700 text-lg italic">
                "{testimonials[currentSlide].comment}"
              </p>
            </motion.div>
            
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none"
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 focus:outline-none"
            >
              <i className="fa fa-chevron-right"></i>
            </button>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                  } transition-all duration-300`}
                ></button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-500">暂无评价</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;  