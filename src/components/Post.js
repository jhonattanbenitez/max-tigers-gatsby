import React from 'react'
import { Link } from 'gatsby'
import { Card, CardTitle, CardText, CardSubtitle, CardBody, Badge } from 'reactstrap'
import Img from 'gatsby-image'
import { slugify } from '../Util/utilityFunctions'

const Post = ({ title, author, slug, date, body, fluid, tags }) => {
    return (
        <Card>
            <Link to={slug}>
                <Img className="card-image-top" fluid={fluid} />
            </Link>
            <CardBody>
                <CardTitle>
                    <Link to={slug}>
                        {title}
                    </Link>
                </CardTitle>
                <CardSubtitle>
                    <span className="text-info">{date}</span> por{' '} <span className="text-info">{author}</span>
                </CardSubtitle>
                <CardText>
                    {body}
                </CardText>
                <ul className="post-tags">
                    {tags.map(tag => {
                             return (<li key={tag}>
                            <Link to={`/tag/${slugify(tag)}`}>
                                <Badge color="warning" className="text-uppercase">{tag}</Badge>
                            </Link>
                        </li>)
                    })}
                </ul>
                <Link to={slug} className="btn btn-outline-primary float-right">Ver más</Link>

            </CardBody>

        </Card>
    )
}

export default Post