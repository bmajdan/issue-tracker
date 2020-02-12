import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Button from 'common/components/Button';
import DashboardHeader from 'modules/Dashboard/components/DashboardHeader';
import IssueColumn from 'modules/Dashboard/components/IssueColumn';
import { MdAdd } from 'react-icons/md';
import './Dashboard.scss';

const Dashboard = () => {
    const [dashboard, setDashboard] = useState({
        open: [],
        pending: [],
        close: [],
    });

    const updateDashboard = ({ source, destination }) => {
        if (source.droppableId === destination.droppableId) {
            const array = dashboard[source.droppableId];

            [array[source.index], array[destination.index]] = [
                array[destination.index],
                array[source.index],
            ];

            setDashboard({ ...dashboard, [source.droppableId]: array });

            return;
        }

        dashboard[destination.droppableId].splice(
            destination.index,
            0,
            dashboard[source.droppableId][source.index]
        );

        setDashboard({
            ...dashboard,
            [source.droppableId]: dashboard[source.droppableId].filter(
                (element) => element.id !== source.index
            ),
        });
    };

    const addIssue = () => {
        setDashboard({
            ...dashboard,
            open: [
                ...dashboard.open,
                {
                    id: dashboard.open.length,
                    title: 'New Isue',
                    description: 'Description',
                },
            ],
        });
    };

    return (
        <div className="dashboard__container">
            <DashboardHeader />
            <Button onClick={addIssue} icon={<MdAdd />} text="New Issue" />
            <div className="issue-board__container">
                <DragDropContext onDragEnd={updateDashboard}>
                    <IssueColumn title="open" columnId={'open'} issueList={dashboard.open} />
                    <IssueColumn
                        title="Pending"
                        columnId={'pending'}
                        issueList={dashboard.pending}
                    />
                    <IssueColumn title="Close" columnId={'close'} issueList={dashboard.close} />
                </DragDropContext>
            </div>
        </div>
    );
};

export default Dashboard;
