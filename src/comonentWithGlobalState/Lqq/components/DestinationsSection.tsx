import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Destination {
  id: number;
  name: string;
  country: string;
  image: string;
  description: string;
  rating: number;
  price: number;
}

const DestinationsSection: React.FC = () => {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟API请求延迟
    setTimeout(() => {
      setDestinations([
        {
          id: 1,
          name: '重庆',
          country: '重庆',
          image: 'https://imgs.699pic.com/images/500/652/536.jpg!detail.v1',
          description: '重庆是魅力山城，魔幻8D地形独特，火锅热辣，夜景璀璨，人文历史与现代活力在此交融。',
          rating: 4.9,
          price: 1200,
        },
        {
          id: 2,
          name: '广州',
          country: '广东',
          image: 'https://image.baidu.com/search/down?url=https://tvax1.sinaimg.cn/large/ea98bce0gy1h5y3ufd5mlj23sa2ibhdt.jpg',
          description: '广州是千年商都、南国花城，美食云集，历史人文与现代繁华交融，魅力独具令人流连。',
          rating: 4.8,
          price: 1800,
        },
        {
          id: 3,
          name: '三亚',
          country: '海南',
          image: 'https://ts1.tc.mm.bing.net/th/id/R-C.d73ed1548b12e542a08e45151e3cdd25?rik=8TrCvg08A8IALg&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn%2fw1196h698%2f20180125%2fba99-fyqwiqk6427665.jpg&ehk=JJsnsDps%2fXgqpkNKE9yDMmenEahQk%2b1p4V3rvCZGAh0%3d&risl=&pid=ImgRaw&r=0',
          description: '三亚地处海南岛南端，热带风光旖旎，海景绝美，是令人心驰神往的海滨度假胜地。',
          rating: 4.7,
          price: 1500,
        },
        {
          id: 4,
          name: '成都',
          country: '四川',
          image: 'https://img95.699pic.com/photo/50179/9766.jpg_wh860.jpg',
          description: '成都乃天府之都，烟火气浓美食香，历史韵味悠长，是宜居宜游、令人流连的魅力之城。',
          rating: 4.6,
          price: 2000,
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <section id="destinations" className="py-20 bg-blue-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold text-gray-800 mb-4">
            热门目的地
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            发现我们精心挑选的顶级旅游目的地，每一处都有独特的魅力和体验等待着您
          </p>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((destination) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={destination.image}
                    alt={`${destination.name}, ${destination.country}`}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white">{destination.name}</h3>
                      <p className="text-white/80">{destination.country}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-gray-800">{destination.name}</h3>
                    <div className="flex items-center">
                      <i className="fa fa-star text-yellow-400"></i>
                      <span className="ml-1 text-gray-700 font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-gray-500">起价</span>
                      <p className="text-xl font-bold text-primary">¥{destination.price}</p>
                    </div>
                    <button className="px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary font-medium rounded-lg transition-all duration-300">
                      了解更多
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium rounded-full transition-all duration-300">
            查看全部目的地
          </button>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;  