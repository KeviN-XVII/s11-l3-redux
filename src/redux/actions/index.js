export const FAV_JOBS = "FAV_JOBS";
export const REMOVE_FAV_JOBS = "REMOVE_FAV_JOBS";
export const GET_JOBS = "GET_JOBS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export const addFavoriteJobAction = (jobData) => ({
  type: FAV_JOBS,
  payload: jobData,
});
export const removeFavoriteJobAction = (jobDataid) => ({
  type: REMOVE_FAV_JOBS,
  payload: jobDataid,
});
export const setLoadingAction = (Loading) => ({
  type: SET_LOADING,
  payload: Loading,
});

export const setErrorAction = (error) => ({
  type: SET_ERROR,
  payload: error,
});

export const getJobsAction = (company) => {
  return (dispatch) => {
    // dispatch(setLoadingAction(true));
    fetch("https://strive-benchmark.herokuapp.com/api/jobs?company=" + company)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Error fetching jobs");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        dispatch(setLoadingAction(false));
      })
      .catch((error) => {
        dispatch(setErrorAction(error.message));
        dispatch(setLoadingAction(false));
        console.error("Error:", error);
      });
  };
};
