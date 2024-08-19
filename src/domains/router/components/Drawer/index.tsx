import styled from "styled-components";

const Drawer = ({ items }: { items: string[] }) => (
  <DrawerContainer>
    <List>
      {items.map((text, index) => (
        <ListItem key={index}>{text}</ListItem>
      ))}
    </List>
  </DrawerContainer>
);

export default Drawer;

const DrawerContainer = styled.div`
  width: 240px;
  height: 100vh;
  background-color: #f4f4f4;
  position: fixed;
  top: 64px;
  left: 0;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  padding: 15px 20px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;
