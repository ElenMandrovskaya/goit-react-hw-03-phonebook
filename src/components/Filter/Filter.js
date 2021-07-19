import PropTypes from "prop-types";
import { Label, Input } from "./Filter.styled";

export function Filter({ filterValue, onChange }) {
    return (
        <Label>Find contacts by name
            <Input
                type="text"
                filterValue={filterValue}
                onChange={onChange}
                placeholder="Enter contact name"/>
        </Label>
    )
}

Filter.propTypes = {
    filterValue: PropTypes.string,
    onChange: PropTypes.func,
}

// export default Filter;