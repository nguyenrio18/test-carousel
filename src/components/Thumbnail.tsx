import React, { memo } from 'react';

type Props = {
  children: any;
  id: number;
  selectedKey: number;
};

const Thumbnail = ({ children, id, selectedKey }: Props) => {
  const show = (id === selectedKey);

  return (
    <div className={`object-fill display flex justify-center ${show ? 'opacity-100 transition-all duration-1000 ease-in-out' : 'opacity-0 h-0'}`}>
      {children}
    </div>
  );
}

export default memo(Thumbnail);