/**
 * test component
 * author: winson
 * email: 501285598@qq.com
 */
import mockjs from 'mockjs';

const Random = mockjs.Random;

export default {
  'POST /api/example': { data: 'haha' },
  'GET /api/example': (req: any, res: any) => {
    res.end('ok');
  },
  'GET /api/mock': (req: any, res: any) => {
    // const data = Array.prototype.fill(100).map(item => {
    //   return mockjs.mock({
    //     'list|100': [{
    //       'name': Random.cname()
    //     }]
    //   })
    // })
    let data: any[] = [];
    Array(100)
      .fill('')
      .forEach(() => {
        data.push(
          mockjs.mock({
            name: Random.cname(),
            address: Random.county(true),
          }),
        );
      });

    res.json(data);
  },
};
