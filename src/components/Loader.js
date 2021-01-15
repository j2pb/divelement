import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
const Loader = (props) => {
    return (
        <div>

            <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            <span className="sr-only">Loading...</span>
        </div>
    )
}
export default Loader;