import UserList from 'components/organisms/UsersList/UserList';
import styled, {ThemeProvider} from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme'

const Wrapper = styled.div`
  background-color:  ${({theme})=>theme.colors.lightGrey}  ;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UserList />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Root;
