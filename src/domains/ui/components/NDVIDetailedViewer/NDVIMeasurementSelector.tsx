import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NDVIMeasurementSelector = (props) => {
  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const data = props?.data?.ndvi;
  const onChangeDate = props.data?.actions.ndvi.onChangeDate;
  // useEffect(() => {
  //   setCurrentDateIndex(
  //     data.sampleDates.findIndex((date) => date === data.metadata.dt)
  //   );
  // }, [data]);

  const handleDateChange = (index) => {
    setCurrentDateIndex(index);
    // Assuming you have an onDateChange function in your props
    onChangeDate(new Date(data.sampleDates[index] * 1000));
  };

  return (
    <Container>
      <DateSelector>
        <NavButton
          onClick={() => handleDateChange(Math.max(0, currentDateIndex - 1))}
          disabled={currentDateIndex === 0}
        >
          <FaChevronLeft />
        </NavButton>
        <DateScroller>
          {data.sampleDates.map((date, index) => (
            <DateBox
              key={date}
              onClick={() => handleDateChange(index)}
              isSelected={index === currentDateIndex}
            >
              {new Date(date * 1000).toLocaleDateString()}
            </DateBox>
          ))}
        </DateScroller>
        <NavButton
          onClick={() =>
            handleDateChange(
              Math.min(data.sampleDates.length - 1, currentDateIndex + 1)
            )
          }
          disabled={currentDateIndex === data.sampleDates.length - 1}
        >
          <FaChevronRight />
        </NavButton>
      </DateSelector>
    </Container>
  );
};

export default NDVIMeasurementSelector;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateSelector = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
`;

const NavButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  color: #333;
  padding: 5px;

  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const DateScroller = styled.div`
  display: flex;
  overflow-x: auto;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  flex: 1;
`;

const DateBox = styled.div<{ isSelected: boolean }>`
  padding: 10px;
  background-color: ${(props) => (props.isSelected ? "#007bff" : "#f8f9fa")};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#333")};
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background-color: ${(props) => (props.isSelected ? "#007bff" : "#e9ecef")};
  }
`;
