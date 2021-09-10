import { useDispatch } from 'react-redux';

// types
import { IMyDispatch } from '@/redux/types';

const useMyDispatch = () => useDispatch<IMyDispatch>();

export default useMyDispatch;
