import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import './IssueElement.scss';

const IssueElement = ({ title, description, id, index }) => (
    <Draggable draggableId={id} index={index}>
        {(provided) => (
            <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                className="issue-element__container"
            >
                <div className="issue-element__title">
                    <h5>Title: </h5>
                    {title}
                </div>
                <div className="issue-element__description">
                    <h5>Description: </h5>
                    {description}
                </div>

                {provided.placeholder}
            </div>
        )}
    </Draggable>
);

IssueElement.defaultProps = {
    description: '',
};

IssueElement.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default IssueElement;
