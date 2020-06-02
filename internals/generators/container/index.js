const path = require('path');
const fs = require('fs');

const componentExists = require('../../utils/componentExists');
const getUser = require('../../utils/getUser');
const { properCase } = require('../../utils/helpers');

module.exports = {
  description: 'Add a container',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'what should it be called?',
      validate: (value) => {
        if (componentExists(value)) {
          return `the component calls ${properCase(value)} has existed`;
        }
        return true;
      }
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      message: 'Do you want to load resources asynchronously?',
      default: false,
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
    const generateFiles = [
      'index',
      'models',
      'services',
      'constants'
    ];
    const generateFileItem = [
      'index.tsx',
      'models/index.js',
      'services/index.js',
      'constants.ts'
    ]
    // const nameIndexToClass = (val) => val == 'index' ? 'class' : val;
    let actions = generateFiles.map((item, key) => ({
      type: 'add',
      // path: `${path.join(__dirname, '../../../src/pages/{{properCase name}}/' + item + '.js')}`,
      path: `${path.join(__dirname, '../../../src/pages/{{properCase name}}/' + generateFileItem[key])}`,
      templateFile: `./container/${item == 'index' ? 'class' : item}.js.hbs`,
      data: {
        author: {
          name: userinfo['user.name'],
          email: userinfo['user.email']
        }
      },
      abortOnFail: true
    }));

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: `${path.join(__dirname, '../../../src/pages/{{properCase name}}/Loadable.tsx')}`,
        templateFile: `./container/loadable.js.hbs`,
      });
    }

    // if (data.wantTestSuit) {
    //   const suitActions = [
    //     {
    //       type: 'add',
    //       path: `${path.join(__dirname, '../../../src/containers/{{properCase name}}/__test__/index.test.js')}`,
    //       templateFile: `./container/test/index.test.js.hbs`,
    //       data: {
    //         author: {
    //           name: userinfo['user.name'],
    //           email: userinfo['user.email']
    //         }
    //       },
    //       abortOnFail: true
    //     },
    //     {
    //       type: 'add',
    //       path: `${path.join(__dirname, '../../../src/containers/{{properCase name}}/__test__/reducer.test.js')}`,
    //       templateFile: `./container/test/reducer.test.js.hbs`,
    //       data: {
    //         author: {
    //           name: userinfo['user.name'],
    //           email: userinfo['user.email']
    //         }
    //       },
    //       abortOnFail: true
    //     }
    //   ]
    //   actions = [...suitActions, ...actions];
    // }

    return actions;
  }
}
