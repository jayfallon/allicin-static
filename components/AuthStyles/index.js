import Link from 'next/link';
import styled from 'styled-components';

const AuthStyles = styled.div`
  margin: ${props => props.theme.pageMargin};
  width: ${props => props.theme.pageWidth};
  header {
    h1 {
      margin-bottom: 4rem;
      font-family: source-serif-pro serif;
      font-size: 3.1rem;
      text-transform: uppercase;
      text-align: center;
    }
  }

  .auth__form--wrapper {
    background-color: var(--QuarterPearlLusta);
    margin: ${props => props.theme.pageMargin};
    padding: 2rem;
    width: 54rem;
    box-shadow: ${props => props.theme.boxShadow};
  }

  h3,
  legend {
    padding-bottom: 5rem;
    font-size: 2.4rem;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    padding-bottom: 2.3rem;
  }

  .auth__form--group {
    padding-bottom: 1.2rem;
    display: flex;
    flex-direction: column;
  }

  input[type='text'],
  input[type='password'] {
    background-color: #f1f8f7 !important;
    padding: 0.6rem 1rem;
    border: 0.1rem solid #7a7d92;
    font-size: 1.8rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: 1px solid #7a7d92;
    -webkit-text-fill-color: var(--CodGray);
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  .auth__form--submit {
    padding-top: 2rem;
    display: flex;
    justify-content: flex-end;
    button {
      background-color: var(--Thunder);
      margin-left: 1rem;
      padding: 1rem 2.5rem;
      min-width: 10rem;
      border-radius: 2.5rem;
      border: 0;
      color: var(--CatskillWhite);
      font-size: 1.5rem;
      font-weight: 700;
      text-transform: uppercase;
      cursor: pointer;
      :hover {
        background-color: var(--RoyalBlue);
        color: var(--QuarterPearlLusta);
      }
    }
  }

  .auth__form--help {
    padding-top: 4.5rem;
    ul {
      display: flex;
      justify-content: center;
      a {
        padding: 0 1rem;
      }
    }
  }
`;

const AuthFormForget = () => (
  <div className="auth__form--help">
    <ul>
      <li>
        <Link href="/reset-password">
          <a title="Did you forget your password">Forgot your password?</a>
        </Link>
      </li>
      <li>
        <Link href="/signup">
          <a title="Don't have an account?">Don't have an account?</a>
        </Link>
      </li>
    </ul>
  </div>
);

const AuthFormAlready = () => (
  <div className="auth__form--help">
    <ul>
      <li>
        <Link href="/signin">
          <a title="Already have an account?">Already have an account?</a>
        </Link>
      </li>
    </ul>
  </div>
);

const AuthFormUnregistered = () => (
  <div className="auth__form--help">
    <ul>
      <li>
        <Link href="/signup">
          <a title="Don't have an account?">Don't have an account?</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default AuthStyles;

export { AuthFormForget, AuthFormAlready, AuthFormUnregistered };
