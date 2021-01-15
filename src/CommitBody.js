import React from 'react';

const CommitBody = (props) => {
    const { commit } = props;
    return (
        <tr>
            <td>
                <div>
                    {commit.message}
                </div>
                <div>
                    {commit.author.name}
                </div>
            </td>
        </tr>
    )
}
export default CommitBody;