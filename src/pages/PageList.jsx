import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "delete":
      return state.filter((item)=>item.id !== action.payload);
  }
};

export default function PageList() {
  const [state, dispatch] = useReducer(reducer, [
    { id: 1, first: "Mark", last: "Otto", email: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", email: "@fat" },
    { id: 3, first: "John", last: "Doe", email: "@social" },
  ]);

  return (
    <>

      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {state.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.first}</td>
              <td>{user.last}</td>
              <td>{user.email}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={()=>dispatch({ type: "delete", payload: user.id })}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
