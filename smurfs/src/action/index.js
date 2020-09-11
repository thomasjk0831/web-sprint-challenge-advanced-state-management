import axios from 'axios'

export const fetchSmurfs = () => {
    return (dispatch) => {
      dispatch({ type: 'FETCH_SMURFS' });
      axios
        .get("http://localhost:3333/smurfs")
        .then((response) => {
          dispatch({ type: 'FETCH_SUCCESS', payload: response.data});
        })
        .catch((error) => {
          
            console.log("error API", error)
          
        });
    };
  };

  export const postSmurfs = (obj) => {
    return (dispatch) => {
      dispatch({ type: 'POST_SMURFS' });
      axios
        .post("http://localhost:3333/smurfs", obj)
        .then((response) => {
          dispatch({ type: 'POST_SUCCESS', payload: response.data});
        })
        .catch((error) => {
          
            console.log("error API", error)
          
        });
    };
  };