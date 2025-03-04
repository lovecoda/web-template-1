//////////////////////////////////////////////////////////////////////
// Configurations related to search                                 //
// Note: some search experience is also on defaultMapsConfig        //
// and defaultListingConfig.js is responsible public data filtering //
//////////////////////////////////////////////////////////////////////

// NOTE: if you want to change the structure of the data,
// you should also check src/util/configHelpers.js
// some validation is added there.

// Main search used in Topbar.
// This can be either 'keywords' or 'location'.
export const mainSearch = {
  searchType: 'keywords',
};

/**
 * Configuration for default filters.
 * These are custom configs for each filter.
 * Common properties: key, schemaType, and label.
 * Note: the order of default filters is defined in util/configHelpers.js
 */

export const dateRangeFilter = {
  schemaType: 'dates',
  // Should the entire date range be available, or just part of it
  // Note: Since we don't enforce location search for dates filtering,
  //       we don't use API's 'time-full' in actual queries. It would require time zone info.
  availability: 'time-full', // time-partial
  // Options: day/night. This affects counting and whether single day picking is possible.
  dateRangeMode: 'day',
};


export const priceFilter = {
  schemaType: 'price',
  // Note: unlike most prices this is not handled in subunits
  min: 0,
  max: 1000,
  step: 5,
};
// // This is not in use by default.
// // Needs more thinking how it should work together with main search.
// export const keywordsFilter = {
//   schemaType: 'text',
// }

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Marketplace API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Relevance key is used with keywords filter.
  // Keywords filter also sorts results according to relevance.
  relevanceFilter: 'keywords',

  // Keyword filter is sorting the results by relevance.
  // If keyword filter is active, one might want to disable other sorting options
  // by adding 'keywords' to this list.
  conflictingFilters: [],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
