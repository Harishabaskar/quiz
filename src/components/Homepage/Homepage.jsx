import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <div className="card">
        <form action="#">
          <div className="amount">
            <label htmlFor="amount">Amount : </label>
            <select name="amount" id="amount">
              <option value="select the no of questions">
                Select the no of questions
              </option>
              <option value="5">05</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="category">
            <label htmlFor="category">Category : </label>
            <select name="category" id="category">
              <option value="select the category">Select the category</option>
              <option value="9">General Knowledge</option>
              <option value="21">Sports</option>
              <option value="22">Geography</option>
              <option value="23">History</option>
            </select>
          </div>
          <div className="difficulty">
            <label htmlFor="difficulty">Difficulty : </label>
            <select name="difficulty" id="diff">
              <option value="select the difficulty level">
                Select the difficulty level
              </option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="difficult">Difficult</option>
            </select>
          </div>
        </form>
        <div className="button-div">
          <button>Start the quiz</button>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
