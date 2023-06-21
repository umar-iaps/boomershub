import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';



const Loader: React.FC = () => {
    return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          }}
        >
          <CircularProgress />
        </div>
      );
};

export default Loader;
