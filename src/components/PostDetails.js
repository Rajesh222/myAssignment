import React from 'react'
import {Card} from 'react-bootstrap'
import data from '../data/virginia-beach-oceanfront-hotels.json';

const PostDetails = (props) => {
    return (
        <div>
           <Card>
            <Card.Img variant="top" src={data.thumbnail_url} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.content[0].text}
                </Card.Text>
            </Card.Body>
            </Card> 
        </div>
    )
}

export default PostDetails
