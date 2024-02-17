import { Form, Field, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, FormGroup, Label } from 'reactstrap';
import { validateCommentForm } from '../../utils/validateCommentForm';
import { useDispatch } from 'react-redux';
import  {addComment} from './CommentsSlice'

const CommentForm = ({ campsiteId }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.commentText,
            date: new Date(Date.now()).toISOString()
        };

        console.log(comment);
        dispatch(addComment(comment));
        setModalOpen(false);
    };

    return (
        <>
            <Button outline onClick={() => setModalOpen(true)}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={() => setModalOpen(false)}>
                    Add Comment
                </ModalHeader>
                <Formik
                    initialValues={{
                        rating: undefined,
                        author: '',
                        commentText: ''
                    }}
                    onSubmit={handleSubmit}
                    validate={validateCommentForm}
                >
                    <Form>
                        <FormGroup style={{ padding: '5px' }}>
                            <Label htmlFor='rating'>Rating</Label>
                            <Field
                                name='rating'
                                as='select'
                                className='form-control'
                            >
                                <option>Select...</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Field>
                            <ErrorMessage name='rating'>
                                {(msg) => (
                                    <p className='text-danger'>{msg}</p>
                                )}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup style={{ padding: '5px' }}>
                            <Label htmlFor='author'>Your Name</Label>
                            <Field
                                name='author'
                                placeholder='Your name'
                                className='form-control'
                            />
                            <ErrorMessage name='author'>
                                {(msg) => (
                                    <p className='text-danger'>{msg}</p>
                                )}
                            </ErrorMessage>
                        </FormGroup>
                        <FormGroup style={{ padding: '5px' }}>
                            <Label htmlFor='commentText'>Comment</Label>
                            <Field
                                name='commentText'
                                as='textarea'
                                rows='12'
                                className='form-control'
                            />
                        </FormGroup>
                        <Button type='submit' color='primary' style={{marginBottom: '15px', marginLeft:'10px'}}>
                            Submit
                        </Button>
                    </Form>
                </Formik>
            </Modal>
        </>
    );
};

export default CommentForm;