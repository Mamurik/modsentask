import { NotFoundText, NotFoundWrapper } from './styled';
const NOT_FOUND_PAGE = {
  TITLE: 'Page not found',
};
const NotFound = () => {
  return (
    <NotFoundWrapper>
      <NotFoundText>{NOT_FOUND_PAGE.TITLE}</NotFoundText>
    </NotFoundWrapper>
  );
};

export default NotFound;
