import React, { useMemo } from 'react';

// export default () => {
//   return (<div>hahaha</div>)
// }

const Test = (props: any) => {
  // return props.data.map((item: any) => <div>{item.name}</div>)
  return useMemo(() => {
    return props.data.map((item: any) => <div>{item.name}</div>)
  }, [props.data])
}

export default Test
