// @flow
// A primitive JavaScript database because we can.
// All objects in this database must conform to ../schema.graphql
// Currently nothing more than a test database. Will be expanded soon.
module.exports = [
  // Test card 1
  {
    id: 1,
    title: 'RSG-Components',
    description: 'Some React components with beautiful styling.',
    image: [
      '/static/rsg-components.png',
      'A button in RSG-Components.'
    ],
    controls: [{
      id: 1,
      title: 'Readme',
      link: 'https://github.com/RSG-Group/rsg-components#RSG-Components',
      internalLink: false
    }, {
      id: 2,
      title: 'Repository',
      link: 'https://github.com/RSG-Group/rsg-components',
      internalLink: false
    }, {
      id: 3,
      title: 'Wiki',
      link: 'https://github.com/RSG-Group/rsg-components/wiki',
      internalLink: false
    }]
  }, {
    id: 2,
    title: 'hyper-background',
    description: 'Change the background of your Hyper terminal!',
    image: [
      '/static/hyper-background.png',
      'Hyper with hyper-aurora theme and a background added via hyper-background. Pure ZSH theme in use.'
    ],
    controls: [{
      id: 1,
      title: 'Readme',
      link: 'https://github.com/RSG-Group/hyper-background#hyper-background',
      internalLink: false
    }, {
      id: 2,
      title: 'Repository',
      link: 'https://github.com/RSG-Group/hyper-background',
      internalLink: false
    }]
  }, {
    id: 3,
    title: 'Chess',
    description: 'Cool chess game to play with your friends. (Single player mode WIP)',
    image: [
      '/static/chess.png',
      'Chess demo.',
      '95pt'
    ],
    controls: [{
      id: 1,
      title: 'Readme',
      link: 'https://github.com/RSG-Group/Chess#rsg-chess',
      internalLink: false
    }, {
      id: 2,
      title: 'Repository',
      link: 'https://github.com/RSG-Group/Chess',
      internalLink: false
    }, {
      id: 3,
      title: 'Demo',
      link: '/chess',
      internalLink: true
    }]
  }, {
    id: 4,
    title: 'line-intersection',
    description: 'Simple mini library for finding the intersection of a line or line segment.',
    image: [
      '/static/line-intersection.png',
      'Rays bro. Rays.',
      '80pt'
    ],
    controls: [{
      id: 1,
      title: 'Readme',
      link: 'https://github.com/RSG-Group/rsg-group.github.io/tree/master/intersection#line-intersection',
      internalLink: false
    }, {
      id: 2,
      title: 'Repository',
      link: 'https://github.com/RSG-Group/rsg-group.github.io/tree/master/intersection',
      internalLink: false
    }]
  }, {
    id: 5,
    title: 'RSG-Chess-mobile',
    description: 'Mobile version of RSG-Chess.',
    image: [
      '/static/rsg-chess-mobile.png',
      'RSG-Chess-mobile screenshot.'
    ],
    controls: [{
      id: 1,
      title: 'Readme',
      link: 'https://github.com/RSG-Group/RSG-Chess-mobile#RSG-Chess-mobile',
      internalLink: false
    }, {
      id: 2,
      title: 'Repository',
      link: 'https://github.com/RSG-Group/RSG-Chess-mobile',
      internalLink: false
    }, {
      id: 3,
      title: 'Play Store',
      link: 'https://play.google.com/store/apps/details?id=com.rsg.chess',
      internalLink: false
    }]
  }
]
