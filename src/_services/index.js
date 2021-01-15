import axios from 'axios'
import config from '../config'

function getCommits(branch) {
    return axios.get(`${config.baseUrl}repos/${config.owner}/${config.projectName}/commits?sha=${branch}`, config.additionalConfig).then(({ data }) => {
        return data
    }).catch(err => {
        console.log(err)
    })
}
function getBranches() {
    return axios.get(`${config.baseUrl}repos/${config.owner}/${config.projectName}/branches`, config.additionalConfig).then(({ data }) => {
        return data
    }).catch(err => {
        console.log(err)
    })
}
export const historyService = {
    getCommits,
    getBranches
};
