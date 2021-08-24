import { Link } from 'react-router-dom';
import React from 'react';

const NotFoundPage = () => (
    <div>
        404! - Page does not exist <Link to="/"> Home </Link>
    </div>
);

export default NotFoundPage;
