// 1.6
// import React, { useState } from "react";

// const App = () => {
//   const [good, isGood] = useState(0);
//   const [neutral, isNeutral] = useState(0);
//   const [bad, isBad] = useState(0);

//   return (
//     <div>
//       <h1>Feedback pls </h1>

//       <br />

//       <button onClick={() => isGood(good + 1)}>Goood</button>

//       <button onClick={() => isNeutral(neutral + 1)}>Neutral</button>

//       <button onClick={() => isBad(bad + 1)}>Badd Bunny</button>
//       <br />
//       <br />
//       <br />
//       <h1>Stats</h1>
//       <br />
//       <br />
//       <br />
//       <h3>Goood: {good}</h3>
//       <h3>Neutral: {neutral}</h3>
//       <h3>Bad Bunny: {bad}</h3>
//     </div>
//   );
// };

// 1.7
// import React, { useState } from "react";

// const App = () => {
//   const [good, isGood] = useState(0);
//   const [neutral, isNeutral] = useState(0);
//   const [bad, isBad] = useState(0);

//   return (
//     <div>
//       <h1>Feedback pls</h1>

//       <br />

//       <button onClick={() => isGood(good + 1)}>Goood</button>

//       <button onClick={() => isNeutral(neutral + 1)}>Neutral</button>

//       <button onClick={() => isBad(bad + 1)}>Bad Bunny</button>

//       <br />

//       <h1>Stats</h1>

//       <br />

//       <h3>Good: {good}</h3>
//       <h3>Neutral: {neutral}</h3>
//       <h3>Bad Bunny: {bad}</h3>
//       <h3>All: {good + neutral + bad}</h3>
//       <h3>Avg: {(good - bad) / (good + neutral + bad)}</h3>
//       <h3>Pos: {(good + neutral) / (good + neutral + bad)}</h3>
//     </div>
//   );
// };

//1.8
// import React, { useState } from "react";

