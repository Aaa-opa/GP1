       src="./img/003.jpg" 
              width="450"
              className="rounded-lg shadow-md border-2 border-gray-200"
              alt="剧集封面 3"
            />
          </div>

          {/* 新增的信息展示盒子 */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-6">
              {/* 左侧信息区块 */}
              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">当前播放</h2>
                <div className="space-y-2">
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">剧集标题：</span>
                    第三集 - 时空之谜
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">播放进度：</span>
                    00:12:34 / 00:45:00
                  </p>
                  <p className="text-lg text-gray-600">
                    <span className="font-medium">分辨率：</span>
                    1920x1080 60FPS
                  </p>
                </div>
              </div>

              {/* 右侧操作区块 */}
              <div className="md:w-1/3 space-y-4">
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">操作面板</h3>
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                      暂停
                    </button>
                    <button className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
                      设置
                    </button>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">播放列表</h3>
                  <ul className="space-y-2">
                    <li className="text-gray-700">▶ 下一集：第四集 - 命运转折</li>
                    <li className="text-gray-700">▶ 待播列表：共5集</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SysPage2;
