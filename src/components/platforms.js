import React from 'react';
import Bilibili from './icons/bilibili.svg';
import Csdn from './icons/csdn.svg';
import Douyin from './icons/douyin.svg';
import Hacknews from './icons/hacknews.svg';
import Jianshu from './icons/jianshu.svg';
import Medium from './icons/medium.svg';
import Xiaohongshu from './icons/xiaohongshu.svg';
import Zhihu from './icons/zhihu.svg';

import './platforms.css';

const Platforms = () => {
  const icons = [
    { icon: Hacknews, text: 'Hacknews' , url: 'https://news.ycombinator.com/'},
    { icon: Medium, text: 'Medium' , url: 'https://medium.com/'},
    { icon: Bilibili, text: 'Bilibili', url: 'https://www.bilibili.com/'},
    { icon: Csdn, text: 'CSDN' , url: 'https://www.csdn.net/'},
    { icon: Douyin, text: 'Douyin' , url: 'https://www.douyin.com/'},
    { icon: Zhihu, text: 'Zhihu' , url: 'https://www.zhihu.com/'},
    { icon: Jianshu, text: 'Jianshu' , url: 'https://www.jianshu.com/'},
    { icon: Xiaohongshu, text: 'Xiaohongshu' , url: 'https://www.xiaohongshu.com/'},
  ];

  return (
    <div className="icon-row">
      {icons.map((item, index) => (
        <a href={item.url} key={index} className="icon-link">
          <div className="icon-item">
            <img src={item.icon} alt={item.text} className="icon" />
            <span className="desc">{item.text}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Platforms;