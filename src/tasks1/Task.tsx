import React from 'react';

type TaskType = {
    data: DataType
}
type DataType = {
    title: string,
    tasks: DataTaskType[],
    students: string[]
}
type DataTaskType = {
    taskId: number
    title: string
    isDone: boolean
}
export const Task: React.FC<TaskType> = ({data}) => {
    return (
        <div>
            <h3>{data.title}</h3>
            <ul>
                {data.tasks.map(t => {
                    return (
                        <li key={t.taskId}><input type={"checkbox"} checked={t.isDone}/> {t.title} </li>
                    )
                })}
            </ul>
            <ul>
                {data.students.map((s, index) => {
                    return (
                        <li key={index}>{s}</li>
                    )
                })}
            </ul>
        </div>
    );
};

