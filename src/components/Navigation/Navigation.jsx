import { StyledNavLink } from './Navigation.styled';
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes('details') && (
        <div>
          <StyledNavLink to="/">Main</StyledNavLink>
          <StyledNavLink to="/events">Events</StyledNavLink>
        </div>
      )}
    </>
  );
};
