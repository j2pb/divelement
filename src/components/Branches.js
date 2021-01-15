import React, { useState, useEffect } from 'react';

import { historyService } from '../_services'
import History from './History'
import Loader from './Loader'

const Branches = (props) => {

    const [branches, setbranches] = useState([])
    const [commits, setcommits] = useState([])
    const [loadingBranches, setloadingBranches] = useState(true)
    const [loadingHistory, setloadingHistory] = useState(false)

    useEffect(() => {
        getBranches();
    }, []);

    const getBranches = async () => {
        var branches = await historyService.getBranches()
        setloadingBranches(false)
        setbranches(branches)
        getCommits(branches[0].name)
    }
    const renderbranches = (branches) => {
        return branches.map((branch, i) => <option key={branch.commit.sha} >{branch.name}</option>)
    }
    const getCommits = async (branchName) => {

        var commits = await historyService.getCommits(branchName)
        setcommits(commits)
    }
    return (
        <div>
            {!branches.length ? <Loader /> : <select className="form-control" onChange={(e) => getCommits(e.target.value)}>
                {renderbranches(branches)}
            </select>}

            {branches.length && loadingHistory ? <Loader /> : <History commits={commits} />}
        </div>

    )
}
export default Branches;