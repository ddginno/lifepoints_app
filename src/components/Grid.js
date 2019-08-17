import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr 100px;
  grid-template-columns: 25% 25% 25% 25%;
`;

export default Grid;

const name = "David";

if (name === "David") {
  console.log("Hi ich bin" + name);
} else {
  console.log("No Name");
}

const error = true;

name === "David"
  ? console.log("Hi ich bin" + name)
  : name === "Kevin"
  ? console.log("Hi ich bin" + name)
  : console.log("No Name");
/*ist der name david, dann schreibe hi david sonst schreibe wenn der name kevin ist hi Kevin ansonsten schreibe no name*/

name === "David" ||
  ("Kevin" &&
    console.log(
      "Hi ich bin" + name
    )); /* ist name gleich david oder kevin dann zeige hi ich bin*/

name !== "David" ||
  ("Kevin" &&
    console.log(
      "Hi ich bin" + name
    )); /* ist name nicht gleich david oder kevin dann zeige hi ich bin*/

return;
{
  error && <div>Error</div>;
}
