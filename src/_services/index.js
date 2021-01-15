import axios from 'axios'
import config from '../config'

function getCommits() {
    return axios.get(`${config.baseUrl}repos/${config.owner}/${config.projectName}/commits`, config.additionalConfig).then(({ data }) => {
        return data
    }).catch(err => {
        console.log(err)
    })
}
export const historyService = {
    getCommits
};
