import logoImg from '../../assets/images/logo.svg';
import logoutIcon from '../../assets/images/logout-icon.svg';
import closeIcon from '../../assets/images/close-icon.svg';

import { Button } from '../Button';
import { RoomCode } from '../RoomCode';

import './styles.scss';

type User = {
  id: string;
  name: string;
  avatar: string;
}

type RoomHeaderProps = {
  user: User | undefined;
  roomId: string;
  signOut: () => Promise<void>;
  handleEndRoom?: () => Promise<void>;
}

export function RoomHeader({
  user,
  roomId,
  signOut,
  handleEndRoom
}: RoomHeaderProps) {

  return (
    <header>
      <div className="content my-container">
        <img src={logoImg} alt="Letmeask" />
        <div>
          <RoomCode code={roomId} />
          {(handleEndRoom) &&
            <Button isOutlined onClick={handleEndRoom}>
              <img src={closeIcon} alt="Close door" />
              Close room
            </Button>
          }
          {(user) &&
            <Button onClick={signOut}>
              <img src={logoutIcon} alt="Logout" />
              Logout
            </Button>
          }
        </div>
      </div>
    </header>
  )
}