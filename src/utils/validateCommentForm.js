
export const validateCommentForm= (values)=>{
    const errors={};
    if(!values.rating){
        errors.rating='Required';
    }
    if(values.author.length<2){
        errors.author = 'Must be at least 2 characters';
    }
    if(values.author.length>15){
        errors.author = 'Must be at 15 characters or less';
    }
    return errors;
}