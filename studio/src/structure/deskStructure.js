// Structure Builder Reference LINK: https://www.sanity.io/docs/structure-builder-reference
import {FiEdit} from 'react-icons/fi'
import {MdBook, MdDirectionsBike, MdTrendingUp} from 'react-icons/md'
// import Iframe from "sanity-plugin-iframe-pane";
// import {
//   defaultDocumentNodeTypes,
//   filteredDocuments,
//   singleton,
// } from "../helpers";
// import resolveProductionUrl from "../parts/resolveProductionUrl";
// import SEOPreview from "../views/SEOPreview";
// import productsListItem from "./products";

// export const getDefaultDocumentNode = ({ schemaType }) => {
//   if (defaultDocumentNodeTypes.includes(schemaType)) {
//     return S.document().views([
//       S.view.form(),
//       S.view
//         .component(Iframe)
//         .title("Web Preview")
//         .icon(MdWeb)
//         .options({
//           url: (doc) => resolveProductionUrl(doc),
//         }),
//       S.view.component(SEOPreview).title("SEO Preview").icon(FiGlobe),
//     ]);
//   }
// };

export const deskStructure = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Activities App')
        .icon(MdDirectionsBike)
        .child(
          S.list()
            .title('Activities App')
            .items([
              S.documentTypeListItem('activity').title('Activities').icon(FiEdit),
              S.documentTypeListItem('neighborhood').title('Neighborhoods').icon(FiEdit),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Blog Content')
        .icon(MdDirectionsBike)
        .child(
          S.list()
            .title('Blog Posts')
            .items([S.documentTypeListItem('blogPost').title('Blog Posts').icon(FiEdit)]),
        ),
      S.divider(),
      S.listItem()
        .title('Budget App')
        .icon(MdTrendingUp)
        .child(
          S.list()
            .title('Budget App')
            .items([
              S.documentTypeListItem('balance').title('Current Balances'),
              S.divider(),
              S.documentTypeListItem('firstPaycheck').title('Paycheck Budgets'),
              S.documentTypeListItem('monthlyBudget').title('Monthly Budgets'),
              S.documentTypeListItem('archerUtilities').title('Average Utility Bills'),
              S.divider(),
              S.documentTypeListItem('debt').title('List of Debts'),
              S.documentTypeListItem('debtCollector').title('Debt Collection Companies'),
              S.divider(),
              S.documentTypeListItem('expense').title('All Bills...'),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Book of Shadows App')
        .icon(MdBook)
        .child(
          S.list()
            .title('Book of Shadows App')
            .items([
              S.documentTypeListItem('spell').title('Spells').icon(FiEdit),
              S.documentTypeListItem('personalHoliday').title('Personal Holidays').icon(FiEdit),
              S.documentTypeListItem('goal').title('Goals, Intentions, Manifestations'),
            ]),
        ),
      S.divider(),
      S.documentTypeListItem('color').title('Color App'),
      S.divider(),
      S.documentTypeListItem('person').title('People'),
      S.divider(),
      S.documentTypeListItem('numbers').title('Numbers'),
      S.divider(),
      S.documentTypeListItem('topic').title('Topics'),
      // S.documentTypeListItem("organization").title("Organizations"),
      // S.documentTypeListItem("place").title("Places"),
      // S.documentTypeListItem("dealer").title("Dealers"),
      // S.documentTypeListItem("category").title("Categories"),
      S.divider(),
      // S.documentTypeListItem("comment").title("Comments"),
      // ...S.documentTypeListItems().filter(filteredDocuments),
    ])
