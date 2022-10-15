import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const FilteredUsers = () => {
    const dispatch = useDispatch();
    const onFilter = e => {
        const value = e.target.value.toLowerCase();
        dispatch(setFilter(value));
    };

    return (
        <> <h5>Find contact by name</h5>
            <input
                onChange={onFilter}
                type="text"
                
                placeholder=" ">
            </input></>
       
    );
};



export default FilteredUsers;