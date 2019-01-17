import React from 'react'
import { Link } from 'gatsby'
import {Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'

const Post = ({ title, author, path, date, body }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>
                    <Link to={path}>
                        {title}
                    </Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> por{' '} <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>
                    {body}
                </CardText>
                <Link to={path} className="bton btn-outline-primary float-right">Ver más</Link>

            </CardBody>

        </Card>
    )
}

export default Post