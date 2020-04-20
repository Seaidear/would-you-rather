import React from 'react';
import Card from '../layout/shared/Card';
export function PollCardVote({
  users,
  question,
  saveAnswer,
  user,
  selectedAnswer,
  setSelectedAnswer,
}) {
  return (
    <Card
      headerText={`${users[question.author].name} asks:`}
      imageURL={users[question.author].avatarURL}
    >
      <div className="col-md-9">
        <div className="card-body p-3">
          <h4 className="text-left mb-3">Would you rather...</h4>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              saveAnswer({
                authedUser: user,
                qid: question.id,
                answer: selectedAnswer,
              });
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="optionOne"
                checked={selectedAnswer === 'optionOne'}
                onChange={(e) => {
                  setSelectedAnswer(e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                {question.optionOne.text}
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios2"
                value="optionTwo"
                checked={selectedAnswer === 'optionTwo'}
                onChange={(e) => {
                  setSelectedAnswer(e.target.value);
                }}
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
                {question.optionTwo.text}
              </label>
            </div>
            <input
              type="submit"
              value="Submit Your Answer"
              className="btn btn-primary btn-block mt-3"
            />
          </form>
        </div>
      </div>
    </Card>
  );
}