// const Statistics = (props) => {
//   return (
//     <div>
//       <h3>Good: {props.good}</h3>
//       <h3>Neutral: {props.neutral}</h3>
//       <h3>Bad Bunny: {props.bad}</h3>
//       <h3>All: {props.All}</h3>
//       <h3>Avg: {props.average}</h3>
//       <h3>Pos: {props.positive}</h3>
//     </div>
//   );
// };

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   return (
//     <div>
//       <h1>Feedback pls</h1>

//       <br />

//       <button onClick={() => setGood(good + 1)}>Good</button>

//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>

//       <button onClick={() => setBad(bad + 1)}>Bad Bunny</button>

//       <br />

//       <h1>Stats</h1>

//       <br />

//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         All={good + neutral + bad}
//         average={(good - bad) / (good + neutral + bad)}
//         positive={(good + neutral) / (good + neutral + bad)}
//       />
//     </div>
//   );
// };

// 1.9
// import React, { useState } from "react";

// const Statistics = (props) => {
//   if (props.All === 0) {
//     return (
//       <div>
//         <h1>Feedback none</h1>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h3>Good: {props.good}</h3>
//       <h3>Neutral: {props.neutral}</h3>
//       <h3>Bad Bunny: {props.bad}</h3>
//       <h3>All: {props.All}</h3>
//       <h3>Avg: {props.average}</h3>
//       <h3>Pos: {props.positive}</h3>
//     </div>
//   );
// };

// const App = () => {
//   const [good, setGood] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);

//   return (
//     <div>
//       <h1>Feedback pls bby</h1>

//       <br />

//       <button onClick={() => setGood(good + 1)}>Good</button>

//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>

//       <button onClick={() => setBad(bad + 1)}>Bad Bunny</button>

//       <br />

//       <h1>Stats</h1>

//       <br />

//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         All={good + neutral + bad}
//         average={(good - bad) / (good + neutral + bad)}
//         positive={(good + neutral) / (good + neutral + bad)}
//       />
//     </div>
//   );
// };

// 1.10
// import React, { useState } from "react";
// const Statistics = ({ neutral, good, bad }) => {
//   let all = neutral + good + bad;
//   let avg = (good - bad) / all;
//   let pos = (good + neutral) / (neutral + good + bad);

//   if (all === 0) return <div>aw no fdbck</div>;
//   else
//     return (
//       <div>
//         <table>
//           <tbody>
//             <StatisticLine text="neutral" value={neutral} />
//             <StatisticLine text="good" value={good} />
//             <StatisticLine text="bad" value={bad} />
//             <StatisticLine text="all" value={all} />
//             <StatisticLine text="pos" value={pos} />
//             <StatisticLine text="avg" value={avg} />
//           </tbody>
//         </table>
//       </div>
//     );
// };

// let StatisticLine = ({ text, value }) => {
//   return (
//     <tr>
//       <td>{text}</td>
//       <td>{value}</td>
//     </tr>
//   );
// };

// let Button = ({ text, clicked }) => {
//   return <button onClick={clicked}> {text} </button>;
// };

// const App = () => {
//   const [neutral, setNeutral] = useState(0);
//   const [good, setGood] = useState(0);
//   const [bad, setBad] = useState(0);

//   return (
//     <div>
//       <h2>Please leave feedbacks here!</h2>
//       <Button text="neutral" clicked={() => setNeutral(neutral + 1)} />
//       <Button text="good" clicked={() => setGood(good + 1)} />
//       <Button text="bad" clicked={() => setBad(bad + 1)} />
//       <h2>statistics</h2>
//       <Statistics neutral={neutral} good={good} bad={bad} />
//     </div>
//   );
// };

// 1.11
// import React, { useState } from "react";
// const Statistics = ({ neutral, good, bad }) => {
//   let all = neutral + good + bad;
//   let avg = (good - bad) / all;
//   let pos = (good + neutral) / (neutral + good + bad);

//   if (all === 0) return <div>Fdbck none </div>;
//   else
//     return (
//       <div>
//         <table>
//           <body>
//             <StatisticLine text="neutral" value={neutral} />
//             <StatisticLine text="good" value={good} />
//             <StatisticLine text="bad" value={bad} />
//             <StatisticLine text="all" value={all} />
//             <StatisticLine text="avg" value={avg} />
//             <StatisticLine text="pos" value={pos} />
//           </body>
//         </table>
//       </div>
//     );
// };

// let StatisticLine = ({ text, value }) => {
//   return (
//     <tr>
//       <td>{text}</td>
//       <td>{value}</td>
//     </tr>
//   );
// };

// const App = () => {
//   const [neutral, setNeutral] = useState(0);
//   const [good, setGood] = useState(0);
//   const [bad, setBad] = useState(0);

//   let Button = ({ text, clicked }) => {
//     return <button onClick={clicked}> {text} </button>;
//   };

//   return (
//     <div>
//       <h2>Feedback pls bby</h2>
//       <Button text="neutral" clicked={() => setNeutral(neutral + 1)} />
//       <Button text="good" clicked={() => setGood(good + 1)} />
//       <Button text="bad" clicked={() => setBad(bad + 1)} />

//       <h2>statistics</h2>
//       <Statistics neutral={neutral} good={good} bad={bad} />
//     </div>
//   );
// };

// 1.12;
// import React, { useState } from "react";

// const App = () => {
//   const [index, setIndex] = useState(0);

//   const anecdotes = [
//     "If it hurts, do it more often",
//     "Adding manpower to a late software project makes it later!",
//     "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil.",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
//   ];

//   const handleChange = () => {
//     setIndex(Math.floor(Math.random() * anecdotes.length));
//   };

//   return (
//     <div>
//       <button onClick={handleChange}>clicky pls</button>
// <h1>{anecdotes[index]}</h1>
//     </div>
//   );
// };

// 1.13
// import React, { useState } from "react";

// const App = () => {
//   const [index, setIndex] = useState(0);
//   const [vote, setVote] = useState([0, 0, 0, 0, 0, 0]);

//   const anecdotes = [
//     "If it hurts, do it more often",
//     "Adding manpower to a late software project makes it later!",
//     "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil.",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
//   ];

//   const handleChange = () => {
//     setIndex(Math.floor(Math.random() * anecdotes.length));
//   };

//   const voteChange = () => {
//     let copy = [...vote];

//     copy[index]++;

//     setVote(copy);
//   };

//   return (
//     <div>
//       <button onClick={handleChange}>next anecd</button>

//       <br />
//       <br />
//       <br />

//       <button onClick={voteChange}>Vote for pedro</button>

//       <h1>{anecdotes[index]}</h1>
//       <h1>Has {vote[index]} Votes for pedro</h1>
//     </div>
//   );
// };

// 1.14
// import React, { useState } from "react";

// const App = () => {
//   const [index, setIndex] = useState(0);
//   const [vote, setVote] = useState({
//     0: 0,
//     1: 0,
//     2: 0,
//     3: 5,
//     4: 0,
//     5: 0,
//   });

//   const anecdotes = [
//     "If it hurts, do it more often",
//     "Adding manpower to a late software project makes it later!",
//     "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
//     "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
//     "Premature optimization is the root of all evil.",
//     "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
//     "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
//   ];

//   const handleChange = () => {
//     setIndex(Math.floor(Math.random() * anecdotes.length));
//   };

//   const voteChange = () => {
//     setVote({
//       ...vote,
//       [index]: vote[index] + 1,
//     });
//   };

//   const findMax = () => {
//     let max = -1,
//       maxKey = -1;

//     for (let key in vote) {
//       if (vote[key] > max) {
//         maxKey = key;
//         max = vote[key];
//       }
//     }
//     return maxKey;
//   };

//   return (
//     <div>
//       <h1>Anecdote of the Dizzay</h1>

//       <button onClick={handleChange}>Next pedrodote</button>

//       <br />
//       <br />

//       <button onClick={voteChange}>Vote for pedro</button>

//       <h2>{anecdotes[index]}</h2>
//       <h3>Has {vote[index]} Votes for pedro</h3>

//       <br />

//       <h1>Pedrodote with most Votes</h1>
//       <h3>{anecdotes[findMax()]}</h3>
//     </div>
//   );
// };

export default App;
