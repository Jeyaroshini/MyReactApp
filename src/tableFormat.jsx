function TableFormat() {
    const [TaskData, setTaskData] = useState('');
    
    const tableRows = TaskData.map((info) => {
      return (
        <tr>
          <td>{info.task}</td>
        </tr>
      );
    });
    
    const addRows = (data) => {
      const updatedTaskData = [...TaskData];
      updatedTaskData.push(data);
      setTaskData(updatedTaskData);
    };
    
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
        
      </div>
    );
  }
    
  export default TableFormat;