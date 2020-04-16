import React from 'react';

const AddQuestion = () => {
  return (
    <div
      className="card p-5 mx-auto"
      style={{ width: '65vw', minWidth: '320px', maxWidth: '768px' }}
    >
      <h2 className="mb-5">Create New Question</h2>
      <p>
        <strong>Complete the question:</strong>
      </p>
      <h3 className="text-center mt-3">Would you rather...</h3>
      <form>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Option 1</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Option One Text Here"
            required
          />
        </div>

        <h3 className="text-center">or ...</h3>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Option 2</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Option Two Text Here"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;
