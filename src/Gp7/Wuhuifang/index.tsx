import React from 'react';

const ThreePhotosComponent = () => {
    const photos = [
        {
            id: 1,
            src: 'https://picsum.photos/200/300?ran1dom=',
            title: '照片 1',
            description: '这是第一张示例照片'
        },
        {
            id: 2,
            src: 'https://picsum.photos/200/300?random=2',
            title: '照片 2',
            description: '这是第二张示例照片'
        },
        {
            id: 3,
            src: 'https://picsum.photos/200/300?random=3',
            title: '照片 3',
            description: '这是第三张示例照片'
        }
    ];

    return (
        <div className="flex justify-center items-center flex-wrap gap-4 p-4">
            {photos.map(photo => (
                <div key={photo.id} className="bg-white p-4 rounded-lg shadow-md max-w-sm">
                    <img src={photo.src} alt={photo.title} className="w-full h-auto rounded-md" />
                    <div className="mt-4">
                        <h2 className="text-xl font-semibold text-gray-800">{photo.title}</h2>
                        <p className="text-gray-600 mt-1">{photo.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ThreePhotosComponent;
