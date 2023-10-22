import React from "react";

const SearchBar = ({
    handleSubmit,
    value,
    isLoading,
    onChange
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                value={value}
                className="form-control"
                placeholder="Search Recipes"
                onChange={onChange}
                disabled={isLoading}
            />
            <input
                disabled={isLoading || !value}
                type="submit"
                className="btn"
                value="Search"
            />
        </form>
    )
};

export default SearchBar;