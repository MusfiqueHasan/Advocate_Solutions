import React, { useEffect, useState } from 'react';
               
const AppSubNav= ({ navbarData, callback ,font}) => {
  const [navbar, setNavbar] = useState([]);

  const handleClick = (id) => {
    const updateData = [...navbar];
    updateData.map((item) => {
      if (item.id === id) {
        item.checked = true;
      } else {
        item.checked = false;
      }
    });

    setNavbar(updateData);
    callback(updateData);
  
  };

  useEffect(() => {
    const arr = [];
    navbarData.map((item, index) => {
      const obj = {
        id: index + 1,
        title: item,
        checked: index === 0 ? true : false,
        key: item.replace(/ /g, ''),
      };
      arr.push(obj);
    });
    setNavbar([...arr]);
    callback([...arr]);
  }, []);

  return (
    <div className="flex mt-4 border-b-2 border-base-100/[.6] relative overflow-auto w-full">
      {navbar.map((item) => (
        <div
          key={item.id}
          className={`py-2 px-5 ${
            item?.checked ? "border-b-2 border-primary  " : ""
          } ${font}`}
          role="button"
          tabIndex={0}
          onClick={() => handleClick(item.id)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

export default AppSubNav;