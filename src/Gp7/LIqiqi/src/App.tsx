import React from 'react';
import './App.css';

// 定义商品类型
type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
};

// 商品详情卡片组件
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 m-4 w-64">
            <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover rounded-md cursor-pointer hover:scale-110 transition-transform duration-300"
            />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600 mt-1">{product.description}</p>
            <p className="text-xl text-red-600 mt-2">￥{product.price}</p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-yellow-600">加入购物车</button>
        </div>
    );
};

// 商品列表组件
const ProductList: React.FC<{ products: Product[] }> = ({ products }) => {
    return (
        <div className="flex flex-wrap justify-center">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

const App: React.FC = () => {
    const products: Product[] = [
        {
            id: 1,
            name: '迪士尼手表',
            description: '2025新款防水手表',
            price: 129.9,
            image: './img/1.jpg'
        },
        {
            id: 2,
            name: '耐克双肩包',
            description: '男女童夏季书包',
            price: 209.9,
            image: './img/2.jpg'
        },
        {
          id: 3,
          name: '小米小冰箱',
          description: '双开门家用省电',
          price: 1599,
          image: './img/3.jpg'
      }
    ];

    return (
        <div className="bg-orange-200 min-h-screen">
            <header className="bg-orange-100 shadow-md p-4">
                <h1 className="text-2xl font-bold text-center">淘宝商品展示</h1>
            </header>
            <main className="container mx-auto py-8">
                <ProductList products={products} />
            </main>
        </div>
    );
};

export default App;
    