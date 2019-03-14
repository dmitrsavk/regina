export const actionTypes = {
  GET_ARTICLE: "ARTICLES/GET_ARTICLE",
  GET_ARTICLE_SUCCESS: "ARTICLES/GET_ARTICLE_SUCCESS",
  GET_ARTICLE_ERROR: "ARTICLES/GET_ARTICLE_ERROR"
};

export const actions = {
  getArticle: ({ alias }) => ({ type: actionTypes.GET_ARTICLE, alias }),
  getArticleSuccess: payload => ({
    type: actionTypes.GET_ARTICLE_SUCCESS,
    payload
  }),
  getArticleError: payload => ({
    type: actionTypes.GET_ARTICLE_ERROR,
    payload
  })
};
