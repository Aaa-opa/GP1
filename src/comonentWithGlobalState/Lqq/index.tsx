import React, { useState } from 'react';

const LanguageSwitcher: React.FC = () => {
    const [currentLanguage, setCurrentLanguage] = useState<'en' | 'zh'>('en');
    const [isScaling, setIsScaling] = useState(false);

    const switchLanguage = (lang: 'en' | 'zh') => {
        setIsScaling(true);
        setTimeout(() => {
            setCurrentLanguage(lang);
            setIsScaling(false);
        }, 300);
    };

    return (
        <div className="bg-blue-200 p-8 rounded-xl shadow-2xl max-w-md mx-auto">
            <div className="flex flex-col items-center space-y-8">
                <div className="flex space-x-4">
                    <button
                        className="px-6 py-3 bg-purple-400 text-white rounded-md hover:bg-purple-500 hover:scale-105"
                        onClick={() => switchLanguage('en')}
                    >
                        English
                    </button>
                    <button
                        className="px-6 py-3 bg-pink-400 text-white rounded-md hover:bg-pink-500 hover:scale-105"
                        onClick={() => switchLanguage('zh')}
                    >
                        中文
                    </button>
                </div>
                <div
                    className={`bg-white p-8 rounded-lg shadow-lg space-y-4 ${
                        isScaling ? 'transform scale-0 transition-transform duration-300' : 'transform scale-100 transition-transform duration-300'
                    }`}
                >
                    <h1 className="text-3xl font-bold text-gray-800">
                        {currentLanguage === 'en' ? 'Welcome to Our Website' : '欢迎来到我们的网站'}
                    </h1>
                    <p className="text-lg text-gray-700">
                        {currentLanguage === 'en'
                           ? 'Enjoy everything in your favorite atmosphere.'
                            : '在喜欢的氛围里享受所有。'}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LanguageSwitcher;
    