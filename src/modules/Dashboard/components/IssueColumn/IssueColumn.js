import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import IssueElement from 'modules/Dashboard/components/IssueElement';
import './IssueColumn.scss';

const IssueColumn = ({ columnId, issueList, title }) => (
    <div className="issue-column__container">
        <div className="issue-column__header">{title}</div>
        <Droppable droppableId={columnId}>
            {(provided) => (
                <div
                    {...provided.droppableProps}
                    className="issue-column__content"
                    ref={provided.innerRef}
                >
                    {issueList.map((issue) => (
                        <IssueElement
                            {...issue}
                            key={issue.id}
                            id={columnId + '-' + issue.id}
                            index={issue.id}
                        />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    </div>
);

IssueColumn.propTypes = {
    columnId: PropTypes.string.isRequired,
    issueList: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
};

export default IssueColumn;
