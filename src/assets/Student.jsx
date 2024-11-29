import propTypes from 'prop-types';
function Student(props){

    return(<div className="student">
    <h1>Name:{props.name}</h1>
    <h1>Age:{props.age}</h1>
    <h1>Class:{props.class}</h1>
    <h1>isStudent:{props.isStudent?"Yes":"No"}</h1>
    </div>)
}
Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    class: propTypes.string,
    isStudent: propTypes.bool,
}
Student.defaultProps={
    name:"Guest",
    age:10,
    class:"First",
    isStudent:false,
}
export default Student;