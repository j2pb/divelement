import React from 'react';
import CommitBody from './CommitBody'
import Table from 'react-bootstrap/Table'

const App = (props) => {

  const rendercommits = (commits) => {
    return commits.map((commit) => <CommitBody key={commit.node_id} commit={commit} />)
  }
  return (
    <div className="col mt-4">
      <Table bordered hover className="table-light">
        <tbody>
          {rendercommits(props.commits)}
        </tbody>
      </Table>
    </div>
  )
}
export default App;