import React from 'react';
import { GithubOutlined, SelectOutlined } from '@ant-design/icons';
import { Card, Tooltip } from 'antd';
const { Meta } = Card;

const ProjectCard = ({ img, name, description, liveLink, gitClient, gitServer }) => {
    return (
        <Card
            className='hover:transform hover:scale-105 duration-500 w-80 md:w-96'
            cover={
                <img
                    alt="example"
                    src={img}
                />
            }
            actions={[
                <Tooltip title="Live Site">
                    <a target="_blank" rel="noopener noreferrer" href={liveLink}><SelectOutlined /></a>
                </Tooltip>,
                <Tooltip title="Client repository">
                    <a target="_blank" rel="noopener noreferrer" href={gitClient}><GithubOutlined /></a>
                </Tooltip>,
                <Tooltip title="Server repository">
                    <a target="_blank" rel="noopener noreferrer" href={gitServer}><GithubOutlined /></a>
                </Tooltip>
            ]}
        >
            <Meta
                title={name}
                description={description}
            />
        </Card>
    );
};

export default ProjectCard;