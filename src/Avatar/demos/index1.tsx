import React from 'react';
import Avatar from '..';
import { UserOutlined } from '@ant-design/icons';
import usePageListener from '../../_util/hooks/usePageListener';

export default function avatarDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Avatar');

  return (
    <div style={{ display: 'flex' }}>
      <Avatar style={{ marginRight: '20px' }}>A</Avatar>
      <Avatar style={{ marginRight: '20px', background: '#3370ff' }}>
        <UserOutlined style={{ fontSize: '20px' }} />
      </Avatar>
      <Avatar style={{ marginRight: '20px', background: '#14a9f8' }}>View</Avatar>
      <Avatar style={{ marginRight: '20px', background: '#00d0b8' }}>React</Avatar>
      <Avatar>
        <img src="https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png"></img>
      </Avatar>
    </div>
  );
}
