import React from 'react';
import { Spinner } from 'reactstrap';

import "./loader.css";

/**
 * Renders the preloader
 */
const Loader = () => {
    return (
        <div className="preloader">
            <div className="status">
                <Spinner color={"secondary"} />
            </div>
        </div>
    );
};

export default Loader;
