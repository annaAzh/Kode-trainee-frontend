import { FC } from 'react';
import { SwitchInput, SwitchLabel, SwitchSpan } from './Switch.styles';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggled: boolean;
  id: string;
}

export const Switch: FC<Props> = ({ onChange, toggled, id }) => {
  return (
    <>
      <SwitchInput id={id} onChange={onChange} type="checkbox" checked={toggled} />
      <SwitchLabel htmlFor={id}>
        <SwitchSpan />
      </SwitchLabel>
    </>
  );
};
