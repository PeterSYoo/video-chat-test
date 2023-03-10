import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RoomContext } from '../contexts/RoomContext';

export const RoomPage = () => {
  const { id } = useParams();
  const { ws } = useContext(RoomContext);

  useEffect(() => {
    ws.emit('join-room', { roomId: id });
  }, [id]);

  return <>Room id {id}</>;
};
