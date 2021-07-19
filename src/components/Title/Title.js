import PropTypes from "prop-types";
import { SectionTitle } from "./Title.styled";

export function Title({ title }) {
    return (
         <SectionTitle>{title}</SectionTitle>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
};

