import { useRouteError } from 'react-router-dom';
import { HttpStatusCode } from '../common/enums/HttpStatusCode.enum';
import { RouteError } from '../common/interfaces/RouteError.interface';

export const ErrorPage = () => {
  const error = useRouteError() as RouteError;

  return (
    <div
      id='error-page'
      className='text-center'
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <h1 className='text-danger'>Oops!</h1>
      <p className='text-danger'>Sorry, an unexpected error has occurred.</p>
      <p>
        <b>
          {error.status
            ? `${error.status} - `
            : HttpStatusCode.INTERNAL_SERVER_ERROR}
        </b>
        <i>{error.statusText ?? error.message}</i>
      </p>
    </div>
  );
};
