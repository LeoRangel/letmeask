import logoImg from '../../assets/images/logo.svg';

import { Button } from '../Button';
import { RoomCode } from '../RoomCode';

import './styles.scss';

type RoomHeaderProps = {
  roomId: string;
  handleEndRoom?: () => void;
}

export function RoomHeader({ roomId, handleEndRoom }: RoomHeaderProps) {

  return (
    <header>
      <div className="content my-container">
        <img src={logoImg} alt="Letmeask" />
        <div>
          <RoomCode code={roomId} />
          {handleEndRoom && <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>}
        </div>
      </div>
    </header>
  )
}