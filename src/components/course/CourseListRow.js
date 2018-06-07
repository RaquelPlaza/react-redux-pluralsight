import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
    return(
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/courses/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
        </tr>
    );
};

CourseListRow.PropTypes = {
    course : PropTypes.string.isRequired
}

export default CourseListRow;