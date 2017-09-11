// A primitive JavaScript database because we can.
// All objects in this database must conform to ../schema.graphql
// Currently nothing more than a test database. Will be expanded soon.
module.exports = [
  // Test card 1
  {
    id: 1,
    title: 'RSG-Components',
    description: 'Some React components with beautiful styling.',
    image: '/static/rsg-components.png',
    controls: [{
      id: 1,
      title: 'Readme',
      link: 'https://github.com/RSG-Group/rsg-components#RSG-Components'
    }, {
      id: 2,
      title: 'Repository',
      link: 'https://github.com/RSG-Group/rsg-components'
    }, {
      id: 3,
      title: 'Wiki',
      link: 'https://github.com/RSG-Group/rsg-components/wiki'
    }]
  }, {
    id: 2,
    title: 'hyper-background',
    description: 'Change the background of your Hyper terminal!',
    image: '/static/hyper-background.png',
    controls: [{
      id: 1,
      title: 'Readme',
      link: 'https://github.com/RSG-Group/hyper-background#hyper-background'
    }, {
      id: 2,
      title: 'Repository',
      link: 'https://github.com/RSG-Group/hyper-background'
    }]
  }, {
    id: 3,
    title: 'Chess',
    description: 'Cool chess game to play with your friends. (Single player mode WIP)',
    image: '/static/chess.png',
    controls: [{
      id: 1,
      title: 'Readme',
      link: 'https://github.com/RSG-Group/Chess#rsg-chess'
    }, {
      id: 2,
      title: 'Repository',
      link: 'https://github.com/RSG-Group/Chess'
    }, {
      id: 3,
      title: 'Demo',
      link: '/chess'
    }]
  }, {
    id: 4,
    title: 'line-intersection',
    description: 'Simple mini library for finding the intersection of a line or line segment.',
    image: '/static/line-intersection.png',
    controls: [{
      id: 1,
      title: 'Readme',
      link: 'https://github.com/RSG-Group/rsg-group.github.io/tree/master/intersection#line-intersection'
    }, {
      id: 2,
      title: 'Repository',
      link: 'https://github.com/RSG-Group/rsg-group.github.io/tree/master/intersection'
    }]
  }, {
    id: 5,
    title: 'RSG-Chess-mobile',
    description: 'Mobile version of RSG-Chess.',
    image: '/static/rsg-chess-mobile.png',
    controls: [{
      id: 1,
      title: 'Readme',
      link: 'https://github.com/RSG-Group/RSG-Chess-mobile#RSG-Chess-mobile'
    }, {
      id: 2,
      title: 'Repository',
      link: 'https://github.com/RSG-Group/RSG-Chess-mobile'
    }, {
      id: 3,
      title: 'Installers',
      link: 'https://build.phonegap.com/apps/2773889/builds'
    }]
  }
]
