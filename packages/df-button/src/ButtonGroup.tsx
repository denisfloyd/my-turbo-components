import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

const ButtonGroup = ({ children }: Props) => (
  <div
    className='[&>button]:margin-0 inline-flex whitespace-nowrap border-0 shadow-sm [&>button:first-of-type]:rounded-l-md [&>button:last-of-type]:rounded-r-md [&>button]:rounded-none'
    role='group'
  >
    {children}
  </div>
);

export default ButtonGroup;
