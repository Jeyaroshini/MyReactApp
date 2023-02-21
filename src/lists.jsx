function Lists() {
  const list = [
    { name: "Roshini", Rollno: "19IT07" },
    { name: "Madhu", Rollno: "19IT08" },
    { Name: "Jeyasree", Rollno: "19IT09" },
  ];
  return (
    <div>
      <h1>List in Reactjs</h1>
      {list.map((item) => (
        <List info={item.name} info1={item.Rollno} />
      ))}
    </div>
  );
}
function List(props) {
  return (
    <li>
      My name is {props.info}
      Rollno is {props.info1}
    </li>
  );
}
export default Lists;
