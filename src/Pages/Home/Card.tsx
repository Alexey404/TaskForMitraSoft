import { Card, ListGroup } from 'react-bootstrap'
import './Home.css'
import { useState } from 'react'
import { commentsType, postType } from '../../redux/reducers/postsReducer'

type propsType = {
  post: postType
}

export const CardComponent = ({ post }: propsType) => {
  const [isComents, setIsComents] = useState(false)
  return (
    <Card>
      <Card.Header>{post.author}</Card.Header>
      <Card.Header>{post.email}</Card.Header>
      <Card.Body>
        <Card.Title>{post.heading}</Card.Title>
        <Card.Text>{post.content}</Card.Text>
      </Card.Body>
      <ListGroup variant='flush'>
        {!isComents ? (
          <ListGroup.Item
            className='button-comments'
            onClick={() => setIsComents(prev => !prev)}
          >
            Показать комментарии
          </ListGroup.Item>
        ) : (
          <>
            <ListGroup.Item>
              {post.comments ? (
                post.comments?.map((comment: commentsType) => (
                  <div className='comment-block'>
                    <img
                      className='icon-placehold'
                      src='http://placehold.it/48x48/'
                    />
                    <div>
                      <div className='author-block'>
                        <div className='author-block-item'>
                          {comment.author}
                        </div>
                        <div className='author-block-item'>{comment.email}</div>
                      </div>
                      <div className='comment-content'>{comment.content}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className='no-comments'>Нет комментариев</div>
              )}
            </ListGroup.Item>
            <ListGroup.Item
              className='button-comments'
              onClick={() => setIsComents(prev => !prev)}
            >
              скрыть комментарии
            </ListGroup.Item>
          </>
        )}
      </ListGroup>
    </Card>
  )
}
