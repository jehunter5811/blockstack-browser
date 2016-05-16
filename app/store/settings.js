const UPDATE_API = 'UPDATE_API'

function updateApi(api) {
  return {
    type: UPDATE_API,
    api: api
  }
}

function resetApi() {
  return dispatch => {
    const DEFAULT_API = {
      apiCustomizationEnabled: true,
      nameLookupUrl: 'https://api.onename.com/v1/users/{name}',
      searchUrl: 'https://api.onename.com/v1/search?query={query}',
      registerUrl: 'https://api.onename.com/v1/users',
      addressLookupUrl: 'https://api.onename.com/v1/addresses/{address}/names',
      hostedDataLocation: 'blockstack-labs-S3',
      s3ApiKey: '',
      s3ApiSecret: '',
      s3Bucket: ''
    }
    dispatch(updateApi(DEFAULT_API))
  }
}

export const SettingsActions = {
  updateApi: updateApi,
  resetApi: resetApi
}

const initialState = {
  api: {
    apiCustomizationEnabled: true,
    nameLookupUrl: 'https://api.onename.com/v1/users/{name}',
    searchUrl: 'https://api.onename.com/v1/search?query={query}',
    registerUrl: 'https://api.onename.com/v1/users',
    addressLookupUrl: 'https://api.onename.com/v1/addresses/{address}/names',
    hostedDataLocation: 'blockstack-labs-S3',
    s3ApiKey: '',
    s3ApiSecret: '',
    s3Bucket: ''
  }
}

export function SettingsReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_API:
      return Object.assign({}, state, {
        api: action.api || {}
      })
    default:
      return state
  }
}