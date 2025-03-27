import React, { useState } from 'react';


const MyTitle = () => {


    const titleText = "海绵宝宝"
    return (
        <div className='flex w-600 h-30 bg-slate-10 justify-center'>
            <div className=' bg-pink-300 w-80 h-full text-center'>
                <div className="text-gray-600 text-5xl font-bold ">{titleText}</div>

            </div>
        </div>
    )

}

export default MyTitle;

/**
 * 注释：
 * 1. 为什么要大盒套小盒： 需要有flex , 下面的pink色的小盒才会居中。
 * 2. export default MyTitle; :  没有这行，当前的组件在其他文是没有办法使用的。
 */



//   return (
//     <div className='flex w-[800px] h-[100px] bg-slate-100 justify-center items-center'>
//       <div className='bg-pink-200 w-60 h-8 text-center flex items-center justify-center'>
//         {titleText}
//       </div>
//     </div>
//   );
// };

// export default MyTitle;