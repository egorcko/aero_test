import React from "react";
import { useSelector, useDispatch } from "react-redux";
import setFilter from "@/store/actions/filter";
import fetchProductsRequest from "@/store/actions/products";
import { selectActiveFilters } from "@/store/selectors";
import { Button } from "@/components/UI";
import FilterSection from "./components/FilterSection/FilterSection";
import "./Filter.scss";

const Filter = () => {
  const dispatch = useDispatch();

  const actualFilters = useSelector(selectActiveFilters);

  const onSelectHandler = value => {
    const filtersCopy = actualFilters.concat([]);
    if (filtersCopy.includes(value)) {
      filtersCopy.splice(filtersCopy.indexOf(value), 1);
    } else filtersCopy.push(value);

    dispatch(setFilter(filtersCopy));
  };
  return (
    <div className="Filter">
      <Button
        className="Filter__action-button"
        fit
        value="Показать результат"
        onClick={() => {
          dispatch(fetchProductsRequest());
        }}
      />
      <Button
        className="Filter__action-button"
        fit
        value="Очистить фильтр"
        skin="second"
        onClick={() => {
          dispatch(setFilter([]));
          dispatch(fetchProductsRequest());
        }}
      />
      <FilterSection
        onSelect={value => {
          onSelectHandler(value);
        }}
        filters={actualFilters}
      />
    </div>
  );
};

export default Filter;
