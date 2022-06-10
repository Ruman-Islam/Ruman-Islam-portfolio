import React from 'react';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Meta } = Card;

const ProjectCard = ({ project: { id, img, name, description } }) => {
    const navigate = useNavigate();

    return (
        <Card
            className='hover:transform hover:scale-105 duration-500 w-80 md:w-96'
            cover={
                <img
                    className='h-56'
                    alt="example"
                    src={img}
                />
            }
            actions={[
                <button
                    onClick={(() => navigate(`/project-detail/${id}`))}
                    className='text-xl flex ml-auto mr-3 text-sky-500'>
                    <span>read more</span>
                </button>
            ]}
        >
            <Meta
                title={name}
                description={description}
                className='h-32'
            />
        </Card>
    );
};

export default ProjectCard;