const path = require('path');
const fs = require('fs');

const checkMockExists = require('../../utils/mockExists');
const getUser = require('../../utils/getUser');

module.exports = {
  description: 'Add a mock',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'what should it be called?',
      validate: (value) => {
        if (checkMockExists(value)) {
          return `the component calls ${value} has existed`;
        }
        return true;
      }
    },
    // {
    //   type: 'confirm',
    //   name: 'wantTestSuit',
    //   message: 'Do you want to create test suit?',
    //   default: false,
    // }
  ],
  actions: data => {
    const userinfo = getUser();
    let actions = [];
    const componentType = data.componentType;

    actions.push({
      type: 'add',
      path: `${path.join(__dirname, '../../../mock/{{name}}.ts')}`,
      templateFile: `./mock/default.js.hbs`,
      data: {
        author: {
          name: userinfo['user.name'],
          email: userinfo['user.email']
        }
      },
      abortOnFail: true
    });

    // if (data.wantTestSuit) {
    //   const suitActions = [
    //     {
    //       type: 'add',
    //       path: `${path.join(__dirname, '../../../src/components/{{properCase name}}/__test__/index.test.js')}`,
    //       templateFile: `./component/test/index.test.js.hbs`,
    //       data: {
    //         author: {
    //           name: userinfo['user.name'],
    //           email: userinfo['user.email']
    //         },
    //         isFunctional: componentType === 'Functional' ? true : false
    //       },
    //       abortOnFail: true
    //     }
    //   ]
    //   actions = [...suitActions, ...actions];
    // }

    return actions;
  }
}
