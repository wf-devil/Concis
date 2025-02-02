import React, { useState } from 'react';
import Popover from '..';
import Button from '../../Button';

export default function MenuDemos1() {
  const [dialogStatus1, setDialogStatus1] = useState(false);
  const [dialogStatus2, setDialogStatus2] = useState(false);

  return (
    <>
      <Popover
        type="hover"
        align="bottom"
        propsVisiable={dialogStatus1}
        onVisableChange={setDialogStatus1}
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <span
              style={{ color: '#1890ff', cursor: 'pointer' }}
              onClick={() => setDialogStatus1(false)}
            >
              close
            </span>
          </>
        }
      >
        <Button type="primary" width={80} height={30}>
          Hover
        </Button>
      </Popover>
      <Popover
        type="click"
        align="bottom"
        propsVisiable={dialogStatus2}
        onVisableChange={setDialogStatus2}
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <span
              style={{ color: '#1890ff', cursor: 'pointer' }}
              onClick={() => setDialogStatus2(false)}
            >
              close
            </span>
          </>
        }
      >
        <Button type="primary" width={80} height={30}>
          Click
        </Button>
      </Popover>
    </>
  );
}
