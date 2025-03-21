import { FC } from 'react';
import { SwitchInput, SwitchLabel, SwitchSpan, SwitchText } from './Switch.styles';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggled: boolean;
  id: string;
  mode?: 'language' | 'theme';
  notOnLine?: boolean;
}

export const Switch: FC<Props> = ({ onChange, toggled, id, mode = 'theme', notOnLine }) => {
  return (
    <>
      <SwitchInput id={id} onChange={onChange} type="checkbox" checked={toggled} />
      <SwitchLabel htmlFor={id} $notOnline={notOnLine} $disabled={notOnLine && mode === 'language'}>
        {mode === 'theme' && <SwitchSpan $notOnline={notOnLine} />}

        {mode === 'language' && (
          <>
            <SwitchSpan $notOnline={notOnLine}>{toggled ? 'EN' : 'RU'}</SwitchSpan>
            <SwitchText $notOnline={notOnLine}>{toggled ? 'RU' : 'EN'}</SwitchText>
          </>
        )}
      </SwitchLabel>
    </>
  );
};
