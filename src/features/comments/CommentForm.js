import { Form, Field, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { Button, Modal ,ModalBody, ModalHeader, FormGroup, Label } from 'reactstrap';
import { validateCommentForm } from '../../utils/validateCommentForm';
import { useDispatch } from 'react-redux';
import  {addComment} from './CommentsSlice'




const CommentForm = ({campsiteId})=>{
    const [modalOpen, setModelOpen] = useState(false);
    const dispatch = useDispatch();
    const handleSubmit = (values)=>{
        const comment = {
            campsiteId: parseInt(campsiteId),
            rating: values.rating,
            author: values.author,
            text: values.text,
            date: new Date(Date.now()).toISOString()
        }
        console.log(comment);
        setModelOpen(false);
        dispatch(addComment(comment));
    }

    return(
        <>
            <Button outline='true' onClick={()=>{setModelOpen(true)}}>
                <i className='fa fa-pencil fa-lg' /> Add Comment
            </Button>
            <Modal isOpen={modalOpen}>
                <ModalHeader toggle={()=>{setModelOpen(false)}}>
                    Add Comment
                </ModalHeader>
                <ModalBody>
                    <Formik initialValues={
                        {
                            rating : undefined,
                            author : '',
                            text : ''
                        }
                    }
                            onSubmit={handleSubmit}
                            validate={validateCommentForm}>
                        <Form>
                            <FormGroup>
                                <Label htmlFor='rating'>
                                    Rating
                                </Label>
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
                                    {(msg)=><p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='author'>
                                    Author
                                </Label>
                                <Field
                                    name='author'
                                    placeholder='Your Name'
                                    className='form-control'
                                />
                                <ErrorMessage name='author'>
                                    {(msg)=><p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='text'>
                                    Comment
                                </Label>
                                <Field
                                    name='commentText'
                                    as='textarea'
                                    rows='12'
                                    className='form-control'
                                />
                                <ErrorMessage name='text'>
                                    {(msg)=><p className='text-danger'>{msg}</p>}
                                </ErrorMessage>
                            </FormGroup>
                            <Button type='submit' color='primary'>
                                Submit
                            </Button>
                                </Form>
                            </Formik>
                        </ModalBody>
                    </Modal>
                </>
            )


}

export default CommentForm;