import React from 'react';
import { Button } from 'antd';

// export default () => {
//   return (<div>hahaha</div>)
// }

const Test = (props: any) => {
  console.log('Test', props);
  return (
    <div>
      <Button type="primary">asdfsdf</Button>
    </div>
  );
};

export default Test;
