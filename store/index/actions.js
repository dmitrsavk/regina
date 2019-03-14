export const actionTypes = {
  GET_ARTICLES: "INDEX/GET_ARTICLES",
  GET_ARTICLES_SUCCESS: "INDEX/GET_ARTICLES_SUCCESS",
  GET_ARTICLES_ERROR: "INDEX/GET_ARTICLES_ERROR"
};

export const actions = {
  getArticles: () => ({ type: actionTypes.GET_ARTICLES }),
  getArticlesSuccess: payload => ({
    type: actionTypes.GET_ARTICLES_SUCCESS,
    payload
  }),
  getArticlesError: payload => ({
    type: actionTypes.GET_ARTICLES_ERROR,
    payload
  })
};
