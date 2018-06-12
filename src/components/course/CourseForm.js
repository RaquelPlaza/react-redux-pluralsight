import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from "../common/SelectInput";

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
    return (
        <form action="">
            <h1>Manage course</h1>
            <TextInput
                name="title"
                label="Title"
                value={course.title}
                onChange={onChange}
                error={errors.title}
            />

            <SelectInput
                name="authorId"
                label="Author"
                value={course.authorId}
                defaultOption="Select author"
                options={allAuthors}
                onChange={onChange}
                error={errors.authorId}
            />

            <input type="submit"
                   disabled={loading}
                   value={loading ? 'Saving...' : 'Save'}
                   className="btn btn-primary"
                   onClick={onSave}
            />
        </form>
    );
}

export default CourseForm;