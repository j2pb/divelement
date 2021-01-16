import React from 'react';
import moment from 'moment'

const CommitBody = (props) => {
    const { commit } = props;
    const creationDate = (date) => {
        var startOf = moment().isSame(date, 'day') ? "hour" : "day";
        var formatedDate = `committed ${moment(date).startOf(startOf).fromNow()}`;
        return formatedDate
    }
    return (
        <tr>
            <td>
                <a href={commit.html_url} target="_blank" rel="noreferrer" className="h4">
                    {commit.commit.message}
                </a>
                <div className="text-muted">
                    #{commit.commit.tree.sha.substring(0, 7)}&nbsp;
                    {creationDate(commit.commit.author.date)}&nbsp;
                        by {commit.commit.author.name}

                </div>
            </td>
        </tr>
    )
}
export default CommitBody;