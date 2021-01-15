import React from 'react';
import CommitBody from './CommitBody'

const App = (props) => {

  const rendercommits = (commits) => {
    return commits.map((commit) => <CommitBody key={commit.node_id} commit={commit.commit} />)
  }
  return (
    <div>
      <table>
        <tbody>
          {rendercommits(props.commits)}
        </tbody>
      </table>
    </div>
  )
}
export default App;