import { useDispatch, useSelector } from "react-redux";

// protected content which needs authentification
import React, { useEffect } from "react";
import {
  selectError,
  selectIsLoading,
  selectParents,

} from "../redux/parents/parents-selectors";
import { getAllParents } from "../redux/parents/parents-operations";

export const AuthContent = () => {
  const dispatch = useDispatch();
  const items = useSelector(selectParents);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllParents());
  }, [dispatch]);

  return (
    <div>
      {isLoading && <p>Parents is loading...</p>}
      {error && <p>{error}</p>}

      {items.length > 0 ? (
        items.map(({ name, email, id }) => (
          <li key={id}>
            <p>
              Name: {name}, email: {email}
            </p>
          </li>
        ))
      ) : (
        <p>No parents yet</p>
      )}
    </div>
  );
};
