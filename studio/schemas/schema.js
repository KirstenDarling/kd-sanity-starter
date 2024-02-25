// First, we must import the schema creator// Then import schema types from any plugins that might expose them

// We import object and document schemas
import activity from './activity'
import archerUtilities from './archerUtilities'
import balance from './balance'
import bill from './bill'
import blockContent from './blockContent'
import castMember from './castMember'
import color from './color'
import crewMember from './crewMember'
import debt from './debt'
import debtCollector from './debtCollector'
import firstPaycheck from './firstPaycheck'
import goal from './goal'
import monthlyBudget from './monthlyBudget'
import movie from './movie'
import neighborhood from './neighborhood'
import person from './person'
import personalHoliday from './personalHoliday'
import plotSummaries from './plotSummaries'
import plotSummary from './plotSummary'
import screening from './screening'
import spell from './spell'

// Then we give our schema to the builder and provide the result to Sanity
export default [
  // We name our schema
  // name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  // types: schemaTypes.concat([
  // The following are document types which will appear
  // in the studio.
  archerUtilities,
  movie,
  person,
  neighborhood,
  screening,
  activity,
  balance,
  bill,
  color,
  debt,
  debtCollector,
  firstPaycheck,
  monthlyBudget,
  goal,
  spell,
  personalHoliday,
  // When added to this list, object types can be used as
  // { type: 'typename' } in other document schemas
  blockContent,
  plotSummary,
  plotSummaries,
  castMember,
  crewMember,
]
