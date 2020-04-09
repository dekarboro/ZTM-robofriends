import React from 'react';

const Sticky = (args) => {
  return (
    <div style={
        { 
          overflowY: 'scroll', 
          height: '800px'
        }
      }>
      {args.children}
    </div>
  )
}

export default Sticky;