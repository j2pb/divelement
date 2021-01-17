import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown'

import { historyService } from '../_services'
import Loader from './Loader'

const Readme = (props) => {

    const [branches, setbranches] = useState([])
    const [readme, setreadme] = useState("")
    const [loadingBranches, setloadingBranches] = useState(true)
    const [loadingReadme, setloadingReadme] = useState(false)

    useEffect(() => {
        getBranches();
    }, []);

    const getBranches = async () => {
        var branches = await historyService.getBranches()
        setloadingBranches(false)
        setbranches(branches)
        getProjectReadme(branches[0].name)
    }
    const renderbranches = (branches) => {
        return branches.map((branch, i) => <option key={branch.commit.sha} >{branch.name}</option>)
    }
    const getProjectReadme = async (branchName) => {
        setloadingReadme(true)
        var readme = await historyService.getProjectReadme(branchName)
        setreadme(readme)
        setloadingReadme(false)
    }
    return (
        <div>
            {loadingBranches ? <Loader /> : <select className="form-control" onChange={(e) => getProjectReadme(e.target.value)}>
                {renderbranches(branches)}
            </select>}

            {readme.length && loadingReadme ? <Loader /> : <ReactMarkdown>{readme}</ReactMarkdown>}
        </div>

    )
}
export default Readme;