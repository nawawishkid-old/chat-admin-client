import React from 'react';

const Layout = ({ type, children }) => {
  let className = 'chat-template-form__layout__';

  switch (type) {
    case 'controller': className += 'controllers'; break;
    case 'output': className += 'outputs'; break;
    default: className += 'inputs' break;
  }

  return <div className={className}>{children}</div>;
}

export default Layout;