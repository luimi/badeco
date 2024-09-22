import React, { useState, useEffect } from 'react';

const Tree = ({ json }) => {
  const [expanded, setExpanded] = useState([]);
  useEffect(() => {
    setExpanded(Array(Object.keys(json).length).fill(false));
  }, []);
  return (
    <ul>
      {Object.keys(json).map((param, index) => {
        let primitive = isPrimitive(json[param]);
        return (
          <li key={param + index}>
            <span
              onClick={() => {
                if (!primitive)
                  setExpanded(expanded.map((e, i) => (i === index ? !e : e)));
              }}
            >
              {param}
            </span>
            {primitive ? (
              <span>
                : <b>{json[param]} </b>
              </span>
            ) : (
              ''
            )}
            {expanded[index] ? <Tree json={json[param]} /> : ''}
          </li>
        );
      })}
    </ul>
  );
};

export default Tree;

const isPrimitive = (value) => {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  );
};
