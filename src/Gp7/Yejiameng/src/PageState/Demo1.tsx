import { useState } from "react";

function Demo1() {
  const [activeTab, setActiveTab] = useState("books"); // 当前激活的标签
  const [selectedBook, setSelectedBook] = useState(null); // 选中的书籍

  // 书籍数据
  const books = [
    { id: 1, title: "JavaScript高级程序设计", author: "Nicholas C. Zakas" },
    { id: 2, title: "React设计原理", author: "React核心团队" },
    { id: 3, title: "CSS指南", author: "Eric A. Meyer" },
    { id: 4, title: "算法导论", author: "Thomas H. Cormen" }
  ];

  // 音乐数据
  const songs = [
    { id: 1, title: "童谣", artist: "唐诗三百首" },
    { id: 2, title: "抖音神曲", artist: "音乐家" },
    { id: 3, title: "热门", artist: "一样乐队" }
  ];

  // 舞蹈数据
  const dances = [
    { id: 1, title: "舞蹈教程", instructor: "资深舞蹈家" },
    { id: 2, title: "零基础基础", instructor: "自由舞者" }
  ];

  return (
    <div className="bg-pink-100 p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        多媒体学习平台
      </h1>

      {/* 导航标签 */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          className={`px-6 py-2 rounded-full shadow-md transition duration-200 ${
            activeTab === "books"
              ? "bg-blue-400 text-white"
              : "bg-white text-blue-400 hover:bg-blue-50"
          }`}
          onClick={() => {
            setActiveTab("books");
            setSelectedBook(null);
          }}
        >
          📚 图书
        </button>
        <button
          className={`px-6 py-2 rounded-full shadow-md transition duration-200 ${
            activeTab === "music"
              ? "bg-green-400 text-white"
              : "bg-white text-green-400 hover:bg-green-50"
          }`}
          onClick={() => setActiveTab("music")}
        >
          🎵 听歌
        </button>
        <button
          className={`px-6 py-2 rounded-full shadow-md transition duration-200 ${
            activeTab === "dance"
              ? "bg-purple-400 text-white"
              : "bg-white text-purple-400 hover:bg-purple-50"
          }`}
          onClick={() => setActiveTab("dance")}
        >
          💃 跳舞
        </button>
      </div>

      {/* 内容区域 */}
      <div className="bg-white p-6 rounded-lg shadow-inner">
        {activeTab === "books" && (
          <div>
            {selectedBook ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">
                  {selectedBook}
                </h2>
                <p className="text-gray-600 mb-4">作者: {selectedBook}</p>
                <div className="flex justify-center gap-4 mt-6">
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                    在线阅读
                  </button>
                  <button className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition">
                    下载电子书
                  </button>
                </div>
                <button
                  className="mt-6 px-4 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition"
                  onClick={() => setSelectedBook(null)}
                >
                  返回书单
                </button>
              </div>
            ) : (
              <div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                  推荐书籍
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {books.map((book) => (
                    <div
                      key={book.id}
                      className="p-4 bg-gradient-to-r from-blue-50 to-pink-50 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                      onClick={() => setSelectedBook}
                    >
                      <div className="w-12 h-12 bg-blue-300 rounded-full flex items-center justify-center text-white font-bold mb-2">
                        {book.title.charAt(0)}
                      </div>
                      <h3 className="font-medium text-gray-800">
                        {book.title}
                      </h3>
                      <p className="text-sm text-gray-500">{book.author}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === "music" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              推荐音乐
            </h2>
            <div className="space-y-3">
              {songs.map((song) => (
                <div
                  key={song.id}
                  className="p-3 bg-green-50 rounded-lg flex justify-between items-center hover:bg-green-100 transition"
                >
                  <div>
                    <h3 className="font-medium text-gray-800">{song.title}</h3>
                    <p className="text-sm text-gray-500">{song.artist}</p>
                  </div>
                  <button className="p-2 bg-green-200 rounded-full text-green-700 hover:bg-green-300 transition">
                    ▶️ 播放
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "dance" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              舞蹈教程
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {dances.map((dance) => (
                <div
                  key={dance.id}
                  className="p-4 bg-purple-50 rounded-lg shadow-sm hover:shadow-md transition"
                >
                  <div className="w-full h-24 bg-purple-200 rounded mb-3 flex items-center justify-center text-purple-600">
                    🎵 舞蹈视频
                  </div>
                  <h3 className="font-medium text-gray-800">{dance.title}</h3>
                  <p className="text-sm text-gray-500">
                    教练: {dance.instructor}
                  </p>
                  <button className="mt-2 px-3 py-1 bg-purple-100 text-purple-600 rounded text-sm hover:bg-purple-200 transition">
                    观看教程
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Demo1;