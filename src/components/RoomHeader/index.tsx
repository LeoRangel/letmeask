import logoImg from '../../assets/images/logo.svg';
import logoutIcon from '../../assets/images/logout-icon.svg';
import closeIcon from '../../assets/images/close-icon.svg';

import { Button } from '../Button';
import { ToggleTheme } from '../ToggleTheme';
import { RoomCode } from '../RoomCode';

import './styles.scss';

type User = {
  id: string;
  name: string;
  avatar: string;
}
type Theme = 'light' | 'dark';

type RoomHeaderProps = {
  user: User | undefined;
  roomId: string;
  signOut: () => Promise<void>;
  handleEndRoom?: () => Promise<void>;
  theme: Theme;
  toggleTheme: () => void;
}

export function RoomHeader({
  user,
  roomId,
  signOut,
  handleEndRoom,
  theme,
  toggleTheme
}: RoomHeaderProps) {

  return (
    <header>
      <div className="content my-container">
        <img src={logoImg} alt="Letmeask" />
        <div>
          <ToggleTheme onClick={toggleTheme} theme={theme} />

          <RoomCode code={roomId} />

          {(handleEndRoom) &&
            <Button isSmall isOutlined onClick={handleEndRoom}>
              <img src={closeIcon} alt="Close door" />
              Close room
            </Button>
          }

          {(user) &&
            <Button isSmall onClick={signOut}>
              <img src={logoutIcon} alt="Logout" />
              Logout
            </Button>
          }
        </div>
      </div>
    </header>
  )
}