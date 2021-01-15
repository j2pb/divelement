import React, { useState, useEffect } from 'react';

import { historyService } from './_services'
import CommitBody from './CommitBody'

const App = (props) => {

  const [commits, setcommits] = useState([])

  useEffect(() => {
    const getCommits = async () => {
      var commits = await historyService.getCommits()
      setcommits(commits)
    }
    getCommits();
  }, []);

  const rendercommits = (commits) => {
    return commits.map((commit) => <CommitBody key={commit.node_id} commit={commit.commit} />)
  }
  return (
    <table>
      <tbody>
        {rendercommits(commits)}
      </tbody>
    </table>
  )
}
export default App;