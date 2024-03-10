// // sanity.config.js
// import {visionTool} from '@sanity/vision'
// import {defineConfig} from 'sanity'
// import {deskTool} from 'sanity/desk'
// import schemas from './schemas/schema'
// import deskStructure from './src/structure/deskStructure'

// export default defineConfig({
//   title: 'studio',
//   projectId: 'gjsw9ksp',
//   dataset: 'production',
//   plugins: [
//     deskTool({
//       structure: deskStructure,
//     }),
//     visionTool,
//   ],
//   schema: {
//     types: schemas,
//   },
// })

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
// import {schemaTypes} from './schemaTypes'
import {deskTool} from 'sanity/desk'
import schemas from './schemas/schema'
import {deskStructure} from './src/structure/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'studio',

  projectId: 'gjsw9ksp',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure,
      // defaultDocumentNode,
    }),
    // structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemas,
  },
})
