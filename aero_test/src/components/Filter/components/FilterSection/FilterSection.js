/**
 * В идеале этот компонент должен получать входные данные и отображать их, но пока данные брать неоткуда - пишу хардкодом
 */

import React from "react";
import { Checkbox } from "@/components/UI";
import "./FilterSection.scss";

const filtersData = {
  title: "Производитель",
  items: [
    {
      id: 1,
      title: "Canon",
      value: "canon"
    },
    {
      id: 2,
      title: "Olympus",
      value: "olympus"
    },
    {
      id: 3,
      title: "Fujifilm",
      value: "fujifilm"
    },
    {
      id: 4,
      title: "Pentax",
      value: "pentax"
    },
    {
      id: 5,
      title: "Nikon",
      value: "nikon"
    },
    {
      id: 6,
      title: "Sigma",
      value: "sigma"
    },
    {
      id: 7,
      title: "Panasonic",
      value: "panasonic"
    },
    {
      id: 8,
      title: "Geleral Electrics",
      value: "geleral_electrics"
    },
    {
      id: 9,
      title: "Leica",
      value: "leica"
    },
    {
      id: 10,
      title: "Zenit",
      value: "zenit"
    }
  ]
};

const FilterSection = ({filters, onSelect}) => {
  return (
    <div className="FilterSection">
      <h2 className="FilterSection__title">{filtersData.title}</h2>
      <div className="FilterSection__items">
        {filtersData.items.map(({ id, title, value }) => (
          <Checkbox
            checked={filters.includes(value)}
            onChange={() => {
              onSelect(value);
            }}
            label={title}
            value={value}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterSection;
