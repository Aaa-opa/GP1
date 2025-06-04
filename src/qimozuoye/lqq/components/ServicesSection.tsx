import React from 'react';
import { motion } from 'framer-motion';

interface Service {
  id: number;
  icon: string; // 保留图标类名，用于备用
  title: string;
  description: string;
  iconImage: string; // 新增图标图片URL
}

const ServicesSection: React.FC = () => {
  const services: Service[] = [
    {
      id: 1,
      icon: 'fa-plane',
      title: '便捷机票',
      description: '提供全球范围内的机票预订服务，价格优惠，选择多样。',
      iconImage: 'https://img.shetu66.com/2023/06/29/1688032517389115.png', // 飞机图标图片
    },
    {
      id: 2,
      icon: 'fa-hotel',
      title: '精选住宿',
      description: '从豪华酒店到特色民宿，满足不同需求和预算的住宿选择。',
      iconImage: 'https://img-md.veimg.cn/meadinindex/img5/2022/8/FE49FC7C4FE843F2ADAFA89786C3EB5C.jpg', // 酒店图标图片
    },
    {
      id: 3,
      icon: 'fa-map-o',
      title: '定制行程',
      description: '专业团队为您量身定制旅行计划，确保每一刻都充满惊喜。',
      iconImage: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.vr93EyHGNpNh22EuKxG2ggHaE8?rs=1&pid=ImgDetMain', // 地图图标图片
    },
    {
      id: 4,
      icon: 'fa-cutlery',
      title: '美食探索',
      description: '带您品尝当地特色美食，体验地道的饮食文化。',
      iconImage: 'https://ts1.tc.mm.bing.net/th/id/R-C.950c49637ac584244a468f321d0036b9?rik=me%2fpdCMXRquOcQ&riu=http%3a%2f%2fimg.aiimg.com%2fuploads%2fallimg%2f150923%2f263915-1509230K456.jpg&ehk=HurPMUSTwhlOJgGNcH9%2bobz7ieh8kJqgBP75cDBCiRc%3d&risl=&pid=ImgRaw&r=0', // 美食图标图片
    },
  ];

  return (
    <section id="services" className="py-20 bg-blue-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-800 mb-4">
            我们的服务
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            我们提供全方位的旅行服务，让您的旅程无忧无虑，充满惊喜和美好回忆
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              {/* 圆形图标容器 - 修改为图片背景 */}
              <div className="w-16 h-16 rounded-full overflow-hidden shadow-md mb-6">
                <img
                  src={service.iconImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;  