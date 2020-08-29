import React, { useState, useEffect } from 'react';
import useWindowDimensions from 'utils/useWindowDimensions';

const Masonry = ({ children, className, setStyleMasonry, columnsCountBreakPoints }) => {
  const [columnsCount, setcolumnsCount] = useState(3);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const resizeMasonry = () => {
      if (columnsCountBreakPoints) {
        const breakPoints = Object.keys(columnsCountBreakPoints);
        breakPoints.map(breakPoint => {
          const breakPoin = Number(breakPoint);
          if (breakPoin < width) {
            setcolumnsCount(columnsCountBreakPoints[breakPoin]);
            setStyleMasonry && setStyleMasonry(columnsCountBreakPoints[breakPoin]);
          }
        });
      } else if (width < 750) setcolumnsCount(1);
      else setcolumnsCount(3);
    };
    resizeMasonry();
  }, [width, columnsCountBreakPoints]);

  let getColumns = () => {
    const columns = Array.from({ length: columnsCount }, () => []);
    React.Children.forEach(children, (child, index) => {
      columns[index % columnsCount].push(child);
    });
    return columns;
  };

  const renderColumns = getColumns().map((item, i) => <div key={i}>{item}</div>);

  //
  return (
    <div
      className={className}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columnsCount},1fr)`,
        columnGap: '10px',
        rowGap: ' 15px'
      }}
    >
      {renderColumns}
    </div>
  );
};
export default Masonry;
