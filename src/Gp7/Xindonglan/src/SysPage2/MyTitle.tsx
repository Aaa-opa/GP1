import React, { useState } from 'react';


const MyTitle = () => {

    
    const titleText = "蜡笔小新"
    return (
            <div className=' bg-gray-300 w-full h-10 text-2xl justify-center text-center'>
                {titleText}
            </div>
    )

}

export default MyTitle;

/**
 * 注释：
 * 1. 为什么要大盒套小盒： 需要有flex , 下面的pink色的小盒才会居中。
 * 2. export default MyTitle; :  没有这行，当前的组件在其他文是没有办法使用的。
 */