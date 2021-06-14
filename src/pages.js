const pages = [
  {
    output: './index.html',
    content: {
      title: 'Gothru VR',
      description: 'Home Page'
    },
    template: './src/hbs/pages/home.hbs'
  },
  {
    output: './about/index.html',
    content: {
      title: 'Gothru VR',
      description: 'About Page'
    },
    template: './src/hbs/pages/about.hbs'
  },
  {
    output: './procedure/index.html',
    content: {
      title: 'Gothru VR',
      description: 'Procedure Page'
    },
    template: './src/hbs/pages/procedure.hbs',
  },
  {
    output: './faq/index.html',
    content: {
      title: 'Gothru VR',
      description: 'Faq Page'
    },
    template: './src/hbs/pages/faq.hbs',
  },
  {
    output: './contactus/index.html',
    content: {
      title: 'Gothru VR',
      description: 'contactus Page'
    },
    template: './src/hbs/pages/contactus.hbs',
  },
]

module.exports = pages
