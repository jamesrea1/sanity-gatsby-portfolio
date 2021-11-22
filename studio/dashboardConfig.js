export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '619bc9d99e51b236dc659e04',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-otusu19b',
                  apiId: 'f5ccbb24-56bd-4d5c-91f3-2c8604f638a3'
                },
                {
                  buildHookId: '619bc9dabfdc6b4037a719ee',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-51tcy4nc',
                  apiId: '315fd639-360e-4a80-9cb6-81a35fa8aade'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jamesrea1/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-51tcy4nc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
