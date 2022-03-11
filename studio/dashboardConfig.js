export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
    //   }
    // },
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
                  buildHookId: '622a928b4138150083d1fca1',
                  title: 'Sanity Studio',
                  name: 'sanity-11-ty-demo-studio',
                  apiId: 'f3f72c96-7a28-4af8-810e-6071efb8a78a'
                },
                {
                  buildHookId: '622a928be7708c00a9e9b622',
                  title: 'Blog Website',
                  name: 'sanity-11-ty-demo',
                  apiId: 'b8f65c17-00be-4780-8885-8cf71dc114f9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bost-ty/sanity-11ty-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-11-ty-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
