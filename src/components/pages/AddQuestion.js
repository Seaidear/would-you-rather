import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageContainer from '../layout/PageContainer';

const AddQuestion = ({ addQuestion }) => {
  const [optionOneText, setOptionOneText] = useState('');
  const [optionTwoText, setOptionTwoText] = useState('');
  const [questionSubmitted, setQuestionSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    addQuestion({ optionOneText, optionTwoText });
    setQuestionSubmitted(true);
  };

  if (questionSubmitted) return <Redirect to="/" />;

  return (
    <PageContainer headerText="Add New Question">
      <p>
        <strong>Complete the question:</strong>
      </p>
      <h3 className="text-center mt-3">Would you rather...</h3>
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Option 1</span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Option One Text Here"
            value={optionOneText}
            onChange={(e) => setOptionOneText(e.target.value)}
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
            value={optionTwoText}
            onChange={(e) => setOptionTwoText(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </PageContainer>
  );
};

AddQuestion.propTypes = {
  addQuestion: PropTypes.func.isRequired,
};

export default AddQuestion;
