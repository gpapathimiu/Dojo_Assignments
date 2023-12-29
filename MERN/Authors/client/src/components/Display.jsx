import React from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Display(props) {
  const { id } = useParams();

  const { authors, setAuthors } = props;

  const handleViewAuthors = () => {
    axios
      .get(`http://localhost:8000/authors`)
      .then((res) => {
        setAuthors(res.data.authors);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleViewAuthors()
  }, []);

  const deleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/authors/${id}`)
      .then(() => {
        handleViewAuthors()
    })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Link to="/authors/new">Add an author</Link>
      {authors.length > 0 ? (
        <div>
          <h2>Authors</h2>
          {authors.map((author, index) => {
            const { name, currentUser } = author;
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <h2>{name}</h2>
                  <p>Added by: {currentUser}</p>
                </div>
                <div>
                  <h5>Available Actions</h5>
                  <Link to={`/authors/edit/${author._id}`}> Edit</Link>
                  <button onClick={() => deleteAuthor(author._id)}>
                    {" "}
                    Delete{" "}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No Authors For Now!</p>
      )}
    </div>
  );
}

export default Display;
